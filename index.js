const TelegraamApi = require('node-telegram-bot-api');

const token = '7396784125:AAF2boyjnW91mafJxx-rQYEQZajcobpnj8U'

const bot = new TelegraamApi(token,{polling:true})
 bot.setMyCommands([
     {command:'/start',description:'Start'},
     {command:'/owner',description: 'Eshturdiyev Bobosher'},
     {command:'/info',description: 'info'}
 ])
bot.on('message', async msg=>{
    const text =  msg.text;
    const chatId = msg.chat.id;
    if (text==='/owner'){
        await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
        return bot.sendMessage(chatId,'Bot egasi @Eshturdiyev'),
            bot.sendDocument(chatId,'1212.pptx')
    }
    if (text ==='/start'){
        return  bot.sendMessage(chatId, `Assalomu alaykum ${msg.from.first_name}. Bizning botga hush kelibsiz! \n Iltimos tilni tanlang👇`);
    }
    if (text ==='/info'){
        return  bot.sendMessage(chatId,`Telegram nik-> ${msg.from.first_name} \n Human-> ${!msg.from.is_bot} \n Username->@${msg.from.username} \n Id->${msg.from.id}`)
    }
    return bot.sendMessage(chatId,"Men sizni tushunmadim☹️ Iltimos qaytadan o'rinib ko'ring🤝")
})