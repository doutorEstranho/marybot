const Discord = require('discord.js')
exports.run = (client, message, args) => {

     if(message.author.id != "700157765053841438")
     if(message.author.id != "796473029785026581")
     if(message.author.id != "748965473907114105")
     if(message.author.id != "610953368625741855") return  message.channel.send(`${message.author} Você não tem permissão para fazer isso!`)
  const clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
  try {
    
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    const resultado = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setTitle('Comando executado com sucesso!')
    .setDescription(`\ \ \`\`\`xl\n${clean(evaled)}\n\`\`\``)

      message.channel.send(resultado);
    } catch (err) {
      const erro = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('Aprende a programar antes de colocar comando que não existe p - p')
      .setDescription(`\ \ \`\`\`xl\n${clean(err)}\n\`\`\``)
      message.channel.send(erro);
  }
}; 