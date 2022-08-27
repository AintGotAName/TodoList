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

export { get };
