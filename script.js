/* ============================================================
   ITCoach.de — script.js
   Handles: i18n, dark mode, mobile menu, scroll reveal,
            animated counters, testimonial slider, form validation
============================================================ */

'use strict';

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    logo: 'ITCoach.de',
    nav_about: 'About',
    nav_services: 'Services',
    nav_courses: 'Courses',
    nav_why: 'Why Me',
    nav_testimonials: 'Reviews',
    nav_contact: 'Book a Call',

    hero_eyebrow: 'IT Career Coaching · Germany',
    hero_h1: 'Build Your IT Career in Germany',
    hero_sub: 'Professional Coaching, CV Review, Interview Preparation, Certification Support, and Advanced Software Development Training — tailored for international IT professionals.',
    hero_btn1: 'Book Free Consultation',
    hero_btn2: 'Contact Me',
    trust1: 'Clients Helped',
    trust2: 'Years Experience',
    trust3: 'Courses',

    about_eyebrow: 'About Me',
    about_h2: 'Your Partner for IT Success in Germany',
    about_p1: "I'm a Senior Software Engineer and Career Mentor with over 11 years of hands-on experience in the German IT market. I specialize in ASP.NET, Angular, and full-stack development — and I've helped dozens of international IT professionals land jobs and grow their careers in Germany.",
    about_p2: 'Whether you need technical upskilling, CV optimization, or guidance navigating the German job market, I offer a personalized, practical approach that gets real results.',
    tag1: 'ASP.NET Expert', tag2: 'Angular Developer', tag3: 'Career Mentor', tag4: 'IT Consultant', tag5: 'AI Enthusiast',
    ab_badge1: 'Years Exp.', ab_badge2: 'Germany',
    about_cta: "Let's Talk",

    services_eyebrow: 'What I Offer',
    services_h2: 'Career Services',
    services_sub: 'Everything you need to land and grow in the German IT market.',
    s1_title: 'CV Review & Optimization', s1_desc: "ATS-friendly resume tailored to German market standards. I'll restructure, sharpen, and transform your CV into a tool that gets interviews.",
    s1_f1: 'Professional CV optimization', s1_f2: 'ATS-friendly formatting', s1_f3: 'German market standards',
    s2_title: 'Job Market Guidance', s2_desc: "Navigate Germany's IT job landscape with confidence. From job boards to LinkedIn, I'll guide your full search strategy.",
    s2_f1: 'Finding opportunities in Germany', s2_f2: 'LinkedIn profile optimization', s2_f3: 'Job application strategies',
    s3_title: 'Certificate Recognition', s3_desc: 'I help you navigate the German Anerkennung process — document preparation, equivalence guidance, and authority communication.',
    s3_f1: 'German certificate recognition', s3_f2: 'Qualification equivalence guidance', s3_f3: 'Documentation assistance',
    s4_title: 'Interview Preparation', s4_desc: 'Mock interviews, technical drills, and HR coaching. Build the confidence to perform under pressure and land the offer.',
    s4_f1: 'Technical & HR interviews', s4_f2: 'Mock interview sessions', s4_f3: 'Confidence coaching',

    courses_eyebrow: 'Level Up',
    courses_h2: 'Training Courses',
    courses_sub: "Practical, project-based courses taught by a working engineer — not slides from a textbook.",
    level_inter: 'Intermediate', level_beg: 'Beginner+', level_all: 'All Levels',
    c1_desc: 'Build modern, reactive SPAs using the latest Angular features including Signals and standalone components.',
    c2_desc: 'Design production-grade APIs with Clean Architecture, JWT auth, Dapper, and performance patterns.',
    c3_desc: 'Move beyond REST. Master schema-first API design, queries, mutations, and subscriptions.',
    c4_desc: 'Design efficient databases, write powerful stored procedures, and optimize for production performance.',
    c5_desc: 'Build real AI agents and automation workflows. LLMs, MCP, and practical projects you can ship.',
    c6_desc: 'Build professional Windows desktop apps with MVVM, data binding, and modern UI patterns.',
    badge_hot: 'Hot 🔥',
    learn_more: 'Learn More',

    why_eyebrow: 'The Difference',
    why_h2: 'Why Choose Me',
    why_sub: 'Real results. Real industry experience. No generic advice.',
    stat1: 'Interview Success Rate', stat2: 'Clients Helped', stat3: 'Years in Germany', stat4: 'Personalized Sessions',
    wf1_title: 'Real Industry Experience', wf1_desc: 'I work as a Senior Software Engineer in Germany — the coaching comes from lived, daily experience, not theory.',
    wf2_title: 'Germany-Focused Guidance', wf2_desc: "German hiring culture, bureaucracy, and market expectations — I know what employers here actually look for.",
    wf3_title: 'Personalized Coaching', wf3_desc: 'Every session is built around your specific background, goals, and gaps — no cookie-cutter programs.',
    wf4_title: 'Practical Training', wf4_desc: 'Courses and coaching sessions always end with something you can use immediately — not just knowledge.',

    testi_eyebrow: 'Client Reviews',
    testi_h2: 'What People Say',
    t1_quote: '"The CV review completely transformed how recruiters saw me. Within two weeks I had three interview invitations. The coaching is genuinely tailored — he understood my background and market position immediately."',
    t1_name: 'Ahmad Karimi', t1_role: 'Software Developer · Frankfurt',
    t2_quote: '"I passed my technical interview at a top Munich company after just three mock interview sessions. The preparation was intense and very specific to what German IT companies actually ask. Worth every euro."',
    t2_name: 'Sara Farouk', t2_role: 'Backend Engineer · Munich',
    t3_quote: '"The Angular and ASP.NET courses are the best I\'ve taken — and I\'ve tried Udemy and Coursera. Real code, real patterns, and a teacher who actually works with this stuff daily. My code quality improved dramatically."',
    t3_name: 'Mohammed Hasan', t3_role: 'Junior Developer · Berlin',
    t4_quote: '"Certificate recognition in Germany seemed impossible until I got clear guidance on the entire process. Everything was explained step by step. I got my qualification recognized in three months."',
    t4_name: 'Rania Lahouel', t4_role: 'IT Project Manager · Hamburg',

    contact_eyebrow: 'Get In Touch',
    contact_h2: 'Book Your Free Consultation',
    contact_sub: '30 minutes, no obligation. We\'ll talk about your situation, your goals, and what the right next step looks like for you.',
    cd_loc: 'Location', cd_wa: 'Available on request',
    f_name: 'Name', f_email: 'Email', f_phone: 'Phone (optional)', f_service: 'Service Needed', f_msg: 'Message',
    fp_name: 'Your name', fp_email: 'you@example.com', fp_msg: 'Tell me about your situation and goals...',
    f_serv0: '— Select —', f_serv1: 'CV Review', f_serv2: 'Job Market Guidance', f_serv3: 'Certificate Recognition',
    f_serv4: 'Interview Preparation', f_serv5: 'Training Course', f_serv6: 'Other',
    f_submit: 'Send Message',
    f_success: '✓ Message sent! I\'ll be in touch within 24 hours.',
    err_required: 'This field is required.',
    err_email: 'Please enter a valid email address.',

    footer_desc: 'Helping international IT professionals build successful careers in Germany.',
    footer_quick: 'Quick Links', footer_services: 'Services', footer_courses: 'Courses',
    footer_copy: '© 2025 ITCoach.de · All rights reserved.',
    footer_made: 'Made with ❤️ for the IT community in Germany',
  },

  de: {
    logo: 'ITCoach.de',
    nav_about: 'Über mich',
    nav_services: 'Leistungen',
    nav_courses: 'Kurse',
    nav_why: 'Warum ich',
    nav_testimonials: 'Bewertungen',
    nav_contact: 'Termin buchen',

    hero_eyebrow: 'IT-Karrierecoaching · Deutschland',
    hero_h1: 'Starte deine IT-Karriere in Deutschland',
    hero_sub: 'Professionelles Coaching, Lebenslauf-Review, Interview-Vorbereitung, Anerkennungsunterstützung und IT-Weiterbildung — maßgeschneidert für internationale IT-Fachkräfte.',
    hero_btn1: 'Kostenlos anfragen',
    hero_btn2: 'Kontakt aufnehmen',
    trust1: 'Betreute Kunden',
    trust2: 'Jahre Erfahrung',
    trust3: 'Kurse',

    about_eyebrow: 'Über mich',
    about_h2: 'Dein Partner für IT-Erfolg in Deutschland',
    about_p1: 'Ich bin Senior Software Engineer und Karriereberater mit über 11 Jahren praktischer Erfahrung im deutschen IT-Markt. Meine Schwerpunkte sind ASP.NET, Angular und Full-Stack-Entwicklung — und ich habe bereits Dutzenden internationaler IT-Fachkräfte geholfen, in Deutschland Stellen zu finden und Karriere zu machen.',
    about_p2: 'Ob technische Weiterbildung, Lebenslauf-Optimierung oder Orientierung auf dem deutschen Arbeitsmarkt — ich biete einen persönlichen, praxisnahen Ansatz, der echte Ergebnisse liefert.',
    tag1: 'ASP.NET-Experte', tag2: 'Angular-Entwickler', tag3: 'Karrierementor', tag4: 'IT-Berater', tag5: 'KI-Enthusiast',
    ab_badge1: 'Jahre Erfahrung', ab_badge2: 'Deutschland',
    about_cta: 'Jetzt sprechen',

    services_eyebrow: 'Mein Angebot',
    services_h2: 'Karriereleistungen',
    services_sub: 'Alles, was du brauchst, um im deutschen IT-Markt Fuß zu fassen und zu wachsen.',
    s1_title: 'Lebenslauf-Review & Optimierung', s1_desc: 'ATS-optimierter Lebenslauf nach deutschen Marktstandards. Ich strukturiere und schärfe deinen Lebenslauf so, dass er Interviews generiert.',
    s1_f1: 'Professionelle Lebenslauf-Optimierung', s1_f2: 'ATS-freundliche Formatierung', s1_f3: 'Deutsche Marktstandards',
    s2_title: 'Arbeitsmarkt-Beratung', s2_desc: 'Navigiere den deutschen IT-Jobmarkt mit Zuversicht. Von Jobbörsen bis LinkedIn begleite ich deine gesamte Bewerbungsstrategie.',
    s2_f1: 'Jobsuche in Deutschland', s2_f2: 'LinkedIn-Profiloptimierung', s2_f3: 'Bewerbungsstrategien',
    s3_title: 'Anerkennung von Zeugnissen', s3_desc: 'Ich helfe dir beim deutschen Anerkennungsverfahren — Dokumentenvorbereitung, Gleichwertigkeitsberatung und Behördenkommunikation.',
    s3_f1: 'Anerkennung ausländischer Abschlüsse', s3_f2: 'Gleichwertigkeitsberatung', s3_f3: 'Dokumentenunterstützung',
    s4_title: 'Interview-Vorbereitung', s4_desc: 'Mock-Interviews, technisches Training und HR-Coaching. Baue das Selbstvertrauen auf, das du brauchst, um unter Druck zu glänzen.',
    s4_f1: 'Technische & HR-Interviews', s4_f2: 'Mock-Interview-Sessions', s4_f3: 'Selbstvertrauens-Coaching',

    courses_eyebrow: 'Weiterbildung',
    courses_h2: 'Trainingskurse',
    courses_sub: 'Praxisnahe, projektbasierte Kurse — von einem aktiven Ingenieur unterrichtet, nicht aus Folien abgelesen.',
    level_inter: 'Fortgeschrittene', level_beg: 'Anfänger+', level_all: 'Alle Level',
    c1_desc: 'Moderne, reaktive SPAs mit den neuesten Angular-Features inkl. Signals und Standalone-Komponenten erstellen.',
    c2_desc: 'Produktionsreife APIs mit Clean Architecture, JWT-Authentifizierung, Dapper und Performance-Mustern entwickeln.',
    c3_desc: 'Über REST hinausgehen. Schema-first API-Design, Queries, Mutations und Subscriptions meistern.',
    c4_desc: 'Effiziente Datenbanken entwerfen, leistungsstarke Stored Procedures schreiben und für Produktion optimieren.',
    c5_desc: 'Echte KI-Agenten und Automatisierungsworkflows bauen. LLMs, MCP und praxisnahe Projekte, die du deployen kannst.',
    c6_desc: 'Professionelle Windows-Desktop-Apps mit MVVM, Data Binding und modernen UI-Mustern entwickeln.',
    badge_hot: 'Beliebt 🔥',
    learn_more: 'Mehr erfahren',

    why_eyebrow: 'Der Unterschied',
    why_h2: 'Warum ich?',
    why_sub: 'Echte Ergebnisse. Echte Praxiserfahrung. Keine allgemeinen Ratschläge.',
    stat1: 'Interview-Erfolgsquote', stat2: 'Betreute Kunden', stat3: 'Jahre in Deutschland', stat4: 'Personalisierte Sessions',
    wf1_title: 'Echte Praxiserfahrung', wf1_desc: 'Ich arbeite täglich als Senior Software Engineer in Deutschland — mein Coaching kommt aus gelebter Erfahrung, nicht aus Büchern.',
    wf2_title: 'Deutschland-fokussierte Beratung', wf2_desc: 'Deutsche Unternehmenskultur, Bürokratie und Markterwartungen — ich weiß, was Arbeitgeber hier wirklich suchen.',
    wf3_title: 'Personalisiertes Coaching', wf3_desc: 'Jede Session ist auf deinen konkreten Hintergrund, deine Ziele und Lücken ausgerichtet — keine Einheitsprogramme.',
    wf4_title: 'Praxisorientiertes Training', wf4_desc: 'Kurse und Coaching-Sessions enden immer mit etwas, das du sofort anwenden kannst — nicht nur mit neuem Wissen.',

    testi_eyebrow: 'Kundenstimmen',
    testi_h2: 'Was Kunden sagen',
    t1_quote: '„Das Lebenslauf-Review hat komplett verändert, wie mich Recruiter wahrnahmen. Innerhalb von zwei Wochen hatte ich drei Interview-Einladungen. Das Coaching ist wirklich individuell — er hat meinen Hintergrund sofort verstanden."',
    t1_name: 'Ahmad Karimi', t1_role: 'Software-Entwickler · Frankfurt',
    t2_quote: '„Nach nur drei Mock-Interview-Sessions habe ich mein technisches Interview bei einem Top-Unternehmen in München bestanden. Die Vorbereitung war intensiv und sehr spezifisch auf das, was deutsche IT-Firmen wirklich fragen."',
    t2_name: 'Sara Farouk', t2_role: 'Backend-Entwicklerin · München',
    t3_quote: '„Die Angular- und ASP.NET-Kurse sind die besten, die ich je gemacht habe — und ich habe Udemy und Coursera ausprobiert. Echter Code, echte Muster, und ein Lehrer, der täglich damit arbeitet."',
    t3_name: 'Mohammed Hasan', t3_role: 'Junior-Entwickler · Berlin',
    t4_quote: '„Die Zeugnisanerkennung in Deutschland schien unmöglich, bis ich klare Anleitung zum gesamten Prozess bekam. Alles wurde Schritt für Schritt erklärt. Mein Abschluss wurde in drei Monaten anerkannt."',
    t4_name: 'Rania Lahouel', t4_role: 'IT-Projektmanagerin · Hamburg',

    contact_eyebrow: 'Kontakt',
    contact_h2: 'Kostenloses Erstgespräch buchen',
    contact_sub: '30 Minuten, unverbindlich. Wir sprechen über deine Situation, deine Ziele und den nächsten sinnvollen Schritt.',
    cd_loc: 'Standort', cd_wa: 'Auf Anfrage verfügbar',
    f_name: 'Name', f_email: 'E-Mail', f_phone: 'Telefon (optional)', f_service: 'Gewünschte Leistung', f_msg: 'Nachricht',
    fp_name: 'Dein Name', fp_email: 'du@beispiel.de', fp_msg: 'Erzähl mir von deiner Situation und deinen Zielen...',
    f_serv0: '— Bitte wählen —', f_serv1: 'Lebenslauf-Review', f_serv2: 'Arbeitsmarkt-Beratung', f_serv3: 'Zeugnisanerkennung',
    f_serv4: 'Interview-Vorbereitung', f_serv5: 'Trainingskurs', f_serv6: 'Sonstiges',
    f_submit: 'Nachricht senden',
    f_success: '✓ Nachricht gesendet! Ich melde mich innerhalb von 24 Stunden.',
    err_required: 'Dieses Feld ist erforderlich.',
    err_email: 'Bitte gib eine gültige E-Mail-Adresse ein.',

    footer_desc: 'Internationale IT-Fachkräfte auf dem Weg zu einer erfolgreichen Karriere in Deutschland begleiten.',
    footer_quick: 'Schnelllinks', footer_services: 'Leistungen', footer_courses: 'Kurse',
    footer_copy: '© 2025 ITCoach.de · Alle Rechte vorbehalten.',
    footer_made: 'Mit ❤️ für die IT-Community in Deutschland gemacht',
  },

  ar: {
    logo: 'ITCoach.de',
    nav_about: 'عنّي',
    nav_services: 'الخدمات',
    nav_courses: 'الدورات',
    nav_why: 'لماذا أنا',
    nav_testimonials: 'آراء العملاء',
    nav_contact: 'احجز استشارة',

    hero_eyebrow: 'تدريب مسار IT · ألمانيا',
    hero_h1: 'ابنِ مسيرتك المهنية في ألمانيا',
    hero_sub: 'تدريب احترافي، مراجعة السيرة الذاتية، التحضير للمقابلات، دعم الاعتراف بالشهادات، وتدريب متقدم في تطوير البرمجيات — مصمّم خصيصاً للمحترفين الدوليين في مجال IT.',
    hero_btn1: 'احجز استشارة مجانية',
    hero_btn2: 'تواصل معي',
    trust1: 'عميل مستفاد',
    trust2: 'سنوات خبرة',
    trust3: 'دورات تدريبية',

    about_eyebrow: 'عنّي',
    about_h2: 'شريكك في النجاح المهني بألمانيا',
    about_p1: 'أنا مهندس برمجيات أول ومرشد مهني بخبرة تتجاوز 11 سنة في سوق تكنولوجيا المعلومات الألماني. تخصصي في ASP.NET وAngular وتطوير full-stack، وقد ساعدت عشرات المحترفين الدوليين في الحصول على وظائف وتنمية مسيرتهم المهنية في ألمانيا.',
    about_p2: 'سواء كنت بحاجة إلى تطوير مهاراتك التقنية، أو تحسين سيرتك الذاتية، أو التوجيه في سوق العمل الألماني، أقدم نهجاً شخصياً وعملياً يُنتج نتائج حقيقية.',
    tag1: 'خبير ASP.NET', tag2: 'مطوّر Angular', tag3: 'مرشد مهني', tag4: 'مستشار IT', tag5: 'متحمس للذكاء الاصطناعي',
    ab_badge1: 'سنوات خبرة', ab_badge2: 'ألمانيا',
    about_cta: 'لنتحدث',

    services_eyebrow: 'ما أقدّمه',
    services_h2: 'خدمات المسار المهني',
    services_sub: 'كل ما تحتاجه للانطلاق والنمو في سوق IT الألماني.',
    s1_title: 'مراجعة وتحسين السيرة الذاتية', s1_desc: 'سيرة ذاتية متوافقة مع أنظمة ATS وفق معايير السوق الألماني. أُعيد هيكلة وتحسين CV الخاص بك ليجلب المقابلات.',
    s1_f1: 'تحسين احترافي للسيرة الذاتية', s1_f2: 'تنسيق متوافق مع ATS', s1_f3: 'معايير السوق الألماني',
    s2_title: 'الإرشاد في سوق العمل', s2_desc: 'تنقّل في سوق وظائف IT الألماني بثقة. من لوحات الوظائف إلى LinkedIn، سأرشدك في استراتيجية بحثك الكاملة.',
    s2_f1: 'إيجاد الفرص في ألمانيا', s2_f2: 'تحسين ملف LinkedIn', s2_f3: 'استراتيجيات التقديم على الوظائف',
    s3_title: 'الاعتراف بالشهادات', s3_desc: 'أساعدك في التنقل في عملية Anerkennung الألمانية — تحضير الوثائق والتوجيه حول التعادل والتواصل مع الجهات المختصة.',
    s3_f1: 'الاعتراف بالشهادات الأجنبية', s3_f2: 'إرشاد بشأن تعادل المؤهلات', s3_f3: 'مساعدة في التوثيق',
    s4_title: 'التحضير للمقابلات', s4_desc: 'مقابلات تجريبية وتدريب تقني وإرشاد HR. ابنِ الثقة اللازمة للأداء تحت الضغط ولتحصل على العرض.',
    s4_f1: 'المقابلات التقنية وHR', s4_f2: 'جلسات مقابلات تجريبية', s4_f3: 'تدريب على بناء الثقة',

    courses_eyebrow: 'طوّر نفسك',
    courses_h2: 'الدورات التدريبية',
    courses_sub: 'دورات عملية قائمة على المشاريع يقدّمها مهندس يعمل في المجال فعلياً.',
    level_inter: 'متوسط', level_beg: 'مبتدئ+', level_all: 'جميع المستويات',
    c1_desc: 'بناء تطبيقات SPA حديثة وتفاعلية باستخدام أحدث ميزات Angular بما فيها Signals والمكونات المستقلة.',
    c2_desc: 'تصميم APIs احترافية جاهزة للإنتاج بهندسة نظيفة، JWT، Dapper، وأنماط أداء متقدمة.',
    c3_desc: 'تجاوز REST. إتقان تصميم API المعتمد على Schema والاستعلامات والـ Mutations.',
    c4_desc: 'تصميم قواعد بيانات فعّالة وكتابة Stored Procedures قوية والتحسين لبيئات الإنتاج.',
    c5_desc: 'بناء وكلاء ذكاء اصطناعي حقيقية وسير عمل آلية. LLMs وMCP ومشاريع عملية قابلة للنشر.',
    c6_desc: 'بناء تطبيقات سطح مكتب Windows احترافية بنمط MVVM وربط البيانات وأنماط UI الحديثة.',
    badge_hot: 'رائج 🔥',
    learn_more: 'اعرف أكثر',

    why_eyebrow: 'الفرق',
    why_h2: 'لماذا تختارني؟',
    why_sub: 'نتائج حقيقية. خبرة صناعية حقيقية. لا نصائح عامة.',
    stat1: 'نسبة نجاح المقابلات', stat2: 'عميل مستفاد', stat3: 'سنوات في ألمانيا', stat4: 'جلسات مخصصة',
    wf1_title: 'خبرة صناعية حقيقية', wf1_desc: 'أعمل يومياً كمهندس برمجيات أول في ألمانيا — التدريب مستمد من تجربة يومية حقيقية، لا من كتب نظرية.',
    wf2_title: 'توجيه مُركّز على ألمانيا', wf2_desc: 'ثقافة التوظيف الألمانية، البيروقراطية، وتوقعات السوق — أعرف ما يبحث عنه أصحاب العمل هنا فعلاً.',
    wf3_title: 'تدريب شخصي', wf3_desc: 'كل جلسة مبنية حول خلفيتك وأهدافك وثغراتك المحددة — لا برامج جاهزة بحجم واحد.',
    wf4_title: 'تدريب عملي', wf4_desc: 'الدورات وجلسات التدريب تنتهي دائماً بشيء يمكنك تطبيقه فوراً — وليس بمعرفة نظرية فحسب.',

    testi_eyebrow: 'آراء العملاء',
    testi_h2: 'ماذا يقول الناس',
    t1_quote: '"مراجعة السيرة الذاتية غيّرت كلياً كيف ينظر إليّ المُجنِّدون. في غضون أسبوعين حصلت على ثلاثة دعوات لمقابلات. التدريب مخصص فعلاً — فهم خلفيتي وموقعي في السوق فوراً."',
    t1_name: 'أحمد كريمي', t1_role: 'مطوّر برمجيات · فرانكفورت',
    t2_quote: '"اجتزت مقابلتي التقنية في شركة رائدة في ميونيخ بعد ثلاث جلسات تجريبية فحسب. التحضير كان مكثفاً ومحدداً جداً لما تسأله شركات IT الألمانية. يستحق كل يورو."',
    t2_name: 'سارة فاروق', t2_role: 'مهندسة backend · ميونيخ',
    t3_quote: '"دورات Angular وASP.NET هي الأفضل التي أخذتها على الإطلاق — وقد جربت Udemy وCoursera. كود حقيقي، أنماط حقيقية، ومعلم يعمل بها يومياً. تحسّنت جودة كودي بشكل كبير."',
    t3_name: 'محمد حسن', t3_role: 'مطوّر مبتدئ · برلين',
    t4_quote: '"بدا الاعتراف بشهادتي في ألمانيا مستحيلاً حتى حصلت على توجيه واضح لكل العملية. شُرح كل شيء خطوة بخطوة. حصلت على اعتراف مؤهلي في ثلاثة أشهر."',
    t4_name: 'رانيا لهول', t4_role: 'مديرة مشاريع IT · هامبورغ',

    contact_eyebrow: 'تواصل معي',
    contact_h2: 'احجز استشارتك المجانية',
    contact_sub: '30 دقيقة، بدون التزام. سنتحدث عن وضعك وأهدافك والخطوة الصحيحة التالية.',
    cd_loc: 'الموقع', cd_wa: 'متاح عند الطلب',
    f_name: 'الاسم', f_email: 'البريد الإلكتروني', f_phone: 'الهاتف (اختياري)', f_service: 'الخدمة المطلوبة', f_msg: 'الرسالة',
    fp_name: 'اسمك', fp_email: 'بريدك@مثال.com', fp_msg: 'أخبرني عن وضعك وأهدافك...',
    f_serv0: '— اختر —', f_serv1: 'مراجعة السيرة الذاتية', f_serv2: 'الإرشاد في سوق العمل', f_serv3: 'الاعتراف بالشهادات',
    f_serv4: 'التحضير للمقابلات', f_serv5: 'دورة تدريبية', f_serv6: 'أخرى',
    f_submit: 'إرسال الرسالة',
    f_success: '✓ تم إرسال رسالتك! سأتواصل معك خلال 24 ساعة.',
    err_required: 'هذا الحقل مطلوب.',
    err_email: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',

    footer_desc: 'نساعد محترفي IT الدوليين على بناء مسيرات مهنية ناجحة في ألمانيا.',
    footer_quick: 'روابط سريعة', footer_services: 'الخدمات', footer_courses: 'الدورات',
    footer_copy: '© 2025 ITCoach.de · جميع الحقوق محفوظة.',
    footer_made: 'صُنع بـ ❤️ لمجتمع IT في ألمانيا',
  }
};

