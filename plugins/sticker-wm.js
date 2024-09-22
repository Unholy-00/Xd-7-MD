import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '╰⊱ *𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱╮\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝘼𝘿𝘿 𝘼 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝘼𝙉𝘿 𝘼 𝙉𝘼𝙈𝙀'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '╰⊱ *𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱╮\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝘼𝘿𝘿 𝘼 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝘼𝙉𝘿 𝘼 𝙉𝘼𝙈𝙀'
let img = await m.quoted.download()
if (!img) throw '╰⊱ *𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱╮\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝘼𝘿𝘿 𝘼 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝘼𝙉𝘿 𝘼 𝙉𝘼𝙈𝙀'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `𝗦𝘂𝗽𝗲𝗿 Xfinity - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 `, mediaType: 2, sourceUrl: canal1, thumbnail: imagen1}}}, { quoted: m })
else throw '╰⊱ *𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱╮\n\n𝙀𝙍𝙍𝙊𝙍 𝙎𝙊𝙈𝙀𝙏𝙃𝙄𝙉𝙂 𝙒𝙀𝙉𝙏 𝙒𝙍𝙊𝙉𝙂 𝙏𝙊 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler
