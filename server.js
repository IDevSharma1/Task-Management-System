const express = require('express');
const app = express();
const path = require('path');
const tasksRouter = require('./routes/tasks');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Home route - render the layout.ejs
app.get('/', (req, res) => {
    res.render('layout', { title: 'Task Manager', heading: 'Task Manager' });
});

// Routes
app.use('/tasks', tasksRouter);

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
