import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch' 
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false

let pp = gataVidMenu
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hi', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu)).buffer(), sourceUrl: redesMenu }}}

if (command == 'effectmenu'){ //audio
let menuA = ` ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

∘ _${usedPrefix}bass_
∘ _${usedPrefix}blown_
∘ _${usedPrefix}deep_
∘ _${usedPrefix}earrape_
∘ _${usedPrefix}fast_
∘ _${usedPrefix}fat_
∘ _${usedPrefix}nightcore_
∘ _${usedPrefix}reverse_
∘ _${usedPrefix}robot_
∘ _${usedPrefix}slow_
∘ _${usedPrefix}smooth_
∘ _${usedPrefix}tupai_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: ``, body: '  𝗦𝘂𝗽𝗲𝗿 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'searches'){ //buscador
let menuA = ` ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊• *${lenguajeGB['smsBotonM6']()} » ${level}*
┊• *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

*Searche Menu*
∘ _${usedPrefix}animeinfo_
∘ _${usedPrefix}chatgpt_ 
∘ _${usedPrefix}iavoz_
∘ _${usedPrefix}dalle_
∘ _${usedPrefix}google_
∘ _${usedPrefix}lyrics_
∘ _${usedPrefix}githubstalk_
∘ _${usedPrefix}ip_
∘ _${usedPrefix}ytsearch_
∘ _${usedPrefix}spotifysearch_
∘ _${usedPrefix}wikipedia_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Searches Menu`, body: '  𝗦𝘂𝗽𝗲𝗿 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

    
  
} if (command == 'convertes'){ //convertidor
let menuA = `${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

∘ _${usedPrefix}toimg_
∘ _${usedPrefix}tomp3_
∘ _${usedPrefix}tovn_
∘ _${usedPrefix}tovideo_
∘ _${usedPrefix}tourl_
∘ _${usedPrefix}toenlace_
∘ _${usedPrefix}tts es_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Converters Menu`, body: ' 𝗦𝘂𝗽𝗲𝗿 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)  

  
} if (command == 'downloads'){ //descargas
let menuA = `${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

∘ _${usedPrefix}image_
∘ _${usedPrefix}pinterest_
∘ _${usedPrefix}wallpaper_
∘ _${usedPrefix}play_
∘ _${usedPrefix}play.1_
∘ _${usedPrefix}play.2_ 
∘ _${usedPrefix}ytmp3_
∘ _${usedPrefix}ytmp4_
∘ _${usedPrefix}playdoc_
∘ _${usedPrefix}play4_
∘ _${usedPrefix}ytadoc_
∘ _${usedPrefix}ytvdoc_
∘ _${usedPrefix}tw_
∘ _${usedPrefix}spotify_
∘ _${usedPrefix}facebook_
∘ _${usedPrefix}instagram_
∘ _${usedPrefix}igstalk_
∘ _${usedPrefix}igstory_
∘ _${usedPrefix}mediafire_
∘ _${usedPrefix}gitclone_
∘ _${usedPrefix}drive_
∘ _${usedPrefix}apkdl_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Downloads Menu`, body: '  𝗦𝘂𝗽𝗲𝗿 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu }}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)



} if (command == 'info'){ //info
let menuA = `${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

∘ _${usedPrefix}cuentasgb_
∘ _${usedPrefix}groupgb_
∘ _${usedPrefix}grouplist_
∘ _${usedPrefix}infobot_
∘ _${usedPrefix}installbot_
∘ _${usedPrefix}owner_
∘ _${usedPrefix}script_
∘ _${usedPrefix}ping_
∘ _${usedPrefix}jadibot_
∘ _${usedPrefix}listjadibots_
∘ _${usedPrefix}stop_
∘ _${usedPrefix}reporte_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: ``, body: ' 𝗦𝘂𝗽𝗲𝗿 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'owner'){ //propietario(a)
let menuA = ` ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

∘ _${usedPrefix}join_
∘ _${usedPrefix}addprem_
∘ _${usedPrefix}addprem2_
∘ _${usedPrefix}language_
∘ _${usedPrefix}cajafuerte_
∘ _${usedPrefix}cleartmp_
∘ _${usedPrefix}delexp_
∘ _${usedPrefix}delgatacoins_
∘ _${usedPrefix}deldiamantes_
∘ _${usedPrefix}restart_
∘ _${usedPrefix}update_
∘ _${usedPrefix}dashboard_
∘ _${usedPrefix}addprem_
∘ _${usedPrefix}delprem_
∘ _${usedPrefix}listapremium_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Only For My Owner`, body: '𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'animes'){ //randomm
let menuA = `${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

∘ _${usedPrefix}waifu_
∘ _${usedPrefix}akira_
∘ _${usedPrefix}akiyama_
∘ _${usedPrefix}anna_
∘ _${usedPrefix}asuna_
∘ _${usedPrefix}ayuzawa_
∘ _${usedPrefix}chiho_
∘ _${usedPrefix}chitoge_
∘ _${usedPrefix}deidara_
∘ _${usedPrefix}erza_
∘ _${usedPrefix}elaina_
∘ _${usedPrefix}eba_
∘ _${usedPrefix}emilia_
∘ _${usedPrefix}hestia_
∘ _${usedPrefix}hinata_
∘ _${usedPrefix}inori_
∘ _${usedPrefix}isuzu_
∘ _${usedPrefix}itachi_
∘ _${usedPrefix}itori_
∘ _${usedPrefix}kaga_
∘ _${usedPrefix}kagura_
∘ _${usedPrefix}kaori_
∘ _${usedPrefix}keneki_
∘ _${usedPrefix}kotori_
∘ _${usedPrefix}kurumi_
∘ _${usedPrefix}madara_
∘ _${usedPrefix}mikasa_
∘ _${usedPrefix}miku_
∘ _${usedPrefix}nezuko_
∘ _${usedPrefix}sagiri_
∘ _${usedPrefix}cosplay_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Anime Menu`, body: ' 𝗦𝘂𝗽𝗲𝗿 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  

} if (command == 'stickers'){ //sticker
let menuA = `${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '*Yes*' : '*No*'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

∘ _${usedPrefix}sticker_
∘ _${usedPrefix}emojimix_
∘ _${usedPrefix}wm_
∘ _${usedPrefix}stickermarker_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Sticker Menu`, body: '  𝗦𝘂𝗽𝗲𝗿 𝗕𝗼𝘁  𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
///conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)
} 
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['effectmenu', 'searches','convertes', 'downloads', 'juegosmenu', 'grupomenu',
'herramientasmenu', 'info', 'makermenu', 'menulogos2', 'owner', 'animes', 'rpgmenu', 'stickers', 'menu18', 'menugrupo'] 
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
