// routes/Contact.js
import express from 'express';
import Contact from '../models/Contact.js';
import validator from 'validator';

const router = express.Router();

// Helper function to check for spam
const isSpam = (text) => {
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'winner', 'prize', 
    'porn', 'xxx', 'sex', 'gambling', 'betting',
    'crypto', 'bitcoin', 'investment', 'million',
    'free money', 'click here', 'earn money'
  ];
  const lowerText = text.toLowerCase();
  return spamKeywords.some(keyword => lowerText.includes(keyword));
};

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Get IP and user agent
    const ipAddress = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'Unknown';
    const userAgent = req.headers['user-agent'] || 'Unknown';

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Check for spam in message
    if (isSpam(message)) {
      const spamContact = new Contact({
        name,
        email,
        phone,
        service,
        message,
        ipAddress,
        userAgent,
        status: 'spam'
      });
      await spamContact.save();
      
      return res.status(200).json({
        success: true,
        message: 'Message received'
      });
    }

    // Check for duplicate submissions (last 5 minutes)
    const recentSubmission = await Contact.findOne({
      email,
      createdAt: { $gte: new Date(Date.now() - 5 * 60 * 1000) }
    });

    if (recentSubmission) {
      return res.status(429).json({
        success: false,
        message: 'You have already submitted a form recently. Please wait before submitting again.'
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      phone,
      service,
      message,
      ipAddress,
      userAgent,
      status: 'new'
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        status: contact.status,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: Object.values(error.errors).map(e => e.message)
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

export default router;