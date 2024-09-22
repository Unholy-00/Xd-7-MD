let media = 'https://qu.ax/NqZN.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Xfinity 
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ *GitHub*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ *Instagram*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶︎ *Facebook*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendButton(m.chat, str, wm, media, [
['Creator', '#owner'],
['Back to Menu', '/menu']], null, [
['Xfinity', md]], fkontak)}
//conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Unholy-00/xd-7-MD', 'Xfinity', null, null, [
['Creator', '#owner'],
['Back to Menu', '/menu']
], m,)}*/
handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
