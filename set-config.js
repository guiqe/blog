const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '_config.butterfly.yml');
let config = fs.readFileSync(configPath, 'utf-8');

// 用環境變數替換 PLACEHOLDER_CLIENT_SECRET
const clientSecret = process.env.GITALK_CLIENT_SECRET || '';

// 這裡做簡單替換，或用 yaml 解析重寫都可以
config = config.replace('PLACEHOLDER_CLIENT_SECRET', clientSecret);

fs.writeFileSync(configPath, config);

console.log('Config updated with client_secret');
