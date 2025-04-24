const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
// const workshopRoutes = require('./routes/workshop');
require('dotenv').config();
const feedbackRoutes=require('./routes/feedbackRoutes.js')
const videoRoutes = require('./routes/videoRoutes'); 

const bookRoutes = require("./routes/bookRoutes");
const articleRoutes = require('./routes/articleRoutes');

const meditationRoutes= require('./routes/meditationRoutes.js');
const workshopRoutes = require('./routes/workshopRoutes');
const enrollmentsRoute =require('./routes/enrollmentsRoute.js')
const doctorRoutes = require('./routes/doctorRoutes');
const artRoutes = require('./routes/artRoutes');
const app = express();
const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/contact', contactRoutes);
// app.use('/workshops', workshopRoutes);
app.use("/api/feedbacks", feedbackRoutes); // Using feedback route

app.use("/api/books", bookRoutes);


app.use('/api/articles', articleRoutes); 
app.use('/api/videos', videoRoutes);
app.use('/api/meditation', meditationRoutes);
app.use('/api/enrollments',enrollmentsRoute);
app.use('/api/workshops', workshopRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/art', artRoutes);
app.get("/", (req, res) => {
    res.send("API is running...");
});

 
// app.use("/api/books", bookRoutes);
// Connect to MongoDB and Start Server


mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
