# Task Manager Web App

A simple, responsive, and interactive task management web application built as part of the **NTTS Frontend Web Development Challenge — Stage 7**.

TaskFlow allows users to efficiently manage their daily tasks by adding new tasks, marking tasks as completed, deleting individual tasks, and clearing all tasks at once. The application provides real-time task statistics and instant UI updates without requiring page reloads.

This project focuses on demonstrating the fundamentals of **Vanilla JavaScript**, including DOM manipulation, event handling, array-based state management, and dynamic UI rendering.

---

## 🚀 Live Demo

https://taskmanager-theta-teal.vercel.app/

---

## 📌 Project Overview

The Task Manager Web App is a single-page productivity application designed to help users keep track of their daily tasks.

The application follows a simple **Data → Render → DOM** approach. Tasks are stored in a JavaScript array, which serves as the application's source of truth. Whenever the user performs an action, such as adding, completing, or deleting a task, the task array is updated first. The interface is then re-rendered based on the updated data.

This approach ensures that the application's data and user interface remain synchronized.

---

## ✨ Features

### Add Tasks

* Add new tasks using the task input field.
* Add tasks by clicking the **Add Task** button.
* Press the **Enter** key to quickly add a task.
* Prevent empty or whitespace-only tasks from being added.
* Provide feedback when an invalid task is submitted.

### Manage Tasks

* View all added tasks in a clean and organized task list.
* Each task displays its description and current status.
* Tasks can be marked as completed or returned to pending status.
* Completed tasks are visually distinguished using strikethrough text and different styling.
* Delete individual tasks from the task list.

### Task Statistics

The application provides real-time statistics showing:

* **Total Tasks** — The total number of tasks in the list.
* **Pending Tasks** — The number of tasks that are yet to be completed.
* **Completed Tasks** — The number of tasks that have been completed.

These counters automatically update whenever tasks are added, completed, toggled, or deleted.

### Clear All Tasks

* Remove all tasks at once using the **Clear All** button.
* A confirmation prompt is displayed before deleting all tasks.
* Tasks are only cleared when the user confirms the action.
* The Clear All button is disabled or hidden when there are no tasks.

### Responsive Design

* Fully responsive layout for desktop, tablet, and mobile devices.
* Mobile-friendly task input and action buttons.
* Adaptive task list layout.
* Accessible and easy-to-use interface across different screen sizes.

### Empty State

* Displays a friendly message when there are no tasks.
* Provides users with a clear indication of how to get started.
* Automatically disappears when a task is added.

---

## 🛠️ Technologies

This project was built using:

* **HTML5** — Used to create the semantic structure of the application.
* **CSS3** — Used for styling, responsive design, layouts, and visual feedback.
* **Vanilla JavaScript** — Used for application logic, DOM manipulation, event handling, and dynamic rendering.

No JavaScript frameworks or external UI libraries were used.

---

## 🧠 How It Works

The application follows the **Data → Render → DOM** pattern.

### 1. Data

All tasks are stored in a JavaScript array, which acts as the application's **single source of truth**.

Each task is represented as an object with the following structure:

```javascript
{
  id: number,
  text: string,
  completed: boolean
}
```

For example:

```javascript
{
  id: 1,
  text: "Complete my frontend challenge",
  completed: false
}
```

### 2. Update the Data

Whenever a user performs an action, the JavaScript task array is updated first.

For example:

* Adding a task adds a new object to the array.
* Completing a task changes its `completed` value.
* Deleting a task removes the corresponding object from the array.
* Clearing all tasks empties the array.

### 3. Render the Interface

After the task data changes, the application clears the existing task list and rebuilds the task elements based on the current contents of the array.

This ensures that the UI always represents the current state of the application.

### 4. Update the DOM

The newly generated task elements are added to the DOM, and the task counters are recalculated.

The overall flow is:

```text
User Action
     ↓
Update Task Array
     ↓
Render Tasks
     ↓
Update DOM
     ↓
Update Counters
```

This approach demonstrates the fundamental relationship between application data and the user interface.

