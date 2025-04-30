import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


//rutas de autenticación localhost:5000/api/login
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`servidor corriendo en  http://localhost:${PORT}`);
});