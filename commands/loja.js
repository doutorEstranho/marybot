
const Discord = require('discord.js') 

exports.run = async (client, message) => { 

  


let help = new Discord.MessageEmbed()
     .setColor('#4169E1')
     .setTitle(`loja de itens   `)
     .setDescription(`eae ${message.author.username}! **:) apoie o_c0de na loja pra ajudar o bot (clique na mini foto para ver a loja)**`)
     .setThumbnail('http://ctk-api.herokuapp.com/fortnite-shop')
     await message.channel.send(help)

}