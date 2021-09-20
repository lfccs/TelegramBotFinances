const fs = require(`fs`)

module.exports.commandHandler = (bot) => {
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`)
        try
        {bot.commands.set(command.help.name, command)}
        catch(e){
            console.error(e);
            
        }
    }
    console.log(`commands success`);

}
module.exports.dataHandler = (bot) => {
    const save = require('./save')
    bot.database.set('save', save)
    const reload = require(`./reload`)
    bot.database.set(`reload`, reload)
    console.log(`data success`);

}