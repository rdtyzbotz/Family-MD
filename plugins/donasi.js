const qrku = "https://telegra.ph/file/f4ee3c55fd67cbd3ea861.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
📍 *BNK MAYBANK*
No: 008074679622

📍 *Touch nGO* 
No: 1151905021

📍 *SHOPE PAY*
 No: +601151905021
╰────
╭─「 *NOTE* 」
│ > ingin run bot? Wa.me/62895327934887
│ _Hasil donasi akan digunakan buat yg trbaik
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
