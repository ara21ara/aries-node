module.exports = {
    responseToJSON
};

function responseToJSON(prop) {
    return function(req, res, next) {
        res.json(req.resources[prop]);
    }
} 