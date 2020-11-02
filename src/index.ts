import * as Discord from "discord.js";

const bot = new Discord.Client();

bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}`)
})

bot.on('msesage', message => {
	if (message.content === `Ping`) {
		message.channel.send('Pong!');
	}
});

bot.login(process.env.BOT_TOKEN);