const bcrypt = require('bcrypt');
const User = require('../models/user');
const { generateToken } = require('../services/authService');
const { blacklistToken } = require('../utils/tokenManager');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const accessToken = generateToken(user);
            res.json({ accessToken });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Error during authentication');
    }
};

exports.logout = (req, res) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];

    if (accessToken) {
        blacklistToken(accessToken);
        res.status(200).json({ message: 'Logged out successfully' });
    } else {
        res.status(401).json({ message: 'No token provided or token is invalid' });
    }
};
