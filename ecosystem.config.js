// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: process.env.APP_NAME || 'next-app',
            script: 'npm',
            args: 'start',
            cwd: '.',
            env: {
                NODE_ENV: 'production',
                PORT: process.env.PORT || 3000,   // 显式传递 PORT 变量
                HOST: '0.0.0.0' // Listen on all interfaces
            }
        }
    ]
};