const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "add",
    alias: ["aja"],
    react: "➕",
    desc: "Adds a user to the group.",
    category: "group",
    filename: __filename,
    use: '<number>',
},           
async (conn, mek, m, { from, args, q, isGroup, senderNumber, botNumber, reply }) => {
    try {
        if (!isGroup) return reply("❌ This command can only be used in groups.");

        // Extract bot owner's number
        const botOwner = conn.user.id.split(":")[0];

        // Restrict command usage to the bot owner only
        if (senderNumber !== botOwner) {
            return reply("❌ Only the bot owner can use this command.");
        }

        // Ensure the bot is an admin
        if (!isBotAdmins) return reply("❌ I need to be an admin to add users.");

        // Validate user input
        if (!q || isNaN(q)) return reply("❌ Please provide a valid phone number to add.");
        
        const userToAdd = `${q}@s.whatsapp.net`;

        // Attempt to add the user to the group
        let response = await conn.groupParticipantsUpdate(from, [userToAdd], "add");

        // Check if the user was successfully added
        if (response[0].status === 200) {
            reply(`✅ User *${q}* has been added to the group.`);
        } else {
            reply("❌ Failed to add user. Make sure the number is correct and they are not already in the group.");
        }
    } catch (e) {
        console.error("Error adding user:", e);
        reply("❌ An error occurred while adding the user. Please try again.");
    }
});
