import { Router } from 'express';
import { reverseStringController } from '../modules/reverse-string/reverse-string.controller.js';

const router = Router();

// Supports route parameter: /reverse/:method (e.g., /api/reverse/recursion?str=hello)
// Supports query parameter: /reverse?method=recursion&str=hello
// Also supports POST requests with JSON body: { "str": "hello", "method": "recursion" }
router.get('/reverse', reverseStringController);
router.post('/reverse', reverseStringController);

export default router;

