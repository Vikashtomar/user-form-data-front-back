import mongoose from "mongoose";
import { config } from "dotenv";
// const connection = mongoose.connect("`mongodb+srv://vikas:DV5VuK6gvZjRzjnS@cluster0.dixthwt.mongodb.net/?retryWrites=true&w=majority`")
config()
const connection = mongoose.connect(
    process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    } );
  export default connection;
    