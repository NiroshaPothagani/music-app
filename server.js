const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');


// // const index = require();

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
     process.env.DATABASE_PASSWORD);
//mongoose.connect(proccess.env.DATABASE_LOCAL,{})

mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology: true
}).then(
    console.log("DB connection is successfull..."));


// console.log(process.env);

// const schema = new mongoose.schema({
//     name:{
//     type: String,
//     required:[true, 'a tour must have name'],
//     unique:true
//     },
//     rating: {
//         type: Number,
//         default: 4.5,
//     },
//     price: {
//         type: Number,
//         required: [true, 'A Tour must have a price'],
//     }
// });
// const Tour = mongoose.model('Tour', schema);

// const testTour = new Tour({
//     name: 'The Forest Hiker',
//     rating:4.5,
//     price:497
// });

//Start Server 
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,() => {
    console.log(`App running on port ${PORT}......`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REGECTION...Shutting down....');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION...Shutting down....');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
})
