import express from 'express';

import { getCapsules, addCapsules } from '../controllers/posts.js';
//.js added for node.js

const router = express.Router();

//first router
router.get('/', getCapsules);
router.post('/add', addCapsules);

//router.post('/', createCapsule);



export default router; 