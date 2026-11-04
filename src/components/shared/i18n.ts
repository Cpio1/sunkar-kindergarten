import type { Locale, SectionId } from "./config";

export type GroupId = "small" | "middle" | "senior";
export type PillarId = "upbringing" | "learning" | "communication" | "creativity" | "growth";
export type MealId = "breakfast" | "brunch" | "lunch" | "snack" | "dinner";

type Dict = {
  meta: { title: string; description: string; keywords: string[]; ogLocale: string };
  skipLink: string;
  nav: Record<SectionId, string>;
  menu: { open: string; close: string; title: string };
  langLabel: string;
  cta: { contact: string; more: string; whatsappFloat: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    facts: { groups: string; age: string; language: string; meals: string };
    placeholderNote: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: [string, string];
    pillars: Record<PillarId, { title: string; text: string }>;
    mediaPlaceholder: string;
    videoLabel: string;
  };
  groups: {
    eyebrow: string;
    title: string;
    note: string;
    items: Record<GroupId, { name: string; age: string; text: string; tags: [string, string, string] }>;
  };
  meals: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    orderLabel: (n: number) => string;
    items: Record<MealId, string>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    more: string;
    empty: string;
    openExternal: string;
    photoAlt: (n: number) => string;
    open: (n: number) => string;
    close: string;
    prev: string;
    next: string;
    counter: (current: number, total: number) => string;
    placeholderTag: string;
  };
  documents: { title: string; description: string; soon: string; open: string };
  contacts: {
    eyebrow: string;
    title: string;
    address: string;
    phone: string;
    hours: string;
    instagram: string;
    whatsapp: string;
    call: string;
    route: string;
    open2gis: string;
    mapTitle: string;
  };
  footer: { tagline: string; rights: string };
  notFound: { title: string; text: string; home: string };
};

