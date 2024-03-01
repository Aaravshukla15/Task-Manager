# Task Manager App

The Task Manager App is a web application built with Django and ReactJS that allows users to manage their tasks by entering, saving, and deleting tasks.

## Features

- **Task Entry**: Users can enter new tasks with details such as title, description, deadline, etc.
- **Task Listing**: Users can view their tasks in a list format, displaying details such as title, description, status, and deadline.
- **Task Update**: Users can update task details including title, description, status, and deadline.
- **Task Deletion**: Users can delete tasks they no longer need.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices, including desktops, tablets, and smartphones.

## Technologies Used

- **Frontend**:
  - ReactJS
  - HTML
  - CSS

- **Backend**:
  - Django
  - Django REST Framework

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Install backend dependencies:

   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

5. Run migrations to set up the database:

   ```bash
   python manage.py migrate
   ```

6. Start the development server:

   ```bash
   python manage.py runserver
   ```

7. Access the application in your web browser at `http://localhost:8000`.

## Usage

1. Navigate to the task manager app.
2. Add new tasks by clicking the "Add Task" button and filling out the task details.
3. View, update, or delete tasks as needed.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).

---
