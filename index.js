require('dotenv').config()
const { Bot, InlineKeyboard, GrammyError, HttpError } = require('grammy', 'telegraf')

const bot = new Bot('6339884292:AAFq0irwpBp3pkZo04HvbF_Otdgb9jAdlYI')

bot.command('start', async (ctx) => {
    const startKeyboard = new Keyboard()
        .text('edo.ijro.uz')
        .text('E-HUQUQSHUNOS')
        .row()
        .text('YARATUVCHI: S.Abdullayev')
        await ctx.reply( `Assalomu alaykum ❗️❗️❗️
"UNICON SOFT" Navoiy viloyat filiali hodimi tomonidan ishlab chiqilgan vedio darsliklar

Texnik qo'llab-quvvatlash
📞95 514 46 46

Shartnoma bo'limi
📞95 503 46 46`, {
          reply_markup: startKeyboard
        })
})

bot.hears(['edo.ijro.uz'], async (ctx) => {
    const inlineKeybioard = new InlineKeyboard()
    .text('1.Devonxona', 'dars1')
    .text('2.Sektor Fishka', 'dars2')
    .row()
    .text('3.Rezolyutsiya loyihasini imzolash', 'dars3')
    .text('4.Ijrochi tominidan javob kiritish', 'dars4')
    .row()
    .text('5.Javob xatini imzolash', 'dars5')
    .text('6.Nazoratdan yechish', 'dars6')
    await ctx.reply('Ketma-ketlikda kurishni tavsiya qilamiz', {
        reply_markup: inlineKeybioard
    })
})

bot.on('callback_query:data', async (ctx) => {
    if(ctx.callbackQuery.data ==='dars1') {
        await ctx.reply('saklskla')
        await ctx.an
    }
})

bot.hears(['E-HUQUQSHUNOS'], async (ctx) => {
    const inlineKeybioard = new InlineKeyboard()
    await ctx.reply('JARAYONDA', {
        reply_markup: inlineKeybioard
    })
})

bot.hears(['YARATUVCHI: S.Abdullayev'], async (ctx) => {
    const inlineUrl = new InlineKeyboard()
    .url('PORTPLIO', 'https://mycv.unaux.com/')
    await ctx.reply('PORTFOLIO WEB SAYTIMNI KO`RIB CHIQING VA MUROJAAT QILING', {
        reply_markup: inlineUrl
    })
})

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
    } else {
      console.error("Unknown error:", e);
    }
  });


bot.start()