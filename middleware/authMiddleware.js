const { isTokenBlacklisted } = require('../utils/tokenManager');
const { verifyToken } = require('../services/authService'); 


function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'No token provided' });

    if (isTokenBlacklisted(token)) {
        return res.status(401).json({ message: 'Token is expired' });
    }

    const userData = verifyToken(token);
    if (userData) {
        req.user = userData;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = authenticate;
