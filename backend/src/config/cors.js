module.exports = (req, res, next) => {
    res.header('Access-Controls-Allow-Origin', '*')
    res.header('Access-Controls-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Controls-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept')
    next()
}