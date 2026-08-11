import type { Locale } from "../i18n";

type LocalizedText = Record<Locale, string>;

export type VideoResource = {
  title: LocalizedText;
  kind: "slides" | "worksheet" | "spreadsheet" | "project-file" | "link";
  url?: string;
  note?: LocalizedText;
};

export type VideoItem = {
  id: string;
  subject: string;
  language: Locale;
  access: "public" | "student";
  provider: "YouTube" | "Panopto" | "Remotion" | "Placeholder";
  youtubeId?: string;
  externalUrl?: string;
  duration: string;
  level: "Intro" | "Practice" | "Advanced";
  lessonSlug?: string;
  title: LocalizedText;
  summary: LocalizedText;
  description?: LocalizedText;
  resources?: VideoResource[];
};

const lcabygResourcePlaceholders: VideoResource[] = [
  {
    kind: "slides",
    title: {
      da: "Slides til lektionen",
      en: "Lesson slides",
      ar: "شرائح الدرس",
    },
    note: {
      da: "Kan tilføjes som PDF, når materialet er klar.",
      en: "Can be added as a PDF when the material is ready.",
      ar: "يمكن إضافتها كملف PDF عندما تكون المادة جاهزة.",
    },
  },
  {
    kind: "worksheet",
    title: {
      da: "Opgaveark",
      en: "Worksheet",
      ar: "ورقة عمل",
    },
    note: {
      da: "Plads til øvelser, spørgsmål eller afleveringsopgave.",
      en: "Space for exercises, questions, or an assignment.",
      ar: "مساحة للتمارين أو الأسئلة أو مهمة التسليم.",
    },
  },
  {
    kind: "project-file",
    title: {
      da: "Eksempelfiler",
      en: "Example files",
      ar: "ملفات أمثلة",
    },
    note: {
      da: "Her kan LCAByg-filer, regneark eller ZIP-pakker linkes.",
      en: "LCAByg files, spreadsheets, or ZIP packages can be linked here.",
      ar: "يمكن ربط ملفات LCAByg أو الجداول أو حزم ZIP هنا.",
    },
  },
];

