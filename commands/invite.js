const discord = require("discord.js");


module.exports = {
  name: "invite",
  category: "info",
  description: "Get the invite link of the bot",
  run: async (client, message, args) => { 
  
    let embed = new discord.MessageEmbed()
    .setTitle('link do invite')
    .setDescription(`[aperte aqui](https://discord.com/api/oauth2/authorize?client_id=767868534645719050&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fk8x988vR&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`Bot made by C0de `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
}
 }