export const dict: Record<Locale, Dict> = {
  kk: {
    meta: {
      title: "Сұңқар Балабақшасы — Алматыдағы жекеменшік балабақша, Қалқаман-2",
      description:
        "3–6 жас аралығындағы балаларға арналған балабақша: 3 топ, қазақ тілінде тәрбие мен оқыту, 5 мезгіл тамақтану. Алматы, Наурызбай ауданы, Қалқаман-2, Айбергенов көшесі, 92.",
      keywords: ["балабақша Алматы", "жекеменшік балабақша", "Сұңқар балабақшасы", "Қалқаман балабақша", "Наурызбай ауданы балабақша", "қазақ тілді балабақша"],
      ogLocale: "kk_KZ",
    },
    skipLink: "Негізгі мазмұнға өту",
    nav: {
      home: "Басты бет",
      about: "Біз туралы",
      groups: "Топтар",
      meals: "Тамақтану",
      gallery: "Галерея",
      documents: "Құжаттар",
      contacts: "Байланыс",
    },
    menu: { open: "Мәзірді ашу", close: "Мәзірді жабу", title: "Сайт мәзірі" },
    langLabel: "Тілді таңдау",
    cta: { contact: "Бізбен байланысу", more: "Толығырақ", whatsappFloat: "WhatsApp арқылы жазу" },
    hero: {
      eyebrow: "Алматы · Қалқаман-2",
      title: "Сұңқар — балаңыздың жарқын болашағына алғашқы қадам!",
      subtitle: "3–6 жас аралығындағы балаларға арналған жайлы әрі мейірімді балабақша.",
      facts: { groups: "3 топ", age: "3–6 жас", language: "Қазақ тілінде", meals: "5 мезгіл тамақтану" },
      placeholderNote: "Бұл — иллюстрация. Балабақшаның нақты фотолары жақында қосылады.",
    },
    about: {
      eyebrow: "Біз туралы",
      title: "Балаңызға қамқорлық пен жылулық сыйлаймыз",
      paragraphs: [
        "Балабақша — бала отбасынан кейін қадам басатын алғашқы үлкен әлем. Сондықтан біз үшін әр баланың өзін қауіпсіз, еркін әрі қуанышты сезінуі маңызды.",
        "Тәрбие мен оқу, ойын мен шығармашылық қазақ тілінде қатар жүреді: бала айналасын танып, ойын жеткізуге, достарымен тіл табысуға және өз бетінше әрекет етуге үйренеді.",
      ],
      pillars: {
        upbringing: { title: "Тәрбие", text: "Ізет пен қамқорлықты күнделікті істерден үйренеміз." },
        learning: { title: "Оқу", text: "Жаңа нәрсені ойын мен сұрақ арқылы қызығып танимыз." },
        communication: { title: "Қарым-қатынас", text: "Тыңдауға, бөлісуге, ойымызды айтуға дағдыланамыз." },
        creativity: { title: "Шығармашылық", text: "Қиялға ерік беріп, өз қолымызбен жасаймыз." },
        growth: { title: "Даму", text: "Әр баланың өз қарқынын құрметтеп, қолдау көрсетеміз." },
      },
      mediaPlaceholder: "Фото немесе видео жақында қосылады",
      videoLabel: "Сұңқар балабақшасы туралы видео",
    },
    groups: {
      eyebrow: "Топтар",
      title: "Біздің топтар",
      note: "Топтардың жас бойынша бөлінуі алдын ала берілген. Нақты ақпаратты бізден сұрап біле аласыз.",
      items: {
        small: {
          name: "Кіші топ",
          age: "3–4 жас",
          text: "Бала сөйлеуге, түстер мен пішіндерді тануға және өз бетінше әрекет етуге алғашқы қадам жасайды.",
          tags: ["Ойын", "Сөйлеу", "Дербестік"],
        },
        middle: {
          name: "Ортаңғы топ",
          age: "4–5 жас",
          text: "Әңгіме құрауға, сурет салуға, санауға қызығып, достарымен бірге ойнауға үйренеді.",
          tags: ["Сурет", "Санау", "Достық"],
        },
        senior: {
          name: "Ересек топ",
          age: "5–6 жас",
          text: "Әріптер мен сандарды танып, ойын сөзбен жеткізеді, ойын ережесін сақтап, бастаған ісін аяқтауға дағдыланады.",
          tags: ["Әріптер", "Сандар", "Жауапкершілік"],
        },
      },
    },
    meals: {
      eyebrow: "Тамақтану",
      title: "Күніне 5 мезгіл тамақтану",
      subtitle: "Таңнан кешке дейін: балабақшадағы бір күннің бес тамақтану мезгілі.",
      note: "Бұл жерде тек тамақтану мезгілдерінің атаулары берілген. Мәзір мен уақытын балабақшадан нақтылай аласыз.",
      orderLabel: (n) => `${n}-мезгіл`,
      items: {
        breakfast: "Таңғы ас",
        brunch: "Екінші таңғы ас",
        lunch: "Түскі ас",
        snack: "Бесін ас",
        dinner: "Кешкі ас",
      },
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Біздің балабақшаның жарқын сәттері",
      more: "Көбірек көрсету",
      empty: "Балабақшаның нақты фотолары осы жерге жақында қосылады. Әзірге суреттер — иллюстрациялар.",
      openExternal: "Фотоларды 2ГИС-тен көру",
      photoAlt: (n) => `Сұңқар балабақшасының фотосы, ${n}`,
      open: (n) => `${n}-фотоны үлкейту`,
      close: "Жабу",
      prev: "Алдыңғы фото",
      next: "Келесі фото",
      counter: (current, total) => `${current} / ${total}`,
      placeholderTag: "Иллюстрация",
    },
    documents: {
      title: "Құжаттар",
      description: "Балабақшаның ресми құжаттары осы бөлімде орналастырылады.",
      soon: "Жақында қолжетімді болады",
      open: "Құжаттарды ашу",
    },
    contacts: {
      eyebrow: "Байланыс",
      title: "Бізге хабарласыңыз немесе келіңіз",
      address: "Мекенжай",
      phone: "Телефон",
      hours: "Жұмыс уақыты",
      instagram: "Instagram",
      whatsapp: "WhatsApp-қа жазу",
      call: "Қоңырау шалу",
      route: "Маршрут құру",
      open2gis: "2ГИС-те ашу",
      mapTitle: "2ГИС картасы: Сұңқар балабақшасы, Айбергенов көшесі, 92",
    },
    footer: { tagline: "3–6 жас аралығындағы балаларға арналған балабақша", rights: "Барлық құқықтар қорғалған." },
    notFound: { title: "Бет табылмады", text: "Сіз іздеген бет жоқ немесе басқа мекенжайға ауысқан.", home: "Басты бетке оралу" },
  },
  ru: {
    meta: {
      title: "Сұңқар Балабақшасы — частный детский сад в Алматы, Қалқаман-2",
      description:
        "Детский сад для детей 3–6 лет: 3 группы, воспитание и обучение на казахском языке, 5-разовое питание. Алматы, Наурызбайский район, мкр. Қалқаман-2, улица Айбергенова, 92.",
      keywords: ["детский сад Алматы", "частный детский сад", "Сункар детский сад", "детский сад Калкаман", "детский сад Наурызбайский район", "казахоязычный детский сад"],
      ogLocale: "ru_KZ",
    },
    skipLink: "Перейти к основному содержанию",
    nav: {
      home: "Главная",
      about: "О нас",
      groups: "Группы",
      meals: "Питание",
      gallery: "Галерея",
      documents: "Документы",
      contacts: "Контакты",
    },
    menu: { open: "Открыть меню", close: "Закрыть меню", title: "Меню сайта" },
    langLabel: "Выбор языка",
    cta: { contact: "Связаться с нами", more: "Подробнее", whatsappFloat: "Написать в WhatsApp" },
    hero: {
      eyebrow: "Алматы · Қалқаман-2",
      title: "Сұңқар — первый шаг к яркому будущему вашего ребёнка!",
      subtitle: "Уютный и добрый детский сад для детей от 3 до 6 лет.",
      facts: { groups: "3 группы", age: "3–6 лет", language: "На казахском", meals: "5-разовое питание" },
      placeholderNote: "Это иллюстрация. Настоящие фотографии детского сада появятся скоро.",
    },
    about: {
      eyebrow: "О нас",
      title: "Дарим вашему ребёнку заботу и тепло",
      paragraphs: [
        "Детский сад — первый большой мир, в который ребёнок выходит из семьи. Поэтому для нас важно, чтобы каждый малыш чувствовал себя в безопасности, свободно и радостно.",
        "Воспитание и обучение, игра и творчество идут рядом и на казахском языке: ребёнок познаёт мир вокруг, учится выражать мысли, находить общий язык с друзьями и действовать самостоятельно.",
      ],
      pillars: {
        upbringing: { title: "Воспитание", text: "Учимся уважению и заботе в повседневных делах." },
        learning: { title: "Обучение", text: "Узнаём новое с интересом: через игру и вопросы." },
        communication: { title: "Общение", text: "Привыкаем слушать, делиться и говорить о своём." },
        creativity: { title: "Творчество", text: "Даём волю фантазии и мастерим своими руками." },
        growth: { title: "Развитие", text: "Уважаем темп каждого ребёнка и поддерживаем его." },
      },
      mediaPlaceholder: "Фото или видео появится скоро",
      videoLabel: "Видео о детском саде Сұңқар",
    },
    groups: {
      eyebrow: "Группы",
      title: "Наши группы",
      note: "Деление групп по возрасту предварительное. Точную информацию можно уточнить у нас.",
      items: {
        small: {
          name: "Младшая группа",
          age: "3–4 года",
          text: "Ребёнок развивает речь, узнаёт цвета и формы и делает первые шаги к самостоятельности.",
          tags: ["Игра", "Речь", "Самостоятельность"],
        },
        middle: {
          name: "Средняя группа",
          age: "4–5 лет",
          text: "Дети учатся составлять рассказы, с интересом рисуют и считают, играют вместе с друзьями.",
          tags: ["Рисование", "Счёт", "Дружба"],
        },
        senior: {
          name: "Старшая группа",
          age: "5–6 лет",
          text: "Знакомство с буквами и цифрами, умение выразить мысль, соблюдать правила игры и доводить дело до конца.",
          tags: ["Буквы", "Цифры", "Ответственность"],
        },
      },
    },
    meals: {
      eyebrow: "Питание",
      title: "Питание 5 раз в день",
      subtitle: "С утра до вечера: пять приёмов пищи в течение дня в детском саду.",
      note: "Здесь указаны только названия приёмов пищи. Меню и время можно уточнить в детском саду.",
      orderLabel: (n) => `${n}-й приём`,
      items: {
        breakfast: "Завтрак",
        brunch: "Второй завтрак",
        lunch: "Обед",
        snack: "Полдник",
        dinner: "Ужин",
      },
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Яркие моменты нашего детского сада",
      more: "Показать ещё",
      empty: "Настоящие фотографии детского сада скоро появятся здесь. Пока на месте фото — иллюстрации.",
      openExternal: "Смотреть фото в 2ГИС",
      photoAlt: (n) => `Фотография детского сада Сұңқар, ${n}`,
      open: (n) => `Увеличить фото ${n}`,
      close: "Закрыть",
      prev: "Предыдущее фото",
      next: "Следующее фото",
      counter: (current, total) => `${current} / ${total}`,
      placeholderTag: "Иллюстрация",
    },
    documents: {
      title: "Документы",
      description: "Официальные документы детского сада будут размещены в этом разделе.",
      soon: "Скоро будет доступно",
      open: "Открыть документы",
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами или приходите в гости",
      address: "Адрес",
      phone: "Телефон",
      hours: "Режим работы",
      instagram: "Instagram",
      whatsapp: "Написать в WhatsApp",
      call: "Позвонить",
      route: "Построить маршрут",
      open2gis: "Открыть в 2ГИС",
      mapTitle: "Карта 2ГИС: детский сад Сұңқар, улица Айбергенова, 92",
    },
    footer: { tagline: "Детский сад для детей от 3 до 6 лет", rights: "Все права защищены." },
    notFound: { title: "Страница не найдена", text: "Такой страницы нет, или она переехала на другой адрес.", home: "Вернуться на главную" },
  },
};
