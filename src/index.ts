import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apiRoutes from './routes/index.js';
import globalErrorHandler from './middlewares/error.middleware.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/api', apiRoutes);

app.use(globalErrorHandler);

const { PORT, MONGODB_URL } = process.env;
try {
    await mongoose.connect(MONGODB_URL!);
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
} catch (error) {
    console.error(error);
    process.exit(1);
}
