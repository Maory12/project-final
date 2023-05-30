// Importing Express Library

import express from 'express';

// creating a router instance
const router = express.Router();

// creating the router
router.get('/author', (req, res) => {
  res.json({
    name: 'maory',
    lastname: 'Beristain',
    twitter: '@anaberi',
    job: 'ITGAM',
  });
});

export default router;
