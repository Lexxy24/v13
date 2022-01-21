//𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥

const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const qrcodes = require("qrcode")
const axios = require("axios")
const yts = require('yt-search')
const crypto = require('crypto')  
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')

const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

//LIBWEBP
const { ind } = require('./recode')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")

//DATABASE
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./settings/apikey.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

//DATAFILE
img1 = fs.readFileSync('./gambar/manu.png')
img2 = fs.readFileSync('./gambar/fake.jpg')
fakeyoi = ["Lexxy Official"]
api = ["https://myselfff.herokuapp.com/docs"]
simbol = ["•"]

//MODE
isSelf = false
isPublic = true

//SETTINGS
const botName = setting.BotName
const grupbot = setting.GroupOwner
const owner = setting.OwnerNumber
const githubown = setting.GithubOwner
const yutubown = setting.YoutubeOwner
const ownerName = setting.OwnerName

//APIKEY
const LolKey = apikey.LolHuman
const dhakey = apikey.DhaKey
const LeysKey = apikey.LeysApi
const HardiApi = apikey.HardiKey
const ziyApi = apikey.XziyKey

//=================( PEMBATASAN )=================//

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`

}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//=================( PEMBATAS )=================//

module.exports = Lexxy = async (Lexxy, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const ownerNumber = [`${owner}@s.whatsapp.net`]
const q = args.join(' ')
const c = args.join(' ')
const botNumber = Lexxy.user.jid
const botNumberss = Lexxy.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const isOwner = ownerNumber.includes(sender)
const totalchat = await Lexxy.chats.all()
const groupMetadata = isGroup ? await Lexxy.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isAntilink = isGroup ? antilink.includes(from) : false
const conts = mek.key.fromMe ? Lexxy.user.jid : Lexxy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Lexxy.user.name : conts.notify || conts.vname || conts.name || '-'
const isUser = pendaftar.includes(sender)
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
const totalChat = await Lexxy.chats.all()
const groups = Lexxy.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = Lexxy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const cekcek = randomNomor(100)  

//=================( MESS ONLY )=================//

mess = {
premier: `Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Chat Owner Ku\nWa.me/${owner}`,
wait: 'Wait a minute',
wrongFormat: 'Format salah, coba liat lagi di menu',
success: 'Success',
error: {
stick: 'Cannot access videos!',
lv: 'Invalid link!',
api: 'Error'
},
only: {
group: 'Khusus Grup ngab',
owner: 'Khusus Owner Ngab'
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//=================( REPLY MESSAGE )=================//

const fakeText = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: ftex })
}
const reply = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: mek})
}
const fakethumb = (teks, yes) => {
Lexxy.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./gambar/fake.jpg'),quoted:mek,caption:yes})
} 
const sendMess = (hehe, teks) => {
Lexxy.sendMessage(hehe, teks, text)
}
const reply2 = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Lexxy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Lexxy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
} 
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Lexxy.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
//=================( FAKE )=================//
const ftex = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
"text": `${fakeyoi}`,
"title": ``,
'jpegThumbnail': img2
}
} 
}
//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftt = {
key: {fromMe: false ,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fakeyoi}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE VIDEO
const flexx = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE GRUP
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fakeyoi}`, 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE FTROL
const ftrol = {
key: {fromMe: true,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2005,status: 1,surface : 1,message: `${owner}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./gambar/fake.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//FAKE TROLI
const ftroli = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2005,status: 1,surface : 1,message: `${owner}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./gambar/fake.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//FAKEREPLY VIDEO
//=================( SEND KONTAK )=================//

const sendKontak = (from, nomor, nama, org = "") => {
const vcard =
"BEGIN:VCARD\n" +
"VERSION:3.0\n" +
"FN:" +
nama +
"\n" +
"ORG:" +
org +
"\n" +
"TEL;type=CELL;type=VOICE;waid=" +
nomor +
":+" +
nomor +
"\n" +
"END:VCARD";
Lexxy.sendMessage(
from,
{ displayname: nama, vcard: vcard },
MessageType.contact,
{ quoted: mek }
);
}; 
 
//=================( BUTTON )=================//
const sendButMess = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Lexxy.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Lexxy.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButImg = async (from, context, fortext, img, but, mek) => {
jadinya = await Lexxy.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Lexxy.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
})
}

