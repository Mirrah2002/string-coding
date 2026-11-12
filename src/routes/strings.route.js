import { Router } from 'express';
import { reverseStringController } from '../modules/reverse-string/reverse-string.controller.js';
import { checkPalindromeController } from '../modules/palindrome/palindrome.controller.js';

const router = Router();

router.route('/reverse')
    .get(reverseStringController)
    .post(reverseStringController);

router.route('/palindrome')
    .get(checkPalindromeController)
    .post(checkPalindromeController);

export default router;