// ============================================================
// STATE
// ============================================================
let currentLang = 'en';
let currentSlide = 0;
let totalSlides = 0;
let sliderTimer = null;
let countersTriggered = false;

// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initLangSwitcher();
  initMobileMenu();
  initScrollHeader();
  initReveal();
  initSlider();
  initCounters();
  initFormValidation();
  initBackTop();
  initSmoothScroll();
  applyTranslation('en');
});

// ============================================================
// DARK MODE
// ============================================================
function initDarkMode() {
  const btn = document.getElementById('dark-toggle');
  const sun = btn.querySelector('.icon-sun');
  const moon = btn.querySelector('.icon-moon');
  const saved = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(saved);

  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    sun.style.display = theme === 'dark' ? 'none' : 'block';
    moon.style.display = theme === 'dark' ? 'block' : 'none';
  }
}

// ============================================================
// LANGUAGE SWITCHER
// ============================================================
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLang(lang);
    });
  });
}

function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === lang));

  // RTL toggle
  const isRTL = lang === 'ar';
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  applyTranslation(lang);
}

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

// ============================================================
// SCROLL HEADER
// ============================================================
function initScrollHeader() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// ANIMATED COUNTERS
// ============================================================
function initCounters() {
  const section = document.getElementById('why');
  const nums = document.querySelectorAll('.stat-num, .trust-num');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersTriggered) {
        countersTriggered = true;
        animateAll(nums);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  if (section) obs.observe(section);

  // Also trigger hero counters on load
  const heroNums = document.querySelectorAll('.trust-num');
  setTimeout(() => animateAll(heroNums), 800);
}

