// Sample daily content (Day 1 and 2 have real content, others are placeholders)
const ramadanData = [
    {
        day: 1,
        ayah: {
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            banglaSpelling: "বিসমিল্লাহির রাহমানির রাহীম",
            banglaTranslation: "পরম করুণাময়, অতি দয়ালু আল্লাহর নামে"
        },
        hadith: "যে ব্যক্তি রমাদান মাসে ঈমানের সাথে ও আল্লাহর সন্তুষ্টি অর্জনের আশায় সিয়াম পালন করে, তার পূর্ববর্তী সকল গুনাহ মাফ করে দেওয়া হয়। (বুখারী ও মুসলিম)",
        dua: {
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ",
            banglaSpelling: "আল্লাহুম্মা ইন্নী আসআলুকাল জান্নাতা",
            banglaTranslation: "হে আল্লাহ! আমি তোমার কাছে জান্নাত প্রার্থনা করি।"
        },
        allahNames: [
            { name: "আর-রাহমান", meaning: "পরম করুণাময়" },
            { name: "আর-রাহীম", meaning: "অতি দয়ালু" },
            { name: "আল-মালিক", meaning: "সার্বভৌম অধিপতি" }
        ],
        dailyTask: "আজ কাউকে সাহায্য করুন"
    },
    {
        day: 2,
        ayah: {
            arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
            banglaSpelling: "ওয়াঅিদা সাআলাকা ইবাদী আন্নী ফাইন্নী কারীব",
            banglaTranslation: "আর যখন আমার বান্দারা তোমার কাছে আমার সম্পর্কে জিজ্ঞেস করে, তখন আমি নিকটবর্তী। (সূরা বাকারা: ১৮৬)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'রমজান মাসের প্রথম রাত আসলে শয়তান ও জিনদের শৃঙ্খলাবদ্ধ করা হয়।' (তিরমিযী)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ عُتَقَائِكَ مِنَ النَّارِ",
            banglaSpelling: "আল্লাহুম্মা ইজ্জালনী মিন আউতাক্বাইকা মিনান্নার",
            banglaTranslation: "হে আল্লাহ! আমাকে আগুন থেকে মুক্তি দাও।"
        },
        allahNames: [
            { name: "আল-কাদির", meaning: "সর্বশক্তিমান" },
            { name: "আল-হাকীম", meaning: "প্রজ্ঞাময়" },
            { name: "আল-লাতীফ", meaning: "সূক্ষ্মদর্শী" }
        ],
        dailyTask: "আজ কুরআনের একটি পৃষ্ঠা তিলাওয়াত করুন"
    },
    {
        day: 3,
        ayah: {
            arabic: "فَاصْبِرْ صَبْرًا جَمِيلًا",
            banglaSpelling: "ফাসবির সাবরান জামীলা",
            banglaTranslation: "তাই সুন্দর ধৈর্য ধরো। (সূরা মা'আরিজ: ৫)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'ধৈর্য হলো আলো।' (মুসলিম)",
        dua: {
            arabic: "رَبِّ اشْرَحْ لِي صَدْرِي",
            banglaSpelling: "রব্বিশ রাহলী সাদরী",
            banglaTranslation: "হে আমার প্রভু! আমার বুক প্রশস্ত করে দাও।"
        },
        allahNames: [
            { name: "আস-সবুর", meaning: "অতি ধৈর্যশীল" },
            { name: "আল-গফুর", meaning: "ক্ষমাশীল" },
            { name: "আল-ওয়াদুদ", meaning: "স্নেহময়" }
        ],
        dailyTask: "আজ একজনের জন্য দোয়া করুন"
    },
    {
        day: 4,
        ayah: {
            arabic: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ",
            banglaSpelling: "ওয়ামা খালাকতুল জিন্না ওয়াল ইনসা ইল্লা লিইয়া'বুদূনি",
            banglaTranslation: "আমি জিন ও মানুষকে শুধু আমার ইবাদতের জন্য সৃষ্টি করেছি। (সূরা যারিয়াত: ৫৬)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি আল্লাহর জন্য কিছু ত্যাগ করে, আল্লাহ তার জন্য তার চেয়ে উত্তম কিছু দান করেন।' (তিরমিযী)",
        dua: {
            arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
            banglaSpelling: "আল্লাহুম্মা ইহ্দিনী ওয়াসাদ্দিদ্নী",
            banglaTranslation: "হে আল্লাহ! আমাকে পথ দেখাও এবং সঠিক পথে চালাও।"
        },
        allahNames: [
            { name: "আল-হাদী", meaning: "পথ প্রদর্শক" },
            { name: "আর-রাজ্জাক", meaning: "রিযিকদাতা" },
            { name: "আল-কাহহার", meaning: "পরাক্রমশালী" }
        ],
        dailyTask: "আজ একটি সুন্নাহ পালন করুন"
    },
    {
        day: 5,
        ayah: {
            arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
            banglaSpelling: "ইন্না মা'আল উসরি ইউসরা",
            banglaTranslation: "নিশ্চয়ই কষ্টের সাথে স্বস্তি রয়েছে। (সূরা আশ-শারহ: ৬)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি প্রতিদিন ১০০ বার সুবহানাল্লাহ বলে, তার গুনাহ সমুদ্রের ফেনার মতো হলেও মাফ হয়ে যায়।' (বুখারী)",
        dua: {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ",
            banglaSpelling: "আল্লাহুম্মা ইন্নী আউযুবিকা মিন যাওয়ালি নি'মাতিকা",
            banglaTranslation: "হে আল্লাহ! আমি তোমার নিয়ামত হারিয়ে যাওয়া থেকে তোমার আশ্রয় প্রার্থনা করি।"
        },
        allahNames: [
            { name: "আল-মুহী", meaning: "জীবনদাতা" },
            { name: "আল-কাইয়ুম", meaning: "চিরস্থায়ী" },
            { name: "আল-মুকাদ্দিম", meaning: "অগ্রগামী" }
        ],
        dailyTask: "আজ ১০০ বার সুবহানাল্লাহ পড়ুন"
    },
    {
        day: 6,
        ayah: {
            arabic: "وَمَنْ يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًا",
            banglaSpelling: "ওয়ামান ইয়াত্তাকিল্লাহা ইয়াজআল লাহু মাখরাজা",
            banglaTranslation: "আর যে আল্লাহকে ভয় করে, তিনি তার জন্য উত্তরণের পথ করে দেন। (সূরা তালাক: ২)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'তাকওয়া এখানে।' এবং তিনি তার বুকের দিকে ইশারা করলেন। (মুসলিম)",
        dua: {
            arabic: "اللَّهُمَّ ارزُقْنِي تَقْوَاكَ",
            banglaSpelling: "আল্লাহুম্মা ইরযুকনী তাকওয়াকা",
            banglaTranslation: "হে আল্লাহ! আমাকে তোমার তাকওয়া দান করো।"
        },
        allahNames: [
            { name: "আল-মুতাকাব্বির", meaning: "মহিমান্বিত" },
            { name: "আল-জলীল", meaning: "মহান" },
            { name: "আল-মুজীব", meaning: "দোয়া কবুলকারী" }
        ],
        dailyTask: "আজ একটি গুনাহ থেকে তওবা করুন"
    },
    {
        day: 7,
        ayah: {
            arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
            banglaSpelling: "কুল হুওয়াল্লাহু আহাদ",
            banglaTranslation: "বলো, তিনি আল্লাহ, এক ও অদ্বিতীয়। (সূরা ইখলাস: ১)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি সূরা ইখলাস ১০ বার পড়ে, তার জন্য জান্নাতে একটি প্রাসাদ তৈরি করা হয়।' (আহমদ)",
        dua: {
            arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ",
            banglaSpelling: "আল্লাহুম্মা ইগফির লী যানবী কুল্লাহু",
            banglaTranslation: "হে আল্লাহ! আমার সমস্ত গুনাহ ক্ষমা করে দাও।"
        },
        allahNames: [
            { name: "আস-সামাদ", meaning: "চিরনির্ভরশীল" },
            { name: "আল-কুদ্দুস", meaning: "পবিত্র" },
            { name: "আল-বারী", meaning: "সৃষ্টিকর্তা" }
        ],
        dailyTask: "আজ সূরা ইখলাস ১০ বার পড়ুন"
    },
    {
        day: 8,
        ayah: {
            arabic: "وَلَا تَقُولَنَّ لِشَاْىٍٕ إِنِّى فَاعِلٌ ذَٰلِكَ غَدًا إِلَّآ أَن يَشَآءَ ٱللَّهُ",
            banglaSpelling: "ওয়ালা তাকূলান্না লিশাইয়িন ইন্নী ফাইলুন যালিকা গাদান ইল্লা আন ইয়াশাআল্লাহ",
            banglaTranslation: "কোনো কিছুর জন্য বলো না, 'আমি কাল এটা করব,' যদি না আল্লাহ চান। (সূরা কাহাফ: ২৩-২৪)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি ইনশাআল্লাহ বলে, তার উপর আল্লাহর রহমত নাযিল হয়।' (তাবারানী)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْ لِي نُورًا فِي قَلْبِي",
            banglaSpelling: "আল্লাহুম্মা ইজআল লী নূরান ফী কালবী",
            banglaTranslation: "হে আল্লাহ! আমার হৃদয়ে নূর দান করো।"
        },
        allahNames: [
            { name: "আল-আলীম", meaning: "সর্বজ্ঞ" },
            { name: "আল-খাবির", meaning: "সর্বত্র অবগত" },
            { name: "আল-মুসাওয়ির", meaning: "আকৃতিদাতা" }
        ],
        dailyTask: "আজ প্রতিটি কাজে ইনশাআল্লাহ বলুন"
    },
    {
        day: 9,
        ayah: {
            arabic: "وَٱعْتَصِمُوا۟ بِحَبْلِ ٱللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا۟",
            banglaSpelling: "ওয়া'তাসিমূ বিহাবলিল্লাহি জামীআন ওয়ালা তাফাররাকূ",
            banglaTranslation: "তোমরা সবাই আল্লাহর রশি শক্তভাবে ধরো এবং বিভক্ত হয়ো না। (সূরা আল-ইমরান: ১০৩)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'মুমিনের সাথে মুমিনের সম্পর্ক দেহের অঙ্গ-প্রত্যঙ্গের মতো।' (বুখারী)",
        dua: {
            arabic: "اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا",
            banglaSpelling: "আল্লাহুম্মা আল্লিফ বাইনা কুলূবিনা",
            banglaTranslation: "হে আল্লাহ! আমাদের হৃদয়ের মধ্যে মিল সৃষ্টি করো।"
        },
        allahNames: [
            { name: "আল-ওয়ালী", meaning: "অভিভাবক" },
            { name: "আল-মু'মিন", meaning: "নিরাপত্তাদাতা" },
            { name: "আল-হাফিজ", meaning: "রক্ষাকারী" }
        ],
        dailyTask: "আজ একজনের সাথে সম্পর্ক উন্নত করুন"
    },
    {
        day: 10,
        ayah: {
            arabic: "وَٱلَّذِينَ جَٰهَدُوا۟ فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
            banglaSpelling: "ওয়াল্লাযীনা জাহাদূ ফীনা লানাহদিয়ান্নাহুম সুবুলানা",
            banglaTranslation: "আর যারা আমার পথে সংগ্রাম করে, আমি অবশ্যই তাদেরকে আমার পথ দেখাব। (সূরা আনকাবুত: ৬৯)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'সর্বোত্তম জিহাদ হলো নিজের আত্মার বিরুদ্ধে জিহাদ।' (ইবনে হিব্বান)",
        dua: {
            arabic: "اللَّهُمَّ قَوِّنِي عَلَى طَاعَتِكَ",
            banglaSpelling: "আল্লাহুম্মা কাওয়িনী আলা তা'আতিকা",
            banglaTranslation: "হে আল্লাহ! আমাকে তোমার আনুগত্যে শক্তি দাও।"
        },
        allahNames: [
            { name: "আল-আযীয", meaning: "মহা পরাক্রান্ত" },
            { name: "আল-মুকীত", meaning: "শক্তিদাতা" },
            { name: "আল-ফাত্তাহ", meaning: "বিজয়দাতা" }
        ],
        dailyTask: "আজ একটি খারাপ অভ্যাস ত্যাগ করুন"
    },
    {
        day: 11,
        ayah: {
            arabic: "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ",
            banglaSpelling: "ওয়াআকীমুস সালাতা ওয়াআতুয যাকাতা",
            banglaTranslation: "তোমরা সালাত কায়েম করো এবং যাকাত আদায় করো। (সূরা বাকারা: ৪৩)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'সালাত হলো দ্বীনের স্তম্ভ।' (তিরমিযী)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ",
            banglaSpelling: "আল্লাহুম্মা ইজআলনী মুকীমাস সালাতি",
            banglaTranslation: "হে আল্লাহ! আমাকে সালাত কায়েমকারী করো।"
        },
        allahNames: [
            { name: "আস-সালাম", meaning: "শান্তিদাতা" },
            { name: "আল-মুহসী", meaning: "গণনাকারী" },
            { name: "আল-মুবদী", meaning: "শুরুকারী" }
        ],
        dailyTask: "আজ সময়মতো সালাত আদায় করুন"
    },
    {
        day: 12,
        ayah: {
            arabic: "وَلَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ مِن سُلَٰلَةٍ مِّن طِينٍ",
            banglaSpelling: "ওয়ালাকাদ খালাকনাল ইনসানা মিন সুলালাতিম মিন তীন",
            banglaTranslation: "আর আমি মানুষকে মাটির সারাংশ থেকে সৃষ্টি করেছি। (সূরা মু'মিনুন: ১২)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'আল্লাহর সৃষ্টির প্রতি দয়া করো, আল্লাহ তোমার প্রতি দয়া করবেন।' (আবু দাউদ)",
        dua: {
            arabic: "اللَّهُمَّ ارْحَمْنِي بِرَحْمَتِكَ",
            banglaSpelling: "আল্লাহুম্মা ইরহামনী বিরাহমাতিকা",
            banglaTranslation: "হে আল্লাহ! তোমার রহমত দিয়ে আমার প্রতি দয়া করো।"
        },
        allahNames: [
            { name: "আর-রহমান", meaning: "দয়াশীল" },
            { name: "আল-খালিক", meaning: "স্রষ্টা" },
            { name: "আল-বাছির", meaning: "সর্বদ্রষ্টা" }
        ],
        dailyTask: "আজ প্রকৃতির প্রতি যত্নশীল হোন"
    },
    {
        day: 13,
        ayah: {
            arabic: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ",
            banglaSpelling: "ইয়া আইয়ুহাল্লাযীনা আমানুস্তাঈনূ বিসসাবরি ওয়াসসালাতি",
            banglaTranslation: "হে ঈমানদারগণ! ধৈর্য ও সালাতের মাধ্যমে সাহায্য প্রার্থনা করো। (সূরা বাকারা: ১৫৩)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি কষ্টে ধৈর্য ধরে, আল্লাহ তার জন্য জান্নাত লিখে দেন।' (আহমদ)",
        dua: {
            arabic: "اللَّهُمَّ صَبِّرْنِي عَلَىٰ مَا ابْتَلَيْتَنِي",
            banglaSpelling: "আল্লাহুম্মা সাব্বিরনী আলা মা ইবতালাইতানী",
            banglaTranslation: "হে আল্লাহ! তুমি যে বিপদে আমাকে ফেলেছ, তাতে আমাকে ধৈর্য দাও।"
        },
        allahNames: [
            { name: "আল-মুতী", meaning: "দাতা" },
            { name: "আল-মানি'উ", meaning: "প্রতিরোধকারী" },
            { name: "আল-মুঘনী", meaning: "পরিপূর্ণকারী" }
        ],
        dailyTask: "আজ একটি কষ্টে ধৈর্য ধরুন"
    },
    {
        day: 14,
        ayah: {
            arabic: "وَمَن يُسْلِمْ وَجْهَهُۥ إِلَى ٱللَّهِ وَهُوَ مُحْسِنٌ فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ",
            banglaSpelling: "ওয়ামান ইউসলিম ওয়াজহাহু ইলাল্লাহি ওয়াহুয়া মুহসিনুন ফাকাদিস তামসাকা বিল উরওয়াতিল উসকা",
            banglaTranslation: "যে তার মুখ আল্লাহর দিকে সমর্পণ করে এবং সৎকর্ম করে, সে শক্ত হাতল ধরেছে। (সূরা লুকমান: ২২)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'সরলতা ঈমানের অংশ।' (আবু দাউদ)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الْمُحْسِنِينَ",
            banglaSpelling: "আল্লাহুম্মা ইজআলনী মিনাল মুহসিনীন",
            banglaTranslation: "হে আল্লাহ! আমাকে সৎকর্মশীলদের মধ্যে করো।"
        },
        allahNames: [
            { name: "আল-আদিল", meaning: "ন্যায়বিচারক" },
            { name: "আল-হক্ক", meaning: "সত্য" },
            { name: "আল-মুকসিত", meaning: "ইনসাফকারী" }
        ],
        dailyTask: "আজ একটি সৎ কাজ করুন"
    },
    {
        day: 15,
        ayah: {
            arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
            banglaSpelling: "আলাম নাশরাহ লাকা সাদরাকা",
            banglaTranslation: "আমি কি তোমার বুক প্রশস্ত করে দেইনি? (সূরা আশ-শারহ: ১)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি আল্লাহর জন্য বিনয়ী হয়, আল্লাহ তার মর্যাদা বাড়িয়ে দেন।' (মুসলিম)",
        dua: {
            arabic: "اللَّهُمَّ انْشُرْ رَحْمَتَكَ عَلَيَّ",
            banglaSpelling: "আল্লাহুম্মা ইনশুর রাহমাতাকা আলাইয়া",
            banglaTranslation: "হে আল্লাহ! আমার উপর তোমার রহমত বিস্তার করো।"
        },
        allahNames: [
            { name: "আল-কারীম", meaning: "মহানুভব" },
            { name: "আল-রাফি'উ", meaning: "উন্নতকারী" },
            { name: "আল-মুহাইমিন", meaning: "পর্যবেক্ষক" }
        ],
        dailyTask: "আজ কারো প্রতি বিনয়ী হোন"
    },
    {
        day: 16,
        ayah: {
            arabic: "وَلِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ",
            banglaSpelling: "ওয়ালিল্লাহি মা ফিস সামাওয়াতি ওয়ামা ফিল আরদি",
            banglaTranslation: "আর আল্লাহর জন্যই আছে যা আকাশে ও যা পৃথিবীতে। (সূরা আল-ইমরান: ১০৯)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি দিনে ১০০ বার আলহামদুলিল্লাহ বলে, তার দারিদ্র্য দূর হয়।' (তিরমিযী)",
        dua: {
            arabic: "اللَّهُمَّ بَارِكْ لِي فِي مَا رَزَقْتَنِي",
            banglaSpelling: "আল্লাহুম্মা বারিক লী ফী মা রাযাকতানী",
            banglaTranslation: "হে আল্লাহ! আমাকে যে রিযিক দিয়েছ, তাতে বরকত দাও।"
        },
        allahNames: [
            { name: "আল-ওয়ারিস", meaning: "উত্তরাধিকারী" },
            { name: "আল-মালিকুল মুলক", meaning: "সাম্রাজ্যের মালিক" },
            { name: "আল-মুতাআলী", meaning: "সর্বোচ্চ" }
        ],
        dailyTask: "আজ ১০০ বার আলহামদুলিল্লাহ বলুন"
    },
    {
        day: 17,
        ayah: {
            arabic: "كُلُّ نَفْسٍ ذَآئِقَةُ ٱلْمَوْتِ",
            banglaSpelling: "কুল্লু নাফসিন যাইকাতুল মাউত",
            banglaTranslation: "প্রত্যেক প্রাণী মৃত্যুর স্বাদ গ্রহণ করবে। (সূরা আনকাবুত: ৫৭)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'মৃত্যুকে বেশি স্মরণ করো, এটি তোমার গুনাহ ধুয়ে দেয়।' (ইবনে মাজাহ)",
        dua: {
            arabic: "اللَّهُمَّ أَعِنِّي عَلَىٰ ذِكْرِكَ وَشُكْرِكَ",
            banglaSpelling: "আল্লাহুম্মা আইন্নী আলা যিকরিকা ওয়াশুকরিকা",
            banglaTranslation: "হে আল্লাহ! তোমার যিকির ও শুকরিয়ায় আমাকে সাহায্য করো।"
        },
        allahNames: [
            { name: "আল-মুমীত", meaning: "মৃত্যুদাতা" },
            { name: "আল-বাকী", meaning: "চিরস্থায়ী" },
            { name: "আল-ওয়াহিদ", meaning: "এক ও অদ্বিতীয়" }
        ],
        dailyTask: "আজ মৃত্যু সম্পর্কে চিন্তা করুন"
    },
    {
        day: 18,
        ayah: {
            arabic: "وَٱلَّذِينَ صَبَرُوا۟ ٱبْتِغَآءَ وَجْهِ رَبِّهِمْ",
            banglaSpelling: "ওয়াল্লাযীনা সাবারুব তিগাআ ওয়াজহি রাব্বিহিম",
            banglaTranslation: "আর যারা তাদের প্রভুর সন্তুষ্টি কামনায় ধৈর্য ধরে। (সূরা রা'দ: ২২)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'আল্লাহর কাছে সবচেয়ে প্রিয় আমল হলো ধারাবাহিক আমল।' (বুখারী)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الصَّابِرِينَ",
            banglaSpelling: "আল্লাহুম্মা ইজআলনী মিনাস সাবিরীন",
            banglaTranslation: "হে আল্লাহ! আমাকে ধৈর্যশীলদের মধ্যে করো।"
        },
        allahNames: [
            { name: "আল-জামি'উ", meaning: "সংগ্রাহক" },
            { name: "আল-গনী", meaning: "অভাবমুক্ত" },
            { name: "আল-মুক্তাদির", meaning: "সর্বনিয়ন্ত্রক" }
        ],
        dailyTask: "আজ একটি আমল নিয়মিত করার সংকল্প করুন"
    },
    {
        day: 19,
        ayah: {
            arabic: "وَمَآ أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَٰلَمِينَ",
            banglaSpelling: "ওয়ামা আরসালনাকা ইল্লা রাহমাতাল লিলআলামীন",
            banglaTranslation: "আমি তোমাকে বিশ্বজগতের জন্য রহমত হিসেবে পাঠিয়েছি। (সূরা আম্বিয়া: ১০৭)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'তোমরা পরস্পরের প্রতি দয়া করো, আল্লাহ তোমাদের প্রতি দয়া করবেন।' (তিরমিযী)",
        dua: {
            arabic: "اللَّهُمَّ ارْزُقْنِي حُبَّكَ وَحُبَّ رَسُولِكَ",
            banglaSpelling: "আল্লাহুম্মা ইরযুকনী হুব্বাকা ওয়াহুব্বা রাসূলিকা",
            banglaTranslation: "হে আল্লাহ! আমাকে তোমার ও তোমার রাসূলের ভালোবাসা দান করো।"
        },
        allahNames: [
            { name: "আর-রউফ", meaning: "কোমল হৃদয়" },
            { name: "আল-মাজিদ", meaning: "গৌরবময়" },
            { name: "আল-ওয়াকিল", meaning: "ভরসাস্থল" }
        ],
        dailyTask: "আজ রাসূল (সা.)-এর উপর দরূদ পড়ুন"
    },
    {
        day: 20,
        ayah: {
            arabic: "فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى وَلَا تَكْفُرُونِ",
            banglaSpelling: "ফাযকুরূনী আযকুরকুম ওয়াশকুরূ লী ওয়ালা তাকফুরূনি",
            banglaTranslation: "তোমরা আমাকে স্মরণ করো, আমি তোমাদের স্মরণ করব; আমার প্রতি কৃতজ্ঞতা প্রকাশ করো এবং অকৃতজ্ঞ হয়ো না। (সূরা বাকারা: ১৫২)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি আল্লাহর শুকরিয়া আদায় করে, তার নিয়ামত বৃদ্ধি পায়।' (আহমদ)",
        dua: {
            arabic: "اللَّهُمَّ أَعِنِّي عَلَىٰ شُكْرِكَ",
            banglaSpelling: "আল্লাহুম্মা আইন্নী আলা শুকরিকা",
            banglaTranslation: "হে আল্লাহ! তোমার শুকরিয়ায় আমাকে সাহায্য করো।"
        },
        allahNames: [
            { name: "আশ-শাকুর", meaning: "কৃতজ্ঞতা গ্রহণকারী" },
            { name: "আল-মুনযী", meaning: "উদ্ধারকারী" },
            { name: "আল-মুহীত", meaning: "সর্বব্যাপী" }
        ],
        dailyTask: "আজ আল্লাহর নিয়ামতের জন্য শুকরিয়া আদায় করুন"
    },
    {
        day: 21,
        ayah: {
            arabic: "وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَآ إِلَى ٱللَّهِ",
            banglaSpelling: "ওয়ামান আহসানু কাওলাম মিম্মান দাআ ইলাল্লাহি",
            banglaTranslation: "আর তার চেয়ে সুন্দর কথা কার, যে আল্লাহর দিকে আহ্বান করে? (সূরা ফুসসিলাত: ৩৩)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি একজনকে হিদায়াতের পথে আনে, তার জন্য তার সমান সওয়াব রয়েছে।' (মুসলিম)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْنِي دَاعِيًا إِلَيْكَ",
            banglaSpelling: "আল্লাহুম্মা ইজআলনী দাঈয়ান ইলাইকা",
            banglaTranslation: "হে আল্লাহ! আমাকে তোমার পথে আহ্বানকারী করো।"
        },
        allahNames: [
            { name: "আল-হামীদ", meaning: "প্রশংসিত" },
            { name: "আল-মতীন", meaning: "দৃঢ়" },
            { name: "আল-মুইয", meaning: "সম্মানদাতা" }
        ],
        dailyTask: "আজ কাউকে ভালো কিছু শেখান"
    },
    {
        day: 22,
        ayah: {
            arabic: "إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُتَوَكِّلِينَ",
            banglaSpelling: "ইন্নাল্লাহা ইউহিব্বুল মুতাওয়াক্কিলীন",
            banglaTranslation: "নিশ্চয়ই আল্লাহ তাদের ভালোবাসেন যারা তার উপর ভরসা করে। (সূরা আল-ইমরান: ১৫৯)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি আল্লাহর উপর ভরসা করে, আল্লাহ তার জন্য যথেষ্ট।' (তিরমিযী)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الْمُتَوَكِّلِينَ عَلَيْكَ",
            banglaSpelling: "আল্লাহুম্মা ইজআলনী মিনাল মুতাওয়াক্কিলীন আলাইকা",
            banglaTranslation: "হে আল্লাহ! আমাকে তোমার উপর ভরসাকারীদের মধ্যে করো।"
        },
        allahNames: [
            { name: "আল-কাফী", meaning: "যথেষ্ট" },
            { name: "আল-ওয়াসি'উ", meaning: "প্রশস্ত" },
            { name: "আল-মুজীদ", meaning: "উদ্ভাবক" }
        ],
        dailyTask: "আজ আল্লাহর উপর ভরসা করে একটি কাজ করুন"
    },
    {
        day: 23,
        ayah: {
            arabic: "وَٱللَّهُ يَدْعُوٓا۟ إِلَىٰ دَارِ ٱلسَّلَٰمِ",
            banglaSpelling: "ওয়াল্লাহু ইয়াদঊ ইলা দারিস সালামি",
            banglaTranslation: "আর আল্লাহ শান্তির আবাসের দিকে আহ্বান করেন। (সূরা ইউনুস: ২৫)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'জান্নাতে প্রবেশ করো শান্তির সাথে।' (আবু দাউদ)",
        dua: {
            arabic: "اللَّهُمَّ ادْخِلْنِي دَارَ السَّلَامِ",
            banglaSpelling: "আল্লাহুম্মা আদখিলনী দারাস সালামি",
            banglaTranslation: "হে আল্লাহ! আমাকে শান্তির আবাসে প্রবেশ করাও।"
        },
        allahNames: [
            { name: "আস-সামি'উ", meaning: "সর্বশ্রোতা" },
            { name: "আল-খাফিদ", meaning: "নতকারী" },
            { name: "আল-মুমিন", meaning: "নিরাপত্তাদাতা" }
        ],
        dailyTask: "আজ শান্তি প্রচার করুন"
    },
    {
        day: 24,
        ayah: {
            arabic: "رَبُّكُمْ أَعْلَمُ بِمَا فِى نُفُوسِكُمْ",
            banglaSpelling: "রাব্বুকুম আ'লামু বিমা ফী নুফুসিকুম",
            banglaTranslation: "তোমাদের প্রভু তোমাদের অন্তরে যা আছে তা ভালো জানেন। (সূরা বনী ইসরাঈল: ২৫)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'নিয়তের উপর আমল নির্ভর করে।' (বুখারী ও মুসলিম)",
        dua: {
            arabic: "اللَّهُمَّ طَهِّرْ قَلْبِي مِنَ النِّفَاقِ",
            banglaSpelling: "আল্লাহুম্মা তাহহির কালবী মিনান নিফাকি",
            banglaTranslation: "হে আল্লাহ! আমার হৃদয়কে মুনাফিকি থেকে পবিত্র করো।"
        },
        allahNames: [
            { name: "আল-আখির", meaning: "শেষ" },
            { name: "আল-যাহির", meaning: "প্রকাশ্য" },
            { name: "আল-বাতিন", meaning: "অপ্রকাশ্য" }
        ],
        dailyTask: "আজ নিয়ত খাঁটি করুন"
    },
    {
        day: 25,
        ayah: {
            arabic: "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ",
            banglaSpelling: "ওয়াল্লাযীনা ইউমিনূনা বিমা উনযিলা ইলাইকা",
            banglaTranslation: "আর যারা তোমার প্রতি যা নাযিল করা হয়েছে তাতে ঈমান আনে। (সূরা বাকারা: ৪)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'ঈমানের মিষ্টতা যে পায়, সে পাপ থেকে দূরে থাকে।' (মুসলিম)",
        dua: {
            arabic: "اللَّهُمَّ زِدْنِي إِيمَانًا",
            banglaSpelling: "আল্লাহুম্মা যিদনী ঈমানান",
            banglaTranslation: "হে আল্লাহ! আমার ঈমান বৃদ্ধি করো।"
        },
        allahNames: [
            { name: "আল-হাইয়ু", meaning: "চিরঞ্জীব" },
            { name: "আল-কাবিদ", meaning: "সংকোচনকারী" },
            { name: "আল-বাসিত", meaning: "প্রসারণকারী" }
        ],
        dailyTask: "আজ ঈমান নিয়ে চিন্তা করুন"
    },
    {
        day: 26,
        ayah: {
            arabic: "إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا۟ مَا بِأَنفُسِهِمْ",
            banglaSpelling: "ইন্নাল্লাহা লা ইউগাইয়িরু মা বিকাওমিন হাত্তা ইউগাইয়িরূ মা বি আনফুসিহিম",
            banglaTranslation: "নিশ্চয়ই আল্লাহ কোনো জাতির অবস্থা পরিবর্তন করেন না যতক্ষণ না তারা নিজেদের পরিবর্তন করে। (সূরা রা'দ: ১১)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'নিজেকে পরিবর্তন করো, তাহলে দুনিয়া পরিবর্তন হবে।' (ইবনে মাজাহ)",
        dua: {
            arabic: "اللَّهُمَّ أَصْلِحْ لِي نَفْسِي",
            banglaSpelling: "আল্লাহুম্মা আসলিহ লী নাফসী",
            banglaTranslation: "হে আল্লাহ! আমার নফসকে সংশোধন করো।"
        },
        allahNames: [
            { name: "আল-মুদাব্বির", meaning: "পরিচালক" },
            { name: "আল-মুস্তাআন", meaning: "সাহায্যপ্রাপ্ত" },
            { name: "আল-মুকাদ্দাস", meaning: "পবিত্রকারী" }
        ],
        dailyTask: "আজ নিজের একটি দোষ সংশোধন করুন"
    },
    {
        day: 27,
        ayah: {
            arabic: "قَدْ أَفْلَحَ مَن تَزَكَّىٰ",
            banglaSpelling: "কাদ আফলাহা মান তাযাক্কা",
            banglaTranslation: "সে সফল হয়েছে যে নিজেকে পবিত্র করেছে। (সূরা আ'লা: ১৪)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'লাইলাতুল কদরে ঈমানের সাথে ইবাদত করলে গুনাহ মাফ হয়।' (বুখারী)",
        dua: {
            arabic: "اللَّهُمَّ تَقَبَّلْ مِنِّي صَالِحَ الْأَعْمَالِ",
            banglaSpelling: "আল্লাহুম্মা তাকাব্বাল মিন্নী সালিহাল আ'মালি",
            banglaTranslation: "হে আল্লাহ! আমার সৎ আমল কবুল করো।"
        },
        allahNames: [
            { name: "আল-কাশিফ", meaning: "অপসারণকারী" },
            { name: "আল-মুহিত", meaning: "বেষ্টনকারী" },
            { name: "আল-মুনতাকিম", meaning: "প্রতিশোধকারী" }
        ],
        dailyTask: "আজ লাইলাতুল কদরের জন্য প্রস্তুতি নিন"
    },
    {
        day: 28,
        ayah: {
            arabic: "وَٱلَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَٰعُونَ",
            banglaSpelling: "ওয়াল্লাযীনা হুম লিআমানাতিহিম ওয়া আহদিহিম রাঊন",
            banglaTranslation: "আর যারা তাদের আমানত ও প্রতিশ্রুতি রক্ষা করে। (সূরা মু'মিনুন: ৮)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি আমানত রক্ষা না করে, তার ঈমান নেই।' (আহমদ)",
        dua: {
            arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الْمُوفِينَ بِعَهْدِهِمْ",
            banglaSpelling: "আল্লাহুম্মা ইজআলনী মিনাল মূফীনা বিআহদিহিম",
            banglaTranslation: "হে আল্লাহ! আমাকে প্রতিশ্রুতি রক্ষাকারীদের মধ্যে করো।"
        },
        allahNames: [
            { name: "আল-আমিন", meaning: "বিশ্বস্ত" },
            { name: "আল-মুহাসিব", meaning: "হিসাব গ্রহণকারী" },
            { name: "আল-শাহিদ", meaning: "সাক্ষী" }
        ],
        dailyTask: "আজ একটি প্রতিশ্রুতি পূরণ করুন"
    },
    {
        day: 29,
        ayah: {
            arabic: "فَاذْكُرُوا۟ ٱللَّهَ كَذِكْرِكُمْ ءَابَآءَكُمْ أَوْ أَشَدَّ ذِكْرًا",
            banglaSpelling: "ফাযকুরুল্লাহা কাযিকরিকুম আবাআকুম আউ আশাদ্দা যিকরান",
            banglaTranslation: "তোমরা আল্লাহকে স্মরণ করো যেমন তোমরা তোমাদের পিতৃপুরুষদের স্মরণ করো, বা তার চেয়ে বেশি। (সূরা বাকারা: ২০০)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'যিকির হলো আত্মার খাদ্য।' (ইবনে হিব্বান)",
        dua: {
            arabic: "اللَّهُمَّ ذَكِّرْنِي بِكَ دَائِمًا",
            banglaSpelling: "আল্লাহুম্মা যাক্কিরনী বিকা দাঈমান",
            banglaTranslation: "হে আল্লাহ! আমাকে সর্বদা তোমার স্মরণে রাখো।"
        },
        allahNames: [
            { name: "আল-যাকির", meaning: "স্মরণকারী" },
            { name: "আল-মুকাররিব", meaning: "নিকটবর্তীকারী" },
            { name: "আল-মুদারিক", meaning: "উপলব্ধিকারী" }
        ],
        dailyTask: "আজ ১০০ বার আল্লাহর যিকির করুন"
    },
    {
        day: 30,
        ayah: {
            arabic: "وَمَنْ أَحْسَنُ دِينًا مِّمَّنْ أَسْلَمَ وَجْهَهُۥ لِلَّهِ",
            banglaSpelling: "ওয়ামান আহসানু দীনাম মিম্মান আসলামা ওয়াজহাহু লিল্লাহি",
            banglaTranslation: "আর তার চেয়ে উত্তম দ্বীন কার, যে তার মুখ আল্লাহর জন্য সমর্পণ করেছে? (সূরা নিসা: ১২৫)"
        },
        hadith: "রাসূলুল্লাহ (সা.) বলেছেন, 'রমাদানের শেষে যে ব্যক্তি ক্ষমাপ্রাপ্ত হয়, সে সফল।' (আহমদ)",
        dua: {
            arabic: "اللَّهُمَّ اخْتِمْ لِي بِالْمَغْفِرَةِ",
            banglaSpelling: "আল্লাহুম্মা ইখতিম লী বিল মাগফিরাতি",
            banglaTranslation: "হে আল্লাহ! আমার জন্য ক্ষমার মাধ্যমে সমাপ্তি দাও।"
        },
        allahNames: [
            { name: "আল-আউয়াল", meaning: "প্রথম" },
            { name: "আল-মু'আখখির", meaning: "বিলম্বকারী" },
            { name: "আল-মুনজী", meaning: "মুক্তিদাতা" }
        ],
        dailyTask: "আজ রমাদানের শেষে ক্ষমা প্রার্থনা করুন"
    },
    // Placeholder for remaining days
    ...Array.from({ length: 28 }, (_, i) => ({
        day: i + 3,
        ayah: {
            arabic: `আরবি আয়াত দিন ${i + 3}`,
            banglaSpelling: `বাংলা বানান দিন ${i + 3}`,
            banglaTranslation: `বাংলা অনুবাদ দিন ${i + 3}`
        },
        hadith: `দিন ${i + 3} এর জন্য হাদিস`,
        dua: {
            arabic: `আরবি দোয়া দিন ${i + 3}`,
            banglaSpelling: `বাংলা বানান দিন ${i + 3}`,
            banglaTranslation: `বাংলা অনুবাদ দিন ${i + 3}`
        },
        allahNames: [
            { name: `নাম ১ দিন ${i + 3}`, meaning: `অর্থ ১ দিন ${i + 3}` },
            { name: `নাম ২ দিন ${i + 3}`, meaning: `অর্থ ২ দিন ${i + 3}` },
            { name: `নাম ৩ দিন ${i + 3}`, meaning: `অর্থ ৩ দিন ${i + 3}` }
        ],
        dailyTask: `দিন ${i + 3} এর জন্য কাজ`
    }))
];

// Checklist tasks
const checklistTasks = [
    'সকালের যিকির', 'সন্ধ্যার যিকির', 'দান করা', 'দৈনিক কাজ সম্পন্ন করা',
    'জামাতে নামাজ আদায়', 'কমপক্ষে ৭০ বার ইস্তিগফার', 'কুরআন তিলাওয়াত ও চিন্তা',
    'আল্লাহর নাম মুখস্থ করা', 'দিনের দোয়া মুখস্থ করা', 'দিনের আয়াত মুখস্থ করা',
    'দিনের হাদিস মুখস্থ করা', 'মিসওয়াক ব্যবহার', 'ঘুমের আগে সন্ধ্যার যিকির',
    'নতুন কিছু শেখা'
];

// Salat configuration (Asr has Sunnah)
const tableRows = [
    { name: 'ফজর', fard: true, sunnah: true },
    { name: 'যোহর', fard: true, sunnah: true },
    { name: 'আসর', fard: true, sunnah: true },
    { name: 'মাগরিব', fard: true, sunnah: true },
    { name: 'ইশা', fard: true, sunnah: true },
    { name: 'তারাবীহ', fard: false, sunnah: true },
    { name: 'দুহা', fard: false, sunnah: true },
    { name: 'তাহিয়্যাতুল ওযু', fard: false, sunnah: true }
];

// Generate Salat table
const salatTableBody = document.querySelector('#salat-tracker tbody');
tableRows.forEach((row, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${row.name}</td>
        <td>${row.fard ? `<input type="checkbox" class="fard" data-index="${index < 5 ? index : ''}">` : ''}</td>
        <td>${row.sunnah ? `<input type="checkbox" class="sunnah" data-index="${[0,1,2,3,4,5,6,7,8].indexOf(index)}">` : ''}</td>
    `;
    salatTableBody.appendChild(tr);

    // Toggle checkbox on row click
    tr.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
            const fardCheckbox = tr.querySelector('.fard');
            const sunnahCheckbox = tr.querySelector('.sunnah');
            if (fardCheckbox) fardCheckbox.checked = !fardCheckbox.checked;
            else if (sunnahCheckbox) sunnahCheckbox.checked = !sunnahCheckbox.checked;
        }
    });
});

// Generate checklist
const checklistUl = document.querySelector('#daily-checklist #checklist-items');
checklistTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('checklist-row');
    li.innerHTML = `
        <input type="checkbox" class="checklist" data-index="${index}" id="check-${index}">
        <label for="check-${index}">${task}</label>
    `;
    checklistUl.appendChild(li);

    // Toggle checkbox on row click
    li.addEventListener('click', (e) => {
        const checkbox = li.querySelector('.checklist');
        checkbox.checked = !checkbox.checked; // Toggle checkbox state
    });
});

// Current day management
let currentDay = localStorage.getItem('currentDay') ? parseInt(localStorage.getItem('currentDay')) : 1;

// Function to remove diacritical marks from Arabic text
function removeDiacriticalMarks(text) {
    return text.replace(/ٱ/g, 'ا');
}

function loadDay(day) {
    const data = ramadanData[day - 1];
    document.querySelector('#day-display').textContent = `দিন ${day}`;
    document.querySelector('#daily-ayah .arabic').textContent = removeDiacriticalMarks(data.ayah.arabic);
    document.querySelector('#daily-ayah .bangla-spelling').textContent = data.ayah.banglaSpelling;
    document.querySelector('#daily-ayah .bangla-translation').textContent = data.ayah.banglaTranslation;
    document.querySelector('#daily-hadith p').textContent = data.hadith;
    document.querySelector('#daily-dua .arabic').textContent = removeDiacriticalMarks(data.dua.arabic);
    document.querySelector('#daily-dua .bangla-spelling').textContent = data.dua.banglaSpelling;
    document.querySelector('#daily-dua .bangla-translation').textContent = data.dua.banglaTranslation;
    const allahNamesUl = document.querySelector('#allah-names ul');
    allahNamesUl.innerHTML = '';
    data.allahNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = `${name.name} - ${name.meaning}`;
        allahNamesUl.appendChild(li);
    });
    document.querySelector('#daily-task p').textContent = data.dailyTask;

    // Load user data from local storage
    const userData = JSON.parse(localStorage.getItem(`ramadan_day_${day}`)) || {};
    document.querySelectorAll('.fard').forEach((cb, i) => cb.checked = userData.fardChecks ? userData.fardChecks[i] : false);
    document.querySelectorAll('.sunnah').forEach((cb, i) => cb.checked = userData.sunnahChecks ? userData.sunnahChecks[i] : false);
    document.querySelector('#quran-ayah').value = userData.quran ? userData.quran.ayah : '';
    document.querySelector('#quran-page').value = userData.quran ? userData.quran.page : '';
    document.querySelector('#quran-juz').value = userData.quran ? userData.quran.juz : '';
    document.querySelectorAll('.checklist').forEach((cb, i) => cb.checked = userData.checklist ? userData.checklist[i] : false);
    document.querySelector('#achievements').value = userData.achievements || '';
}

function saveDay(day) {
    const fardChecks = Array.from(document.querySelectorAll('.fard')).map(cb => cb.checked);
    const sunnahChecks = Array.from(document.querySelectorAll('.sunnah')).map(cb => cb.checked);
    const quran = {
        ayah: document.querySelector('#quran-ayah').value,
        page: document.querySelector('#quran-page').value,
        juz: document.querySelector('#quran-juz').value
    };
    const checklist = Array.from(document.querySelectorAll('.checklist')).map(cb => cb.checked);
    const achievements = document.querySelector('#achievements').value;
    const userData = { fardChecks, sunnahChecks, quran, checklist, achievements };
    localStorage.setItem(`ramadan_day_${day}`, JSON.stringify(userData));
}

// Load initial day without saving
loadDay(currentDay);

// Add event listeners to save data on input changes (checkboxes, text inputs, etc.)
document.querySelectorAll('.fard, .sunnah, .checklist, #quran-ayah, #quran-page, #quran-juz, #achievements').forEach(element => {
    element.addEventListener('change', () => saveDay(currentDay));
});

// Navigation event listeners
document.querySelector('#next-day').addEventListener('click', () => {
    if (currentDay < ramadanData.length) { // Use ramadanData.length for dynamic days
        saveDay(currentDay); // Save current day
        currentDay++;
        localStorage.setItem('currentDay', currentDay); // Update currentDay in local storage
        loadDay(currentDay);
        jumpToDaySelect.value = currentDay; // Update dropdown to current day
    }
});

document.querySelector('#prev-day').addEventListener('click', () => {
    if (currentDay > 1) {
        saveDay(currentDay); // Save current day
        currentDay--;
        localStorage.setItem('currentDay', currentDay); // Update currentDay in local storage
        loadDay(currentDay);
        jumpToDaySelect.value = currentDay; // Update dropdown to current day
    }
});

document.querySelector('#jump-to-day').addEventListener('change', (event) => {
    const day = parseInt(event.target.value);
    if (day >= 1 && day <= 30) {
        saveDay(currentDay); // Save current day
        currentDay = day;
        localStorage.setItem('currentDay', currentDay); // Update currentDay in local storage
        loadDay(currentDay);
    }
});

// Add this code after the initial variable declarations in script.js
const jumpToDaySelect = document.querySelector('#jump-to-day');
jumpToDaySelect.innerHTML = ''; // Clear existing options
for (let i = 1; i <= 30; i++) { // Generate options for days 1 to 30
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    jumpToDaySelect.appendChild(option);
}

// Ensure the selected option matches the current day
jumpToDaySelect.value = currentDay; // Set the dropdown to the current day

// Add event listeners to checkboxes
document.querySelectorAll('.daily-checklist input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            alert(this.nextElementSibling.innerText + ' সম্পন্ন হয়েছে!');
        }
    });
});

// Load user data from local storage for checklist
function loadChecklist(day) {
    const userData = JSON.parse(localStorage.getItem(`ramadan_day_${day}`)) || {};
    document.querySelectorAll('.checklist').forEach((cb, i) => cb.checked = userData.checklist ? userData.checklist[i] : false);
}

// Save checklist state to local storage
function saveChecklist(day) {
    const checklist = Array.from(document.querySelectorAll('.checklist')).map(cb => cb.checked);
    const userData = { checklist };
    localStorage.setItem(`ramadan_day_${day}`, JSON.stringify(userData));
}

// Call loadChecklist when loading a day
loadChecklist(currentDay);

// Add event listeners to save data on checklist changes
document.querySelectorAll('.checklist').forEach(element => {
    element.addEventListener('change', () => saveChecklist(currentDay));
});

// Share functionality
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.social-links a[title="Share"]'); // Select the share icon
    if (shareButton) {
        shareButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const shareData = {
                title: 'Ramadan Planner',
                text: 'Check out my Ramadan Planner!',
                url: 'https://sajidtechsolutions.github.io'
            };

            if (navigator.share) {
                // For browsers that support Web Share API
                navigator.share(shareData)
                    .then(() => console.log('Shared successfully'))
                    .catch((err) => console.log('Share failed', err));
            } else if (window.AndroidShareHandler) {
                // For Android WebView
                window.AndroidShareHandler.share(shareData.title, shareData.text, shareData.url);
            } else {
                alert('Sharing is not supported in this environment.');
            }
        });
    }
});

// Function to share link
function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'Ramadan Planner',
            text: 'Check out this amazing Ramadan Planner!',
            url: 'https://sajidtechsolutions.github.io/apps.html'
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error));
    }
}

// Add this code at the end of script.js

// Get modal elements
const modal = document.getElementById("link-modal");
const copyButton = document.getElementById("copy-button");
const closeButton = document.querySelector(".close-button");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Function to copy the link to clipboard
function copyLink() {
    const link = document.getElementById("website-link").textContent;
    navigator.clipboard.writeText(link).then(() => {
        const notification = document.getElementById("copy-notification");
        notification.style.display = "block"; // Show the notification
        setTimeout(() => {
            notification.style.display = "none"; // Hide after 2 seconds
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

// Event listeners
document.querySelector('.social-links a[title="Website"]').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    openModal();
});

closeButton.addEventListener("click", closeModal);
copyButton.addEventListener("click", copyLink);

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Add this code to the existing checkbox event listeners in script.js

// Add event listeners to checkboxes
document.querySelectorAll('.fard, .sunnah, .checklist').forEach(element => {
    element.addEventListener('change', () => {
        // Check if vibration is supported
        if (navigator.vibrate) {
            navigator.vibrate(100); // Vibrate for 100 milliseconds
        }
        saveDay(currentDay); // Save the current day after the change
    });
});

// Add event listeners to all checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(element => {
    element.addEventListener('change', () => {
        // Check if vibration is supported
        if (navigator.vibrate) {
            navigator.vibrate(100); // Vibrate for 100 milliseconds
        }
        saveDay(currentDay); // Save the current day after the change
    });
});