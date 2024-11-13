import userRouter from './user.js'
import cors from 'cors'


const route = (app) => {
    app.use('/v4/api/user', userRouter);
}


export default route;