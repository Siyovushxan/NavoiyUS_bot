require('dotenv').config()
const { Bot, InlineKeyboard, Keyboard, GrammyError, HttpError } = require('grammy')
const TOKEN=process.env.TOKEN
const bot = new Bot(TOKEN)

bot.command('start', async (ctx) => {
    const startKeyboard = new Keyboard()
        .text('"UNICON SOFT" Navoiy viloyat filiali telifon raqamlari va telegram profili')
        .row()
        .text('edo.ijro.uz')
        .text('E-HUQUQSHUNOS')
        .row()
        .text('YARATUVCHI: S.Abdullayev')
        await ctx.reply( `Assalomu alaykum ❗️❗️❗️

"UNICON SOFT" Navoiy viloyat filiali

Ijro intizomi Idolararo elektron tizimiga doir vedio darsliklarni taqdim etadi
`, {
          reply_markup: startKeyboard,
          reply_markup: startKeyboard
        })
})

bot.hears(['"UNICON SOFT" Navoiy viloyat filiali telifon raqamlari va telegram profili'], async (ctx) => {
    const inlineHuquqshunos = new InlineKeyboard()
    await ctx.reply(`
Texnik qo'llab quvvatlash 👇
    📞 95 475 47 09
    📞 95 475 47 06
    📞 95 514 46 46
    📞 95 475 47 42
    
    ✉️ @NavoiyUS_Texnik
    
Shartnoma va hisob-kitob bo'limi 👇
    📞 95 503 46 46
    
    ✉️ @NavoiyUS_Shartnoma
    `, {
        reply_markup: inlineHuquqshunos
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

bot.hears(['E-HUQUQSHUNOS'], async (ctx) => {
    const inlineHuquqshunos = new InlineKeyboard()
    await ctx.reply('JARAYONDA', {
        reply_markup: inlineHuquqshunos
    })
})

bot.hears(['YARATUVCHI: S.Abdullayev'], async (ctx) => {
    const inlineUrl = new InlineKeyboard()
    .url('PORTPLIO', 'https://mycv.unaux.com/')
    await ctx.reply(`

🤔 Kompyuter bilan ishlashda sizda muammo bormi ❓

🤔 Ishingizda zamonaviy elektron  tizimlarda ishlashda qiynalyapsizmi ❓

🤔 Web dasturchi bo'lmoqchimisiz ❓

Sizga taklif qilamiz ❗️❗️❗️

📖 Kompyuter savodxonligi
📖 Zamonaviy elektron tizimlar
📖 Web dasturlash

Yo'nalishlarida o'qing va kompyuter bilan ishlashdagi muammolaringizni oldini oling.
Darslar S.Abdullayev va S.Naimov tomonidan olib boriladi.

Tel:
    📞 94 337 32 35
    📞 90 665 37 55

Telegram:
    @XAN_AKADEMIYA
    @UNICON_SOFT_NAVOIY

Batafsil ma'lumot olish uchun pastdagi saytni ko'rib chiqishni taklif qilamiz 👇👇👇
    `, {
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
