const app=require('./app');
const dotenv=require('dotenv');
const connectDatabase=require('./config/database');


dotenv.config({path: 'Backend/config/config.env'});

process.on('uncaughtException', (err)=>{
    console.error(`the uncaught exception ${err}`);
    process.exit(1);
})
connectDatabase()

const server=app.listen(process.env.PORT,()=>{
    console.log('listening to the port 4000')
})

process.on('unhandledRejection',(err)=>{
    console.log(`unhandled rejectiob ${err.message}`);
    server.close(()=>{
        process.exit(1);
    })
})