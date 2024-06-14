const User = require('../models/user');
const Question = require('../models/question');
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            password: hashedPassword
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send('Error creating user');
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = req.user
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user.userId);
    } catch (error) {
        res.status(500).send('Error retrieving user');
    }
};

exports.getUserQuestions = async (req, res) => {
    const { userId } = req.user
    try {
        const user = await User.findByPk(userId.id, {
            include: [{
                model: Question,
                as: 'questions'
            }]
        });
        if (!user) {
            return res.status(404).send('User not found');
        }
        if (user.questions.length === 0) {
            return res.status(404).json({ message: "No questions found for this user" });
        }
        res.json(user.questions);
    } catch (error) {
        console.log(error)
        res.status(500).send('Error retrieving user questions');
    }
};