export const videos: VideoItem[] = [
  {
    id: "bim-introduction-placeholder",
    subject: "bim",
    language: "da",
    access: "public",
    provider: "YouTube",
    duration: "08:00",
    level: "Intro",
    lessonSlug: "bim-introduction-placeholder",
    title: {
      da: "BIM - introduktion og arbejdsflow",
      en: "BIM - Introduction and Workflow",
      ar: "BIM - مقدمة وسير العمل",
    },
    summary: {
      da: "Første placeholder til en kort introduktion, der senere får et rigtigt videoembed.",
      en: "First placeholder for a short introduction that will later receive a real video embed.",
      ar: "عنصر مؤقت أول لمقدمة قصيرة سيضاف إليها تضمين فيديو حقيقي لاحقا.",
    },
  },
  {
    id: "ai-construction-overview",
    subject: "ai-in-construction",
    language: "da",
    access: "public",
    provider: "Remotion",
    duration: "06:30",
    level: "Intro",
    title: {
      da: "AI - visuelt overblik",
      en: "AI in Construction - Visual Overview",
      ar: "الذكاء الاصطناعي في البناء - نظرة مرئية",
    },
    summary: {
      da: "Placeholder til en Remotion-forklaring med diagrammer, procestrin og eksempler.",
      en: "Placeholder for a Remotion explanation with diagrams, process steps, and examples.",
      ar: "عنصر مؤقت لشرح Remotion يتضمن مخططات وخطوات عملية وأمثلة.",
    },
  },
  {
    id: "pyrevit-first-tool",
    subject: "pyrevit",
    language: "da",
    access: "student",
    provider: "Panopto",
    duration: "12:00",
    level: "Practice",
    title: {
      da: "pyRevit - første værktøj",
      en: "pyRevit - First Tool",
      ar: "pyRevit - الأداة الأولى",
    },
    summary: {
      da: "Placeholder til en adgangsstyret lektion om et lille automatiseringsværktøj.",
      en: "Placeholder for an access-controlled lesson about a small automation tool.",
      ar: "عنصر مؤقت لدرس بصلاحيات وصول حول أداة أتمتة صغيرة.",
    },
  },
  {
    id: "building-physics-thermal",
    subject: "building-physics",
    language: "da",
    access: "public",
    provider: "YouTube",
    duration: "10:00",
    level: "Practice",
    title: {
      da: "Bygfys - varme og lag",
      en: "Building Physics - Heat and Layers",
      ar: "فيزياء المباني - الحرارة والطبقات",
    },
    summary: {
      da: "Placeholder til beregningstrin, forklarende grafik og supplerende øvelse.",
      en: "Placeholder for calculation steps, explanatory graphics, and a supporting exercise.",
      ar: "عنصر مؤقت لخطوات حساب ورسوم توضيحية وتمرين داعم.",
    },
  },
  {
    id: "lcabyg-early-design",
    subject: "lcabyg",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "BRzuCtDWy7w",
    externalUrl: "https://www.youtube.com/watch?v=BRzuCtDWy7w",
    duration: "24:46",
    level: "Intro",
    title: {
      da: "#1 Introduktion til LCA i byggeri",
      en: "#1 Introduction to LCA in Construction",
      ar: "#1 مقدمة إلى LCA في البناء",
    },
    summary: {
      da: "Krav, baggrund og betydning for LCA i byggeriet. Første rigtige testvideo i biblioteket.",
      en: "Requirements, background, and relevance of LCA in construction. First real test video in the library.",
      ar: "المتطلبات والخلفية وأهمية LCA في البناء. أول فيديو حقيقي لاختبار المكتبة.",
    },
    description: {
      da: "Lektionen forklarer hvorfor LCA er blevet en central del af byggeriet, hvordan klimakrav påvirker projektering, og hvilke begreber de studerende skal kende før de arbejder videre i LCAbyg.",
      en: "This lesson explains why LCA has become central in construction, how climate requirements affect design work, and which concepts students need before moving into LCAbyg.",
      ar: "يشرح هذا الدرس لماذا أصبح LCA جزءا أساسيا من البناء، وكيف تؤثر متطلبات المناخ على التصميم، وما المفاهيم اللازمة قبل العمل في LCAbyg.",
    },
    resources: lcabygResourcePlaceholders,
  },
  {
    id: "lcabyg-project-setup",
    subject: "lcabyg",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "22lFJtku00E",
    externalUrl: "https://www.youtube.com/watch?v=22lFJtku00E",
    duration: "25:23",
    level: "Practice",
    title: {
      da: "#2 LCAbyg 2026 - oprettelse af projekt",
      en: "#2 LCAbyg 2026 - Project Setup",
      ar: "#2 LCAbyg 2026 - إنشاء المشروع",
    },
    summary: {
      da: "Oprettelse af projekt og første beregning i LCAbyg.",
      en: "Project setup and first calculation in LCAbyg.",
      ar: "إنشاء المشروع وأول حساب في LCAbyg.",
    },
    description: {
      da: "Lektionen viser oprettelse af et projekt i LCAbyg 2026 og gennemgår de første valg, så en beregning kan struktureres rigtigt fra starten.",
      en: "This lesson shows how to create a project in LCAbyg 2026 and walks through the first choices needed to structure a calculation correctly.",
      ar: "يوضح الدرس كيفية إنشاء مشروع في LCAbyg 2026 والخطوات الأولى اللازمة لبناء الحساب بشكل صحيح.",
    },
    resources: lcabygResourcePlaceholders,
  },
  {
    id: "lcabyg-results-documentation",
    subject: "lcabyg",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "8SlcbobqCBg",
    externalUrl: "https://www.youtube.com/watch?v=8SlcbobqCBg",
    duration: "11:58",
    level: "Practice",
    title: {
      da: "#3 LCAbyg 2026 - resultater og dokumentation",
      en: "#3 LCAbyg 2026 - Results and Documentation",
      ar: "#3 LCAbyg 2026 - النتائج والتوثيق",
    },
    summary: {
      da: "Resultatlæsning, dokumentation og kobling til byggeprocessen.",
      en: "Reading results, documenting them, and connecting them to the construction process.",
      ar: "قراءة النتائج وتوثيقها وربطها بعملية البناء.",
    },
    description: {
      da: "Lektionen fokuserer på resultater, dokumentation og hvordan LCA-resultater kan forklares, kontrolleres og bruges i den videre byggeproces.",
      en: "This lesson focuses on results, documentation, and how LCA outputs can be explained, checked, and used in the wider construction process.",
      ar: "يركز الدرس على النتائج والتوثيق وكيف يمكن شرح مخرجات LCA والتحقق منها واستخدامها في عملية البناء.",
    },
    resources: lcabygResourcePlaceholders,
  },
  {
    id: "lcabyg-lca-lcc-decisions",
    subject: "lcabyg",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "pFtKCdydfvY",
    externalUrl: "https://www.youtube.com/watch?v=pFtKCdydfvY",
    duration: "09:45",
    level: "Practice",
    title: {
      da: "#4 LCAbyg 2026 - LCA og LCC i projektering",
      en: "#4 LCAbyg 2026 - LCA and LCC in Design",
      ar: "#4 LCAbyg 2026 - LCA وLCC في التصميم",
    },
    summary: {
      da: "Hvordan LCA og LCC kan støtte valg og beslutninger i projektering.",
      en: "How LCA and LCC can support design choices and decisions.",
      ar: "كيف يمكن أن يدعم LCA وLCC اختيارات وقرارات التصميم.",
    },
    description: {
      da: "Lektionen binder LCA og LCC sammen og viser, hvordan klima og totaløkonomi kan bruges som beslutningsgrundlag i projektering.",
      en: "This lesson connects LCA and LCC and shows how climate impact and life-cycle cost can support design decisions.",
      ar: "يربط الدرس بين LCA وLCC ويوضح كيف يمكن استخدام الأثر المناخي والتكلفة الكلية لدعم قرارات التصميم.",
    },
    resources: lcabygResourcePlaceholders,
  },
  {
    id: "lcabyg-installation-data",
    subject: "lcabyg",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "ZW_Fe-Hkng8",
    externalUrl: "https://www.youtube.com/watch?v=ZW_Fe-Hkng8",
    duration: "12:21",
    level: "Intro",
    title: {
      da: "#1 Installationsvejledning til LCAbyg",
      en: "#1 LCAbyg Installation Guide",
      ar: "#1 دليل تثبيت LCAbyg",
    },
    summary: {
      da: "Installation, nye data og beregninger til LCAbyg 2026.",
      en: "Installation, new data, and calculations for LCAbyg 2026.",
      ar: "التثبيت والبيانات الجديدة والحسابات في LCAbyg 2026.",
    },
    description: {
      da: "Lektionen fungerer som praktisk installationsvejledning og introducerer de data og beregningsforudsætninger, der skal være på plads før arbejdet starter.",
      en: "This lesson works as a practical installation guide and introduces the data and calculation assumptions needed before work begins.",
      ar: "يعمل هذا الدرس كدليل تثبيت عملي ويقدم البيانات وافتراضات الحساب المطلوبة قبل بدء العمل.",
    },
    resources: lcabygResourcePlaceholders,
  },
  {
    id: "lcabyg-library-overview",
    subject: "lcabyg",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "OctfjyqzDoQ",
    externalUrl: "https://www.youtube.com/watch?v=OctfjyqzDoQ",
    duration: "13:04",
    level: "Intro",
    title: {
      da: "#0 LCAbyg 2026 - forstå biblioteket",
      en: "#0 LCAbyg 2026 - Understanding the Library",
      ar: "#0 LCAbyg 2026 - فهم المكتبة",
    },
    summary: {
      da: "Konstruktioner, byggevarer og faser i LCAbyg-biblioteket.",
      en: "Constructions, building products, and phases in the LCAbyg library.",
      ar: "الإنشاءات ومواد البناء والمراحل في مكتبة LCAbyg.",
    },
    description: {
      da: "Lektionen forklarer bibliotekets opbygning i LCAbyg, herunder konstruktioner, byggevarer og faser, så data kan vælges mere sikkert.",
      en: "This lesson explains the structure of the LCAbyg library, including constructions, building products, and phases, so data can be selected more confidently.",
      ar: "يشرح الدرس بنية مكتبة LCAbyg، بما في ذلك الإنشاءات ومواد البناء والمراحل، حتى يمكن اختيار البيانات بثقة أكبر.",
    },
    resources: lcabygResourcePlaceholders,
  },
  {
    id: "lcabyg-epd-comparison",
    subject: "lcabyg",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "yur-KfmrTpU",
    externalUrl: "https://www.youtube.com/watch?v=yur-KfmrTpU",
    duration: "12:13",
    level: "Practice",
    title: {
      da: "#6 LCAbyg 2026 - generisk vs. produktspecifik EPD",
      en: "#6 LCAbyg 2026 - Generic vs. Product-specific EPD",
      ar: "#6 LCAbyg 2026 - EPD عام مقابل خاص بالمنتج",
    },
    summary: {
      da: "Sammenligning af generiske data og produktspecifikke EPD'er.",
      en: "Comparison of generic data and product-specific EPDs.",
      ar: "مقارنة البيانات العامة وEPD الخاص بالمنتج.",
    },
    description: {
      da: "Lektionen viser forskellen mellem generiske data og produktspecifikke EPD'er, og hvordan datavalget kan påvirke resultaterne.",
      en: "This lesson shows the difference between generic data and product-specific EPDs, and how data choices can affect the results.",
      ar: "يوضح الدرس الفرق بين البيانات العامة وEPD الخاص بالمنتج، وكيف يمكن لاختيار البيانات أن يؤثر على النتائج.",
    },
    resources: lcabygResourcePlaceholders,
  },
  {
    id: "lccbyg-alternatives",
    subject: "lccbyg",
    language: "da",
    access: "student",
    provider: "Panopto",
    duration: "11:00",
    level: "Practice",
    title: {
      da: "LCCByg - sammenligning af alternativer",
      en: "LCCByg - Comparing Alternatives",
      ar: "LCCByg - مقارنة البدائل",
    },
    summary: {
      da: "Placeholder til en studenterlektion om scenarier og beslutningsgrundlag.",
      en: "Placeholder for a student lesson about scenarios and decision support.",
      ar: "عنصر مؤقت لدرس طلابي حول السيناريوهات ودعم القرار.",
    },
  },
  {
    id: "fem-design-loads",
    subject: "fem-design",
    language: "da",
    access: "student",
    provider: "Panopto",
    duration: "14:00",
    level: "Advanced",
    title: {
      da: "FEM-Design - lastforståelse",
      en: "FEM-Design - Understanding Loads",
      ar: "FEM-Design - فهم الأحمال",
    },
    summary: {
      da: "Placeholder til en detaljeret gennemgang med modelkontrol og resultatlæsning.",
      en: "Placeholder for a detailed walkthrough with model checks and result reading.",
      ar: "عنصر مؤقت لشرح تفصيلي مع فحص النموذج وقراءة النتائج.",
    },
  },
  {
    id: "nbs-nordic-specifications",
    subject: "nbs-nordic",
    language: "en",
    access: "public",
    provider: "YouTube",
    duration: "07:00",
    level: "Intro",
    title: {
      da: "NBS Nordic - beskrivelser og krav",
      en: "NBS Nordic - Specifications and Requirements",
      ar: "NBS Nordic - المواصفات والمتطلبات",
    },
    summary: {
      da: "Placeholder til at vise sammenhæng mellem bygningsdele, krav og beskrivelser.",
      en: "Placeholder to show links between elements, requirements, and specifications.",
      ar: "عنصر مؤقت لإظهار الروابط بين العناصر والمتطلبات والمواصفات.",
    },
  },
  {
    id: "arabic-bim-overview",
    subject: "bim",
    language: "ar",
    access: "public",
    provider: "YouTube",
    duration: "08:30",
    level: "Intro",
    title: {
      da: "BIM - arabisk introduktion",
      en: "BIM - Arabic Introduction",
      ar: "BIM - مقدمة باللغة العربية",
    },
    summary: {
      da: "Placeholder til arabisk introduktionsmateriale med samme faglige struktur.",
      en: "Placeholder for Arabic introductory material with the same learning structure.",
      ar: "عنصر مؤقت لمادة تمهيدية عربية بنفس البنية التعليمية.",
    },
  },
];

export function getVideo(id: string) {
  return videos.find((video) => video.id === id);
}
