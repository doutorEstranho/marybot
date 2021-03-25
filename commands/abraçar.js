const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	var list = [
		'https://i.imgur.com/mjuxfiY.gif',
		'https://i.imgur.com/jAVNGsj.gif',
		'https://i.imgur.com/xJlQaNK.gif'
	];

	var rand = list[Math.floor(Math.random() * list.length)];
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
	if (!user) {
		return message.reply(
			'lembre-se de mencionar um usuário válido para abraçar!'
		);
	}
	/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.settile(
			'abraço'
		)
		.setColor('#000000')
		.setDescription(
			`${
				message.author
			} acaba de abraçar ${user} `
		)
		.setImage(rand)
		.setTimestamp()
		.setThumbnail(avatar)
		.setFooter('abraço abraço abraço')
		.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
};
