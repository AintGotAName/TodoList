import { Types } from "mongoose";
import User from "../models";

// [GET] get user homepage (with todo list)
async function get(req, res) {
    console.log(`---------- Getting user ----------\n`);
    try {
        const user = await User.findById(req.params._id);
        res.json(user);
        console.log(`---------- User found ----------\n`);
    } catch (err) {
        console.log(`---------- Failed to get user ----------\n`);
    }
}

// [POST] create a new task
async function makeTask(req, res) {
    console.log(`---------- Creating task ----------\n`);
    try {
        const user = await User.findById(req.params._id);
        user.todoList.push({
            _id: new Types.ObjectId(),
            createdAt: new Date(),
            content: req.body.content,
            description: req.body.description,
        });
        await user.save();
        console.log(`---------- New task created ----------\n`);
    } catch (err) {
        console.log(`---------- Failed to create task ----------\n`);
        console.log(err);
    }
}

export { get, makeTask };
