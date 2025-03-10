// server.js

require('dotenv').config() // Load environment variables from .env
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err))

// Define a Mongoose Schema and Model for Contact Submissions
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
})

const Contact = mongoose.model('Contact', contactSchema)

// GET route for the root path
app.get('/', (req, res) => {
  res.send('Hello from the Express server! Use POST /api/contact to submit the form.')
})

// POST route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  // Validate incoming data (basic example)
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' })
  }

  try {
    // Save the submission to the database
    const newContact = new Contact({ name, email, message })
    await newContact.save()

    console.log('Contact form submitted:', { name, email, message })

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully!',
    })
  } catch (error) {
    console.error('Error saving contact form:', error)
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' })
  }
})

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
