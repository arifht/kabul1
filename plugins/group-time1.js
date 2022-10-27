let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply('Masukkan Query nya, contoh .image pisang')
	
let tiktok = `
${htki}  📺 GCTIME 🔎  ${htka}

⚡ Silakan pilih GC TIME di tombol di bawah...

*Teks yang anda kirim:* ${text}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

Nomor Owner Bot : wa.me/${nomorown}
IG Owner : {sig}`
//yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} OPEN✦-------`,
	rows: [
        {title: "OPEN 1 JAM", rowId: `.bctime buka 1 ${text}`, description: 'Scrape BochilTeam' },
	      {title: "OPEN 2 JAM", rowId: `.bctime buka 2 ${text}`, description: 'Apikey LOL HUMAN' },
        {title: "OPEN 3 JAM", rowId: `.bctime buka 3 ${text}`, description: 'Apikey LOL HUMAN' },
        {title: "OPEN 4 JAM", rowId: `.bctime buka 4 ${text}`, description: 'Apikey BX-HUNTER' },
        {title: "OPEN 5 JAM", rowId: `.bctime buka 5 ${text}`, description: 'Apikey XCODERS' },
        {title: "OPEN 6 JAM", rowId: `.bctime buka 6 ${text}`, description: 'Apikey XCODERS' },
        {title: "OPEN 7 JAM", rowId: `.bctime buka 7 ${text}`, description: 'Apikey NZCHA' },
        ]
    },{
    	title: `${htjava} CLOSE✦-------`,
	rows: [
        {title: "CLOSE 1 JAM", rowId: `.bctime tutup 1 ${text}`, description: 'Scrape BochilTeam' },
	      {title: "CLOSE 2 JAM", rowId: `.bctime tutup 2 ${text}`, description: 'Apikey LOL HUMAN' },
        {title: "CLOSE 3 JAM", rowId: `.bctime tutup 3 ${text}`, description: 'Apikey LOL HUMAN' },
        {title: "CLOSE 4 JAM", rowId: `.bctime tutup 4 ${text}`, description: 'Apikey BX-HUNTER' },
        {title: "CLOSE 5 JAM", rowId: `.bctime tutup 5 ${text}`, description: 'Apikey XCODERS' },
        {title: "CLOSE 6 JAM", rowId: `.bctime tutup 6 ${text}`, description: 'Apikey XCODERS' },
        {title: "CLOSE 7 JAM", rowId: `.bctime tutup 7 ${text}`, description: 'Apikey NZCHA' },     
    ]
    },
]

const listMessage = {
  text: tiktok,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fakes, mentions: await conn.parseMention(tiktok), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}



handler.command = /^(gctime|gc|grouptime)$/i

handler.botAdmin = true
handler.group = true

export default handler
