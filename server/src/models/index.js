import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema({
    username: String,
    hash: String,
    salt: String,
    todoList: [
        {
            _id: Types.ObjectId,
            createdAt: Date,
            finishedAt: Date,
            content: String,
            description: String,
        },
    ],
});

export default model("User", UserSchema);
