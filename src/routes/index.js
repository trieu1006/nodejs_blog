// express
const newsRouter = require('./news')
const siteRouter = require('./site')


function route(app) { // route sẽ nhận express app

    // path sẽ đọc từ trên xuống, path / luôn để cuối cùng

    // sử dụng newsRouter cho path /news -> nó sẽ đọc path trong file news.js
    app.use('/news', newsRouter)
    // sử dụng siteRouter cho path / -> nó sẽ đọc path trong file site.js
    app.use('/', siteRouter)
    
}

module.exports = route