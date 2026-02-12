// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Miye",

    // Photo that appears next to the title (circular, next to the name)
    // Upload to Cloudinary and paste the URL here. Leave empty "" to hide.
    headerPhoto: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857884/oioiamie_gr1sag.jpg",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Serias mi San Valentin? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Floating photos in the background (circular, float alongside emojis)
    // Add paths to your photos here — they'll appear as small floating circles
    floatingImages: [
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856769/huelecaja_soba1f.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856769/halloween_zqd1og.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856768/zzzzz_jjiawh.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856768/a_dgoihs.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856769/minobia_xten1y.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856768/minobia2_q4hjpm.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856768/eminioieiamie_hkzutn.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857462/WhatsApp_Image_2026-02-11_at_7.36.08_PM_xpuckk.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857885/poseMiye_imazxw.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857884/poseMiyeEmini_lxj6jr.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857883/ratoncita_czvwyz.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857884/us_wz7cyx.jpg",
        "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857884/us1_czjqhz.jpg"



        // "images/us2.jpg",
    ],

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Te gusto?",                                    // First interaction
            yesBtn: "Chi",                                             // Text for "Yes" button
            noBtn: "Ño",                                               // Text for "No" button
            secretAnswer: "No me gustas, te amo! ❤️"           // Secret hover message
        },
        second: {
            text: "Cuanto me amas?",                          // For the love meter
            startText: "Asi de mucho!",                                   // Text before the percentage
            nextBtn: "Siguiente ❤️"                                         // Text for the next button
        },
        third: {
            text: "Serias mi San Valentin este 15 de febrero, 2026? 🌹", // The big question!
            yesBtn: "Si!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOWOWOWOWOW tanto me amas?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Al infinito y mas allá! 🚀💝",              // Shows when they go past 1000%
        normal: "OIEIAMIE Un poco mas allá! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Que alegría! Soy el mas hombre feliz del mundo! 🎉💝💖💝💓",
        message: "Ahora para tu regalo, un abrazote y un besote! y mas sorpresas el sabadote",
        emojis: "🎁💖🤗💝❤️💕",  // These will bounce around

        // Featured image — a big photo shown in the celebration screen
        // Leave empty "" to hide
        image: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770859056/minions_rgwba4.jpg",

        // Love letter — displayed in a handwritten-style card after celebration
        // Leave empty "" to hide
        loveLetter: "Yamille, Mille, Miye, Mie, OieIamie, pulpito, sapito, suricatita, popin,kokin, mi amor, estos ya prontos a ser 6 mesesotes junto a ti han sido de lo mejor. Estoy muy agradecido con la vida por haberte conocido, conocerte como te conozco, y por todo lo que hemos compartido. Me encanta como siempre me haces reir y tratas de animarme cuando estoy serio o reniego y sobretodo como podemos tener conversaciones serias y hasta incómodas sin problema. Contigo el tiempo se me pasa volando y no podría haber pedido mejor copiloto que me diga que tenía que voltear en la esquina que acabo de pasar. Quiero que sepas que cuentas conmigo para todo y siempre estaré ahí para apoyarte y conversar de lo que sea.  Te adoro Preciosa, estoy muy feliz de pasar este 14 contigo",

        // Photo gallery — shown after celebration message
        // Add your photos as objects with url and optional caption
        photos: [
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856769/huelecaja_soba1f.jpg", caption: "Oliendo la caja en uno de los primeros dates" },
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856770/likeoneofyourfrenchgirls_iwxz3h.jpg", caption: "En la playa" },
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856769/control_v8vije.jpg", caption: "El outfit combinaba hasta las medias, date 10/10" },
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856769/halloween_zqd1og.jpg", caption: "Uno de los dates mas bonitos" },
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856769/minobia_xten1y.jpg", caption: "Minobia oficialmente" },
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856768/minobia2_q4hjpm.jpg", caption: "Minobia oficialmente pt2" },
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856768/zzzzz_jjiawh.jpg", caption: "😴💤" },
            { url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770856768/a_dgoihs.jpg", caption: "Rica comida" },
{ url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857888/teamo_rd2ckr.jpg", caption: "La primera vez que nos dijimos te amo" },
{ url: "https://res.cloudinary.com/dvyf0lct6/image/upload/v1770857853/sweet7_nqiwel.jpg", caption: "No salio Livia en la foto:(" },
        ]
    },

    // Relationship timeline — shown in the celebration screen
    // A visual timeline of your milestones together
    timeline: {
        enabled: false,  // Set to true to show the timeline
        milestones: [
            // { date: "2024-01-15", title: "Nos conocimos", description: "El dia que todo cambio" },
            // { date: "2024-03-20", title: "Primera cita", description: "Fuimos al parque" },
            // { date: "2025-02-14", title: "San Valentin", description: "Nuestro primer San Valentin juntos" },
        ]
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dvyf0lct6/video/upload/v1770850419/Vicentico_-_Algo_Contigo_Official_Video_yudslv.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 