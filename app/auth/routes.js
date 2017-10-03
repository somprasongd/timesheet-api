// const controller = require('./controller');

exports.setup = function(router) {
    router.post('/', (req, res) => {
        res.send('login')
    });
}