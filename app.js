const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🌐 MR_Dark280 Online 24/7'));
app.listen(3000);

const botArgs = {
    host: 'goldmc.xyz',
    port: 25565,
    username: 'MR_Dark280', 
    version: '1.20.1'
};

function createBot() {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log(`[✔] دخل الحساب: ${botArgs.username}`);
        setTimeout(() => bot.chat('/login 1234567'), 7000);
        setTimeout(() => bot.chat('/survival'), 20000);
        
        // ريست كل ساعتين
        setTimeout(() => {
            console.log('🔄 ريست دوري لـ MR_Dark280');
            bot.quit();
        }, 7200000); 
    });

    bot.on('end', () => setTimeout(createBot, 10000));
    bot.on('error', (err) => console.log('❌ خطأ:', err));
}
createBot();
