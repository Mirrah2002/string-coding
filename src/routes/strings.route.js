import { Router } from 'express';
import { reverseStringController } from '../modules/reverse-string/reverse-string.controller.js';
import { checkPalindromeController } from '../modules/palindrome/palindrome.controller.js';
import { countVowelConsonant } from '../modules/count-vowel-consonant/vow-cons.controller.js'

const router = Router();

router.route('/reverse')
    .get(reverseStringController)
    .post(reverseStringController);

router.route('/palindrome')
    .get(checkPalindromeController)
    .post(checkPalindromeController);

router.route('/vowel-consonant')
    .get(countVowelConsonant)
    .post(countVowelConsonant);

export default router;

