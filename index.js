import dotenv from 'dotenv';
import express from 'express';
import stringRoutes from './src/routes/strings.route.js';
import customError from './src/utils/customError.js';
import globalErrorHandler from './src/utils/globalErrorHandler.js';

// dotenv.config();

const app = express();
app.use(express.json());

// String routes (accessible at /api/reverse/... and /reverse/...)
app.use('/api', stringRoutes);
app.use('/', stringRoutes);

app.all('*any', (req, res, next) => {
    const err = new customError(`Not Found ${req.originalUrl}`, 404);
    next(err)
})

app.use(globalErrorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});