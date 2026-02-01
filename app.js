const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// تشغيل سيرفر ويب وهمي لمنع المنصة من إيقاف البوت
app.get('/', (req, res) => res.send('🌐 بوت MR_Dark280 يعمل بنظام 24/7'));
app.listen(3000, () => console.log('🌐 Web server is running on port 3000'));

const botArgs = {
    host: 'Goldmc.xyz',
    port: 25565,
    username: 'MR_Dark280', 
    version: '1.20.1'
};

function createBot() {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log(`[✔] البوت ${botArgs.username} دخل اللوبي بنجاح`);
        
        // تسجيل الدخول بعد 7 ثوانٍ
        setTimeout(() => {
            bot.chat('/login 1234567'); 
            console.log('[🔑] تم إرسال كلمة المرور بنجاح');
        }, 7000);

        // دخول السيرفايفل بعد 20 ثانية
        setTimeout(() => {
            bot.chat('/survival');
            console.log('[↕] البوت الآن في السيرفايفل (ستبدأ دورة الساعتين)');
        }, 20000);

        // إعادة تشغيل الاتصال كل ساعتين (7200000 مللي ثانية)
        setTimeout(() => {
            console.log('🔄 انتهت الساعتين.. جاري إعادة التشغيل لضمان بقاء البوت');
            bot.quit();
        }, 7200000); 
    });

    bot.on('error', (err) => console.log('❌ خطأ في الاتصال:', err));
    
    // إعادة الدخول تلقائياً بعد دقيقة واحدة من الخروج
    bot.on('end', () => {
        console.log('🔄 البوت خرج للاستراحة.. سيعود بعد دقيقة واحدة');
        setTimeout(createBot, 60000);
    });
}

createBot();
