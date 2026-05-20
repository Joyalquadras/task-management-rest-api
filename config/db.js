import mongoose from "mongoose";

const configureDB=async ()=>{
    try{
         const db=await mongoose.connect(process.env.DB_URL);
                console.log("Successfully connected to DB",db.connection.name);
        }
    catch(err){
                console.log("Failed to connect to DB");
            }
}
export default configureDB;