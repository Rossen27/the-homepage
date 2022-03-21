module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/the-homepage/' // the-homepage 為 repo 名稱
        :
        '/'
}