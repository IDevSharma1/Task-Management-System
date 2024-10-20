const db = require('../config/db');

class Task {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM tasks');
        return rows;
    }

    static async create(task) {
        const { title, description, status } = task;
        await db.query('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status]);
    }

    static async delete(id) {
        await db.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
}

module.exports = Task;
