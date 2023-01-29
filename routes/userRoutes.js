import { Router } from 'express';
import { login, signup, changePassword, resetPassword, getAllUsers } from '../controllers/userController.js';


const userRouter = Router();

userRouter.post("/login",login);

userRouter.get("/sign-up", signup);

userRouter.post("/change-password", changePassword);

userRouter.post("/reset-password", resetPassword);

userRouter.get("/all-users", getAllUsers);

export default userRouter;
