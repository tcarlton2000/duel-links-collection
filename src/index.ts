import app from './server/server';
import { connectDB } from './server/database';

const port = 5000;
connectDB();
app.listen(port, () => console.log(`Running on port ${port}`));
