let handler = async (m, { conn, command }) => {
let media = gataVidMenu
let str = `𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝙂𝙍𝙊𝙐𝙋𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙄 𝙞𝙣𝙫𝙞𝙩𝙚 𝙮𝙤𝙪 𝙩𝙤 𝙟𝙤𝙞𝙣 𝙩𝙝𝙚 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 𝘾𝙤𝙢𝙢𝙪𝙣𝙞𝙩𝙮.  𝙃𝙖𝙫𝙚 𝙖 𝙜𝙤𝙤𝙙 𝙩𝙞𝙢𝙚 𝙖𝙣𝙙 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙩 𝙬𝙞𝙩𝙝 𝙪𝙨. 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ *Version ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ *Informate de las Novedades!!!*
▶︎ *${canal1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐆𝐚𝐭𝐚𝐁𝐨𝐭
*${soporteGB}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟏
*${grupo1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
ᥫ᭡༶A༶T༶M༶M༶ᰔᩚ 
*https://chat.whatsapp.com/Bb5cUhAof6RBEA8S4XSRaK*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Please, do not enter with Bot numbers, and maintain respect.*`
await conn.sendButton(m.chat, str, `Xfinity\n${asistencia}\n\n` + wm, media, [
['Accounts', '.cuentasgb'],
['Donate', '.donar'],
['Back to Menu', '/menu']], null, [
['Xfinity', `${md}`]], fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/Unholy-00/Xfinity', 'Xfinity', null, null, [
['Accounts', '.cuentasgb'],
['Donate', '.donar'],
['Back to menu', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