---

## ⚙️ Core JavaScript Functions

The application is organized around several core functions responsible for managing tasks and updating the interface.

### `addTask()`

Creates a new task object and adds it to the task array after validating the user's input.

### `toggleTask()`

Toggles a task between its pending and completed states by changing its `completed` property.

### `deleteTask()`

Removes a specific task from the task array using its unique ID.

### `clearAllTasks()`

Uses a confirmation prompt before removing all tasks from the application.

### `renderTasks()`

Clears the task list container and rebuilds the task elements based on the current task array.

### `updateCounters()`

Calculates and displays the total, pending, and completed task counts in real time.

---

## 📂 Project Structure

```text
task-manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the semantic HTML5 structure of the application, including:

* Header
* Task input
* Add Task button
* Task statistics
* Task list container
* Clear All button
* Empty state

### `style.css`

Contains all styling and responsive design rules for the application.

### `script.js`

Contains the application's task data, logic, event listeners, DOM manipulation, and rendering functions.

### `README.md`

Provides documentation about the project, its features, technologies, architecture, and usage.

---

## 💻 Getting Started

To run the project locally:

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project directory

```bash
cd task-manager
```

### 3. Open the project

Open `index.html` directly in your browser, or use a local development server such as the **Live Server** extension in Visual Studio Code.

No package installation or build process is required.

---

## 🎯 Project Requirements Implemented

The application satisfies the core requirements of the NTTS Stage 7 Task Manager challenge:

* [x] Add tasks
* [x] Prevent empty tasks
* [x] Display tasks
* [x] Mark tasks as complete
* [x] Toggle completed tasks back to pending
* [x] Visually distinguish completed tasks
* [x] Delete individual tasks
* [x] Display total task count
* [x] Display pending task count
* [x] Display completed task count
* [x] Update counters automatically
* [x] Add tasks using the Enter key
* [x] Clear all tasks
* [x] Confirm before clearing all tasks
* [x] Update the interface without page reloads
* [x] Store tasks in a JavaScript array
* [x] Follow the Data → Render → DOM pattern
* [x] Responsive on mobile and desktop

---

## 📱 Responsive Design

The application is designed to provide a consistent experience across different screen sizes.

### Desktop

The interface uses a spacious layout with:

* Horizontal task input controls
* Three task statistic cards
* Task actions aligned with each task
* Centered application container

### Mobile

The interface adapts to smaller screens by:

* Stacking input controls when necessary
* Adjusting task statistics to fit smaller displays
* Making task action buttons easily accessible
* Maintaining readable typography and comfortable spacing
* Preventing horizontal scrolling

---

## 🔮 Future Improvements

Although the current project focuses on the core requirements of the NTTS Stage 7 challenge, potential future improvements could include:

* Persistent task storage using `localStorage`
* Task categories and tags
* Task priorities
* Due dates and reminders
* Search and filtering
* Drag-and-drop task ordering
* Dark mode
* Task editing functionality
* Progress tracking
* Backend integration and user authentication

These features are outside the scope of the current challenge but could be added as the application evolves.

---

## 📚 Learning Outcomes

This project provided practical experience with:

* Semantic HTML5
* Responsive CSS design
* JavaScript arrays and objects
* DOM manipulation
* Event listeners
* Keyboard event handling
* Form validation
* Dynamic UI rendering
* State management using JavaScript arrays
* Conditional rendering
* Real-time UI updates
* Writing reusable JavaScript functions

The project demonstrates the fundamental concept:

> **Data → Render → DOM**

This pattern provides a foundation for understanding how modern JavaScript frameworks such as React, Vue, and Angular manage application state and user interfaces.

---

## 📦 Repository

https://github.com/Chideradotcom/taskmanager

---

## 👨‍💻 Author

**Chidera Wisdom Chikwendu**

Frontend Developer | Software Engineering Student

Built as part of the **NTTS Frontend Web Development Challenge — Stage 7**.

---

## 📄 License

This project was created for educational and portfolio purposes as part of the NTTS Frontend Web Development Challenge.
