import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import userRouter from './routes/user';

dotenv.config();
dotenv.config({ path: 'src/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(userRouter);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    msg: "hello, postgres user"
  });
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));