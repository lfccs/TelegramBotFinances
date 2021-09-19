require('dotenv').config()
const telegramBot = require('node-telegram-bot-api')
const mongo = require('mongoose')
const{TOKEN_BOT_TELEGRAM} = process.env
const bot = new telegramBot(TOKEN_BOT_TELEGRAM, {polling: true})

/*bot.on('text', msg=>{
    bot.sendMessage(msg.chat.id, msg.text)
    msg.re
})*/

// Matches /photo
bot.onText(/\/photo/, function onPhotoText(msg) {
    // From file path
    const photo = `${__dirname}/../test/data/photo.gif`;
    bot.sendPhoto(msg.chat.id, photo, {
      caption: "I'm a bot!"
    });
  });
  
  
  // Matches /audio
  bot.onText(/\/audio/, function onAudioText(msg) {
    // From HTTP request
    const url = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
    const audio = request(url);
    bot.sendAudio(msg.chat.id, audio);
  });
  
  
  // Matches /love
  bot.onText(/\/love/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [
          ['Yes, you are the bot of my life ❤'],
          ['No, sorry there is another one...']
        ]
      })
    };
    bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
  });
  
  
  // Matches /echo [whatever]
  bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
    const resp = match[1];
    bot.sendMessage(msg.chat.id, resp);
  });
  
  
  // Matches /editable
  bot.onText(/\/editable/, function onEditableText(msg) {
    const opts = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Edit Text',
              // we shall check for this value when we listen
              // for "callback_query"
              callback_data: 'edit'
            }
          ]
        ]
      }
    };
    bot.sendMessage(msg.from.id, 'Original Text', opts);
  });
  
  
  // Handle callback queries
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    const opts = {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
    };
    let text;
  
    if (action === 'edit') {
      text = 'Edited Text';
    }
  
    bot.editMessageText(text, opts);
  });