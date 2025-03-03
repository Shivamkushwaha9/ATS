// backend/routes/experiences.js
import express from 'express';
import { UserExperience } from '../models/experience.model.js';
import mongoose from 'mongoose';

const router = express.Router();

// Get all experiences for a user
router.get('/experiences', async (req, res) => {
  try {
    const { userId } = req.query;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    
    const userExperience = await UserExperience.findOne({ userId });
    
    if (!userExperience) {
      return res.json({ experiences: [] });
    }
    
    res.json({ experiences: userExperience.experiences });
  } catch (error) {
    console.error('Error fetching experiences:', error);
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

// Create a new experience
router.post('/experiences', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    
    const { userId, position, positionIcon, company, duration, skillsUsed, description } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    
    if (!position || !company) {
      return res.status(400).json({ error: 'Position and company are required' });
    }
    
    let userExperience = await UserExperience.findOne({ userId });
    
    if (!userExperience) {
      userExperience = new UserExperience({
        userId,
        experiences: []
      });
    }
    
    const newExperience = {
      _id: new mongoose.Types.ObjectId(),
      position,
      positionIcon: positionIcon || 'code',
      company,
      duration: duration || '',
      skillsUsed: skillsUsed || [],
      description: description || []
    };
    
    userExperience.experiences.push(newExperience);
    await userExperience.save();
    
    res.status(201).json({ 
      success: true, 
      experience: newExperience 
    });
  } catch (error) {
    console.error('Error creating experience:', error);
    res.status(500).json({ error: 'Failed to create experience' });
  }
});


// Update an experience
router.put('/experiences/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, position, positionIcon, company, duration, skillsUsed, description } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    
    const userExperience = await UserExperience.findOne({ userId });
    
    if (!userExperience) {
      return res.status(404).json({ error: 'User experience not found' });
    }
    
    const experienceIndex = userExperience.experiences.findIndex(
      exp => exp._id.toString() === id
    );
    
    if (experienceIndex === -1) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    
    // Update the experience
    userExperience.experiences[experienceIndex] = {
      ...userExperience.experiences[experienceIndex],
      position,
      positionIcon,
      company,
      duration,
      skillsUsed,
      description
    };
    
    await userExperience.save();
    
    res.json({ 
      success: true, 
      experience: userExperience.experiences[experienceIndex] 
    });
  } catch (error) {
    console.error('Error updating experience:', error);
    res.status(500).json({ error: 'Failed to update experience' });
  }
});

// Delete an experience
router.delete('/experiences/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    
    const userExperience = await UserExperience.findOne({ userId });
    
    if (!userExperience) {
      return res.status(404).json({ error: 'User experience not found' });
    }
    
    userExperience.experiences = userExperience.experiences.filter(
      exp => exp._id.toString() !== id
    );
    
    await userExperience.save();
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting experience:', error);
    res.status(500).json({ error: 'Failed to delete experience' });
  }
});

export default router;