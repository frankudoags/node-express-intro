import express from "express";
import blogRouter from "./routes/blogRoutes.js";
import userRouter from "./routes/userRoutes.js";
import './db/index.js';


//express app
const app = express();

//listen for requests on port 3000
app.listen(3000);

//blog routes 
app.use('/blogs', blogRouter);

//user routes
app.use('/users', userRouter);

//404 middleware
app.use((_req, res) => {
  res.status(404).send({
    message: "404 Not Found",
  })
});

