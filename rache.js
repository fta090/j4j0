const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  } //test
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});
    let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          if(sent.includes(msg.author.id)) return;
           msg.channel.startTyping();
          await sleep(1500)

          await msg.channel.send("https://discord.gg/SPz9dUwK") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.
          await msg.channel.stopTyping();
          await sleep(50000)
          msg.channel.startTyping();
          await msg.channel.send("done geldigin an gelirim net kötü çıkma")
          await msg.channel.stopTyping();
          sent.push(msg.author.id)
          
      }
      }
    }
  }
})


client.on("guildCreate", rachecode => {

  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.cache.get("835620099200385095") // j4j sunucusunun kanal id'si


       a.send("J4j gelmeyen gavur dm")


      }, 60000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.cache.get("831113320957739019") // j4j sunucusunun kanal id'si


       a.send("J4j gelmeyen gavur dm")


      }, 6000000);
})

client.login("..................") // user tokeniniz

app.get("/foo", (req, res, next) => {
    const foo = JSON.parse(req.body.jsonString)
})
process.on("unhandledRejection", (reason, promise) => {})

