// ===== State =====
// This array is the single "source of truth" for the app.
// The DOM is NEVER edited directly outside of render() — every change
// updates this array first, then render() rebuilds the list from scratch.
let tasks = [];

// ===== DOM references (grabbed once, reused everywhere) =====
const taskInput     = document.getElementById('task-input');
const addTaskBtn     = document.getElementById('add-task-btn');
const taskList       = document.getElementById('task-list');
const emptyState     = document.getElementById('empty-state');
const clearAllBtn    = document.getElementById('clear-all-btn');
const themeToggle    = document.getElementById('theme-toggle');

const statTotal      = document.getElementById('stat-total');
const statPending    = document.getElementById('stat-pending');
const statCompleted  = document.getElementById('stat-completed');

// ===== Task operations (all mutate `tasks`, then call render()) =====

function addTask() {
  const text = taskInput.value.trim(); // trim() strips leading/trailing spaces
  if (text === '') return;             // validation: block empty tasks

  // Each task matches the required shape: { id, text, completed }
  tasks.push({
    id: Date.now(),   // Date.now() gives a unique millisecond timestamp — good enough as an id here
    text,             // shorthand for text: text
    completed: false
  });

  taskInput.value = ''; // clear the input after adding
  render();
}

function toggleTask(id) {
  // .map() returns a brand-new array; we don't mutate task objects directly,
  // we replace the matching one with a copy that has `completed` flipped.
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  render();
}

function deleteTask(id) {
  // .filter() keeps every task EXCEPT the one whose id matches
  tasks = tasks.filter(task => task.id !== id);
  render();
}

function clearAllTasks() {
  if (tasks.length === 0) return;

  // window.confirm() pauses execution and shows a native OK/Cancel dialog.
  // It returns true only if the user clicks "OK".
  const confirmed = window.confirm('Are you sure you want to clear all tasks? This cannot be undone.');
  if (confirmed) {
    tasks = [];
    render();
  }
}

// ===== Rendering =====

function updateCounters() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  statTotal.textContent = total;
  statPending.textContent = pending;
  statCompleted.textContent = completed;

  // Only show "Clear All" once there's something to clear
  clearAllBtn.classList.toggle('hidden', total === 0);
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = `task-item${task.completed ? ' completed' : ''}`;

  // Using textContent (not innerHTML) for the task text prevents
  // any HTML the user types from being executed — basic XSS safety.
  li.innerHTML = `
    <div class="task-main">
      <button class="task-checkbox" aria-label="Toggle complete"></button>
      <div>
        <div class="task-text"></div>
        <span class="task-status">${task.completed ? 'Completed' : 'Active'}</span>
      </div>
    </div>
    <div class="task-actions">
      <button class="complete-btn" title="${task.completed ? 'Mark as pending' : 'Mark as complete'}">
        ${task.completed ? '↺' : '✓'}
      </button>
      <button class="delete-btn" title="Delete">✕</button>
    </div>
  `;

  // Set the task text safely via textContent instead of interpolating it into innerHTML above
  li.querySelector('.task-text').textContent = task.text;
  if (task.completed) {
    li.querySelector('.task-checkbox').textContent = '✓';
  }

  // Wire up this specific task's buttons to its id
  li.querySelector('.task-checkbox').addEventListener('click', () => toggleTask(task.id));
  li.querySelector('.complete-btn').addEventListener('click', () => toggleTask(task.id));
  li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));

  return li;
}

function render() {
  updateCounters();

  // Step 1: wipe the container completely
  taskList.innerHTML = '';

  // Step 2: toggle empty state
  const hasTasks = tasks.length > 0;
  emptyState.classList.toggle('hidden', hasTasks);

  if (!hasTasks) return;

  // Step 3: rebuild the whole list from the array (newest task on top)
  [...tasks].reverse().forEach(task => {
    taskList.appendChild(createTaskElement(task));
  });
}

// ===== Theme toggle (light/dark) =====

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark';

  if (isDark) {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  } else {
    root.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }
}

// ===== Event listeners =====

addTaskBtn.addEventListener('click', addTask);

// Enter key support, as required by the brief
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

clearAllBtn.addEventListener('click', clearAllTasks);
themeToggle.addEventListener('click', toggleTheme);

// Respect the user's OS-level preference on first load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleTheme();
}

// ===== Initial render =====
render();
