import { loopWithSetMethod, regexMethod, asciiMethod } from "./vow-cons.service.js";
import customError from "../../utils/customError.js";

export const countVowelConsonant = (req, res, next) => {
    try {
        const available_methods = [
                    'set-loop',
                    'regex',
                    'ascii'
                ]
        // Method can be passed via query parameter (req.query.method) or body
        const method = available_methods.includes(req.query.method || req.body?.method) ? (req.query.method || req.body?.method) : 'set-loop';

        // String to check count can be passed via query (?string=... or ?text=...) or request body
        const inputString = req.query.string ?? req.query.text ?? req.body?.string ?? req.body?.text;

        if (inputString === undefined || inputString === null) {
            return next(new customError('Please provide a string to check count using parameter "string" (e.g. ?string=hello) or in request body', 400));
        }

        let count;
        
        switch (method) {
            case 'set-loop':
                count = loopWithSetMethod(String(inputString)); 
                break;
            case 'regex':
                count = regexMethod(String(inputString));
                break;
            case 'ascii':
                count = asciiMethod(String(inputString));
                break;
            default:
                return next(new customError(`Invalid method "${method}". Supported methods are: ${available_methods.join(', ')}`, 400));
                // count = twoPointerMethod(String(inputString));
        }

        res.status(200).json({
            status: 'success',
            message: `The string '${inputString} contains ${count.vowels} vowels and ${count.consonants} consonants`,
            data: {
                original: String(inputString),
                count,
                method,
                available_methods
            }
        });
    } catch (err) {
        next(new customError(err.message, 400));
    }
};