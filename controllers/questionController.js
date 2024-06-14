const Question = require('../models/question');
const { getAIResponse } = require('../services/aiService');

exports.postQuestion = async (req, res) => {
    const { content } = req.body;
    const userId = req.user.userId.id

    try {
        const answer = await getAIResponse(content);
        const newQuestion = await Question.create({
            userId,
            content,
            answer
        });

        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).send('Error posting question');
    }
};

exports.getQuestion = async (req, res) => {
    const { questionId } = req.params;
    try {
        const question = await Question.findByPk(questionId);
        if (!question) {
            return res.status(404).send('Question not found');
        }
        res.json(question);
    } catch (error) {
        res.status(500).send('Error retrieving question');
    }
};
