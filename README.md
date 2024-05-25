# To-Do List App
This is a React-based To-Do List application using Vite for a fast development setup. The app allows users to add, edit, delete, and reorder tasks, as well as mark them as completed. Tasks are persisted in the browser's localStorage, ensuring they remain available even after a page reload.

## Features
● Add Task: Users can add new tasks to the list.
● Edit Task: Existing tasks can be edited.
● Delete Task: Tasks can be removed from the list.
● Reorder Tasks: Tasks can be moved up or down in the list.
● Mark as Complete/Incomplete: Tasks can be marked as complete or incomplete.
● Persistent Storage: Tasks are stored in localStorage for persistence across sessions.

## Tech Stack
● React: JavaScript library for building user interfaces.
● Vite: Next generation frontend tooling. It's fast!
● React Icons: Collection of popular icons for React projects.
● React Toastify: To add beautiful notifications to the app.

## Installation and Setup
1. Clone the repository:
```
git clone https://github.com/HELMETOLOGIST/to-do-list.git
cd todo-list-app
```

2. Install dependencies:
```
npm run dev
```

3. Run the app:
```
npm run dev
```

4. Build the app for production:
```
npm run build
```

## File Structure
todo-list-app
├── public                  # Public assets
├── src                     # Source files
│   ├── components          # React components
│   │   └── ToDoList.js     # Main To-Do List component
│   ├── App.js              # Main app file
│   ├── main.jsx            # Entry point for React
│   └── index.css           # Global styles
├── .gitignore              # Git ignore file
├── index.html              # HTML template
├── package.json            # NPM package configuration
├── README.md               # Project README
└── vite.config.js          # Vite configuration


## Usage
### Adding a Task
1. Type the task description in the input field.
2. Click the "Add" button or press Enter to add the task to the list.
### Editing a Task
1. Click the edit button (pencil icon) next to the task you want to edit.
2. Modify the task description in the input field that appears.
3. Click the "Save" button to save the changes.
### Deleting a Task
1. Click the delete button (trash icon) next to the task you want to remove.
### Reordering Tasks
1. Click the up or down arrow buttons to move the task up or down in the list.
### Marking a Task as Complete/Incomplete
1. Click the custom checkbox next to the task description to toggle its completion status.
### Notification
● Success, error, and informational messages are displayed using React Toastify for a better user experience.
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for new features.

## License
This project is licensed under the MIT License.

Getting Started with Vite and React
This project uses Vite to provide a fast and minimal setup for React development.

Vite Plugins
Currently, two official plugins are available for React projects in Vite:

● [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.

● [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Setting Up Vite with React
1. Create a new Vite project:
```
npm create vite@latest
```

2. Navigate to the project directory and install dependencies:
```
cd my-vite-app
npm install
```

3. Start the development server:
```
npm run dev
```

For more details, refer to the [Vite documentation.](https://vitejs.dev/)
-------------------------------------------------------
Happy coding! 🚀


