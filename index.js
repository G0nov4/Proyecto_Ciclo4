import connectDB from './db/db'

const main = ()=>{
    await connectDB();
}


main();