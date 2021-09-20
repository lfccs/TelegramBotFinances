module.exports.run = async (bot, msg)=>{

    const chat = msg.chat.id
    bot.sendMessage(chat, 'funcionou')
    console.log(msg)

}
module.exports.help ={
    name: 'teste',
    description: 'teste',
}