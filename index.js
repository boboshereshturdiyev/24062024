
//Connect to my postgres database
const { Client } = require('pg');
const client = new Client({
    host :"localhost",
    port:5432,
    user:"postgres",
    password:"20021026",
    database:"name1"
})
client.connect();
client.query(`SELECT * FROM Id`, (err, res) => {
    if (!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
} )




const TelegramApi = require('node-telegram-bot-api');

const fs = require('fs');
const {message} = require("telegraf/filters");

const token = '7257381120:AAH06cVXskRvoeMs5aA0oh_mpIUsB1Vffoo';

const bot = new TelegramApi(token,{polling:true});

 bot.setMyCommands([
     {command:'/start',description:'Start'},
     {command:'/owner',description: 'Eshturdiyev Bobosher'},
     {command:'/info',description: 'info'},
     {command:'/huquqiy',description:'huquqiy asosi'},
     {command:'/database', description:'database database'},
 ])

    bot.on('message', async msg=>{

        ///write name.txt file in users information
        console.log(msg);
        let content = ` {\nID: ${msg.from.id} \n First_name:${msg.from.first_name} \n Last_name:${msg.from.last_name} \n Text:${msg.text}\n Username: @${msg.from.username}
        Chat_id:${msg.message_id}\n Date:${msg.date} }\n\n\n`;
        fs.appendFile(`C:\\Users\\atb.mehmon_2\\Desktop\\bot strukturasi\\lala\\users\\${msg.from.id}.txt`,content, function (err){
            if (err) throw err;
        })


    const text =  msg.text

        ///buttons in my bot
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

    ///sendMessage all user my telegram bot
    //     const users = [5022826584,5022565528,7172349844,6346517080];
    //     for (const value of users) {
    //         bot.sendMessage(value,'assalomu alaykum!')
    //     }
    ///2-qadam reply to message
        const reja = {
            reply_to_message_id:msg.message_id,
            reply_markup:{
                resize_keyboard:true,
                one_time_keyboard:false,
                keyboard:[
                    [{text:'Hisoblash'}, {text: 'Ru'}, {text: 'En'}]
                ]
            }
        }

        ///botning setMycommandlari
        const chatId = msg.chat.id;
    if (text ==='/info'){
        return  bot.sendMessage(chatId,`Telegram nik-> ${msg.from.first_name} \n Human-> ${!msg.from.is_bot}\n Number-> ${msg.number} \n Username->@${msg.from.username} \n Id->${msg.from.id}`)
    }
    if (text==='/owner'){
        await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
        return bot.sendMessage(chatId,'Bot egasi @Eshturdiyev')
    }
    if (text ==='/start'){
       return bot.sendMessage(chatId, `Assalomu alaykum ${msg.from.first_name}. Bizning botga hush kelibsiz! \n Iltimos tilni tanlang👇`,langs);
    }
    if (text ==='/huquqiy'){
        await bot.sendMessage(chatId,'Huquqiy asosi bilan tanishing:')
        return bot.sendDocument(chatId,'https://t.me/emas_yomon/9',{caption:`\n📒Nomi: Pochta va kuryerlik \n👨🏻‍✈️Muallif: Farxodov Farrux \n\n\n📨Yaqinlarga ulashing: https://t.me/bobosherBbot`})
    }
    if (text ==='/database'){
        await bot.sendMessage(chatId,`fdgdfg`);
    }




    ///botga funksiya yozamiz kettik!

        if (text === '🇺🇿Uz') {
           await bot.sendMessage(chatId,'Iltimos tugmalardan birini tanlang:',reja)
        }
        if (text === 'Hisoblash') {
            try {

              await  bot.sendMessage(chatId, `${Math.pow(msg.text, 2)}`);

            } catch (e) {

                await bot.sendMessage(chatId, `Kiritilgan ma'lumot raqam bo'lishi shart!`);

            }
        }

})



