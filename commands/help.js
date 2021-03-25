const Discord = require('discord.js')

exports.run = async (client, message) => {

  
 
 let help = new Discord.MessageEmbed()
     .setColor('#4169E1')
     .setTitle(` | __Help Menu__`)
     .setDescription(`Hello ${message.author.username}! **:) those are the commands!**`)
     .setThumbnail('')
     .addField(` link `)
 await message.channel.send(help)
  
}