function animateAll(nodeList) {
  nodeList.forEach(el => {
    const target = parseInt(el.getAttribute('data-count') || el.textContent, 10);
    if (isNaN(target)) return;
    animateCounter(el, target, 1800);
  });
}

function animateCounter(el, target, duration) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ============================================================
// TESTIMONIAL SLIDER
// ============================================================
function initSlider() {
  const track = document.getElementById('slider-track');
  const dotsContainer = document.getElementById('slider-dots');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  if (!track) return;

  const cards = track.querySelectorAll('.testi-card');
  totalSlides = cards.length;

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  prevBtn.addEventListener('click', () => goTo((currentSlide - 1 + totalSlides) % totalSlides));
  nextBtn.addEventListener('click', () => goTo((currentSlide + 1) % totalSlides));

  // Auto-play
  startTimer();
  track.addEventListener('mouseenter', stopTimer);
  track.addEventListener('mouseleave', startTimer);

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo((currentSlide + (diff > 0 ? 1 : -1) + totalSlides) % totalSlides);
  }, { passive: true });
}

function goTo(index) {
  currentSlide = index;
  const track = document.getElementById('slider-track');
  // Each card is 100% width + 24px gap, but since overflow:hidden hides gap we just use 100%
  track.style.transform = `translateX(calc(-${index * 100}% - ${index * 24}px))`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function startTimer() {
  stopTimer();
  sliderTimer = setInterval(() => goTo((currentSlide + 1) % totalSlides), 5000);
}
function stopTimer() {
  clearInterval(sliderTimer);
}

// ============================================================
// FORM VALIDATION
// ============================================================
function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = translations[currentLang];
    let valid = true;

    const name = form.querySelector('#f-name');
    const email = form.querySelector('#f-email');
    const service = form.querySelector('#f-service');
    const msg = form.querySelector('#f-msg');

    clearErrors(form);

    if (!name.value.trim()) { showError(name, 'err-name', t.err_required); valid = false; }
    if (!email.value.trim()) { showError(email, 'err-email', t.err_required); valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { showError(email, 'err-email', t.err_email); valid = false; }
    if (!service.value) { showError(service, 'err-service', t.err_required); valid = false; }
    if (!msg.value.trim()) { showError(msg, 'err-msg', t.err_required); valid = false; }

    if (valid) {
      const btn = form.querySelector('button[type=submit]');
      btn.textContent = '...';
      btn.disabled = true;
      setTimeout(() => {
        form.reset();
        btn.textContent = translations[currentLang].f_submit;
        btn.disabled = false;
        const success = document.getElementById('form-success');
        success.textContent = translations[currentLang].f_success;
        success.classList.add('visible');
        setTimeout(() => success.classList.remove('visible'), 6000);
      }, 1200);
    }
  });

  // Live validation clearing
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
      const errId = 'err-' + field.name;
      const errEl = document.getElementById(errId);
      if (errEl) errEl.textContent = '';
    });
  });
}

