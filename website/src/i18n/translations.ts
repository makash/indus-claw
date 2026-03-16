export const languages = {
  en: 'English',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  bn: 'বাংলা',
  kn: 'ಕನ್ನಡ',
  ml: 'മലയാളം',
  mr: 'मराठी',
  gu: 'ગુજરાતી',
  pa: 'ਪੰਜਾਬੀ',
  or: 'ଓଡ଼ିଆ',
} as const;

export type Lang = keyof typeof languages;

type TranslationSet = {
  nav: { title: string; github: string; langLabel: string };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
    features: string[];
  };
  llms: {
    title: string;
    subtitle: string;
    headers: { model: string; org: string; params: string; languages: string; notes: string };
    disclaimer: string;
  };
  cta: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    privacy: string;
    success: string;
  };
  footer: {
    tagline: string;
    built: string;
    fork: string;
  };
};

// Languages with full translations
export const translatedLocales = new Set(['en', 'hi', 'ta', 'te', 'bn']);

export const translations: Partial<Record<Lang, TranslationSet>> & { en: TranslationSet } = {
  en: {
    nav: {
      title: 'IndusClaw',
      github: 'GitHub',
      langLabel: 'Language',
    },
    hero: {
      badge: 'Coming Soon',
      title: 'Open-Source AI Agents,',
      titleHighlight: 'Made in India',
      subtitle: 'An India-centric fork of OpenClaw',
      description: 'IndusClaw brings the power of open-source AI agents to India — built with Indian LLM models, supporting all 22 scheduled languages, and optimized for Indian developers and enterprises.',
    },
    about: {
      title: 'What is IndusClaw?',
      description: 'IndusClaw is an India-centric fork of OpenClaw, the open-source personal AI agent framework. We are building a platform that puts Indian language models and Indian developer needs first.',
      features: [
        'Indian LLM-first — designed to work natively with models like Sarvam, Krutrim, and Hanooman',
        'All 22 scheduled Indian languages supported out of the box',
        'Model-agnostic architecture — plug in any LLM provider',
        'Voice-first interactions for India\'s diverse user base',
        'WhatsApp, Telegram, and popular Indian messaging platforms',
        'Self-hosted, privacy-respecting, and fully open-source',
      ],
    },
    llms: {
      title: 'Indian LLMs We\'re Exploring',
      subtitle: 'IndusClaw is model-agnostic. Here are the Indian-origin models on our radar.',
      headers: {
        model: 'Model',
        org: 'Organization',
        params: 'Parameters',
        languages: 'Languages',
        notes: 'Notes',
      },
      disclaimer: 'Early days — no model selection finalized. IndusClaw will support any LLM provider.',
    },
    cta: {
      title: 'Get Early Access',
      subtitle: 'Be the first to know when IndusClaw launches. Drop your email and we\'ll reach out.',
      placeholder: 'your@email.com',
      button: 'Notify Me',
      privacy: 'No spam. Unsubscribe anytime.',
      success: 'You\'re on the list! We\'ll be in touch.',
    },
    footer: {
      tagline: 'Open-Source AI Agents, Made in India',
      built: 'Built with',
      fork: 'A fork of OpenClaw',
    },
  },
  hi: {
    nav: {
      title: 'IndusClaw',
      github: 'GitHub',
      langLabel: 'भाषा',
    },
    hero: {
      badge: 'जल्द आ रहा है',
      title: 'ओपन-सोर्स AI एजेंट,',
      titleHighlight: 'भारत में निर्मित',
      subtitle: 'OpenClaw का भारत-केंद्रित फोर्क',
      description: 'IndusClaw ओपन-सोर्स AI एजेंट्स की शक्ति भारत में लाता है — भारतीय LLM मॉडल्स के साथ निर्मित, सभी 22 अनुसूचित भाषाओं का समर्थन, और भारतीय डेवलपर्स के लिए अनुकूलित।',
    },
    about: {
      title: 'IndusClaw क्या है?',
      description: 'IndusClaw, OpenClaw का भारत-केंद्रित फोर्क है। हम एक ऐसा प्लेटफॉर्म बना रहे हैं जो भारतीय भाषा मॉडल्स और भारतीय डेवलपर्स की ज़रूरतों को प्राथमिकता देता है।',
      features: [
        'भारतीय LLM-प्रथम — Sarvam, Krutrim, और Hanooman जैसे मॉडल्स के साथ काम करने के लिए डिज़ाइन किया गया',
        'सभी 22 अनुसूचित भारतीय भाषाओं का समर्थन',
        'मॉडल-अज्ञेयवादी आर्किटेक्चर — कोई भी LLM प्रदाता जोड़ें',
        'भारत के विविध उपयोगकर्ताओं के लिए वॉइस-फर्स्ट इंटरैक्शन',
        'WhatsApp, Telegram, और लोकप्रिय भारतीय मैसेजिंग प्लेटफॉर्म',
        'सेल्फ-होस्टेड, गोपनीयता-सम्मानजनक, और पूरी तरह ओपन-सोर्स',
      ],
    },
    llms: {
      title: 'भारतीय LLM जिन्हें हम एक्सप्लोर कर रहे हैं',
      subtitle: 'IndusClaw मॉडल-अज्ञेयवादी है। ये भारतीय-मूल के मॉडल्स हमारी नज़र में हैं।',
      headers: {
        model: 'मॉडल',
        org: 'संगठन',
        params: 'पैरामीटर्स',
        languages: 'भाषाएँ',
        notes: 'नोट्स',
      },
      disclaimer: 'शुरुआती दौर — कोई मॉडल चयन अंतिम नहीं। IndusClaw किसी भी LLM प्रदाता का समर्थन करेगा।',
    },
    cta: {
      title: 'अर्ली एक्सेस पाएं',
      subtitle: 'IndusClaw के लॉन्च होने पर सबसे पहले जानें। अपना ईमेल दें और हम संपर्क करेंगे।',
      placeholder: 'your@email.com',
      button: 'मुझे सूचित करें',
      privacy: 'कोई स्पैम नहीं। कभी भी अनसब्सक्राइब करें।',
      success: 'आप सूची में हैं! हम संपर्क करेंगे।',
    },
    footer: {
      tagline: 'ओपन-सोर्स AI एजेंट, भारत में निर्मित',
      built: 'इसके साथ बनाया गया',
      fork: 'OpenClaw का एक फोर्क',
    },
  },
  ta: {
    nav: {
      title: 'IndusClaw',
      github: 'GitHub',
      langLabel: 'மொழி',
    },
    hero: {
      badge: 'விரைவில் வருகிறது',
      title: 'திறந்த மூல AI முகவர்கள்,',
      titleHighlight: 'இந்தியாவில் உருவாக்கப்பட்டது',
      subtitle: 'OpenClaw-ன் இந்திய-மைய போர்க்',
      description: 'IndusClaw திறந்த மூல AI முகவர்களின் சக்தியை இந்தியாவிற்கு கொண்டு வருகிறது — இந்திய LLM மாதிரிகளுடன் கட்டமைக்கப்பட்டது, அனைத்து 22 திட்டமிடப்பட்ட மொழிகளையும் ஆதரிக்கிறது.',
    },
    about: {
      title: 'IndusClaw என்றால் என்ன?',
      description: 'IndusClaw என்பது OpenClaw-ன் இந்திய-மைய போர்க் ஆகும். இந்திய மொழி மாதிரிகள் மற்றும் இந்திய டெவலப்பர் தேவைகளுக்கு முன்னுரிமை அளிக்கும் ஒரு தளத்தை நாங்கள் உருவாக்குகிறோம்.',
      features: [
        'இந்திய LLM-முதல் — Sarvam, Krutrim, Hanooman போன்ற மாதிரிகளுடன் வேலை செய்ய வடிவமைக்கப்பட்டது',
        'அனைத்து 22 திட்டமிடப்பட்ட இந்திய மொழிகளும் ஆதரிக்கப்படுகின்றன',
        'மாதிரி-அஞ்ஞான கட்டமைப்பு — எந்த LLM வழங்குநரையும் இணைக்கவும்',
        'இந்தியாவின் பன்முக பயனர்களுக்கான குரல்-முதல் தொடர்புகள்',
        'WhatsApp, Telegram மற்றும் பிரபலமான இந்திய செய்தியிடல் தளங்கள்',
        'சுய-ஹோஸ்ட், தனியுரிமை-மதிக்கும், முற்றிலும் திறந்த மூல',
      ],
    },
    llms: {
      title: 'நாங்கள் ஆராயும் இந்திய LLM-கள்',
      subtitle: 'IndusClaw மாதிரி-அஞ்ஞானமானது. இவை எங்கள் கவனத்தில் உள்ள இந்திய-தோற்றம் கொண்ட மாதிரிகள்.',
      headers: {
        model: 'மாதிரி',
        org: 'அமைப்பு',
        params: 'அளவுருக்கள்',
        languages: 'மொழிகள்',
        notes: 'குறிப்புகள்',
      },
      disclaimer: 'தொடக்க நாட்கள் — எந்த மாதிரி தேர்வும் இறுதியாகவில்லை.',
    },
    cta: {
      title: 'முன்கூட்டிய அணுகலைப் பெறுங்கள்',
      subtitle: 'IndusClaw தொடங்கும்போது முதலில் தெரிந்துகொள்ளுங்கள்.',
      placeholder: 'your@email.com',
      button: 'எனக்கு தெரிவிக்கவும்',
      privacy: 'ஸ்பேம் இல்லை. எப்போதும் நிறுத்தலாம்.',
      success: 'நீங்கள் பட்டியலில் உள்ளீர்கள்!',
    },
    footer: {
      tagline: 'திறந்த மூல AI முகவர்கள், இந்தியாவில் உருவாக்கப்பட்டது',
      built: 'இதனால் கட்டமைக்கப்பட்டது',
      fork: 'OpenClaw-ன் ஒரு போர்க்',
    },
  },
  te: {
    nav: {
      title: 'IndusClaw',
      github: 'GitHub',
      langLabel: 'భాష',
    },
    hero: {
      badge: 'త్వరలో వస్తోంది',
      title: 'ఓపెన్-సోర్స్ AI ఏజెంట్లు,',
      titleHighlight: 'భారతదేశంలో తయారైంది',
      subtitle: 'OpenClaw యొక్క భారత-కేంద్రిత ఫోర్క్',
      description: 'IndusClaw ఓపెన్-సోర్స్ AI ఏజెంట్ల శక్తిని భారతదేశానికి తీసుకొస్తుంది — భారతీయ LLM మోడల్స్‌తో నిర్మించబడింది, అన్ని 22 షెడ్యూల్డ్ భాషలకు మద్దతు.',
    },
    about: {
      title: 'IndusClaw అంటే ఏమిటి?',
      description: 'IndusClaw అనేది OpenClaw యొక్క భారత-కేంద్రిత ఫోర్క్. భారతీయ భాషా మోడల్స్ మరియు భారతీయ డెవలపర్ అవసరాలకు ప్రాధాన్యత ఇచ్చే ప్లాట్‌ఫారమ్‌ను మేము నిర్మిస్తున్నాము.',
      features: [
        'భారతీయ LLM-ప్రథమ — Sarvam, Krutrim, Hanooman మోడల్స్‌తో పనిచేయడానికి రూపొందించబడింది',
        'అన్ని 22 షెడ్యూల్డ్ భారతీయ భాషలకు మద్దతు',
        'మోడల్-అజ్ఞేయ ఆర్కిటెక్చర్ — ఏ LLM ప్రొవైడర్‌నైనా జోడించండి',
        'భారతదేశ వైవిధ్యమైన వినియోగదారులకు వాయిస్-ఫస్ట్ ఇంటరాక్షన్లు',
        'WhatsApp, Telegram మరియు ప్రసిద్ధ భారతీయ మెసేజింగ్ ప్లాట్‌ఫారమ్‌లు',
        'సెల్ఫ్-హోస్ట్, గోప్యత-గౌరవించే, పూర్తిగా ఓపెన్-సోర్స్',
      ],
    },
    llms: {
      title: 'మేము అన్వేషిస్తున్న భారతీయ LLMలు',
      subtitle: 'IndusClaw మోడల్-అజ్ఞేయమైనది. ఇవి మా దృష్టిలో ఉన్న భారతీయ-మూలం కలిగిన మోడల్స్.',
      headers: {
        model: 'మోడల్',
        org: 'సంస్థ',
        params: 'పారామీటర్లు',
        languages: 'భాషలు',
        notes: 'గమనికలు',
      },
      disclaimer: 'ప్రారంభ దశలు — ఏ మోడల్ ఎంపిక ఖరారు కాలేదు.',
    },
    cta: {
      title: 'ముందస్తు యాక్సెస్ పొందండి',
      subtitle: 'IndusClaw ప్రారంభమైనప్పుడు మొదట తెలుసుకోండి.',
      placeholder: 'your@email.com',
      button: 'నాకు తెలియజేయండి',
      privacy: 'స్పామ్ లేదు. ఎప్పుడైనా అన్‌సబ్‌స్క్రైబ్ చేయండి.',
      success: 'మీరు జాబితాలో ఉన్నారు!',
    },
    footer: {
      tagline: 'ఓపెన్-సోర్స్ AI ఏజెంట్లు, భారతదేశంలో తయారైంది',
      built: 'దీనితో నిర్మించబడింది',
      fork: 'OpenClaw యొక్క ఫోర్క్',
    },
  },
  bn: {
    nav: {
      title: 'IndusClaw',
      github: 'GitHub',
      langLabel: 'ভাষা',
    },
    hero: {
      badge: 'শীঘ্রই আসছে',
      title: 'ওপেন-সোর্স AI এজেন্ট,',
      titleHighlight: 'ভারতে তৈরি',
      subtitle: 'OpenClaw-এর ভারত-কেন্দ্রিক ফর্ক',
      description: 'IndusClaw ওপেন-সোর্স AI এজেন্টদের শক্তি ভারতে নিয়ে আসে — ভারতীয় LLM মডেলের সাথে তৈরি, সমস্ত ২২টি তফসিলি ভাষা সমর্থন করে।',
    },
    about: {
      title: 'IndusClaw কী?',
      description: 'IndusClaw হল OpenClaw-এর ভারত-কেন্দ্রিক ফর্ক। আমরা এমন একটি প্ল্যাটফর্ম তৈরি করছি যা ভারতীয় ভাষা মডেল এবং ভারতীয় ডেভেলপারদের চাহিদাকে অগ্রাধিকার দেয়।',
      features: [
        'ভারতীয় LLM-প্রথম — Sarvam, Krutrim, Hanooman মডেলের সাথে কাজ করতে ডিজাইন করা হয়েছে',
        'সমস্ত ২২টি তফসিলি ভারতীয় ভাষা সমর্থিত',
        'মডেল-অজ্ঞেয় আর্কিটেকচার — যেকোনো LLM প্রদানকারী যোগ করুন',
        'ভারতের বৈচিত্র্যময় ব্যবহারকারীদের জন্য ভয়েস-ফার্স্ট ইন্টারঅ্যাকশন',
        'WhatsApp, Telegram এবং জনপ্রিয় ভারতীয় মেসেজিং প্ল্যাটফর্ম',
        'সেলফ-হোস্টেড, গোপনীয়তা-সম্মানজনক, সম্পূর্ণ ওপেন-সোর্স',
      ],
    },
    llms: {
      title: 'আমরা যে ভারতীয় LLM-গুলো অন্বেষণ করছি',
      subtitle: 'IndusClaw মডেল-অজ্ঞেয়। এগুলো আমাদের নজরে থাকা ভারতীয়-উৎসের মডেল।',
      headers: {
        model: 'মডেল',
        org: 'সংস্থা',
        params: 'প্যারামিটার',
        languages: 'ভাষা',
        notes: 'নোট',
      },
      disclaimer: 'প্রাথমিক পর্যায় — কোনো মডেল নির্বাচন চূড়ান্ত হয়নি।',
    },
    cta: {
      title: 'আর্লি অ্যাক্সেস পান',
      subtitle: 'IndusClaw চালু হলে প্রথমে জানুন।',
      placeholder: 'your@email.com',
      button: 'আমাকে জানান',
      privacy: 'কোনো স্প্যাম নেই। যেকোনো সময় আনসাবস্ক্রাইব করুন।',
      success: 'আপনি তালিকায় আছেন!',
    },
    footer: {
      tagline: 'ওপেন-সোর্স AI এজেন্ট, ভারতে তৈরি',
      built: 'এর সাথে তৈরি',
      fork: 'OpenClaw-এর একটি ফর্ক',
    },
  },
};
