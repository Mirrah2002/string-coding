import { twoPointerMethod, recursionMethod, builtInArrayMethod, manualLoopMethod } from "./palindrome.service.js";
import customError from "../../utils/customError.js";

export const checkPalindromeController = (req, res, next) => {
    try {
        const available_methods = [
                    'two-pointer',
                    'recursion',
                    'built-in',
                    'manual-loop'
                ]
        // Method can be passed via query parameter (req.query.method) or body
        const method = available_methods.includes(req.query.method || req.body?.method) ? (req.query.method || req.body?.method) : 'two-pointer';

        // String to check palindrome can be passed via query (?string=... or ?text=...) or request body
        const inputString = req.query.string ?? req.query.text ?? req.body?.string ?? req.body?.text;

        if (inputString === undefined || inputString === null) {
            return next(new customError('Please provide a string to check palindrome using parameter "string" (e.g. ?string=hello) or in request body', 400));
        }

        let palindrome;
        
        switch (method) {
            case 'two-pointer':
                palindrome = twoPointerMethod(String(inputString));
                break;
            case 'recursion':
                palindrome = recursionMethod(String(inputString));
                break;
            case 'built-in':
                palindrome = builtInArrayMethod(String(inputString));
                break;
            case 'manual-loop': 
                palindrome = manualLoopMethod(String(inputString));
                break;
            default:
                return next(new customError(`Invalid method "${method}". Supported methods are: ${available_methods.join(', ')}`, 400));
                // palindrome = twoPointerMethod(String(inputString));
        }

        res.status(200).json({
            status: 'success',
            message: palindrome ? `${inputString} is a palindrome` : `${inputString} is not a palindrome`,
            data: {
                original: String(inputString),
                palindrome,
                method,
                available_methods
            }
        });
    } catch (err) {
        next(new customError(err.message, 400));
    }
};