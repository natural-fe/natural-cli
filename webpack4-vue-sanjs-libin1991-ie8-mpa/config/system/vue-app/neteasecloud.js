// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_pages-vue-app",
        modules: "neteasecloud",
        resolveAlias: {
            'src': resolve('_pages-vue-app/neteasecloud'),
            'assets': resolve('_pages-vue-app/neteasecloud/assets'),
            'components': resolve('_pages-vue-app/neteasecloud/components'),
        },
        externals: {
        },
    },
    build: {
        env: {
            NODE_ENV: '"production"',
        },
    },
    dev: {
        port: 9527,
        env: {
            NODE_ENV: '"development"',
        },
    },
};
