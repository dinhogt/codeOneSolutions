import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['*']) }));
app.use(express.json());

// Healthcheck
app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
