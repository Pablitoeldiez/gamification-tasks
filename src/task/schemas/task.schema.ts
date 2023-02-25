import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    id: Number,
    age: Number,
    breed: String,
})