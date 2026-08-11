import type { Locale } from "../i18n";

type LocalizedText = Record<Locale, string>;

export type LearningTrack = {
  slug: string;
  title: LocalizedText;
  label: LocalizedText;
  description: LocalizedText;
  note: LocalizedText;
  primarySubject: string;
  categories: Array<{
    title: LocalizedText;
    description: LocalizedText;
    subject: string;
  }>;
};

export const learningTracks: LearningTrack[] = [
  {
    slug: "bim",
    title: { da: "BIM", en: "BIM", ar: "BIM" },
    label: { da: "Revit og modeller", en: "Revit and models", ar: "Revit والنماذج" },
    description: {
      da: "Den store digitale fane til Revit, modelopbygning, koordinering, MEP, pyRevit og praktisk BIM-proces.",
      en: "The main digital tab for Revit, model setup, coordination, MEP, pyRevit, and practical BIM workflows.",
      ar: "التبويب الرقمي الرئيسي لـ Revit وإعداد النماذج والتنسيق وMEP وpyRevit وسير عمل BIM العملي.",
    },
    note: {
      da: "BIM kan senere opdeles i hele kursusforløb, korte tutorials og øvelser til konkrete Revit-opgaver.",
      en: "BIM can later be divided into full course paths, short tutorials, and exercises for specific Revit tasks.",
      ar: "يمكن تقسيم BIM لاحقا إلى مسارات كاملة ودروس قصيرة وتمارين لمهام Revit محددة.",
    },
    primarySubject: "bim",
    categories: [
      {
        title: { da: "Revit grundkursus", en: "Revit basics", ar: "أساسيات Revit" },
        description: {
          da: "Projektstart, views, levels, families og modelstruktur.",
          en: "Project setup, views, levels, families, and model structure.",
          ar: "بدء المشروع والعروض والمستويات والعائلات وبنية النموذج.",
        },
        subject: "bim",
      },
      {
        title: { da: "MEP og koordinering", en: "MEP and coordination", ar: "MEP والتنسيق" },
        description: {
          da: "Tekniske systemer, sammenstød, fagmodeller og afleveringer.",
          en: "Building systems, clashes, discipline models, and deliveries.",
          ar: "الأنظمة التقنية والتعارضات ونماذج التخصصات والتسليم.",
        },
        subject: "bim",
      },
      {
        title: { da: "pyRevit", en: "pyRevit", ar: "pyRevit" },
        description: {
          da: "Automatisering, scripts og små værktøjer til gentagne opgaver.",
          en: "Automation, scripts, and small tools for repeated tasks.",
          ar: "الأتمتة والسكربتات والأدوات الصغيرة للمهام المتكررة.",
        },
        subject: "pyrevit",
      },
    ],
  },
  {
    slug: "nbs-nordic",
    title: { da: "NBS Nordic", en: "NBS Nordic", ar: "NBS Nordic" },
    label: { da: "Beskrivelser", en: "Specifications", ar: "المواصفات" },
    description: {
      da: "Emnet til bygningsdelsbeskrivelser, krav, sammenhæng mellem model og tekst samt afleveringsstruktur.",
      en: "The subject for element specifications, requirements, links between model and text, and delivery structure.",
      ar: "موضوع مواصفات عناصر البناء والمتطلبات والربط بين النموذج والنص وبنية التسليم.",
    },
    note: {
      da: "Her kan du senere samle eksempler, skabeloner, arbejdsgange og korte forklaringsvideoer.",
      en: "Later this can hold examples, templates, workflows, and short explanation videos.",
      ar: "يمكن لاحقا جمع الأمثلة والقوالب وسير العمل وفيديوهات الشرح القصيرة هنا.",
    },
    primarySubject: "nbs-nordic",
    categories: [
      {
        title: { da: "Bygningsdele", en: "Building elements", ar: "عناصر البناء" },
        description: {
          da: "Struktur, klassifikation og relation til modelobjekter.",
          en: "Structure, classification, and relation to model objects.",
          ar: "البنية والتصنيف والعلاقة مع عناصر النموذج.",
        },
        subject: "nbs-nordic",
      },
      {
        title: { da: "Krav og beskrivelser", en: "Requirements and specs", ar: "المتطلبات والمواصفات" },
        description: {
          da: "Fra kravtekst til klare, sporbare beskrivelser.",
          en: "From requirement text to clear, traceable specifications.",
          ar: "من نص المتطلبات إلى مواصفات واضحة وقابلة للتتبع.",
        },
        subject: "nbs-nordic",
      },
    ],
  },
  {
    slug: "lccbyg",
    title: { da: "LCCByg", en: "LCCByg", ar: "LCCByg" },
    label: { da: "Levetidsøkonomi", en: "Life-cycle costing", ar: "تكلفة دورة الحياة" },
    description: {
      da: "Emnet til levetidsøkonomi, alternativer, driftsudgifter, nutidsværdi og beslutningsgrundlag.",
      en: "The subject for life-cycle costing, alternatives, operating costs, present value, and decision support.",
      ar: "موضوع تكلفة دورة الحياة والبدائل وتكاليف التشغيل والقيمة الحالية ودعم القرار.",
    },
    note: {
      da: "LCCByg kan vokse med regneark, cases, øvelser og sammenligninger mellem løsninger.",
      en: "LCCByg can grow with spreadsheets, cases, exercises, and comparisons between solutions.",
      ar: "يمكن أن يتوسع LCCByg بالجداول والحالات والتمارين والمقارنات بين الحلول.",
    },
    primarySubject: "lccbyg",
    categories: [
      {
        title: { da: "Introduktion", en: "Introduction", ar: "مقدمة" },
        description: {
          da: "Grundstruktur, perioder, levetider og første beregning.",
          en: "Basic structure, periods, lifetimes, and first calculation.",
          ar: "البنية الأساسية والفترات والأعمار والحساب الأول.",
        },
        subject: "lccbyg",
      },
      {
        title: { da: "Alternativer", en: "Alternatives", ar: "البدائل" },
        description: {
          da: "Sammenlign løsninger og forklar økonomiske konsekvenser.",
          en: "Compare solutions and explain cost consequences.",
          ar: "مقارنة الحلول وشرح النتائج الاقتصادية.",
        },
        subject: "lccbyg",
      },
    ],
  },
  {
    slug: "lcabyg",
    title: { da: "LCAByg", en: "LCAByg", ar: "LCAByg" },
    label: { da: "Klima og materialer", en: "Climate and materials", ar: "المناخ والمواد" },
    description: {
      da: "Emnet til LCAbyg, materialedata, mængder, bygningsdele, resultater og dokumentation.",
      en: "The subject for LCAbyg, material data, quantities, building elements, results, and documentation.",
      ar: "موضوع LCAbyg وبيانات المواد والكميات وعناصر البناء والنتائج والتوثيق.",
    },
    note: {
      da: "Her kan du samle både grundkursus, semesterøvelser og korte videoer om metode og dokumentation.",
      en: "This can hold a basic course, semester exercises, and short videos about method and documentation.",
      ar: "يمكن هنا جمع الدورة الأساسية وتمارين الفصل وفيديوهات قصيرة عن المنهجية والتوثيق.",
    },
    primarySubject: "lcabyg",
    categories: [
      {
        title: { da: "Data og mængder", en: "Data and quantities", ar: "البيانات والكميات" },
        description: {
          da: "Materialer, mængdeudtræk og forudsætninger.",
          en: "Materials, quantity takeoff, and assumptions.",
          ar: "المواد واستخراج الكميات والافتراضات.",
        },
        subject: "lcabyg",
      },
      {
        title: { da: "Resultater", en: "Results", ar: "النتائج" },
        description: {
          da: "Læs, forklar og dokumenter klimapåvirkning.",
          en: "Read, explain, and document climate impact.",
          ar: "قراءة وشرح وتوثيق الأثر المناخي.",
        },
        subject: "lcabyg",
      },
    ],
  },
  {
    slug: "ai",
    title: { da: "AI", en: "AI", ar: "AI" },
    label: { da: "Byggeri og undervisning", en: "Construction and teaching", ar: "البناء والتعليم" },
    description: {
      da: "Emnet til AI i byggeri, prompts, analyse, dokumentation, visuelle forklaringer og Remotion-produktion.",
      en: "The subject for AI in construction, prompts, analysis, documentation, visual explanations, and Remotion production.",
      ar: "موضوع الذكاء الاصطناعي في البناء والتعليمات والتحليل والتوثيق والشرح المرئي وإنتاج Remotion.",
    },
    note: {
      da: "AI-fanen kan rumme både faglig metode, automatisering og produktion af grafik til svære forklaringer.",
      en: "The AI tab can hold method, automation, and graphic production for difficult explanations.",
      ar: "يمكن لتبويب AI أن يحتوي على المنهجية والأتمتة وإنتاج الرسوم للشرح الصعب.",
    },
    primarySubject: "ai-in-construction",
    categories: [
      {
        title: { da: "Prompt og analyse", en: "Prompting and analysis", ar: "التعليمات والتحليل" },
        description: {
          da: "Brug AI struktureret og kontroller output fagligt.",
          en: "Use AI in a structured way and check output professionally.",
          ar: "استخدام AI بطريقة منظمة والتحقق من المخرجات مهنيا.",
        },
        subject: "ai-in-construction",
      },
      {
        title: { da: "Remotion grafik", en: "Remotion graphics", ar: "رسوم Remotion" },
        description: {
          da: "Forklar svære emner med animationer, diagrammer og scener.",
          en: "Explain difficult topics with animations, diagrams, and scenes.",
          ar: "شرح الموضوعات الصعبة بالرسوم المتحركة والمخططات والمشاهد.",
        },
        subject: "ai-in-construction",
      },
    ],
  },
  {
    slug: "engineering",
    title: { da: "Ingeniør", en: "Engineering", ar: "الهندسة" },
    label: { da: "FEM-Design", en: "FEM-Design", ar: "FEM-Design" },
    description: {
      da: "Emnet til konstruktionsforståelse, FEM-Design, laster, modeller, resultater og beregningskontrol.",
      en: "The subject for structural understanding, FEM-Design, loads, models, results, and calculation checks.",
      ar: "موضوع الفهم الإنشائي وFEM-Design والأحمال والنماذج والنتائج وفحص الحسابات.",
    },
    note: {
      da: "Kan senere opdeles i FEM-Design, statik, lastnedføring, kontrol og projekteksempler.",
      en: "Can later be divided into FEM-Design, statics, load paths, checks, and project examples.",
      ar: "يمكن تقسيمه لاحقا إلى FEM-Design والاستاتيكا ومسارات الأحمال والفحص وأمثلة المشاريع.",
    },
    primarySubject: "fem-design",
    categories: [
      {
        title: { da: "FEM-Design", en: "FEM-Design", ar: "FEM-Design" },
        description: {
          da: "Modelopbygning, laster, analyse og resultatkontrol.",
          en: "Model setup, loads, analysis, and result checks.",
          ar: "إعداد النموذج والأحمال والتحليل وفحص النتائج.",
        },
        subject: "fem-design",
      },
      {
        title: { da: "Konstruktion", en: "Structures", ar: "الإنشاءات" },
        description: {
          da: "Praktisk forståelse af statik, systemer og dokumentation.",
          en: "Practical understanding of statics, systems, and documentation.",
          ar: "فهم عملي للاستاتيكا والأنظمة والتوثيق.",
        },
        subject: "fem-design",
      },
    ],
  },
  {
    slug: "building-physics",
    title: { da: "Bygfys", en: "Building Physics", ar: "فيزياء المباني" },
    label: { da: "Varme, fugt og indeklima", en: "Heat, moisture, indoor climate", ar: "الحرارة والرطوبة والمناخ الداخلي" },
    description: {
      da: "Emnet til bygningsfysik, varmetab, fugt, indeklima, beregningstrin og dokumentation.",
      en: "The subject for building physics, heat loss, moisture, indoor climate, calculation steps, and documentation.",
      ar: "موضوع فيزياء المباني وفقد الحرارة والرطوبة والمناخ الداخلي وخطوات الحساب والتوثيق.",
    },
    note: {
      da: "Bygfys kan rumme korte beregningsvideoer, øvelser, skemaer og forklarende grafik.",
      en: "Building Physics can hold short calculation videos, exercises, tables, and explanatory graphics.",
      ar: "يمكن أن يحتوي هذا الموضوع على فيديوهات حساب قصيرة وتمارين وجداول ورسوم توضيحية.",
    },
    primarySubject: "building-physics",
    categories: [
      {
        title: { da: "Varme", en: "Heat", ar: "الحرارة" },
        description: {
          da: "U-værdi, lag, kuldebroer og energiforståelse.",
          en: "U-values, layers, thermal bridges, and energy understanding.",
          ar: "قيمة U والطبقات والجسور الحرارية وفهم الطاقة.",
        },
        subject: "building-physics",
      },
      {
        title: { da: "Fugt og indeklima", en: "Moisture and indoor climate", ar: "الرطوبة والمناخ الداخلي" },
        description: {
          da: "Fugttransport, komfort, ventilation og dokumentation.",
          en: "Moisture transport, comfort, ventilation, and documentation.",
          ar: "انتقال الرطوبة والراحة والتهوية والتوثيق.",
        },
        subject: "building-physics",
      },
    ],
  },
];
