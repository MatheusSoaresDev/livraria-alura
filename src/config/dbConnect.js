import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://alura:123@alura.mfck7hs.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;