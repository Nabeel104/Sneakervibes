const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

// Load environment variables
dotenv.config();

const app = express();
const URL ="mongodb://localhost:27017/shoeStore";

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Already handles JSON parsing

// Connect to the database
mongoose.connect("mongodb://localhost:27017/shoeStore", {
 dbName : "shoeStore"
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Shoe Schema and Model
const shoeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true }
});

const Shoe = mongoose.model('Shoe', shoeSchema);

// API Endpoints

// POST: Add new shoe
app.post('/api/shoes', async (req, res) => {
    const newShoe = new Shoe(req.body);
    try {
        await newShoe.save();
        res.status(201).json(newShoe);
    } catch (error) {
        res.status(400).json({ error: 'Error adding shoe' });
    }
});

// GET: Retrieve all shoes
app.get('/api/shoes', async (req, res) => {
    try {
        const shoes = await Shoe.find();
        res.json(shoes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching shoes' });
    }
});

// Routes for user-related operations
app.use('/api/users', userRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
