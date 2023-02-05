import {app} from './app';
import { userRouter } from './routes/userRoute';
import { postRouter } from './routes/postRoute';
import { friendshipRouter } from './routes/friendshipRouter';

app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/friendship", friendshipRouter)