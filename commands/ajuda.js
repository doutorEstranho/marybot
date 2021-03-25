const Discord = require('discord.js')

exports.run = async (client, message) => {

  
 
 let help = new Discord.MessageEmbed()
     .setColor('#4169E1')
     .setTitle(` | __Menu de ajuda__`)
     .setDescription(`Olá ${message.author.username}! **:) esses são meus comandos!**`)
     .setThumbnail('')
     .addField(` Lista de comandos:`, `eval (so donos do bot podem usar) | ping | ajuda | help | uptime | clear | beijar | beijo | kiss | emoji | coin | moeda | morse | say | abraçar |  loja | shop.`)
     
     .addField(`Meu criador 𝒞0𝑑𝑒#0001`)

 await message.channel.send(help)
  
}