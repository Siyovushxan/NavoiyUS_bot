require('dotenv').config()
const { Bot, InlineKeyboard, Keyboard, GrammyError, HttpError } = require('grammy', 'telegraf')
const TOKEN=process.env.TOKEN
const bot = new Bot(TOKEN)

bot.command('start', async (ctx) => {
    const startKeyboard = new Keyboard()
        .text('"UNICON SOFT" Navoiy viloyat filiali telifon raqamlari va telegram profili')
        .row()
        .text('edo.ijro.uz')
        .text('E-HUQUQSHUNOS')
        .row()
        .text('Yaratuvchi: S.Abdullayev')
        .row()
        .text(`O'quv kurslar`)
        .text(`1C taklif qiladi 👍`)
        await ctx.reply( `
Barcha uchun takliflar "XAN AKADEMIYA" asoschisi Siyovush Abdullayev

⌨️ "UNICON SOFT" Navoiy viloyat filiali Ijro intizomi Idoralararo elektron tizimiga doir video darsliklarini

🖥 Hozirgi vaqtdagi barcha zamonaviy elektron tizimlarga doir vedio darsliklar va o'quv kurslarini

📈 1C tijorat takliflarini. TASHKILOTLAR uchun

💻 "XAN AKADEMIYA" o'quv kurslarini taqdim qiladi

IT sohasidagi fikrlashingizni va bilimlaringizni o'zgartirish o'z qo'lingizda
`, {
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
    .text('3.Rezolyutsiya', 'dars3')
    .row()
    .text('4.Ijrochi', 'dars4')
    .text('5.Nazorat', 'dars5')
    await ctx.reply(`Vedio darsliklarni ketma-ketlikda ko'rishni tavsiya qilamiz ❗️`, {
        reply_markup: inlineKeybioard
    })
})

bot.on('callback_query:data', async (ctx) => {
    if (ctx.callbackQuery.data === 'dars1') {
        const video_url = "https://youtu.be/oIYrv-h5Bo8?si=5BYcXn47_PS_72cK";
        await ctx.reply(`
YouTube kanaalimizga a'zo bo'ling: 👇👇👇
https://www.youtube.com/@siyovushxan
        
EDO IJRO tizmiga oid vedio darsliklar
${video_url}`);
        await ctx.answerCallbackQuery();
    }

    // O'quv kurslari
    if (ctx.callbackQuery.data === 'Kompyuter') {
        await ctx.reply(`
Kompyuter savodxonligiga asoslangan kurs TEZ ORADA ❗️

1. Kompyuterning dasturiy ta'minotlari bilan tanishuv ✅

2. Kompyuter dasturiy taminotlarini o'rnatish ✅

3. Kompyuterning dasturiy ta'minotlarini boshqarish ✅

4. Ofis dasturlari bilan ishlash va imkoniyatlari bilan tanishish ✅

5. Windows operatsion sestemasini o'rnatish ✅

6. Call linux operatsion sestemasini o'rnatish ✅

Yuqorida keltirilgan bo'limlardan iborat bo'lgan o'quv kursiga taklif qilamiz.

Kompyuter bilan ishlashda sizda bundan keyin muammo bo'lmaydi
        `)
        await ctx.answerCallbackQuery();
    }

    if (ctx.callbackQuery.data === 'Elektron') {
        await ctx.reply(`
Elektron tizimlarga asoslangan vedio kurslar TEZ ORADA ❗️

1. id.gov.uz ✅  2. my.gov.uz ✅

3. my.mehnat.uz ✅  4. edo.ijro.uz ✅

5. lawyer.ijro.uz ✅  6. fo.birdarcha.uz ✅

7. new.birdarcha.uz ✅

Yuqorida keltirilgan bo'limlardan iborat bo'lgan o'quv kursiga taklif qilamiz.

Elektron tizimlar bilan ishlashda sizda bundan keyin muammo bo'lmaydi
        `);
        await ctx.answerCallbackQuery();
    }

    if (ctx.callbackQuery.data === 'Frontend') {
        await ctx.reply(`
WEB dasturlash (Frontend) asoslangan kurs TEZ ORADA ❗️

1. HTML ✅  2. CSS ✅

3. BOOTSTRAP ✅  4. GIT HUB ✅

5. FIGMA ✅  7. TRELLO ✅

8. JIRA ✅  9. JAVASCRIPT ✅

10. REACTJS ✅

Yuqorida keltirilgan bo'limlardan iborat bo'lgan o'quv kursiga taklif qilamiz.

Kurs ohirida o'zingizning mycv.unaux.com web saytiga o'xshagan PORTFOIO saytingiz va @NavoiyUS_bot telegram botga o'xshagan shaxsiy telegram botingizga ega bo'lasiz

    ✅Loyihalar tayyor dezayn asosida ishlab chiqiladi

    ✅ Serverga qo'yiladi

    ✅ SSl sertifikatiga ega bo'lasiz. Xavfsiz ulanish

    ✅ Responsive dezyn
        `);
        await ctx.answerCallbackQuery();
    }
});

bot.hears(['E-HUQUQSHUNOS'], async (ctx) => {
    const inlineHuquqshunos = new InlineKeyboard()
    const video_url = "https://youtu.be/oIYrv-h5Bo8?si=5BYcXn47_PS_72cK";
    await ctx.reply(`
YouTube kanaalimizga a'zo bo'ling: 👇
https://www.youtube.com/@siyovushxan
    
E - HUQUQSHUNOS vedio darslari
${video_url}`);
})

bot.hears(['Yaratuvchi: S.Abdullayev'], async (ctx) => {
    const inlineUrl = new InlineKeyboard()
    .url('PORTPLIO', 'https://mycv.unaux.com/')
    await ctx.reply(`

🤔 Kompyuterni yaxshi tushunmaysizmi ❓

🤔 Ishingizdagi elektron tizimlar murakkabmi ❓

🤔 Web dasturchi bo'lmoqchimisiz ❓

Sizga taklif qilamiz ❗️❗️❗️

📖 Kompyuter savodxonligi ✅
📖 Zamonaviy elektron tizimlar ✅
📖 Web dasturlash ✅

Yuqoridagi kurslarda o'qing va malakali mutaxasislardan o'rganing
Darslar S.Abdullayev va S.Naimov tomonidan olib boriladi

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

bot.hears([`O'quv kurslar`], async (ctx) => {
    const inlineHuquqshunos = new InlineKeyboard()
    .text('Kompyuter savodxonligi', 'Kompyuter')
    .row()
    .text('Elektron tizimlar', 'Elektron')
    .row()
    .text('Web dasturlash (Frontend)', 'Frontend')
    await ctx.reply(`
Batafsil ma'lumot olish uchun har bir kurs bilan tanishib chiqing va
bizga murojaat qiling ❗️❗️❗️

Kurslarni tamomlaganingizdan keyin kompyuter savodxonlik darajangiz albatta ortadi 👌

Tel:
    📞 94 337 32 35
    📞 90 665 37 55

Telegram:
    @XAN_AKADEMIYA
    @UNICON_SOFT_NAVOIY
    `, {
        reply_markup: inlineHuquqshunos
    })
})

bot.hears([`1C taklif qiladi 👍`], async (ctx) => {
    const adenC = new InlineKeyboard()
    await ctx.reply(`
Tijorat taklifi TASHKILOTLAR uchun ❗️❗️❗️

1C ning rasmiy franshizasi OOO «DIGITAL PLANET»  xar-xil turdagi 1C dasturiy taminotlarni taqdim qiladi

1C bo'yicha sizni qiziqtirgan savollar bormi ❓ 

Unda biz bilan bog'laning 👇👇👇

Tel:
    📞 94 337 32 35
    📞 90 665 37 55

Telegram:
    @XAN_AKADEMIYA
    @UNICON_SOFT_NAVOIY
    `, {
        reply_markup: adenC
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

// "test": "echo \"Error: no test specified\" && exit 1"
