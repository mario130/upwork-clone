
function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // any error
        return res.status(400).json({ message: err });
    }
    
    if (err.name === 'ValidationError') {
        //  validation error
        return res.status(400).json({ message: err.message });
    }
    
    if (err.name === 'UnauthorizedError') {
        // jwt error
        return res.status(401).json({ message: 'Invalid Token' });
    }
    
    // 500 server error
    return res.status(500).json({ message: err.message });
}
module.exports = errorHandler;