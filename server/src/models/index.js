import { Schema, model } from "mongoose";
import { ObjectId } from "mongoose.Types";

const UserSchema = new Schema({
    username: String,
    hash: String,
    salt: String,
    todoList: [
        {
            _id: ObjectId,
            createdAt: Date,
            finishedAt: Date,
            content: String,
            description: String,
        },
    ],
});

export default model("User", UserSchema);
