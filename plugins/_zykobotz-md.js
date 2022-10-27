let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply('Masukkan Teks..')
	
let tiktok = `
${htki} ${emot} LOGO KEREN  ${htka}

⚡ Silakan pilih Logo di bawah ini...

*Teks yang anda kirim:* ${text}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

Nomor Owner Bot : wa.me/${nomorown}
IG OWNER : ${sig}`
//yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} IMAGE SEARCH Work✦-------`,
	rows: [
        {title: "1917", rowId: `.1917 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "3d-crack-text-effect-online", rowId: `.3d-crack-text-effect-online ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3d-underwater", rowId: `.3d-underwater ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3d-wood", rowId: `.3d-wood ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3damerican-flag", rowId: `.3damerican-flag ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dglue-realistic", rowId: `.3dglue-realistic ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dgradient", rowId: `.3dgradient ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },     
             {title: "3dgradient2", rowId: `.3dgradient2 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "3dmetal-effect", rowId: `.3dmetal-effect ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dmetal-text-", rowId: `.3dmetal-text- ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dmulticolor-papercut", rowId: `.3dmulticolor-papercut ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dpig-gif|3druby-stone", rowId: `.3dpig-gif|3druby-stone ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dsand-engraved", rowId: `.3dsand-engraved ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dshiny-metallic", rowId: `.3dshiny-metallic ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },                                
        title: "3dsparkle-christmas", rowId: `.3dsparkle-christmas ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "3dsub-zombie", rowId: `.3dsub-zombie ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dtext-effect|3dtext-effect2", rowId: `.3dtext-effect|3dtext-effect2 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dtext-effect3", rowId: `.3dtext-effect3 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dtext-pig", rowId: `.3dtext-pig ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dvalentine-cards", rowId: `.3dvalentine-cards ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "3dxmas-cards", rowId: `.3dxmas-cards ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
            {title: "3dxmas-cards2", rowId: `.3dxmas-cards2 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "83day-card", rowId: `.83day-card ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "83day-card2", rowId: `.83day-card2 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "83day-card3", rowId: `.83day-card3 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MDT' },
        {title: "83day-card4", rowId: `.83day-card4 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "advanced-glow", rowId: `.advanced-glow ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "ahri-league-of-legends", rowId: `.ahri-league-of-legends ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },       
        
    {title: "alice-league-of-kings", rowId: `.alice-league-of-kings ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "amily-arena-of-valor", rowId: `.amily-arena-of-valor ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD },
        {title: "angels-wings", rowId: `.angels-wings ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "anonymous-neon", rowId: `.anonymous-neon ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "art-shader", rowId: `.art-shader ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "zzenka-league-of-kings", rowId: `.zzenka-league-of-kings ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "balloon-noel", rowId: `.balloon-noel ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },     
             {title: "bats-halloween", rowId: `.bats-halloween ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "bear2", rowId: `.bear2 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "bee", rowId: `.bee- ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cake", rowId: `.birthday-cake ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cake10", rowId: `.birthday-cake10 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cake2", rowId: `.birthday-cake3 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cake4", rowId: `.birthday-cake4 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },                                
        title: "birthday-cake5", rowId: `.birthday-cake5 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "birthday-cake6", rowId: `.birthday-cake6 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cake7", rowId: `.birthday-cake7 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cake8", rowId: `.birthday-cake8 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cake9", rowId: `.birthday-cake9 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthday-cards", rowId: `.birthday-cards ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "birthdayfoil-balloon", rowId: `.birthdayfoil-balloon ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
            {title: "blackpink", rowId: `.blackpink ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
	      {title: "blackskin-snake", rowId: `.blackskin-snake ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "blood-frosted", rowId: `.blood-frosted ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "blood-steel", rowId: `.blood-steel ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MDT' },
        {title: "blood-text", rowId: `.blood-text ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "blood-text2", rowId: `.blood-text2 ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },
        {title: "blood-wall", rowId: `.blood-wall ${text}`, description: 'Buat Logo Kamu di ZykoBotz-MD' },     
        
        
        
        
        
        
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
