require('dotenv').config()
require('./connection/database')
const collection = require('./collection')
const telegramBot = require('node-telegram-bot-api')
const handler = require('./handlers')
const { TOKEN_BOT_TELEGRAM } = process.env
const bot = new telegramBot(TOKEN_BOT_TELEGRAM, { polling: true })
bot.commands = new collection();
bot.calculates = require('./calculate/core')

handler.commandHandler(bot)

bot.on('text', msg => {

  const args = msg.text.trim().split(/ +/g)
  const cmd = args.shift().toLocaleLowerCase()

  const injection = {
    bot: bot,
    msg: msg,
    args: args
  }

  const command = bot.commands.get(cmd)
  try {
    command.run(injection)
  } catch (e) {
  }
})



