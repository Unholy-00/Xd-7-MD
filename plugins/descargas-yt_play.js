import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `✧═══ ${vs} ═══✧ 

▶︎ Title:
» ${yt_play[0].title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
▶︎ Publication:
» ${yt_play[0].ago}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
▶︎ Duration:
» ${secondString(yt_play[0].duration.seconds)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
▶︎  Views:
» ${MilesNumber(yt_play[0].views)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
▶︎  Artist:
» ${yt_play[0].author.name}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
▶︎ Link:
» ${yt_play[0].url}

✧═══ ${vs} ═══✧`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['Menu', `${usedPrefix}menu`]], null, null, m)

let listSections = [];             
listSections.push({
title: comienzo + ' Download type ' + fin,
rows: [{ header: "𓃠 Audio (Option 1)", title: "", id: `${usedPrefix}yta ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }, /*{ header: "𓃠 𝗔 𝗨 𝗗 𝗜 𝗢 (Opcion 2)", title: "", id: `${usedPrefix}play.1 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },*/
{ header: "𓃠 Audio doc", title: "", id: `${usedPrefix}ytmp3doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𓃠 Video (Option 2)", title: "", id: `${usedPrefix}ytv ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
/*{ header: "𓃠 𝗩 𝗜 𝗗 𝗘 𝗢 (Opcion 2)", title: "", id: `${usedPrefix}play.2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },*/
{header: "𓃠 Video doc", title: "", id: `${usedPrefix}ytmp4doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n`}
]});

/*listSections.push({
  text: `*Search results of  ${text}*`,
  footer: global.wm,
  title: `${htki} *Download* ${htka}`,
  buttonText: `Options`,
  sections
}) */

await conn.sendList(m.chat, `*Search results of  ${text}*`, `\n *Download*`, `Options`, listSections, {quoted: fkontak});
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }
