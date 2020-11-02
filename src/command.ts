import * as Discord from "discord.js";

interface ICommand {
	"command": string,
	"func": (args: typeof Discord.Message) => void
}