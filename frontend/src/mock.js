// Mock data for Cosmotron Powerlifting Gym

export const mockData = {
  en: {
    // Hero Section
    hero: {
      title: "COSMOTRON",
      slogan: "POWER BEYOND GRAVITY",
      subtitle: "A powerlifting-focused gym where beginners, returning athletes, and professionals alike can find their place in Szeged.",
      backgroundImage: "https://customer-assets.emergentagent.com/job_cosmotron-lift/artifacts/y7cv6qi4_file_0000000015586230bbc3a706feb53869_conversation_id%3D67ffb4f5-5e74-8012-b17e-3fbcd28753a7%26message_id%3D829414af-438b-439d-ab88-a793497798f3.png",
      buttons: {
        pricing: "PRICING",
        leaderboard: "LEADERBOARD"
      }
    },

    // About Section
    about: {
      title: "ABOUT US",
      description: "Cosmotron is a powerlifting-focused gym where beginners, returning athletes, and professionals alike can find their place. Our goal is progress for everyone — that's why we welcome not only powerlifters but anyone who wants to become stronger, more conscious, or simply more active.",
      philosophy: "At the heart of our community lie performance, technique, and unity – and to celebrate this, we've launched the Cosmotron Leaderboard, featuring the strongest lifters from our gym and the city of Szeged. Step in. Show your strength. Get on the list.",
      stats: [
        { number: "Top 10", label: "Leaderboard Spots", clickable: true, navigateTo: "leaderboard" }
      ]
    },

    // Navigation
    navigation: {
      aboutUs: "About Us",
      leaderboard: "Leaderboard", 
      booking: "Booking",
      equipment: "Equipment",
      pricing: "Pricing",
      contact: "Contact"
    },

    // Leaderboard Section
    leaderboard: {
      title: "LEADERBOARD",
      subtitle: "Featuring the strongest lifters from our gym and the city of Szeged.",
      topMen: "TOP 10 MEN",
      topWomen: "TOP 10 WOMEN",
      headers: {
        rank: "RANK",
        photo: "PHOTO", 
        name: "NAME",
        squat: "SQUAT",
        bench: "BENCH",
        deadlift: "DEADLIFT",
        total: "TOTAL",
        dots: "DOTS"
      },
      howToGetOn: "HOW CAN I GET ON THE LIST?",
      rules: {
        purpose: {
          title: "Purpose of the Ranking",
          text: "To motivate, recognize, and track the strongest members of the gym. The 'Top 10 Men' and 'Top 10 Women' lists include those who meet the conditions below."
        },
        whoCanAppear: {
          title: "Who can appear on the list?",
          items: [
            "Anyone training at the gym with a valid monthly pass.",
            "Only exercises performed inside the gym count.",
            "Each applicant must have at least 1 month of active training history with us."
          ]
        },
        whatCounts: {
          title: "What results count?",
          items: [
            "RAW powerlifting total: squat + bench press + deadlift",
            "All lifts must be completed on the same day (within one training session).",
            "Only properly executed lifts accepted by the gym owner are valid."
          ]
        },
        howToGet: {
          title: "How to get on the list?",
          intro: "Attempts must be announced in advance (at least 48 hours), so the gym owner can be present.",
          exercises: "Exercises must be performed according to the rules of the Hungarian Professional League (more details: https://powerlifting.hu/hu/#links – competition rules):",
          exerciseRules: [
            "Squat: depth below the knee line",
            "Bench press: controlled, paused",
            "Deadlift: bar cannot slip from the hands, cannot be dropped"
          ],
          commands: {
            title: "Commands",
            list: [
              "Squat: Squat; Down",
              "Bench press: Start; Press; Rack",
              "Deadlift: Down"
            ]
          },
          clothing: {
            title: "Clothing",
            allowed: [
              "singlet (if available)",
              "T‑shirt",
              "shorts (if not using a singlet)",
              "belt",
              "wrist wraps",
              "knee‑high socks (for deadlift)",
              "shoes (squat shoes, deadlift slippers, or any training shoe)",
              "knee wraps OR knee sleeves"
            ],
            notAllowed: "NOT allowed: elbow sleeves, equipped gear, straps, or any other equipment not listed under 'Clothing'."
          },
          verification: "The performance is verified by the gym owner, and a record is created."
        },
        weightClass: {
          title: "Weight class, gender, ranking",
          items: [
            "Separate lists for men and women.",
            "No weight classes; ranking is based on DOTS (https://strengthinumbrs.com/dots-calculator/).",
            "Weigh‑ins may be done on the gym scale on the day of the attempt or 24 hours prior (if announced in advance)."
          ]
        },
        updates: {
          title: "Updates & Validity",
          items: [
            "The leaderboard is updated once per month.",
            "All results are valid until December 31 of the current calendar year; then the list resets.",
            "All ranked members must show proper behavior. Aggressive or disrespectful conduct may result in removal from the list."
          ]
        },
        rewards: {
          title: "Rewards & Recognition",
          items: [
            "The names and results of Top 10 athletes are displayed on the wall, and also on the website / social media.",
            "At year's end, the Top 3 men and women receive special rewards (e.g., membership pass, gifts, competition support)."
          ]
        },
        documentation: {
          title: "Documentation & Transparency",
          items: [
            "All attempts are recorded on video for fair evaluation.",
            "The current list is public and available in the gym and online.",
            "Participants agree to have their name and image displayed.",
            "Upon request, you may bring up to 2 helpers; if they do not train, entry is free for them."
          ]
        },
        closing: {
          title: "Closing Statement",
          text: "The aim of the rules is to ensure equal conditions. The gym management reserves the right to modify the rules if it serves the community's best interests."
        }
      }
    },

    // Booking Section
    booking: {
      title: "BOOKING",
      subtitle: "Schedule your leaderboard attempt with us.",
      mainText: "Appointment scheduling is available via email or in person at the reception.",
      coordinationText: "If the time slot you selected is already booked, we will continue coordinating via email (or in person).",
      weighInTitle: "You have two options for weigh-ins:",
      weighInOptions: [
        "24 hours before the agreed appointment, OR",
        "1 hour before the agreed appointment (if you choose same-day weigh-in)."
      ],
      exampleTitle: "Example email:",
      exampleText: "'Hello, my name is X.Y., I would like to attempt a lift on Tuesday at 10:00, with same-day weigh-in.'"
    },

    // Equipment Section
    equipment: {
      title: "EQUIPMENT",
      subtitle: "Train with competition-grade equipment that exceeds international powerlifting standards.",
      specs: "✓ COMPETITION GRADE ✓ IPF CERTIFIED ✓ ELITE SPEC"
    },

    // Pricing Section
    pricing: {
      title: "PRICING",
      subtitle: "Choose the membership that fits your training goals and budget.",
      dayPasses: "DAY PASSES",
      memberships: "MEMBERSHIPS", 
      paymentMethods: "PAYMENT METHODS",
      membershipRules: "MEMBERSHIP USAGE RULES",
      importantNotes: "IMPORTANT NOTES",
      vatNote: "Prices include VAT • Invoices are provided in all cases"
    },

    // Contact Section
    contact: {
      title: "GET IN TOUCH",
      subtitle: "Ready to start your strength journey? Visit us, call us, or send us a message.",
      visitUs: "VISIT COSMOTRON",
      sendMessage: "SEND US A MESSAGE",
      address: "Address",
      phone: "Phone", 
      email: "Email",
      openingHours: "Opening Hours",
      followUs: "Follow Us",
      findUs: "Find Us Here",
      mapNote: "Interactive map will be integrated here"
    },

    // Footer
    footer: {
      slogan: "Power Beyond Gravity",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      openingHours: "Opening Hours",
      copyright: "Cosmotron Powerlifting Gym. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions"
    }
  },
  
  hu: {
    // Hero Section
    hero: {
      title: "COSMOTRON",
      slogan: "ERŐ A GRAVITÁCIÓN TÚL",
      subtitle: "Egy erőemelésre szakosodott edzőterem, ahol kezdők, visszatérő sportolók és profi versenyzők egyaránt megtalálhatják a helyüket.",
      backgroundImage: "https://customer-assets.emergentagent.com/job_cosmotron-lift/artifacts/y7cv6qi4_file_0000000015586230bbc3a706feb53869_conversation_id%3D67ffb4f5-5e74-8012-b17e-3fbcd28753a7%26message_id%3D829414af-438b-439d-ab88-a793497798f3.png",
      buttons: {
        pricing: "ÁRAK",
        leaderboard: "RANGLISTA"
      }
    },

    // About Section
    about: {
      title: "RÓLUNK",
      description: "A Cosmotron egy erőemelésre szakosodott edzőterem, ahol kezdők, visszatérő sportolók és profi versenyzők egyaránt megtalálhatják a helyüket. Célunk mindenki fejlődése – ezért nemcsak erőemelőket, hanem mindenkit szívesen látunk, aki erősebbé, tudatosabbá vagy egyszerűen aktívabbá szeretne válni.",
      philosophy: "Közösségünk középpontjában a teljesítmény, a technika és az egység áll – ennek örömére indítottuk el a Cosmotron Ranglistát, amely edzőtermünk és Szeged város legerősebb erőemelőit mutatja be. Lépj be. Mutasd meg az erődet. Kerülj fel a listára.",
      stats: [
        { number: "Top 10", label: "Ranglista Helyezés", clickable: true, navigateTo: "leaderboard" }
      ]
    },

    // Navigation
    navigation: {
      aboutUs: "Rólunk",
      leaderboard: "Ranglista",
      booking: "Foglalás", 
      equipment: "Felszerelés",
      pricing: "Árak",
      contact: "Kapcsolat"
    },

    // Leaderboard Section
    leaderboard: {
      title: "RANGLISTA",
      subtitle: "Edzőtermünk és Szeged legerősebb emelői.",
      topMen: "TOP 10 FÉRFI",
      topWomen: "TOP 10 NŐ",
      headers: {
        rank: "HELYEZÉS",
        photo: "FOTÓ",
        name: "NÉV", 
        squat: "GUGGOLÁS",
        bench: "FEKVE NYOMÁS",
        deadlift: "FELHÚZÁS",
        total: "TOTAL",
        dots: "DOTS"
      },
      howToGetOn: "HOGYAN KERÜLHETEK FEL A LISTÁRA?",
      rules: {
        purpose: {
          title: "A rangsor célja",
          text: "Motiválni, elismerni és nyomonkövetni az edzőterem legerősebb tagjait. A 'Top 10 férfi' és 'Top 10 nő' listákra azok kerülnek fel, akik megfelelnek az alábbi feltételeknek."
        },
        whoCanAppear: {
          title: "Ki kerülhet fel a listára?",
          items: [
            "Bárki, aki az edzőteremben érvényes havi bérlettel edz.",
            "Csak az edzőteremen belül végzett gyakorlatok számítanak.",
            "Minden jelentkezőnek legalább 1 hónapos aktív edzéstörténettel kell rendelkeznie nálunk."
          ]
        },
        whatCounts: {
          title: "Milyen eredmények számítanak?",
          items: [
            "RAW erőemelő összesített: guggolás + fekvenyomás + felhúzás",
            "Minden gyakorlatot ugyanazon a napon kell teljesíteni (egy edzésen belül).",
            "Csak az edzőterem tulajdonosa által elfogadott, szabályosan végrehajtott gyakorlatok érvényesek."
          ]
        },
        howToGet: {
          title: "Hogyan kerülhetek fel a listára?",
          intro: "A kísérleteket előre be kell jelenteni (legalább 48 órával), hogy az edzőterem tulajdonosa jelen lehessen.",
          exercises: "A gyakorlatokat a Magyar Professzionális Erőemelő Liga szabályai szerint kell végrehajtani (további részletek: https://powerlifting.hu/hu/#links – versenyszabályok):",
          exerciseRules: [
            "Guggolás: mélység; csípő a térdvonal alatt",
            "Fekvenyomás: kontrollált, megállított",
            "Felhúzás: a rúd nem csúszhat ki a kézből, nem elejthető"
          ],
          commands: {
            title: "Parancsok",
            list: [
              "Guggolás: SQUAT; LE",
              "Fekvenyomás: START; PRESS; LE",
              "Felhúzás: LE"
            ]
          },
          clothing: {
            title: "Öltözet",
            allowed: [
              "kantáros mez (ha van)",
              "póló",
              "rövidnadrág (ha nincs kantáros mez)",
              "öv",
              "csuklóbandázs",
              "térdig érő zokni (felhúzáshoz)",
              "cipő (guggolócipő, felhúzó papucs vagy bármilyen edzőcipő)",
              "térdgumi VAGY térdbandázs (CSAK AZ EGYIK)"
            ],
            notAllowed: "NEM engedélyezett: könyökvédő, megerősített ruházat, pánt vagy bármilyen más, az 'Öltözet' alatt fel nem sorolt felszerelés."
          },
          verification: "A teljesítményt az edzőterem tulajdonosa ellenőrzi."
        },
        weightClass: {
          title: "Súlycsoport, nem, rangsorolás",
          items: [
            "Külön listák férfiak és nők számára.",
            "Nincsenek súlycsoportok; a rangsorolás DOTS alapján történik (https://strengthinumbrs.com/dots-calculator/).",
            "A mérlegelés az edzőterem mérlegén történhet a kísérlet napján vagy 24 órával korábban (ha előre be van jelentve)."
          ]
        },
        updates: {
          title: "Frissítések és érvényesség",
          items: [
            "A ranglista havonta egyszer frissül.",
            "Minden eredmény a tárgyév december 31-ig érvényes; ezután a lista nullázódik.",
            "Minden rangsorolt tagnak megfelelő viselkedést kell tanúsítania. Agresszív vagy tiszteletlen magatartás a listáról való eltávolítást eredményezheti."
          ]
        },
        rewards: {
          title: "Jutalmak és elismerés",
          items: [
            "A Top 10 sportoló neve és eredménye megjelenik a falon, valamint a weboldalon / közösségi médiában.",
            "Év végén a Top 3 férfi és nő különleges jutalmakat kap (pl. tagsági bérlet, ajándékok, verseny támogatás)."
          ]
        },
        documentation: {
          title: "Dokumentáció és átláthatóság",
          items: [
            "Minden kísérletet videóra rögzítünk a tisztességes értékelés érdekében.",
            "A lista nyilvános és elérhető az edzőteremben és online.",
            "A résztvevők beleegyeznek, hogy nevük és képük megjelenjen.",
            "Kérésre legfeljebb 2 segítőt hozhatsz; ha nem edznek, számukra ingyenes a belépés."
          ]
        },
        closing: {
          title: "Záró nyilatkozat",
          text: "A szabályok célja az egyenlő feltételek biztosítása. Az edzőterem vezetése fenntartja a jogot a szabályok módosítására, ha az a közösség érdekét szolgálja."
        }
      }
    },

    // Booking Section  
    booking: {
      title: "FOGLALÁS",
      subtitle: "Egyeztess velünk időpontot a ranglista kísérletedhez.",
      mainText: "Az időpontegyeztetés e-mailben vagy személyesen a recepción történik.",
      coordinationText: "Ha az általad választott időpont már foglalt, e-mailben (vagy személyesen) folytatjuk az egyeztetést.",
      weighInTitle: "Két lehetőséged van a mérlegelésre:",
      weighInOptions: [
        "24 órával a megbeszélt időpont előtt, VAGY",
        "1 órával a megbeszélt időpont előtt (ha aznapi mérlegelést választasz)."
      ],
      exampleTitle: "Példa e-mail:",
      exampleText: "'Szia, X.Y. vagyok, szeretnék kedden 10:00-kor kísérletet tenni, aznapi mérlegeléssel.'"
    },

    // Equipment Section
    equipment: {
      title: "FELSZERELÉS", 
      subtitle: "Edzz versenyminőségű felszerelésekkel",
      specs: "✓ VERSENY MINŐSÉG ✓ IPF MINŐSÍTETT ✓ ELIT SPECIFIKÁCIÓ"
    },

    // Pricing Section
    pricing: {
      title: "ÁRAK",
      subtitle: "Válaszd ki az edzési céljaidhoz és költségvetésedhez passzoló tagságot.",
      dayPasses: "NAPI BÉRLETEK",
      memberships: "TAGSÁGOK",
      paymentMethods: "FIZETÉSI MÓDOK",
      membershipRules: "TAGSÁG HASZNÁLATI SZABÁLYOK", 
      importantNotes: "FONTOS MEGJEGYZÉSEK",
      vatNote: "Az árak tartalmazzák az ÁFÁ-t • Minden esetben számlát biztosítunk"
    },

    // Contact Section
    contact: {
      title: "KAPCSOLAT",
      subtitle: "Készen állsz az erőnléti utazás kezdésére? Látogass meg, hívj fel, vagy küldj üzenetet.",
      visitUs: "LÁTOGASS EL HOZZÁNK",
      sendMessage: "KÜLDJ ÜZENETET",
      address: "Cím",
      phone: "Telefon",
      email: "Email", 
      openingHours: "Nyitvatartás",
      followUs: "Kövess Minket",
      findUs: "Itt Találsz Minket",
      mapNote: "Interaktív térkép hamarosan integrálásra kerül"
    },

    // Footer
    footer: {
      slogan: "Erő a Gravitáción Túl", 
      quickLinks: "Gyors Linkek",
      contactInfo: "Kapcsolat",
      openingHours: "Nyitvatartás",
      copyright: "Cosmotron Erőemelő Edzőterem. Minden jog fenntartva.",
      privacyPolicy: "Adatvédelmi Szabályzat",
      termsConditions: "Általános Szerződési Feltételek"
    }
  },

  // Leaderboard Data (same for both languages)
  leaderboard: {
    men: [
      { rank: 1, name: "Kovács János", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 250, bench: 180, deadlift: 280, total: 710, dots: 485.2 },
      { rank: 2, name: "Nagy Péter", photo: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3", squat: 240, bench: 175, deadlift: 275, total: 690, dots: 472.1 },
      { rank: 3, name: "Szabó Gábor", photo: "https://images.unsplash.com/photo-1594736797933-d0d00c9e1b7a?ixlib=rb-4.0.3", squat: 235, bench: 170, deadlift: 270, total: 675, dots: 461.8 },
      { rank: 4, name: "Tóth Márton", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 230, bench: 165, deadlift: 265, total: 660, dots: 451.2 },
      { rank: 5, name: "Kiss Dániel", photo: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3", squat: 225, bench: 160, deadlift: 260, total: 645, dots: 440.9 },
      { rank: 6, name: "Molnár László", photo: "https://images.unsplash.com/photo-1594736797933-d0d00c9e1b7a?ixlib=rb-4.0.3", squat: 220, bench: 155, deadlift: 255, total: 630, dots: 430.5 },
      { rank: 7, name: "Horváth Zoltán", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 215, bench: 150, deadlift: 250, total: 615, dots: 420.1 },
      { rank: 8, name: "Varga Tamás", photo: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3", squat: 210, bench: 145, deadlift: 245, total: 600, dots: 409.8 },
      { rank: 9, name: "Fekete András", photo: "https://images.unsplash.com/photo-1594736797933-d0d00c9e1b7a?ixlib=rb-4.0.3", squat: 205, bench: 140, deadlift: 240, total: 585, dots: 399.4 },
      { rank: 10, name: "Balogh Róbert", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 200, bench: 135, deadlift: 235, total: 570, dots: 389.1 }
    ],
    women: [
      { rank: 1, name: "Takács Anna", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 140, bench: 85, deadlift: 160, total: 385, dots: 421.5 },
      { rank: 2, name: "Németh Kata", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3", squat: 135, bench: 80, deadlift: 155, total: 370, dots: 405.2 },
      { rank: 3, name: "Papp Viktória", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3", squat: 130, bench: 75, deadlift: 150, total: 355, dots: 388.9 },
      { rank: 4, name: "Simon Eszter", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 125, bench: 70, deadlift: 145, total: 340, dots: 372.6 },
      { rank: 5, name: "Farkas Ágnes", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3", squat: 120, bench: 65, deadlift: 140, total: 325, dots: 356.3 },
      { rank: 6, name: "Oláh Bernadett", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3", squat: 115, bench: 60, deadlift: 135, total: 310, dots: 340.0 },
      { rank: 7, name: "Rácz Tímea", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 110, bench: 55, deadlift: 130, total: 295, dots: 323.7 },
      { rank: 8, name: "Juhász Petra", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3", squat: 105, bench: 50, deadlift: 125, total: 280, dots: 307.4 },
      { rank: 9, name: "Mészáros Réka", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3", squat: 100, bench: 45, deadlift: 120, total: 265, dots: 291.1 },
      { rank: 10, name: "Lakatos Noémi", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 95, bench: 40, deadlift: 115, total: 250, dots: 274.8 }
    ]
  },

  // Equipment Showcase (same for both languages)
  equipment: [
    {
      id: 1,
      name: "CALIBRATED PLATES",
      nameHu: "KALIBRÁLT TÁRCSÁK",
      description: "Competition-grade calibrated plates meeting IPF standards.",
      descriptionHu: "Versenyminőségű kalibrált tárcsák, amelyek megfelelnek az IPF szabványoknak.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "COMPETITION BARBELLS",
      nameHu: "VERSENY RUDAK",
      description: "IPF-approved competition barbells for squat, bench press, and deadlift with proper specifications.",
      descriptionHu: "IPF által jóváhagyott verseny rudak guggoláshoz, fekvenyomáshoz és felhúzáshoz megfelelő specifikációkkal.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "COMBO RACKS",
      nameHu: "KOMBINÁLT ÁLLVÁNYOK",
      description: "Versatile combo racks for safe squatting and bench pressing with adjustable safety settings.",
      descriptionHu: "Sokoldalú kombinált állványok biztonságos guggoláshoz és fekvenyomáshoz állítható biztonsági beállításokkal.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "MACHINES & ACCESSORIES",
      nameHu: "GÉPEK ÉS KIEGÉSZÍTŐK",
      description: "Supporting machines and accessories for strength training.",
      descriptionHu: "Kiegészítő gépek és tartozékok erőfejlesztő edzéshez.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3"
    }
  ],

  // Pricing Plans (same for both languages) 
  pricing: {
    dayPasses: [
      { type: "Day Pass", typeHu: "Napijegy", price: "2,000 Ft", note: "Single entry", noteHu: "Egyszeri belépés" },
      { type: "Student Day Pass", typeHu: "Diák Napijegy", price: "1,500 Ft", note: "Valid with student ID, up to age 23, single entry", noteHu: "Diákigazolvánnyal érvényes, 23 éves korig, egyszeri belépés" },
      { type: "Master Day Pass", typeHu: "Master Napi Bérlet", price: "1,500 Ft", note: "For ages 60+, single entry", noteHu: "60 év felettieknek, egyszeri belépés" }
    ],
    memberships: [
      { type: "10-Session Pass", typeHu: "10 Alkalmas Bérlet", price: "12,000 Ft", validity: "60 days", validityHu: "60 nap", note: "One entry per day, includes 1 leaderboard attempt", noteHu: "Napi egy belépés, tartalmaz 1 ranglista kísérletet", popular: false },
      { type: "Monthly Pass", typeHu: "Havi Bérlet", price: "12,000 Ft", validity: "30 days", validityHu: "30 nap", note: "One entry per day, includes 1 leaderboard attempt", noteHu: "Napi egy belépés, tartalmaz 1 ranglista kísérletet", popular: false },
      { type: "Student Monthly Pass", typeHu: "Diák Havi Bérlet", price: "10,000 Ft", validity: "30 days", validityHu: "30 nap", note: "Valid with student ID, up to age 23, includes 1 leaderboard attempt", noteHu: "Diákigazolvánnyal érvényes, 23 éves korig, tartalmaz 1 ranglista kísérletet", popular: false },
      { type: "Master Monthly Pass", typeHu: "Master Havi Bérlet", price: "10,000 Ft", validity: "30 days", validityHu: "30 nap", note: "For ages 60+, includes 1 leaderboard attempt", noteHu: "60 év felettieknek, tartalmaz 1 ranglista kísérletet", popular: false },
      { type: "6-Month Pass", typeHu: "6 Hónapos Bérlet", price: "68,000 Ft", validity: "6 months", validityHu: "6 hónap", note: "Includes 1 leaderboard attempt per month", noteHu: "Havonta 1 ranglista kísérletet tartalmaz", popular: false },
      { type: "Annual Pass", typeHu: "Éves Bérlet", price: "134,000 Ft", validity: "12 months", validityHu: "12 hónap", note: "Includes 1 leaderboard attempt per month", noteHu: "Havonta 1 ranglista kísérletet tartalmaz", popular: false },
      { type: "Leaderboard Entry", typeHu: "Ranglista Belépés", price: "5,000 Ft / attempt", validity: "–", validityHu: "–", note: "For multiple leaderboard attempts per month", noteHu: "Több havi ranglista kísérlethez", popular: false }
    ],
    paymentMethods: ["Cash", "Bank transfer"],
    paymentMethodsHu: ["Készpénz", "Banki átutalás"],
    rules: [
      "Memberships are personal and non-transferable.",
      "Lost passes cannot be replaced.",
      "In case of illness, validity can be extended upon request.",
      "Invoices are provided in all cases."
    ],
    rulesHu: [
      "A bérletek személyreszólóak és át nem ruházhatók.",
      "Az elveszett bérleteket nem áll módunkban pótolni.",
      "Betegség esetén kérésre a érvényesség meghosszabbítható.",
      "Minden esetben számlát biztosítunk."
    ]
  },

  // Contact Information
  contact: {
    address: "Szeged, Kálvária sgt. 14.",
    addressHu: "Szeged, Kálvária sgt. 14.",
    phone: "+36 70 431 9953",
    phoneHu: "+36 70 431 9953",
    email: "cosmotrongym@gmail.com",
    emailHu: "cosmotrongym@gmail.com",
    hours: {
      weekdays: "6:00 - 22:00",
      weekdaysHu: "6:00 - 22:00",
      saturday: "6:00 - 22:00", 
      saturdayHu: "6:00 - 22:00",
      sunday: "8:00 - 14:00",
      sundayHu: "8:00 - 14:00"
    },
    socialMedia: {
      instagram: "@cosmotrongym",
      facebook: "Cosmoton Gym"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.4644871658876!2d20.145515776455847!3d46.24681997112442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4744873a5e8c3c3b%3A0x9f8e4e7c4e7c4e7c!2sSzeged%2C%20K%C3%A1lv%C3%A1ria%20sgt.%2014%2C%206724!5e0!3m2!1sen!2shu!4v1234567890123!5m2!1sen!2shu"
  }
};

// Mock API functions for future backend integration
export const mockAPI = {
  // Contact form submission
  submitContactForm: (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact form submitted:', formData);
        resolve({ success: true, message: 'Message sent successfully!' });
      }, 1000);
    });
  },

  // Class booking
  bookClass: (classId, userInfo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Class booked:', classId, userInfo);
        resolve({ success: true, message: 'Class booked successfully!' });
      }, 1000);
    });
  },

  // Membership inquiry
  submitMembershipInquiry: (membershipId, userInfo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Membership inquiry:', membershipId, userInfo);
        resolve({ success: true, message: 'We\'ll contact you within 24 hours!' });
      }, 1000);
    });
  }
};