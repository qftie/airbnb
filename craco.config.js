const path = require('path')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    // less

    // webpack
    webpack: {
        // 配置别名,需要拼接为绝对路径
        // 注意，要使craco生效，需要再配置package.json使得项目用craco启动
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
            "utils": resolve("src/utils")
        }
    }
}