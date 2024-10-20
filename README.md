Task Management System

This project is a web-based Task Management System built using HTML, CSS, JavaScript, Node.js, and MySQL. It allows users to create, delete, and edit tasks with a user-friendly interface.

## Features

- **Create Tasks**: Users can add new tasks with a description, due date, and priority.
- **Edit Tasks**: Modify task details such as the name, description, or due date.
- **Delete Tasks**: Remove tasks when they are no longer needed.
- **Task Persistence**: All tasks are stored in a MySQL database for easy retrieval and management.
- **Responsive Design**: The front-end is designed to work across a variety of devices.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL

## Installation

### Prerequisites

- Node.js (v14+)
- MySQL

### Steps to Set Up Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/IDevSharma1/Task-Management-System.git
    ```
   
2. Navigate to the project directory:
    ```bash
    cd Task-Management-System
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up the MySQL database:
    - Create a MySQL database and update the database connection settings in `config/db.js`.
    - Import the provided SQL schema in `db/schema.sql`.

5. Run the application:
    ```bash
    npm start
    ```

6. Access the app in your browser at `http://localhost:3000`.

## Database Schema

The system uses a simple schema to store tasks:

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    priority ENUM('Low', 'Medium', 'High'),
    status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Contributing

Feel free to open issues and contribute to the project by submitting pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Feel free to adjust or expand any section!
