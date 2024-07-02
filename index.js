const TelegramApi = require('node-telegram-bot-api');

const token = '7257381120:AAH06cVXskRvoeMs5aA0oh_mpIUsB1Vffoo';

const bot = new TelegramApi(token,{polling:true});

 bot.setMyCommands([
     {command:'/start',description:'Start'},
     {command:'/owner',description: 'Eshturdiyev Bobosher'},
     {command:'/info',description: 'info'},
     {command:'/huquqiy',description:'huquqiy asosi'},
 ])

    bot.on('message', async msg=>{

        console.log(msg);

    const text =  msg.text

    const langs = {
        reply_to_message_id:msg.message_id,
        reply_markup:{
            resize_keyboard:true,
            one_time_keyboard:false,
            keyboard:[
                [{text:'🇺🇿Uz'}, {text: '🇷🇺Ru'}, {text: '🇬🇧En'}]
            ]
        }
    }

        const reja = {
            reply_to_message_id:msg.message_id,
            reply_markup:{
                resize_keyboard:true,
                one_time_keyboard:false,
                keyboard:[
                    [{text:'Uz'}, {text: 'Ru'}, {text: 'En'}]
                ]
            }
        }


        const chatId = msg.chat.id;
    if (text==='/owner'){
        await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
        return bot.sendMessage(chatId,'Bot egasi @Eshturdiyev')
    }
    if (text ==='/start'){
       return bot.sendMessage(chatId, `Assalomu alaykum ${msg.from.first_name}. Bizning botga hush kelibsiz! \n Iltimos tilni tanlang👇`,langs);
    }
    if (text ==='🇺🇿Uz'){

       return bot.sendMessage(chatId,'uzbek tiliga yaxshimi sizningcha',reja)
        if (text==='Chiqish'){

        }
    }
    if (text ==='/info'){
        return  bot.sendMessage(chatId,`Telegram nik-> ${msg.from.first_name} \n Human-> ${!msg.from.is_bot} \n Username->@${msg.from.username} \n Id->${msg.from.id}`)
    }
    if (text ==='/huquqiy'){
        await bot.sendMessage(chatId,'Huquqiy asosi bilan tanishing:')
        return bot.sendDocument(chatId,'https://t.me/InfoCustomUz/24',{caption:"Nomi: Pochta va kuryerlik \n"})
    }

})



