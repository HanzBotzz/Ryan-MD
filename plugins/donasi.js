let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0857-7915-0501]
│ •  [0857-7915-0501]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
