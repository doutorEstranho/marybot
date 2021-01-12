const Discord = require('discord.js')

exports.run = async (client, message) => {

  
 
 let help = new Discord.MessageEmbed()
     .setColor('#4169E1')
     .setTitle(` | __Menu de Ajuda__`)
     .setDescription(`Olá ${message.author.username}! **:) esses são os comandos!**`)
     .setThumbnail('https://cdn.discordapp.com/emojis/797987517625663528.gif?v=1')
     .addField(`<:DiscordStaff:731947814246154240> Lista de comandos:`, `eval (apenas developers/donos do bot pode usar) | ping | ajuda | uptime | clear.`)
 await message.channel.send(help)
 
}