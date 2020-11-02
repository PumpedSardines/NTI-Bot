import * as Discord from "discord.js";
import errorCodes from './errror-codes';

interface IParam {
	type: string,
	optional: boolean
}

interface ICommand {
	command: string,
	description: string,
	params: IParam[],
	func: (paramater: string[], msg: Discord.Message) => Promise<void>
}

const commands: ICommand[] = [
	{
		command: "test2",
		description: "Testar",
		params: [],
		func: async (paramater, msg) => {
			throw "test2";
		}
	},
	{
		command: "_",
		description: "Testar igen",
		params: [],
		func: async (paramater, { channel }) => {
			try {
				const messages = await channel.messages.fetch({ limit: 1 })
				const lastMessage = messages.first();
				lastMessage.delete();

				channel.send(paramater.join(" "));
			} catch (err) {
				throw "Couldn't find last message"
			}
		}
	}
]

/**
 * Wheather or not the command could be run
 */
export default async function (msg: Discord.Message): Promise<boolean> {

	// Check if string is an atempt at a command 
	const test = msg.content.split(" ");
	if (
		test.length == 0 ||
		test[0].length == 0 ||
		test[0][0] != process.env.PREFIX
	) {
		return false;
	}

	const commandId = test[0].slice(1);
	const paramas = test.slice(1);
	const command = commands.find(v => v.command == commandId);

	if (command == undefined) {
		msg.channel.send(errorCodes.commandNotFound);
	}



	await command.func(paramas, msg);
}