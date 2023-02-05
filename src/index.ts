import {app} from './app';
import { userRouter } from './routes/userRoute';
import { postRouter } from './routes/postRoute';

app.use("/user", userRouter)
app.use("/post", postRouter)