async function sendButLoc(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Lexxy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 

//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}

//=================( MEDIA URL )=================//
function _0x1f8a(){var _0x3b0963=['Mau\x20Beli\x20Sc\x20Bot\x20?\x0aWa.me/6285789004732\x0aWa.me/6282279915237\x0a\x0aHarga:\x2015k-30k\x0aFull\x20Pengajaran\x20✓\x0aBebas\x20Recode\x20✓\x0aNo\x20Enc\x20100%\x20✓\x0aBisa\x20Request\x20Fitur\x20✓','5783876aPdIUc','450194LtiikH','2400255WCaikZ','1040GouifO','1690328vFoDVX','12116hJnXyP','29910SlhvcX','860340rvKgqZ'];_0x1f8a=function(){return _0x3b0963;};return _0x1f8a();}var _0x35a8ef=_0x5f17;function _0x5f17(_0xd5618f,_0x5064d8){var _0x1f8a64=_0x1f8a();return _0x5f17=function(_0x5f17cb,_0x4941ea){_0x5f17cb=_0x5f17cb-0x91;var _0x2fbc52=_0x1f8a64[_0x5f17cb];return _0x2fbc52;},_0x5f17(_0xd5618f,_0x5064d8);}(function(_0x1710c1,_0x5ba38f){var _0x3a070d=_0x5f17,_0x3a537f=_0x1710c1();while(!![]){try{var _0x2a229c=-parseInt(_0x3a070d(0x91))/0x1+-parseInt(_0x3a070d(0x96))/0x2+parseInt(_0x3a070d(0x92))/0x3+parseInt(_0x3a070d(0x95))/0x4*(-parseInt(_0x3a070d(0x93))/0x5)+parseInt(_0x3a070d(0x97))/0x6+parseInt(_0x3a070d(0x99))/0x7+-parseInt(_0x3a070d(0x94))/0x8;if(_0x2a229c===_0x5ba38f)break;else _0x3a537f['push'](_0x3a537f['shift']());}catch(_0x2c922c){_0x3a537f['push'](_0x3a537f['shift']());}}}(_0x1f8a,0x711a7),scb=[_0x35a8ef(0x98)]);
var _0x20e665=_0x314c;function _0x314c(_0x37cd58,_0x3a521e){var _0x4b8e56=_0x4b8e();return _0x314c=function(_0x314c41,_0x4eaac2){_0x314c41=_0x314c41-0xaa;var _0x55af95=_0x4b8e56[_0x314c41];return _0x55af95;},_0x314c(_0x37cd58,_0x3a521e);}function _0x4b8e(){var _0x27123e=['243376EBlSHk','258900wIOfcY','114TWcRlj','10096209DvrdPy','753669vUkCXH','8VkgSua','https://youtube.com/c/LEX4YOUU','2002557RpuVza','8153257ApajrE','98158NObccs'];_0x4b8e=function(){return _0x27123e;};return _0x4b8e();}(function(_0x594d1e,_0x15ed1c){var _0x4e0b23=_0x314c,_0x878f3d=_0x594d1e();while(!![]){try{var _0x149281=-parseInt(_0x4e0b23(0xb1))/0x1+-parseInt(_0x4e0b23(0xac))/0x2+parseInt(_0x4e0b23(0xaa))/0x3+-parseInt(_0x4e0b23(0xad))/0x4+-parseInt(_0x4e0b23(0xae))/0x5*(-parseInt(_0x4e0b23(0xaf))/0x6)+-parseInt(_0x4e0b23(0xab))/0x7+-parseInt(_0x4e0b23(0xb2))/0x8*(-parseInt(_0x4e0b23(0xb0))/0x9);if(_0x149281===_0x15ed1c)break;else _0x878f3d['push'](_0x878f3d['shift']());}catch(_0x594fb9){_0x878f3d['push'](_0x878f3d['shift']());}}}(_0x4b8e,0xb5d5d),linkyt=[_0x20e665(0xb3)]);
function _0x7d02(_0x172c43,_0x2efc01){var _0x475ee4=_0x475e();return _0x7d02=function(_0x7d026d,_0x238c6d){_0x7d026d=_0x7d026d-0xf8;var _0xdba5d2=_0x475ee4[_0x7d026d];return _0xdba5d2;},_0x7d02(_0x172c43,_0x2efc01);}function _0x475e(){var _0x38e6d2=['7KFrBYl','566vbLPoG','2185605jwxDBW','4833jNGgmR','656YKzcRx','24472360alBtlI','10272344ajtBCv','2672eOHLSC','━➤\x20「\x20𝙄𝙉𝙁𝙊\x20𝘿𝙀𝙑\x20」\x0a✍️\x20𝙎𝙘𝙧𝙞𝙥𝙩\x20𝙈𝙖𝙙𝙚\x20𝙞𝙣\x20𝘽𝙮\x20𝙇𝙚𝙭𝙭𝙮\x20𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡\x0a🌟\x20𝙑𝙚𝙧𝙨𝙞𝙤𝙣\x20:\x2010.0\x0a📈\x20𝙇𝙖𝙨𝙩\x20𝙐𝙥𝙙𝙖𝙩𝙚\x20:\x201.0\x0a📃\x20𝙇𝙞𝙣𝙠\x20𝙎𝙘\x20:\x20https://youtu.be/DN42naRJ6FE\x0a\x0a📦\x20𝙂𝙧𝙤𝙪𝙥\x201\x20:\x0ahttps://chat.whatsapp.com/IQdenO0L2R0AgXWoWzssit\x0a📦\x20𝙂𝙧𝙤𝙪𝙥\x202\x20:\x0ahttps://chat.whatsapp.com/CNwZkO2NhV76sP6NCX6i8A\x0a\x0a🌐\x20𝙔𝙤𝙪𝙩𝙪𝙗𝙚\x20:\x0ahttps://youtube.com/c/LEX4YOUU\x0a\x0a𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆\x20𝑭𝒐𝒓\x20𝑵𝒆𝒘\x20𝑼𝒑𝒅𝒂𝒕𝒆!','72UjGwJy','6435354Inhdaf','1724280XwCNVZ'];_0x475e=function(){return _0x38e6d2;};return _0x475e();}var _0x488feb=_0x7d02;(function(_0x40179c,_0x1edf3f){var _0x2eab61=_0x7d02,_0x1a3f75=_0x40179c();while(!![]){try{var _0xb5ec52=-parseInt(_0x2eab61(0x101))/0x1*(-parseInt(_0x2eab61(0xfb))/0x2)+-parseInt(_0x2eab61(0x103))/0x3*(-parseInt(_0x2eab61(0xf8))/0x4)+parseInt(_0x2eab61(0x102))/0x5+-parseInt(_0x2eab61(0xfe))/0x6+parseInt(_0x2eab61(0x100))/0x7*(parseInt(_0x2eab61(0xfa))/0x8)+-parseInt(_0x2eab61(0xfd))/0x9*(-parseInt(_0x2eab61(0xff))/0xa)+-parseInt(_0x2eab61(0xf9))/0xb;if(_0xb5ec52===_0x1edf3f)break;else _0x1a3f75['push'](_0x1a3f75['shift']());}catch(_0x1c4cb1){_0x1a3f75['push'](_0x1a3f75['shift']());}}}(_0x475e,0xc9161),dev=[_0x488feb(0xfc)]);

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Lexxy.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Lexxy.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Lexxy.sendMessage(from, hasil, type, options).catch(e => {
Lexxy.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
} 
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Lexxy.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

//=================( USER )=================//

if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
 
//=================( CONECTION )=================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  
if (!mek.key.fromMe && isSelf === true) return

Lexxy.chatRead(from, "read")

//=================( CASE & MENU )=================//
switch (command) {
case 'china':
case 'vietnam':
case 'thailand':
case 'indonesia':
case 'korea':
case 'japan':
ccn = await getBuffer(`https://lexxy-api.herokuapp.com/docs/cecan/${command}?apikey=Alphabot`)
Lexxy.sendMessage(from, gfx, image, { quoted: mek, caption: `Random Cecan ${command}`})
break
case 'malaysia':
yh = await fetchJson(`https://lexxy-api.herokuapp.com/docs/cecan/malaysia?apikey=Alphabot`)
ccn = await getBuffer(yh.buff)
Lexxy.sendMessage(from, ccn, image, { quoted: mek, caption: `Random Cecan ${command}`})
break
case 'gfx1':
case 'gfx2':
case 'gfx5':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} Lexxy`)
sticWait(from)
ini_txt = args.join(" ")
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${command}?apikey=${HardiApi}&nama=${ini_txt}`)
Lexxy.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By Lexxy Officia*'})
break
case 'gfx3':
case 'gfx4':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} Lexxy OFC`)
sticWait(from)
ini_txt1 = args[0]
ini_txt1 = args[1]
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${command}?apikey=${HardiApi}&text1=${ini_txt1}&text2=${ini_txt2}`)
Lexxy.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By Lexxy Officia*'})
break
case 'gfx6':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} Lexxy`)
sticWait(from)
ini_txt = args.join(" ")
gfx = await getBuffer(`https://hardianto.xyz/api/bot/gura?apikey=${HardiApi}&nama=${ini_txt}`)
Lexxy.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By Lexxy Officia*'})
break
case 'tolol':
case 'goblok':
case 'lesbi':
case 'pintar':
case 'bodoh':
case 'wibu':
case 'sange':
case 'ganteng':
case 'cantik':
reply2(`*cek ${command} kamu ${cekcek}%*`)
break
case 'menu':
const timestamp = speed();
const latensi = speed() - timestamp
st =`◩ 𝘽𝙤𝙩 𝙄𝙣𝙛𝙤
□ 𝐎𝐰𝐧𝐞𝐫 : *${ownerName}*
□ 𝐀𝐮𝐭𝐡𝐨𝐫 : *Lexxy Official*
□ 𝐏𝐫𝐞𝐟𝐢𝐱 : *Multi Prefix*
□ 𝐌𝐨𝐝𝐞 : *${isPublic? "Public":"Self"}*
□ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : *( ${pendaftar.length} )*
□ 𝐒𝐩𝐞𝐞𝐝 : *${latensi.toFixed(4)} _second_*

◧ 𝙐𝙨𝙚𝙧 𝙄𝙣𝙛𝙤
□ 𝐍𝐚𝐦𝐞 : *${pushname}*
□ 𝐓𝐚𝐠 : *@${sender.split("@")[0]}*
□ 𝐒𝐭𝐚𝐭𝐮𝐬 : *${isOwner? "Owner 👑️":"User ⚔️"}*
□ 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPremier? "Aktif ✔":"Tidak ✘"}*

====[ 𝑳𝒊𝒔𝒕 𝑴𝒆𝒏𝒖 𝑩𝒐𝒕 ]====

❏ 𝙊𝙩𝙝𝙚𝙧𝙨
${simbol} ${prefix}store
${simbol} ${prefix}infobot
${simbol} ${prefix}scbot
${simbol} ${prefix}owner
${simbol} ${prefix}donasi
${simbol} ${prefix}runtime
${simbol} ${prefix}speed
${simbol} ${prefix}cekprem
${simbol} ${prefix}listprem
${simbol} ${prefix}request <fitur>
${simbol} ${prefix}report <fitur>
${simbol} ${prefix}teruskan <text>

❏ 𝙎𝙝𝙤𝙧𝙩𝙡𝙞𝙣𝙠
${simbol} ${prefix}tinyurl <link>
${simbol} ${prefix}cuttly <link>
${simbol} ${prefix}shorturl <link>

❏ 𝙊𝙬𝙣𝙚𝙧
${simbol} ${prefix}self
${simbol} ${prefix}public
${simbol} ${prefix}readall
${simbol} ${prefix}broadcast <text>
${simbol} ${prefix}setsimbol
${simbol} ${prefix}setfake <reply image>
${simbol} ${prefix}setreply <nama>
${simbol} ${prefix}setthumb <reply image>
${simbol} ${prefix}ban 628xxx
${simbol} ${prefix}unban 628xxx
${simbol} ${prefix}addprem 628xxx
${simbol} ${prefix}delprem 628xxx

❏ 𝙐𝙥𝙨𝙬
${simbol} ${prefix}upswteks
${simbol} ${prefix}upswvideo
${simbol} ${prefix}upswimage

❏ 𝙂𝙧𝙤𝙪𝙥
${simbol} ${prefix}antilink
${simbol} ${prefix}welcome
${simbol} ${prefix}rate
${simbol} ${prefix}apakah
${simbol} ${prefix}bisakah
${simbol} ${prefix}kapankah
${simbol} ${prefix}leave
${simbol} ${prefix}closegc
${simbol} ${prefix}opengc
${simbol} ${prefix}linkgrup
${simbol} ${prefix}listadmin
${simbol} ${prefix}setpp
${simbol} ${prefix}setppgrup
${simbol} ${prefix}kick @tag
${simbol} ${prefix}add +628
${simbol} ${prefix}tagall
${simbol} ${prefix}hidetag
${simbol} ${prefix}demote
${simbol} ${prefix}promote
${simbol} ${prefix}delete

❏ 𝘾𝙤𝙣𝙫𝙚𝙧𝙩
${simbol} ${prefix}ttp
${simbol} ${prefix}attp
${simbol} ${prefix}dare
${simbol} ${prefix}truth
${simbol} ${prefix}sticker <reply>
${simbol} ${prefix}toimg <reply>
${simbol} ${prefix}cerpen
${simbol} ${prefix}tongue
${simbol} ${prefix}pantun
${simbol} ${prefix}nuliskiri
${simbol} ${prefix}nuliskanan
${simbol} ${prefix}foliokiri
${simbol} ${prefix}foliokanan

❏ 𝘼𝙣𝙞𝙢𝙚
${simbol} ${prefix}baka
${simbol} ${prefix}tickle
${simbol} ${prefix}slap
${simbol} ${prefix}poke
${simbol} ${prefix}neko
${simbol} ${prefix}meow
${simbol} ${prefix}lizard
${simbol} ${prefix}foxGirl
${simbol} ${prefix}holo
${simbol} ${prefix}woof
${simbol} ${prefix}goose
${simbol} ${prefix}gecg
${simbol} ${prefix}avatar

❏ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙
${simbol} ${prefix}igdl <link>
${simbol} ${prefix}tiktok <link>
${simbol} ${prefix}ytmp3 <link>
${simbol} ${prefix}ytmp4 <link>
${simbol} ${prefix}ytplay <judul>
${simbol} ${prefix}playmp4 <judul>
${simbol} ${prefix}playmp3 <judul>
${simbol} ${prefix}mediafire <link>
${simbol} ${prefix}instagram <link>

❏ 𝙏𝙞𝙢𝙚𝙡𝙞𝙣𝙚
${simbol} ${prefix}asupan
${simbol} ${prefix}bocil
${simbol} ${prefix}rikagusriani
${simbol} ${prefix}santuy
${simbol} ${prefix}ukhty
${simbol} ${prefix}gheayubi
${simbol} ${prefix}nantalia
${simbol} ${prefix}hijaber

❏ 𝙁𝙪𝙣𝙩𝙞𝙢𝙚
${simbol} ${prefix}pantun
${simbol} ${prefix}puisi
${simbol} ${prefix}faktaunik
${simbol} ${prefix}katabijak
${simbol} ${prefix}katailham
${simbol} ${prefix}katasindiran
${simbol} ${prefix}katabucin
${simbol} ${prefix}katabucin2
${simbol} ${prefix}quotesislami
${simbol} ${prefix}quotesanime
${simbol} ${prefix}truth
${simbol} ${prefix}dare

❏ 𝙎𝙚𝙖𝙧𝙘𝙝
${simbol} ${prefix}waifu
${simbol} ${prefix}husbu
${simbol} ${prefix}herolist
${simbol} ${prefix}herodetail
${simbol} ${prefix}ytsearch
${simbol} ${prefix}pinterest
${simbol} ${prefix}playstore
${simbol} ${prefix}nekonime
${simbol} ${prefix}namaninja
${simbol} ${prefix}imgsearch
${simbol} ${prefix}searchgrup

❏ 𝘾𝙚𝙠𝙘𝙚𝙠
${simbol} ${prefix}tolol
${simbol} ${prefix}goblok
${simbol} ${prefix}lesbi
${simbol} ${prefix}pintar
${simbol} ${prefix}bodoh
${simbol} ${prefix}wibu
${simbol} ${prefix}sange
${simbol} ${prefix}ganteng
${simbol} ${prefix}cantik

❏ 𝘾𝙖𝙣𝙫𝙖𝙨
${simbol} ${prefix}rem
${simbol} ${prefix}gura
${simbol} ${prefix}serti1
${simbol} ${prefix}serti2
${simbol} ${prefix}serti3
${simbol} ${prefix}kaneki
${simbol} ${prefix}hartatahta
${simbol} ${prefix}sadboy
${simbol} ${prefix}girlneko
${simbol} ${prefix}lolimaker
${simbol} ${prefix}quotesmaker
${simbol} ${prefix}blackpink
${simbol} ${prefix}halloween
${simbol} ${prefix}3dgradient
${simbol} ${prefix}naturalleaves
${simbol} ${prefix}dropwater
${simbol} ${prefix}blood
${simbol} ${prefix}blood2
${simbol} ${prefix}neondevil
${simbol} ${prefix}neon
${simbol} ${prefix}neonlight
${simbol} ${prefix}neonlight2
${simbol} ${prefix}neonlight3
${simbol} ${prefix}greenneon
${simbol} ${prefix}toxic
${simbol} ${prefix}matrix
${simbol} ${prefix}thunder
${simbol} ${prefix}thunder2
${simbol} ${prefix}bokeh
${simbol} ${prefix}carbontext
${simbol} ${prefix}christmas
${simbol} ${prefix}breakwall
${simbol} ${prefix}roadwarning
${simbol} ${prefix}engraved3d
${simbol} ${prefix}embossed
${simbol} ${prefix}writefoggy
${simbol} ${prefix}3dstone
${simbol} ${prefix}futuristic
${simbol} ${prefix}asketch
${simbol} ${prefix}bluecircuit
${simbol} ${prefix}space
${simbol} ${prefix}amagmahot
${simbol} ${prefix}artpapercut
${simbol} ${prefix}3dluxurygold
${simbol} ${prefix}robotr2d2
${simbol} ${prefix}harrypotter
${simbol} ${prefix}glitch3
${simbol} ${prefix}greenhorrorstyle
${simbol} ${prefix}3ddeepseametal
${simbol} ${prefix}leddisplayscreen
${simbol} ${prefix}wonderfulgraffitiart

❏ 𝙍𝙖𝙣𝙙𝙤𝙢
${simbol} ${prefix}fox
${simbol} ${prefix}cat
${simbol} ${prefix}dog
${simbol} ${prefix}birb
${simbol} ${prefix}koala
${simbol} ${prefix}panda
${simbol} ${prefix}meme
${simbol} ${prefix}nickepep
${simbol} ${prefix}darkmeme
${simbol} ${prefix}katailham
${simbol} ${prefix}red_panda
${simbol} ${prefix}estetikpic
${simbol} ${prefix}renungan
${simbol} ${prefix}katasindiran
${simbol} ${prefix}quotesimage
${simbol} ${prefix}randombokep
${simbol} ${prefix}darkjokers
${simbol} ${prefix}randomquotes

❏ 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧𝙨
${simbol} ${prefix}wallpaperhacker
${simbol} ${prefix}wallpaperharley
${simbol} ${prefix}wallpapermuslim
${simbol} ${prefix}wallpaperjoker
${simbol} ${prefix}wallpapercyberspace
${simbol} ${prefix}wallpaperprogramming
${simbol} ${prefix}wallpapermountain
${simbol} ${prefix}wallpapertechnology
${simbol} ${prefix}wallpapernaruto

❏ 𝙉𝙚𝙠𝙤𝙥𝙤𝙞
${simbol} ${prefix}nekopoi1
${simbol} ${prefix}nekopoi2
${simbol} ${prefix}nekopoi3
${simbol} ${prefix}nekopoi4
${simbol} ${prefix}nekopoi5
${simbol} ${prefix}nekopoi6
${simbol} ${prefix}nekopoi7
${simbol} ${prefix}nekopoi8
${simbol} ${prefix}nekopoi9

❏ 𝙂𝙧𝙖𝙥𝙝𝙞𝙘
${simbol} ${prefix}8bit
${simbol} ${prefix}pornhub
${simbol} ${prefix}glitch
${simbol} ${prefix}glitch2
${simbol} ${prefix}layered
${simbol} ${prefix}realistic
${simbol} ${prefix}lionlogo
${simbol} ${prefix}ninjalogo
${simbol} ${prefix}halloween2
${simbol} ${prefix}marvel
${simbol} ${prefix}cinematic
${simbol} ${prefix}avengers
${simbol} ${prefix}graffiti3

❏ 𝙉𝙨𝙛𝙬
${simbol} ${prefix}trap
${simbol} ${prefix}neko
${simbol} ${prefix}awoo
${simbol} ${prefix}waifu
${simbol} ${prefix}megumin
${simbol} ${prefix}shinobu
${simbol} ${prefix}ass
${simbol} ${prefix}ahegao
${simbol} ${prefix}bdsm
${simbol} ${prefix}blowjob
${simbol} ${prefix}cuckold
${simbol} ${prefix}cum
${simbol} ${prefix}ero
${simbol} ${prefix}femdom
${simbol} ${prefix}foot
${simbol} ${prefix}glasses
${simbol} ${prefix}gangbang
${simbol} ${prefix}hentai
${simbol} ${prefix}jahy
${simbol} ${prefix}orgy
${simbol} ${prefix}pussy
${simbol} ${prefix}panties
${simbol} ${prefix}thighs
${simbol} ${prefix}yuri

❏ 𝙈𝙖𝙠𝙚𝙧
${simbol} ${prefix}bneon
${simbol} ${prefix}matrix
${simbol} ${prefix}breakwall
${simbol} ${prefix}dropwater
${simbol} ${prefix}lithgtext
${simbol} ${prefix}crismes
${simbol} ${prefix}tfire
${simbol} ${prefix}sandw
${simbol} ${prefix}text3dbox
${simbol} ${prefix}leavest
${simbol} ${prefix}tlight
${simbol} ${prefix}nulis
${simbol} ${prefix}blackpink
${simbol} ${prefix}neon_light
${simbol} ${prefix}gaming
${simbol} ${prefix}watercolor

❏ 𝘿𝙤𝙨𝙖
${simbol} ${prefix}dosa1
${simbol} ${prefix}dosa2
${simbol} ${prefix}dosa3
${simbol} ${prefix}dosa4
${simbol} ${prefix}dosa5
${simbol} ${prefix}dosa6
${simbol} ${prefix}dosa7
${simbol} ${prefix}dosa8
${simbol} ${prefix}dosa9
${simbol} ${prefix}dosa10
${simbol} ${prefix}dosa11
${simbol} ${prefix}dosa12
${simbol} ${prefix}dosa13
${simbol} ${prefix}dosa14
${simbol} ${prefix}dosa15

❏ 𝙑𝙞𝙙𝙚𝙤
${simbol} ${prefix}indo1
${simbol} ${prefix}indo2
${simbol} ${prefix}indo3
${simbol} ${prefix}indo4
${simbol} ${prefix}indo5
${simbol} ${prefix}indo6
${simbol} ${prefix}indo7
${simbol} ${prefix}indo8
${simbol} ${prefix}indo9
${simbol} ${prefix}indo10
${simbol} ${prefix}indo11
${simbol} ${prefix}indo12
${simbol} ${prefix}indo13
${simbol} ${prefix}indo14
${simbol} ${prefix}indo15
${simbol} ${prefix}indo16
${simbol} ${prefix}indo17
${simbol} ${prefix}indo18
${simbol} ${prefix}indo19
${simbol} ${prefix}indo20
${simbol} ${prefix}indo21
${simbol} ${prefix}indo22
${simbol} ${prefix}indo23
${simbol} ${prefix}indo24
${simbol} ${prefix}indo25

❏ 𝙂𝙛𝙭𝙏𝙚𝙭𝙩
${simbol} ${prefix}gfx1
${simbol} ${prefix}gfx2
${simbol} ${prefix}gfx3
${simbol} ${prefix}gfx4
${simbol} ${prefix}gfx5
${simbol} ${prefix}gfx6

❏ 𝘾𝙚𝙘𝙖𝙣
${simbol} ${prefix}china
${simbol} ${prefix}vietnam
${simbol} ${prefix}thailand
${simbol} ${prefix}indonesia
${simbol} ${prefix}korea
${simbol} ${prefix}japan
${simbol} ${prefix}malaysia

❏ 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧
${simbol} ${prefix}wallneon
${simbol} ${prefix}wallrandom
${simbol} ${prefix}wallcode
${simbol} ${prefix}wallhacker
${simbol} ${prefix}wallpubg
${simbol} ${prefix}wallml

❏ 𝙀𝙥𝙝𝙤𝙩𝙤
${simbol} ${prefix}luxurygold
${simbol} ${prefix}watercolor
${simbol} ${prefix}multicolor3d
${simbol} ${prefix}wetglass
${simbol} ${prefix}galaxywallpaper
${simbol} ${prefix}lighttext
${simbol} ${prefix}beautifulflower
${simbol} ${prefix}puppycute
${simbol} ${prefix}royaltext
${simbol} ${prefix}heartshaped
${simbol} ${prefix}birthdaycake
${simbol} ${prefix}galaxystyle
${simbol} ${prefix}hologram3d
${simbol} ${prefix}greenneon
${simbol} ${prefix}glossychrome
${simbol} ${prefix}greenbush
${simbol} ${prefix}metallogo
${simbol} ${prefix}noeltext
${simbol} ${prefix}glittergold
${simbol} ${prefix}textcake
${simbol} ${prefix}starsnight
${simbol} ${prefix}wooden3d
${simbol} ${prefix}textbyname
${simbol} ${prefix}writegalaxy
${simbol} ${prefix}snow3d
${simbol} ${prefix}birthdayday
${simbol} ${prefix}goldplaybutton
${simbol} ${prefix}silverplaybutton
${simbol} ${prefix}freefire
${simbol} ${prefix}cartoongravity
${simbol} ${prefix}anonymhacker
${simbol} ${prefix}mlwall
${simbol} ${prefix}pubgmaskot
${simbol} ${prefix}aovwall
${simbol} ${prefix}logogaming
${simbol} ${prefix}fpslogo
${simbol} ${prefix}avatarlolnew
${simbol} ${prefix}lolbanner
${simbol} ${prefix}avatardota
${simbol} ${prefix}juventusshirt
${simbol} ${prefix}cutegravity
${simbol} ${prefix}realvintage
${simbol} ${prefix}codwarzone
${simbol} ${prefix}valorantbanner

❏ 𝙏𝙚𝙭𝙩𝙥𝙧𝙤
${simbol} ${prefix}rainbow
${simbol} ${prefix}scfi
${simbol} ${prefix}blue
${simbol} ${prefix}juice
${simbol} ${prefix}purple
${simbol} ${prefix}toxic
${simbol} ${prefix}peridot
${simbol} ${prefix}metal 
${simbol} ${prefix}realistic
${simbol} ${prefix}impressive
${simbol} ${prefix}cracked
${simbol} ${prefix}magma
${simbol} ${prefix}thunder
${simbol} ${prefix}berry
${simbol} ${prefix}transformer 
${simbol} ${prefix}horror
${simbol} ${prefix}metallic
${simbol} ${prefix}circuit
${simbol} ${prefix}sketch
${simbol} ${prefix}halloween

❏ 𝙎𝙤𝙪𝙣𝙙
${simbol} ${prefix}sound1
${simbol} ${prefix}sound2
${simbol} ${prefix}sound3
${simbol} ${prefix}sound4
${simbol} ${prefix}sound5
${simbol} ${prefix}sound6
${simbol} ${prefix}sound7
${simbol} ${prefix}sound8
${simbol} ${prefix}sound9
${simbol} ${prefix}sound10
${simbol} ${prefix}sound11
${simbol} ${prefix}sound12
${simbol} ${prefix}sound13
${simbol} ${prefix}sound14
${simbol} ${prefix}sound15
${simbol} ${prefix}sound16
${simbol} ${prefix}sound17
${simbol} ${prefix}sound18
${simbol} ${prefix}sound19
${simbol} ${prefix}sound20
${simbol} ${prefix}sound21
${simbol} ${prefix}sound22
${simbol} ${prefix}sound23
${simbol} ${prefix}sound24
${simbol} ${prefix}sound25
${simbol} ${prefix}sound26
${simbol} ${prefix}sound27
${simbol} ${prefix}sound28
${simbol} ${prefix}sound29
${simbol} ${prefix}sound30
${simbol} ${prefix}sound31
${simbol} ${prefix}sound32
${simbol} ${prefix}sound33
${simbol} ${prefix}sound34
${simbol} ${prefix}sound35
${simbol} ${prefix}sound36
${simbol} ${prefix}sound37
${simbol} ${prefix}sound38
${simbol} ${prefix}sound39
${simbol} ${prefix}sound40
${simbol} ${prefix}sound41
${simbol} ${prefix}sound42
${simbol} ${prefix}sound43
${simbol} ${prefix}sound44
${simbol} ${prefix}sound45
${simbol} ${prefix}sound46
${simbol} ${prefix}sound47
${simbol} ${prefix}sound48
${simbol} ${prefix}sound49
${simbol} ${prefix}sound50
${simbol} ${prefix}sound51
${simbol} ${prefix}sound52
${simbol} ${prefix}sound53
${simbol} ${prefix}sound54
${simbol} ${prefix}sound55
${simbol} ${prefix}sound56
${simbol} ${prefix}sound57
${simbol} ${prefix}sound58
${simbol} ${prefix}sound59
${simbol} ${prefix}sound60
${simbol} ${prefix}sound61
${simbol} ${prefix}sound62
${simbol} ${prefix}sound63
${simbol} ${prefix}sound64
${simbol} ${prefix}sound65
${simbol} ${prefix}sound66
${simbol} ${prefix}sound67
${simbol} ${prefix}sound68
${simbol} ${prefix}sound69
${simbol} ${prefix}sound70
${simbol} ${prefix}sound71
${simbol} ${prefix}sound72
${simbol} ${prefix}sound73
${simbol} ${prefix}sound74
${simbol} ${prefix}sound75`
st2 =`${fakeyoi}`
but = [
{ buttonId: `${prefix}start`, buttonText: { displayText: 'start' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '️owner' }, type: 1 }
]
sendButImg(from, st, st2, img1, but, mek)
break
case 'start':
const hky = speed();
const hby = speed() - hky
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Lexxy.user.phone
ros = await Lexxy.prepareMessageFromContent(from,{
"listMessage": {
"title": '◩ 𝘽𝙤𝙩 𝙄𝙣𝙛𝙤',
"description": `□ 𝐍𝐚𝐦𝐞 : *${botName}*
□ 𝐎𝐰𝐧𝐞𝐫 : *${ownerName}*
□ 𝐀𝐮𝐭𝐡𝐨𝐫 : *Lexxy Official*
□ 𝐏𝐫𝐞𝐟𝐢𝐱 : *Multi Prefix*
□ 𝐋𝐢𝐛 : *Baileys*
□ 𝐓𝐲𝐩𝐞 : *NodeJS*
□ 𝐌𝐨𝐝𝐞 : *${isPublic? "Public":"Self"}*
□ 𝐑𝐚𝐦 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
□ 𝐕𝐞𝐫𝐬𝐢 𝐎𝐒 : *${os_version}*
□ 𝐕𝐞𝐫𝐬𝐢 𝐇𝐏 : *${device_model}*
□ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : *${wa_version}*
□ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : *( ${pendaftar.length} )*
□ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
□ 𝐒𝐩𝐞𝐞𝐝 : *${hby.toFixed(4)}* 𝘚𝘦𝘤𝘰𝘯𝘥

◧ 𝙐𝙨𝙚𝙧 𝙄𝙣𝙛𝙤
□ 𝐍𝐚𝐦𝐞 : *${pushname}*
□ 𝐓𝐚𝐠 : *@${sender.split("@")[0]}*
□ 𝐒𝐭𝐚𝐭𝐮𝐬 : *${isOwner? "Owner 👑️":"User ⚔️"}*
□ 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPremier? "Aktif ✔":"Tidak ✘"}*

◪ 𝘾𝙝𝙖𝙩 𝙄𝙣𝙛𝙤
□ 𝐆𝐫𝐨𝐮𝐩 : *( ${groups.length} )*
□ 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 : *( ${privat.length} )*
□ 𝐓𝐨𝐭𝐚𝐥 : *( ${totalChat.length} )*`,
"buttonText": "𝙋𝙄𝙇𝙄𝙃 𝘿𝙄𝙎𝙄𝙉𝙄",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${ucapanWaktu} - ${time}`,
"rows": [
{
"title": "< 𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮 >",
"rowId": `${prefix}store`
},
{
 "title": "< 𝐎𝐰𝐧𝐞𝐫 𝐁𝐨𝐭 >",
"rowId": `${prefix}owner`
},
{
"title": "< 𝐒𝐜𝐫𝐢𝐩𝐭 𝐁𝐨𝐭 >",
"rowId": `${prefix}scbot`
},
{
"title": "< 𝐈𝐧𝐟𝐨 𝐁𝐨𝐭 >️",
"rowId": `${prefix}infobot`
},
]
}
]
}
}, {quoted: mek })
Lexxy.relayWAMessage(ros)
break
case 'ppcp':
case 'ppcouple':
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/ppcouple?apikey=${dhakey}`)
buff1 = await getBuffer (anu.result.male)
Lexxy.sendMessage(from, buff1, image, {quoted: mek, caption: '_Nih kak cowoknya_'})
buff2 =await getBuffer (anu.result.female)
Lexxy.sendMessage(from, buff2, image, {quoted: mek, caption: '_Nih kak ceweknya_'})
break
case 'wallpaperhacker':
case 'wallpaperharley':
case 'wallpaperjoker':
sticWait(from)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'runtime':
uptime = process.uptime();
reply2(`□ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 :\n${runtime(process.uptime())}`)
break
case 'speed':
const gky = speed();
const gby = speed() - gky
reply2(`𝐒𝐩𝐞𝐞𝐝 : *${gby.toFixed(4)}* 𝘚𝘦𝘤𝘰𝘯𝘥`)
break
case 'cekprem':
reply2(`𝐒𝐭𝐚𝐭𝐮𝐬 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPremier? "aktif":"tidak"}*`)
break
case 'listprem':
reply2(`𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : ${prem.length}`)
break
case 'asupan':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
sticWait(from)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Lexxy.sendMessage(from, asupan, video, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'hijaber':
sticWait(from)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Lexxy.sendMessage(from, asupan, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'quotesimage':
case 'renungan':
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokers':
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/darkjokes?apikey=${dhakey}`)
oke = await getBuffer(anu.result.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'wallpapermuslim':
case 'wallpapercyberspace':
case 'wallpapermountain':
case 'wallpaperprogramming':
case 'wallpapertechnology':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/other/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'wallpapernaruto':
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/naruto?apikey=${dhakey}`)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'quotesmaker':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Saya Suka Kamu`)
sticWait(from)
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=${LeysKey}`)
Lexxy.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'tinyurl':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=${LeysKey}`)
Lexxy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
break
case 'cuttly':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=${LeysKey}`)
Lexxy.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: mek})
break
case 'shorturl':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=${LeysKey}`)
Lexxy.sendMessage(from, `${anu.result}`, text, {quoted: mek})
break
case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Lexxy`)
textt = args.join(" ")
sticWait(from)
hsel = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolKey}&text=${textt}`)
Lexxy.sendMessage(from, hsel, image, {quoted: mek, caption: 'Nih Kak Dah Jadi ^_^' })
break
case 'teruskan':
Lexxy.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
break  
case 'nekopoi1':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi2':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi3':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi4':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi5':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi6':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi7':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi8':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi9':
qute = fs.readFileSync('./gambar/thumb.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallhacker': case 'wallpubg': case 'wallml':
if (isBanned)return sticBanned(from)
sticWait(from)
try{
nyz2 = await fetchJson(`${api}/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
Lexxy.sendMessage(from, nyz3, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted: mek}) 
} catch (e) { reply("ERR SILAHKAN COBALAGI")}
break
case 'baka':
case 'tickle':
case 'slap':
case 'poke':
case 'neko':
case 'meow':
case 'lizard':
case 'foxGirl':
case 'holo':
case 'woof':
case 'goose':
case 'gecg':
case 'avatar':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Mau Search Sticker Apa Nya om')
sticWait(from)
nyz4 = await getBuffer(`https://hardianto.xyz/api/anime/random?sfw=${command}&apikey=${HardiApi}`)
Lexxy.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted: mek})
break
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Text Nya om')
sticWait(from)
nyz5 = await fetchJson(`${api}/textpro/${command}?text=${q}`) 
nyz4 = await getBuffer(nyz5.result)
Lexxy.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥',quoted: mek})
break
case 'darkmeme':
sticWait(from)
if (isBanned)return sticBanned(from)
nyz4 = await getBuffer(`https://hardianto.xyz/api/darkmeme?apikey=${HardiApi}`)
Lexxy.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`*Random Dark Meme🗿*`,quoted: mek})
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
Lexxy.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
Lexxy.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'store':
res = await Lexxy.prepareMessageFromContent(from,{
"listMessage": {
"title": '「 STORE MENU 」',
"description": `*Created By ${ownerName}*`,
"buttonText": "𝙋𝙄𝙇𝙄𝙃 𝘿𝙄𝙎𝙄𝙉𝙄",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${time2}`,
"rows": [
{
"title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 💎",
"rowId": `${prefix}ff`
},
{
"title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘔𝘰𝘣𝘪𝘭𝘦 𝘓𝘦𝘨𝘦𝘯𝘥𝘴 💎",
"rowId": `${prefix}ml`
},
{
 "title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘏𝘢𝘨𝘰 💎",
"rowId": `${prefix}hago`
},
{
"title": "𝘜𝘊 𝘗𝘶𝘣𝘨 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
"rowId": `${prefix}pubg`
},
{
"title": "𝘗𝘰𝘪𝘯𝘵 𝘉𝘭𝘢𝘯𝘬 𝘗𝘉 𝘊𝘢𝘴𝘩 💸",
"rowId": `${prefix}point`
},
{
"title": "𝘊𝘢𝘭𝘭 𝘖𝘧 𝘋𝘶𝘵𝘺 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
"rowId": `${prefix}codm`
},
{
"title": "𝘏𝘪𝘨𝘨𝘴 𝘋𝘰𝘮𝘪𝘯𝘰 𝘐𝘴𝘭𝘢𝘯𝘥 💰",
"rowId": `${prefix}chip`
},
{
"title": "𝘎𝘢𝘳𝘦𝘯𝘢 𝘚𝘩𝘦𝘭𝘭 𝘐𝘯𝘥𝘰 💰",
"rowId": `${prefix}garena`
},
{
"title": "𝘗𝘢𝘺𝘮𝘦𝘯𝘵 𝘚𝘵𝘰𝘳𝘦 🤑",
"rowId": `${prefix}pyment`
},
{
 "title": "𝘖𝘸𝘯𝘦𝘳 𝘉𝘰𝘵 👤",
"rowId": `${prefix}owner`
},
{
"title": "𝘚𝘤𝘳𝘪𝘱𝘵 𝘉𝘰𝘵 ⚙️",
"rowId": `${prefix}scbot`
}
]
}
]
}
}, {quoted: mek })
Lexxy.relayWAMessage(res)
break
case 'dosa1': 
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'dosa2':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
break
case 'dosa3':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' }) 
break
case 'dosa4':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
break
case 'dosa5':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
break
case 'dosa6':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
break
case 'dosa7':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
break
case 'dosa8':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
break
case 'dosa10':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
break
case 'dosa11':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
break
case 'dosa12':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg')
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })  
break
case 'dosa13':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
break
case 'dosa14':	
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
break
case 'dosa15':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
break
case 'indo1':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'indo2':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
break
case 'indo3':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' }) 
break
case 'indo4':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
break
case 'indo5':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
break
 case 'indo6':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
break
 case 'indo7':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
break
  case 'indo8':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
break
  case 'indo9':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })
break
  case 'indo10':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
break
  case 'indo11':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
break
  case 'indo12':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })
break
case 'indo13':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
break
case 'indo14':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
break
case 'indo15':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
break
case 'indo16':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })
break
case 'indo17':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })
break
 case 'indo18':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })
break
case 'indo19':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })
break
case 'indo20':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })
break
case 'indo21':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })
break
case 'indo22':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })
break
case 'indo23':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })
break
case 'indo24':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })
break
case 'indo25':  
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
qute = fs.readFileSync('./gambar/fake.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nDownload Sendiri Banh🗿\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })
break 
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'glasses':
case 'gangbang':
case 'hentai':
case 'jahy':
case 'orgy':
case 'pussy':
case 'panties':
case 'thighs':
case 'yuri':
case 'neko':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
get = await fetchJson(`https://lexxy-api.herokuapp.com/docs/nsfw/${command}?apikey=Alphabot`)
ini = await getBuffer(get.result)
Lexxy.sendMessage(from, ini, image, { quoted: ftex, caption: `${command}` })
break
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'rikagusriani':
case 'bocil':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
bcl = await fetchJson(`https://lexxy-api.herokuapp.com/docs/asupan/${command}?apikey=Alphabot`)
Lexxy.sendMessage(from, bcl, video)
break
case 'serti1':
case 'serti2':
case 'serti3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
txtt = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Lexxy.sendMessage(from, buff, image, { quoted: flexx, caption: 'Nih Bro Hasil nya' })
break
case 'ttvideo':
case 'tiktok':
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Link Nya Mana kak?`)
tk = args.join(" ")
ini = await fetchJson(`https://lexxy-api.herokuapp.com/docs/download/tiktok?url=${tk}&apikey=Alphabot`)
sticLoad(from)
ttv = await getBuffer(ini.result.nowm)
Lexxy.sendMessage(from, ttv, video)
break
case 'instagram':
case 'igdl':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
break
case 'nuliskiri':
case 'nuliskanan':
case 'foliokiri':
case 'foliokanan':
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
mgr = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://hardianto.xyz/api/${command}?text=${mgr}&apikey=${HardiApi}`)
Lexxy.sendMessage(from, buff, image, { quoted: flexx, caption: 'Nih Bro Hasil nya' })
break
case 'blackpink':
case 'halloween':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'neondevil':
case 'neon':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case 'writefoggy':
case '3dstone':
case 'futuristic':
case 'asketch':
case 'bluecircuit':
case 'space':
case 'amagmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorrorstyle':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'hartatahta': 
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
sticWait(from)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
Lexxy.sendMessage(from, harta, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break

//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'cinematic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'captain':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'kaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'readall':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
var chats = await Lexxy.chats.all()
chats.map( async ({ jid }) => {
await Lexxy.chatRead(jid)
})
var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
await Lexxy.sendMessage(from, teks, text, {quoted: mek})
console.log(chats.length)
break
case 'kaneki':
case 'rem':
case 'lolimaker':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy`)
bo = args.join(" ")
sticWait(from)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?nama=${bo}&apikey=${ziyApi}`)
Lexxy.sendMessage(from, bf, image, { quoted: flexx, caption: 'Logo By Lexxy Official' })
break
case 'girlneko':
case 'sadboy':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy OFC`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?text1=${txt1}&text2=${txt2}&apikey=${ziyApi}`)
Lexxy.sendMessage(from, bf, image, { quoted: flexx, caption: 'Logo By Lexxy Official' })
break
case 'donasi':
dno = fs.readFileSync('./gambar/qris.jpg')
dns =`${(ind.donasi())}`
Lexxy.sendMessage(from, dno, image, { quoted: flexx, caption: dns })
break
case 'hidetag':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
var value = body.slice(9)
var group = await Lexxy.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Lexxy.sendMessage(from, options, text)
break
case 'demote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Lexxy.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
Lexxy.groupDemoteAdmin(from, mentioned)
}
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (args.length ==0)return reply(`Nama hero nya apa? contoh\n${prefix+command} nana`)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'promote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Lexxy.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
Lexxy.groupMakeAdmin(from, mentioned)
}
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: flexx })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: flexx })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: flexx })
break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: flexx })
break
case 'randombokep':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
data = fs.readFileSync('./lib/bokep.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randBokep = await getBuffer(randKey.image)
sticWait(from)
randTeks = randKey.teks
Lexxy.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
break
case 'tiktoknowm':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok.com')) return reply('Error')
sticWait(from)
anu = await TiktokDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.nowatermark) })
.catch((err) => { reply(String(err)) })
break
case 'delete':
case 'del':
case 'd':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
Lexxy.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tagall':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'add':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Lexxy.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'ff':
case 'diamondff':
ffg = fs.readFileSync('./gambar/logo/FF.png')
ff =`${(ind.diamondFF())}`
ff2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ff, ff2, ffg, but)
break
case 'pyment':
pyg = fs.readFileSync('./gambar/qris.jpg')
py =`${(ind.paymentstore(owner))}`
Lexxy.sendMessage(from, pyg, image, { quoted: mek, caption: py })
break
case 'hago':
case 'diamondhago':
hgg = fs.readFileSync('./gambar/logo/HAGO.png')
hg =`${(ind.hagostore())}`
hg2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, hg, hg2, hgg, but)
break
case 'pubg':
case 'ucpubg':
pbg = fs.readFileSync('./gambar/logo/PUBG.png')
pb =`${(ind.pubgstore())}`
pb2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, pb, pb2, pbg, but)
break
case 'codm':
case 'cpcodm':
cog = fs.readFileSync('./gambar/logo/COD.png')
co =`${(ind.codmstore())}`
co2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, co, co2, cog, but)
break
case 'point':
case 'pointblank':
pog = fs.readFileSync('./gambar/logo/POINT.png')
po =`${(ind.cbcashstore())}`
po2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, po, po2, pog, but)
break
case 'garena':
case 'garenashell':
gmg = fs.readFileSync('./gambar/logo/GARENA.png')
gm =`${(ind.garenashell())}`
gm2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, gm, gm2, gmg, but)
break
case 'ml':
case 'diamondml':
mlg = fs.readFileSync('./gambar/logo/ML.png')
ml =`${(ind.diamondML())}`
ml2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ml, ml2, mlg, but)
break
case 'chip':
case 'higgsdomino':
chg = fs.readFileSync('./gambar/logo/CHIP.png')
ch =`${(ind.chipstore())}`
ch2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ch, ch2, chg, but)
break
case 'kick':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${mentioned[0].split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Lexxy.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Lexxy.groupRemove(from, mentioned)
}
break
case 'leave':
if (!isGroup) return sticGroup(from)
if (isGroupAdmins || isOwner) {
Lexxy.groupLeave(from)
} else {
sticAdmin(from)
}
break
case 'truth':
td = fs.readFileSync('./gambar/tedy.jpg')
bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/truth`)
bt1 =`*${bt.truth}*`
bt2 =`Klik Di Next Untuk Melanjutkan`
but = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: '️next' }, type: 1 }
]
sendButLoc(from, bt1, bt2, td, but)
break
case 'dare':
td = fs.readFileSync('./gambar/tedy.jpg')
bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/dare`)
dr1 =`*${bt.dare}*`
dr2 =`Klik Di Next Untuk Melanjutkan`
but = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: '️next' }, type: 1 }
]
sendButLoc(from, dr1, dr2, td, but)
break
case 'ttp':
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
tp = args.join (" ")
sticWait(from)
ttp = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${encodeURI(q)}&color=black&apikey=${HardiApi}`)
Lexxy.sendMessage(from, ttp, sticker, { quoted: mek })
break
case 'attp':
if (args.length ==0)return (`Text nya mana cuy Contoh\n${prefix + command} Lexxy`)
attp = args.join(" ")
sticLoad(from)
atp = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${encodeURI(q)}&apikey=${HardiApi}`)
Lexxy.sendMessage(from, atp, sticker, { quoted: mek })
break
case 'setppgrup': 
case 'setpp':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
media = await Lexxy.downloadAndSaveMediaMessage(mek)
await Lexxy.updateProfilePicture(from, media)
reply('*Sukses mengganti icon group*')
break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) sticAdmin(from)
if (!isBotGroupAdmins) sticBotAdmin(from)
linkgc = await Lexxy.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'listadmin':
if (!isGroup) return sticGroup(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'By Lexxy Official')
fs.unlinkSync(ran)
})
break
case 'searchgrup':
if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
hx.linkwa(q)
sticWait(from)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'imgsearch':
if (args.length < 1) return reply('Tolong masukan query!')
let im = await hx.chara(q)
sticWait(from)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await Lexxy.sendMessage(from,li,image,{quoted: mek})
break
case 'ytsearch':
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
sticWait(from)
try {
var aramas = await yts(srch);
} catch {
return await Lexxy.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *SELF-BOT*'
await fakethumb(tbuff,ytresult)
break
case 'nickepep':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${LeysKey}`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${LeysKey}`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${LeysKey}`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'pinterest':
if(!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
sticWait(from)
await Lexxy.sendMessage(from, di, image, { quoted: mek })
break
case 'setreply':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return reply2(`Text Nya Mana? Contoh\n${prefix+command} Lexxy Official`)
gg = args.join(" ")
fakeyoi = gg
reply(`Succes Mengganti Reply Fake : ${q}`)
break
case 'setsimbol':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return reply2(`Simbol Nya Mana? Contoh\n${prefix+command} •`)
yo = args.join(" ")
simbol = yo
reply(`Succes Mengganti Simbol Fake : ${q}`)
break
case 'gitown':
reply2(`*GitHub Owner*\n${githubown}`)
break
case 'ytown':
reply2(`*YouTube Owner*\n${yutubown}`)
break
case 'gcown':
reply2(`*Grup Owner*\n${grupbot}`)
break
case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Lexxy.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/fake.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break
case 'setthumb':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Lexxy.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/thumb.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setthumb`)
}
break
case 'bneon':
case 'matrix':
case 'breakwall':
case 'dropwater':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'text3dbox':
case 'leavest':
case 'tlight':
case 'nulis':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text nya mana?')
bp = args.join(" ")
sticWait(from)
zks = await getBuffer(`https://api.zeks.me/api/${command}?apikey=apivinz&text=${bp}`)
Lexxy.sendMessage(from, zks, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'blackpink':
case 'neon_light':
case 'gaming':
case 'watercolor':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text Nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
jojo = await getBuffer(`https://docs-jojo.herokuapp.com/api/${command}?text=${bo}`)
Lexxy.sendMessage(from, jojo, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'tes':
if (isBanned)return sticBanned(from)
reply('*STATUS BOT : ONLINE*')
break
case 'cerpen':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
reply(anu1)
break 
case 'tongue':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'fox':
case 'dog':
case 'cat':
case 'panda':
case 'red_panda':
case 'birb':
case 'koala':
case 'meme':
if (isBanned)return sticBanned(from)
sticWait(from)
anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
res = await getBuffer(anu.link)
Lexxy.sendMessage(from, res, image, {caption: `*©Random ${command}*`, quoted: flexx })
break
case 'estetikpic':
if (isBanned)return sticBanned(from)
sticWait(from)
este = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=apivinz`)
Lexxy.sendMessage(from, este, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'playstore':
if (isBanned)return sticBanned(from)
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
case 'ban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
case 'unban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
case 'addprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
case 'mediafire':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
md = fs.readFileSync('./gambar/logo/mdfire.jpg')
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
Lexxy.sendMessage(from, md, image, {quoted: flexx, caption: result })
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'nekonime':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
get_res = await getBuffer(ini_res.result)
Lexxy.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'waifu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
get_res = await getBuffer(ini_res.img)
Lexxy.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'husbu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
get_res = await getBuffer(ini_res.image)
Lexxy.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'request':
case 'rq':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Request Fitur Apa?\nContohnya :\n${prefix + command} antilink`)
const cfrr = body.slice(8)
if (cfrr.length > 300) return Lexxy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `*[ REQUEST FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
Lexxy.sendMessage('6282279915237@s.whatsapp.net', options, text, {quoted: flexx})
Lexxy.sendMessage('62857890047322@s.whatsapp.net', options, text, {quoted: flexx})
reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
break
case 'report':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Report Fitur Yg mana?\nContohnya :\n${prefix + command} maker error`)
const cfgg = body.slice(8)
if (cfgg.length > 300) return Lexxy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomer = mek.participant
const ross = `*[ REPORT FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfgg}`
var options = {
text: ross,
contextInfo: {mentionedJid: [nomer]},
}
Lexxy.sendMessage('6282279915237@s.whatsapp.net', options, text, {quoted: flexx})
Lexxy.sendMessage('62857890047322@s.whatsapp.net', options, text, {quoted: flexx})
reply('REPORT ANDA TELAH SAMPAI KE PENGEMBANG SC, Report palsu atau main² tidak akan ditanggapi.')
break
case 'broadcast':
case 'bc':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await Lexxy.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Lexxy.downloadMediaMessage(encmedia)
for (let _ of anu) {
Lexxy.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Sukses broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
reply('Sukses broadcast')
}
break
case 'waifu':
case 'neko':
case 'blowjob':
case 'trap':
case 'megumin':
case 'awoo':
case 'shinobu':
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/${command}`)
buffer = await getBuffer(anu.url)
Lexxy.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'public':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'sticker':
case 's':
if (isBanned)return sticBanned(from)
sticWait(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
Lexxy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
Lexxy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: flexx})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break
case 'ytplay':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
gett = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
yt1 =`*Judul :* ${gett.title}\n\n*Author :* ${gett.channel}\n*Dipublikasikan :* ${gett.published}\n*Views :* ${gett.views}`
yt2 =`Silahkan Pilih Type Media Di Bawah`
ytg = fs.readFileSync('./gambar/logo/ytplay.jpg')
but = [
{ buttonId: `${prefix}ply4 ${args.join(" ")}`, buttonText: { displayText: '𝘷𝘪𝘥𝘦𝘰' }, type: 1 },
{ buttonId: `${prefix}ply3 ${args.join(" ")}`, buttonText: { displayText: '️𝘮𝘶𝘴𝘪𝘬' }, type: 1 }
]
sendButLoc(from, yt1, yt2, ytg, but)
break
case 'ply4':
case 'playmp4':
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp4?query=${bo}`)
p4 = await getBuffer(ini.url)
Lexxy.sendMessage(from, p4, video)
break
case 'ply3':
case 'playmp3':
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
p3 = await getBuffer(ini.url)
Lexxy.sendMessage(from, p3, audio)
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName}`)
ow =`*Hallo ${pushname}👋 Itu Nomer Owner Ku Mau Tau Tentang Apa Ya?*`
ow2 =`_Pilih Salah Satu Di Bawah_`
but = [
{ buttonId: `${prefix}gitown`, buttonText: { displayText: '𝐆𝐈𝐓𝐇𝐔𝐁' }, type: 1 },
{ buttonId: `${prefix}gcown`, buttonText: { displayText: '𝐆𝐑𝐎𝐔𝐏' }, type: 1 },
{ buttonId: `${prefix}ytown`, buttonText: { displayText: '️𝐘𝐎𝐔𝐓𝐔𝐁𝐄' }, type: 1 }
]
sendButton(from, ow, ow2, but, mek)
break
case 'ytmp4':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp4?url=${ini_link}`)
anu = ini.result
ini_txt =`*Judul* : ${anu.title}\n*Author* : ${anu.channel}\n*Publis* : ${anu.published}\n*Views* : ${anu.views}`
yt4 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Lexxy.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
sticLoad(from)
Lexxy.sendMessage(from, res, video)
break
case 'ytmp3':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp3?url=${ini_link}`)
get = ini.result
ini_txt =`*Judul* : ${get.title}\n*Author* : ${get.channel}\n*Publis* : ${get.published}\n*Views* : ${get.views}`
yt3 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Lexxy.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
sticLoad(from)
Lexxy.sendMessage(from, res, audio)
break
case 'infobot':
case 'info':
dp =`${dev}`
reply(dp)
break
case 'scbot':
sc =`${scb}`
reply(sc)
break
case 'upswimage':
if (!isOwner) return sticOwner(from)
if (isQuotedImage) {
const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await Lexxy.downloadMediaMessage(swsw)
Lexxy.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
bur = `Sukses Upload Story Image dengan Caption: ${q}`
Lexxy.sendMessage(from, bur, text, { quoted: mek })
} else {
reply2('Reply gambarnya!')
}
break
case 'upswvideo':
if (!isOwner) return sticOwner(from)
if (isQuotedVideo) {
const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await Lexxy.downloadMediaMessage(swsw)
Lexxy.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
Lexxy.sendMessage(from, bur, text, { quoted: mek })
} else {
reply2('reply videonya!')
}
break 
case 'antilink':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntilink) return reply('Udah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan anti link group di group ini ✔️')
Lexxy.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (Number(args[0]) === 0) {
if (!isAntilink) return reply('Mode anti link group sudah disable')
antilinkgrup.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukes menonaktifkan anti link group di group ini ✔️')
} else {
sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antilink 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'quotesislami':
case 'quotesanime':
case 'truth':
case 'dare':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
dhani = (oke.result)
sendButMess(from, dhani, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'randomquotes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes?apikey=${dhakey}`)
dhani = (anu.result.quotes)
sendButMess(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case "closegc": 
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
Lexxy.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 
case "opengc":
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
Lexxy.groupSettingChange(from, GroupSettingChange.messageSend, false);
break;
case "upswteks":
if (!isOwner) return sticOwner(from)
if (!q) return reply("Isi teksnya!");
Lexxy.sendMessage("status@broadcast", `${q}`, extendedText);
reply2(`Sukses Up story wea teks ${q}`);
break;
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━\\
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return Lexxy.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}



 
