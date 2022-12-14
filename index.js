const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./Routes/user.route');
const errorHandler = require('./Middleware/errorHandler');
const port = process.env.PORT || 5000;


// /* Application Middleware */
app.use(express.json())
app.use(cors())


// /* Home Route */
app.get('/', (req, res) => {
    res.send("Node Mongodb Assignment-1");
})



// /* All User Route */
app.use("/user", userRouter);



// /* Undefined Route */
app.all('*', (req, res) => {
    res.send('No Route Found')
})


/* Server Listening on PORT */
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})


/* Global Error Handler*/
app.use(errorHandler);


process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
})