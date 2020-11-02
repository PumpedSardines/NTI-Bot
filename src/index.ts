import * as Discord from "discord.js";
import command from "./command";

const bot = new Discord.Client();

bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}`)

	bot.user.setActivity(
		"my code",
		{
			type: "STREAMING",
			url: "https://www.twitch.tv/something"
		}
	);

	//const guild = client.guilds.cache.get('YOUR_GUILD_ID')
	//guild.roles.create({ data: { name: 'Mod', permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS'] } });


})

bot.on('message', message => {
	command(message).catch(err => {
		message.channel.send(err);
	})
});

bot.login(process.env.BOT_TOKEN);