let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendButton(m.chat, '```Ini Kak```\n\n*©By ᴹᴿ᭄ 𝗭𝘆𝗸𝗼𝗕𝗼𝘁𝘇-𝗠𝗗 ×፝֟͜×*\nIG ${sig}\ngroup\n ${sgc}', wm, pickRandom(galau), [['⫷ NEXT ⫸', `/videogalau}`]],m)
}
handler.help = ['videlucu']
handler.tags = ['quotes']
handler.command = /^(lucu|videlucu)$/i

handler.premium = false
handler.limit = false

handler.fail = null
handler.register = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const galau = [

"https://github.com/ZykoBotz-MD/kabul/blob/master/mp4/Vidio%20lucu.mp4",
]