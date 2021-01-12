const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online
const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client

const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});


client.on("ready", () => {
  let activities = [
      `Joga fortnite? use o_c0de na loja`,
      `${client.guilds.cache.size} servidores!`,
      `entre no meu servidor https://discord.gg/VA727ve`,
      `${client.users.cache.size} usuários!`
      `meus ajudantes 「Shet32 」
#9999 Link | 🍁
#6666`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 100 * 60); 
  client.user
      .setStatus("DND")
      .catch(console.error);
console.log("Estou Online!")
});

client.login(`dps eu coloco '-'`);