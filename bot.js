const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "." // تقدر تغيره
	const blow = new Set()
	client.on('message', message => {
  var price = ''
  var rank = ''
  var sender = ''
             let fouroulou = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`Our plans : 
                                       \`● Hw » Normal Seller \` <== 30000 
                                       \`● Hw » Good Seller \` <== 45000
                                       \`● Hw » Perfect Seller \` <== 60000
                                       \`● Hw » Great Seller \` <== 80000
        اذا اردت الشراء اكتب اسم الرتبه
        For more information go to <#575909549454786570>`)   
      .setTimestamp()
    let filter = m => m.author.id === message.author.id;
   if(message.content.startsWith(".buy")){
       let user = client.users.get("483961533777444874"); // ايديك
	  let user1 = client.users.get("458908289502281728");
     //ههقهقهقه
    // جيبلي كود فيه تحقق yes or no

     if (blow.has(message.author.id)) {
     return message.reply("**لايمكنك اعادة الامر مجددا ان لم تنهي عملية الشراء لانهائها قم بكتابة cancel**").then(message => {
      message.delete(10000) 
     })
     }
     blow.add(message.author.id);
    setTimeout(() => {
        blow.delete(message.author.id);
    }, 60000);//وحلو مرا  كقو خلك كذا زيي بس ذا مرا ايز :]

     message.channel.sendEmbed(fouroulou).then(msg => {
      message.channel.awaitMessages(response => response.content === '● Hw » Great Seller ,!' || '● Hw » Normal Seller' || '● Hw » Good Seller' || '● Hw » Perfect Seller' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === '● Hw » Normal Seller ,!') {
          rank = '» ● Hw » Normal Seller'
          price = 10000
          	  let price2 = price - ( (price * 5) / 100 )

                    let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل ${price} كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
      
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$9500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == '● Hw » Normal Seller ,!'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          message.delete();
        }
        if(collected.first().content === '● Hw » Good Seller') {
           let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل 45000 كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$19000\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == '» ● Hw » Good Seller'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === '● Hw » Great Seller ,!') {
                  rank = '» ● Hw » Great Seller ,!'
          price = 80000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل 80000 كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
                message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$66500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == '● Hw » Great Seller ,!'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === '● Hw » Perfect Seller ,!') {
          rank = '● Hw » Perfect Seller ,!'
          price = 50000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل 60000 كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$47500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == '● Hw » Perfect Seller ,!'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}})
  

       })     
        
}});


client.on('message', message => {
 if(message.content.startsWith("cancel")){
 if(blow.has(message.author.id)) {
   blow.delete(message.author.id)
   message.channel.send('**Buying Has Been Cancled**')
 }}});
client.login(NTc1OTU4NTQ4NjE0NDc5ODc1.XNZxZw.dOEbdYTg25qdjab5GCkXhCm1TLo)