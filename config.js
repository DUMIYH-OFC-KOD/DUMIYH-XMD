const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EKcFVYLb#rIN-reO2uJgSX1otKdBL06LA96JbgDG7Uuv0iq9MLSQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/PZwmqXyx/2565.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "𝐃𝐔𝐌𝐈𝐘𝐇-𝐗𝐌𝐃 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖 🛜\n\n𝗘𝗻𝗷𝗼𝘆 𝘆𝗼𝘂𝗿 𝗷𝗼𝘂𝗿𝗻𝗲𝘆 𝘄𝗶𝘁𝗵 𝗼𝘂𝗿 𝗯𝗼𝘁...🧬\n\n...⭐ᴅᴏɴᴛ ꜰᴏʀɢᴏᴛ ᴛᴏ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ⭐...\n\n𝓡𝓔𝓟𝓞 - https://github.com/DUMIYH-KOD/DUMIYH-XMD\n\n> ᴅᴜᴍɪʏʜ ᴏꜰᴄ ᴛ.ᴅ.ᴅ 🇱🇰🤞"
};