function showError(field, errId, msg) {
  field.classList.add('error');
  const errEl = document.getElementById(errId);
  if (errEl) errEl.textContent = msg;
}

function clearErrors(form) {
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.field-error').forEach(el => el.textContent = '');
}

// ============================================================
// BACK TO TOP
// ============================================================
function initBackTop() {
  const btn = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// SMOOTH SCROLLING (for anchor links)
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}


document.getElementById("contact-form")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const successMessage = document.getElementById("form-success");
    const errorMessage = document.getElementById("form-error");
    const form = document.getElementById("contact-form");

    // Validate ALL fields before fetch
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const email= document.getElementById("f-email")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.value?.trim()))
    {
      console.error("Invalid email format");
      return;
    }

    const data = {
        name: document.getElementById("f-name").value,
        email: document.getElementById("f-email").value,
        phone: document.getElementById("f-phone").value,
        service: document.getElementById("f-service").value,
        message: document.getElementById("f-msg").value
    };

    try {

        await fetch(
            "https://script.google.com/macros/s/AKfycbzlur_Ox87ExOoE-yIbOOmrT4Cpz5NsaTwLGABLOwH-vvBzsF133BNfcAq2vtxtcADE/exec",
            {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            }
        );

        form.reset();

        successMessage.classList.add("show");
        errorMessage.classList.remove("show");

    } catch (error) {

        console.error("Error:", error);

        errorMessage.classList.add("show");
        successMessage.classList.remove("show");
    }
});
