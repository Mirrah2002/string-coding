import { reverseWithDecrementLoop, reverseWithForOfLoop, reverseWithRecursion } from './reverse-string.service.js';
import customError from '../../utils/customError.js';

export const reverseStringController = (req, res, next) => {
    try {
        const available_methods = [
                    'decrement',
                    'for-of',
                    'recursion'
                ]
        // Method can be passed via query parameter (req.query.method) or body
        const method = available_methods.includes(req.query.method || req.body?.method) ? (req.query.method || req.body?.method) : 'decrement';

        // String to reverse can be passed via query (?string=... or ?text=...) or request body
        const inputString = req.query.string ?? req.query.text ?? req.body?.string ?? req.body?.text;

        if (inputString === undefined || inputString === null) {
            return next(new customError('Please provide a string to reverse using parameter "string" (e.g. ?string=hello) or in request body', 400));
        }

        // if (!method) {
        //     return next(new customError(`Please specify a method parameter. Available methods: ${VALID_METHODS.join(', ')}`, 400));
        // }
        let reversed;
        
        switch (method) {
            case 'decrement':
                reversed = reverseWithDecrementLoop(String(inputString));
                break;
            case 'for-of':
                reversed = reverseWithForOfLoop(String(inputString));
                break;
            case 'recursion':
                reversed = reverseWithRecursion(String(inputString));
                break;
            default:
                return next(new customError(`Invalid method "${method}". Supported methods are: ${VALID_METHODS.join(', ')}`, 400));
                // reversed = reverseWithDecrementLoop(String(inputString));
        }

        res.status(200).json({
            status: 'success',
            data: {
                original: String(inputString),
                reversed,
                method: method ?? 'decrement',
                available_methods
            }
        });
    } catch (err) {
        next(new customError(err.message, 400));
    }
};

