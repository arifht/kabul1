let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply('Masukkan Query nya, contoh .image pisang')
	
let tiktok = `
${htki}  📺 IMAGE SEARCH 🔎  ${htka}

⚡ Silakan pilih IMAGE SEARCH di tombol di bawah...

*Teks yang anda kirim:* ${text}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

Donasi :
Nomor Developer : wa.me/6282127487538
Nomor Owner Bot : wa.me/${nomorown}`
//yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} IMAGE SEARCH Work✦-------`,
	rows: [
        {title: "1917", rowId: `.1917 ${text}`, description: 'Buat Logo Kamu diBOT' },
	      {title: "3d-crack-text-effect-online", rowId: `.3d-crack-text-effect-online ${text}`, description: 'Buat Logo Kamu diBOT' },
        {title: "3d-underwater", rowId: `.3d-underwater ${text}`, description: 'Buat Logo Kamu diBOT' },
        {title: "3d-wood", rowId: `.3d-wood ${text}`, description: 'Buat Logo Kamu diBOT' },
        {title: "3damerican-flag", rowId: `.3damerican-flag ${text}`, description: 'Buat Logo Kamu diBOT' },
        {title: "3dglue-realistic", rowId: `.3dglue-realistic ${text}`, description: 'Buat Logo Kamu diBOT' },
        {title: "3dgradient", rowId: `.image7 ${text}`, description: 'Buat Logo Kamu diBOT' },
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

handler.help = ['logolist <teks>', 'logo <teks>']
handler.tags = ['internet', 'tools']
handler.command = /^(logolist|logo|listlogo|buatlogo)$/i
handler.owner = true
export default handler
