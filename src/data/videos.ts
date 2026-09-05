import type { Locale } from "../i18n";
import { revitElementProjectVideos } from "./youtubePlaylists";

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
  playlistId?: string;
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

const nbsNordicPlaylistId = "PLQe1c9gMRl9liTUkVAq0WQY_F5xX6egTN";
const daluxPlaylistId = "PLQe1c9gMRl9mC0XTvVZqGSBRaSxRq_zLM";
const femDesignPlaylistId = "PLQe1c9gMRl9n2P_elFsgK6oU6HzygPahT";

const nbsNordicResources: VideoResource[] = [
  {
    kind: "worksheet",
    title: {
      da: "Øvelse til NBS Nordic",
      en: "NBS Nordic exercise",
      ar: "تمرين NBS Nordic",
    },
    note: {
      da: "Kan tilføjes som opgaveark, når materialet er klar.",
      en: "Can be added as a worksheet when the material is ready.",
      ar: "يمكن إضافته كورقة عمل عندما تكون المادة جاهزة.",
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
      da: "Her kan Revit-, Sigma- eller NBS Nordic-eksempelfiler linkes.",
      en: "Revit, Sigma, or NBS Nordic example files can be linked here.",
      ar: "يمكن ربط ملفات أمثلة من Revit أو Sigma أو NBS Nordic هنا.",
    },
  },
];

const daluxResources: VideoResource[] = [
  {
    kind: "worksheet",
    title: {
      da: "Øvelse til Dalux",
      en: "Dalux exercise",
      ar: "تمرين Dalux",
    },
    note: {
      da: "Kan tilføjes som opgaveark, når materialet er klar.",
      en: "Can be added as a worksheet when the material is ready.",
      ar: "يمكن إضافته كورقة عمل عندما تكون المادة جاهزة.",
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
      da: "Her kan projektfiler, registreringsskemaer eller eksporteksempler linkes.",
      en: "Project files, registration forms, or export examples can be linked here.",
      ar: "يمكن ربط ملفات المشروع أو نماذج التسجيل أو أمثلة التصدير هنا.",
    },
  },
];

const femDesignResources: VideoResource[] = [
  {
    kind: "worksheet",
    title: {
      da: "Øvelse til FEM-Design",
      en: "FEM-Design exercise",
      ar: "تمرين FEM-Design",
    },
    note: {
      da: "Kan tilføjes som opgaveark, når materialet er klar.",
      en: "Can be added as a worksheet when the material is ready.",
      ar: "يمكن إضافته كورقة عمل عندما تكون المادة جاهزة.",
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
      da: "Her kan FEM-Design-modeller, beregningseksempler eller dokumentationsfiler linkes.",
      en: "FEM-Design models, calculation examples, or documentation files can be linked here.",
      ar: "يمكن ربط نماذج FEM-Design أو أمثلة الحساب أو ملفات التوثيق هنا.",
    },
  },
];

function femDesignVideo(
  id: string,
  youtubeId: string,
  duration: string,
  level: VideoItem["level"],
  titleDa: string,
  titleEn: string,
  titleAr: string,
  summaryDa: string,
  summaryEn: string,
  summaryAr: string,
): VideoItem {
  return {
    id,
    subject: "fem-design",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId,
    playlistId: femDesignPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=${youtubeId}&list=${femDesignPlaylistId}`,
    duration,
    level,
    title: {
      da: titleDa,
      en: titleEn,
      ar: titleAr,
    },
    summary: {
      da: summaryDa,
      en: summaryEn,
      ar: summaryAr,
    },
    description: {
      da: `${summaryDa} Videoen er en del af FEM Design 101-playlisten.`,
      en: `${summaryEn} This video is part of the FEM Design 101 playlist.`,
      ar: `${summaryAr} هذا الفيديو جزء من قائمة تشغيل FEM Design 101.`,
    },
    resources: femDesignResources,
  };
}

const femDesignVideos: VideoItem[] = [
  femDesignVideo(
    "fem-design-101-grids",
    "y6t_F62DJ0w",
    "4:25",
    "Intro",
    "101 - Grids FEM design",
    "101 - Grids in FEM Design",
    "101 - الشبكات في FEM Design",
    "Opsætning af grids som grundlag for modelarbejdet i FEM-Design.",
    "Setting up grids as the basis for model work in FEM-Design.",
    "إعداد الشبكات كأساس للعمل على النموذج في FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-soejler",
    "IdUZ74ElLpM",
    "13:21",
    "Practice",
    "101 - Søjler i FEM - Design",
    "101 - Columns in FEM-Design",
    "101 - الأعمدة في FEM-Design",
    "Oprettelse og arbejde med søjler i FEM-Design-modellen.",
    "Creating and working with columns in the FEM-Design model.",
    "إنشاء الأعمدة والعمل معها في نموذج FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-bjaelker",
    "6rpvChClcaE",
    "13:21",
    "Practice",
    "101 - Bjælker i FEM Design",
    "101 - Beams in FEM Design",
    "101 - الكمرات في FEM Design",
    "Oprettelse og arbejde med bjælker i FEM-Design.",
    "Creating and working with beams in FEM-Design.",
    "إنشاء الكمرات والعمل معها في FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-understoetningstyper",
    "nFYt7DFMXF0",
    "5:25",
    "Intro",
    "101- Understøtningstyper FEM - design",
    "101 - Support Types in FEM-Design",
    "101 - أنواع المساند في FEM-Design",
    "Introduktion til understøtningstyper og deres rolle i FEM-Design-modellen.",
    "Introduction to support types and their role in the FEM-Design model.",
    "مقدمة إلى أنواع المساند ودورها في نموذج FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-laster-lastkombinationer",
    "TgwKfLQiSHs",
    "13:39",
    "Practice",
    "101 - Laster og lastkombinationer - FEM design",
    "101 - Loads and Load Combinations in FEM Design",
    "101 - الأحمال وتركيبات الأحمال في FEM Design",
    "Gennemgang af laster og lastkombinationer i FEM-Design.",
    "Walkthrough of loads and load combinations in FEM-Design.",
    "شرح الأحمال وتركيبات الأحمال في FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-nedboejning-brud",
    "A8ShThfqTUA",
    "22:39",
    "Advanced",
    "101 - Eftervisning af Nedbøjning & brud i FEM-Design",
    "101 - Checking Deflection and Failure in FEM-Design",
    "101 - التحقق من الهبوط والكسر في FEM-Design",
    "Eftervisning af nedbøjning og brud i FEM-Design.",
    "Checking deflection and failure in FEM-Design.",
    "التحقق من الهبوط والكسر في FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-snitkurver-reaktioner",
    "pIkDKiDznkU",
    "14:00",
    "Practice",
    "101 - Snitkurve og reaktioner m. FEM-design",
    "101 - Section Curves and Reactions with FEM-Design",
    "101 - مخططات القطع وردود الأفعال مع FEM-Design",
    "Læsning af snitkurver og reaktioner i FEM-Design.",
    "Reading section curves and reactions in FEM-Design.",
    "قراءة مخططات القطع وردود الأفعال في FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-gitterbjaelker",
    "sAhaCLOpNJ0",
    "25:29",
    "Advanced",
    "101 - Gitterbjælker",
    "101 - Truss Beams",
    "101 - الجمالونات",
    "Arbejde med gitterbjælker i FEM-Design-forløbet.",
    "Working with truss beams in the FEM-Design sequence.",
    "العمل مع الجمالونات ضمن مسار FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-skeletkonstruktion",
    "Xr7SeJGCJ-M",
    "50:27",
    "Advanced",
    "101 - Beregning af Skelletkonstruktion via FEM-desing *",
    "101 - Calculating a Frame Structure with FEM-Design",
    "101 - حساب هيكل إنشائي باستخدام FEM-Design",
    "Beregning af skeletkonstruktion i FEM-Design.",
    "Calculating a frame structure in FEM-Design.",
    "حساب هيكل إنشائي في FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-dokumentationsgrundlag-nyttelast",
    "jXRkH5bgFaw",
    "37:13",
    "Advanced",
    "101 - Dokumentationsgrundlag og Nyttelast kategori **",
    "101 - Documentation Basis and Live Load Category",
    "101 - أساس التوثيق وفئة الحمل الحي",
    "Dokumentationsgrundlag og nyttelastkategori i FEM-Design-arbejdet.",
    "Documentation basis and live load category in FEM-Design work.",
    "أساس التوثيق وفئة الحمل الحي في عمل FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-print-dokumentation",
    "RcnshEU_Dtc",
    "6:20",
    "Practice",
    "101 - printe sit Dokumentation ***",
    "101 - Printing Documentation",
    "101 - طباعة التوثيق",
    "Print af dokumentation fra FEM-Design.",
    "Printing documentation from FEM-Design.",
    "طباعة التوثيق من FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-projektering-beton",
    "7ybx6I9LKYQ",
    "29:45",
    "Advanced",
    "101 - Projektering Beton m. FEM - Design",
    "101 - Concrete Design with FEM-Design",
    "101 - تصميم الخرسانة باستخدام FEM-Design",
    "Projektering af beton med FEM-Design.",
    "Concrete design with FEM-Design.",
    "تصميم الخرسانة باستخدام FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-midlertidig-afstivning",
    "ZPmndp-v0Ns",
    "14:06",
    "Advanced",
    "101 - Beregning af midlertidige afstivning (Renovering) FEM design",
    "101 - Temporary Bracing Calculation in FEM Design",
    "101 - حساب التدعيم المؤقت في FEM Design",
    "Beregning af midlertidig afstivning i en renoveringssituation.",
    "Temporary bracing calculation in a renovation situation.",
    "حساب التدعيم المؤقت في حالة ترميم.",
  ),
  femDesignVideo(
    "fem-design-101-opret-lastkombinationer",
    "7xrNtWzjVGU",
    "27:25",
    "Practice",
    "101- Hvordan Oprettes lastkombinationer",
    "101 - How to Create Load Combinations",
    "101 - كيفية إنشاء تركيبات الأحمال",
    "Oprettelse af lastkombinationer i FEM-Design.",
    "Creating load combinations in FEM-Design.",
    "إنشاء تركيبات الأحمال في FEM-Design.",
  ),
  femDesignVideo(
    "fem-design-101-betonplade-armering-dokumentation",
    "18PXElcKESE",
    "33:09",
    "Advanced",
    "betonplade beregning af armering og dokumentation",
    "Concrete Slab Reinforcement Calculation and Documentation",
    "حساب تسليح البلاطة الخرسانية والتوثيق",
    "Beregning af armering og dokumentation for betonplade.",
    "Reinforcement calculation and documentation for a concrete slab.",
    "حساب التسليح والتوثيق للبلاطة الخرسانية.",
  ),
];

export const videos: VideoItem[] = [
  ...revitElementProjectVideos,
  {
    id: "dalux-01-introduktion-byggeprocessen",
    subject: "dalux",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "CzqzmT_L870",
    playlistId: daluxPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=CzqzmT_L870&list=${daluxPlaylistId}`,
    duration: "11:19",
    level: "Intro",
    title: {
      da: "(Del 1) Dalux - Introduktion og anvendelse i byggeprocessen",
      en: "(Part 1) Dalux - Introduction and Use in the Construction Process",
      ar: "(الجزء 1) Dalux - مقدمة والاستخدام في عملية البناء",
    },
    summary: {
      da: "Introduktion til Dalux og hvordan værktøjet kan anvendes i byggeprocessen.",
      en: "Introduction to Dalux and how the tool can be used in the construction process.",
      ar: "مقدمة إلى Dalux وكيف يمكن استخدام الأداة في عملية البناء.",
    },
    description: {
      da: "Videoen er første del af Dalux-forløbet og giver et praktisk overblik over anvendelse i byggeprocessen.",
      en: "This is the first part of the Dalux sequence and gives a practical overview of use in the construction process.",
      ar: "هذا هو الجزء الأول من مسار Dalux ويقدم نظرة عملية على الاستخدام في عملية البناء.",
    },
    resources: daluxResources,
  },
  {
    id: "dalux-02-mobil-registrering-dokumentation",
    subject: "dalux",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "GRwh1ioqdKI",
    playlistId: daluxPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=GRwh1ioqdKI&list=${daluxPlaylistId}`,
    duration: "3:27",
    level: "Practice",
    title: {
      da: "(Del 2) Dalux i mobil - Registrering og dokumentation",
      en: "(Part 2) Dalux on Mobile - Registration and Documentation",
      ar: "(الجزء 2) Dalux على الهاتف - التسجيل والتوثيق",
    },
    summary: {
      da: "Mobil registrering og dokumentation i Dalux som del af byggepladsens praktiske workflow.",
      en: "Mobile registration and documentation in Dalux as part of the practical site workflow.",
      ar: "التسجيل والتوثيق عبر الهاتف في Dalux كجزء من سير العمل العملي في الموقع.",
    },
    description: {
      da: "Videoen viser brugen af Dalux på mobil til registrering og dokumentation i byggeprocessen.",
      en: "The video shows the use of Dalux on mobile for registration and documentation in the construction process.",
      ar: "يوضح الفيديو استخدام Dalux على الهاتف للتسجيل والتوثيق في عملية البناء.",
    },
    resources: daluxResources,
  },
  {
    id: "nbs-nordic-01-account-plugin",
    subject: "nbs-nordic",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "RZnQvsHu23U",
    playlistId: nbsNordicPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=RZnQvsHu23U&list=${nbsNordicPlaylistId}`,
    duration: "3:17",
    level: "Intro",
    title: {
      da: "NBS Nordic #1: opret konto + plug in",
      en: "NBS Nordic #1: Create Account + Plug-in",
      ar: "NBS Nordic #1: إنشاء حساب وإضافة Plug-in",
    },
    summary: {
      da: "Oprettelse af konto og opsætning af plug-in som første trin i NBS Nordic-forløbet.",
      en: "Account creation and plug-in setup as the first step in the NBS Nordic course sequence.",
      ar: "إنشاء الحساب وإعداد الإضافة كخطوة أولى في مسار NBS Nordic.",
    },
    description: {
      da: "Videoen er en del af den offentlige NBS Nordic-playliste og introducerer de første praktiske trin: konto, adgang og plug-in.",
      en: "This public NBS Nordic playlist video introduces the first practical steps: account, access, and plug-in setup.",
      ar: "هذا الفيديو من قائمة تشغيل NBS Nordic العامة ويقدم الخطوات العملية الأولى: الحساب والوصول وإعداد الإضافة.",
    },
    resources: nbsNordicResources,
  },
  {
    id: "nbs-nordic-02-project-building-elements",
    subject: "nbs-nordic",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "_iE7C5XPp3U",
    playlistId: nbsNordicPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=_iE7C5XPp3U&list=${nbsNordicPlaylistId}`,
    duration: "4:17",
    level: "Intro",
    title: {
      da: "NBS Nordic #2: Opret et Projekt samt opret bygningsdele",
      en: "NBS Nordic #2: Create a Project and Building Elements",
      ar: "NBS Nordic #2: إنشاء مشروع وعناصر مبنى",
    },
    summary: {
      da: "Oprettelse af projekt og bygningsdele som grundstruktur i NBS Nordic.",
      en: "Project and building element setup as the basic structure in NBS Nordic.",
      ar: "إعداد المشروع وعناصر المبنى كبنية أساسية في NBS Nordic.",
    },
    description: {
      da: "Videoen viser, hvordan et projekt og de første bygningsdele oprettes, så arbejdet i NBS Nordic får en tydelig struktur.",
      en: "The video shows how to create a project and the first building elements, giving the NBS Nordic workflow a clear structure.",
      ar: "يوضح الفيديو كيفية إنشاء مشروع وأول عناصر المبنى، مما يعطي سير العمل في NBS Nordic بنية واضحة.",
    },
    resources: nbsNordicResources,
  },
  {
    id: "nbs-nordic-03-revit-quantities-classification",
    subject: "nbs-nordic",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "RwZVrmygZ2k",
    playlistId: nbsNordicPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=RwZVrmygZ2k&list=${nbsNordicPlaylistId}`,
    duration: "22:59",
    level: "Practice",
    title: {
      da: "NBS Nordic #3: Hvordan tilknyttes bygningsdel m. Revit samt udtræk mængder og klassifikation",
      en: "NBS Nordic #3: Link Building Elements with Revit, Quantities, and Classification",
      ar: "NBS Nordic #3: ربط عناصر المبنى مع Revit والكميات والتصنيف",
    },
    summary: {
      da: "Kobling mellem bygningsdele og Revit med mængdeudtræk og klassifikation.",
      en: "Linking building elements and Revit with quantity extraction and classification.",
      ar: "ربط عناصر المبنى وRevit مع استخراج الكميات والتصنيف.",
    },
    description: {
      da: "Videoen gennemgår koblingen mellem bygningsdele og Revit, herunder udtræk af mængder og brug af klassifikation.",
      en: "The video walks through linking building elements with Revit, including quantity extraction and classification.",
      ar: "يشرح الفيديو ربط عناصر المبنى مع Revit، بما في ذلك استخراج الكميات واستخدام التصنيف.",
    },
    resources: nbsNordicResources,
  },
  {
    id: "nbs-nordic-04-description-print",
    subject: "nbs-nordic",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "HXe5Z6qWvs0",
    playlistId: nbsNordicPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=HXe5Z6qWvs0&list=${nbsNordicPlaylistId}`,
    duration: "13:03",
    level: "Practice",
    title: {
      da: "NBS Nordic #4: Tilknytte af bygningsdelsbeskrivelse til oprettet bygningsdele og print dokumentet",
      en: "NBS Nordic #4: Link Building Element Description and Print the Document",
      ar: "NBS Nordic #4: ربط وصف عنصر المبنى وطباعة المستند",
    },
    summary: {
      da: "Tilknytning af bygningsdelsbeskrivelse til oprettede bygningsdele samt print af dokument.",
      en: "Linking building element descriptions to created elements and printing the document.",
      ar: "ربط أوصاف عناصر المبنى بالعناصر المنشأة وطباعة المستند.",
    },
    description: {
      da: "Videoen viser, hvordan en bygningsdelsbeskrivelse knyttes til oprettede bygningsdele, og hvordan dokumentet kan printes.",
      en: "The video shows how a building element description is linked to created elements and how the document can be printed.",
      ar: "يوضح الفيديو كيفية ربط وصف عنصر المبنى بالعناصر المنشأة وكيفية طباعة المستند.",
    },
    resources: nbsNordicResources,
  },
  {
    id: "nbs-nordic-05-tender-list",
    subject: "nbs-nordic",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "-UNS9MRXEps",
    playlistId: nbsNordicPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=-UNS9MRXEps&list=${nbsNordicPlaylistId}`,
    duration: "6:05",
    level: "Practice",
    title: {
      da: "NBS Nordic #5: Udarbejd en tilbudsliste i NBS Nordic",
      en: "NBS Nordic #5: Create a Tender List in NBS Nordic",
      ar: "NBS Nordic #5: إعداد قائمة عروض في NBS Nordic",
    },
    summary: {
      da: "Udarbejdelse af en tilbudsliste i NBS Nordic.",
      en: "Creating a tender list in NBS Nordic.",
      ar: "إعداد قائمة عروض في NBS Nordic.",
    },
    description: {
      da: "Videoen viser den praktiske opbygning af en tilbudsliste i NBS Nordic.",
      en: "The video shows the practical setup of a tender list in NBS Nordic.",
      ar: "يوضح الفيديو الإعداد العملي لقائمة عروض في NBS Nordic.",
    },
    resources: nbsNordicResources,
  },
  {
    id: "nbs-nordic-06-lca-export-lcabyg",
    subject: "nbs-nordic",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "LBEbQOw_3Cs",
    playlistId: nbsNordicPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=LBEbQOw_3Cs&list=${nbsNordicPlaylistId}`,
    duration: "14:53",
    level: "Practice",
    title: {
      da: "NBS Nordic #6: Beregning af LCA med NBS Nordic samt eksporter fil til LCABYG til videre arbejde",
      en: "NBS Nordic #6: Calculate LCA and Export to LCAbyg",
      ar: "NBS Nordic #6: حساب LCA والتصدير إلى LCAbyg",
    },
    summary: {
      da: "Beregning af LCA i NBS Nordic og eksport til LCAbyg til videre arbejde.",
      en: "LCA calculation in NBS Nordic and export to LCAbyg for further work.",
      ar: "حساب LCA في NBS Nordic والتصدير إلى LCAbyg لمتابعة العمل.",
    },
    description: {
      da: "Videoen viser beregning af LCA i NBS Nordic og eksport af fil til LCAbyg, så resultaterne kan bruges videre.",
      en: "The video shows LCA calculation in NBS Nordic and file export to LCAbyg so the results can be used further.",
      ar: "يوضح الفيديو حساب LCA في NBS Nordic وتصدير الملف إلى LCAbyg لاستخدام النتائج لاحقا.",
    },
    resources: nbsNordicResources,
  },
  {
    id: "nbs-nordic-07-sigma-prices",
    subject: "nbs-nordic",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: "ujWLkWnJIzw",
    playlistId: nbsNordicPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=ujWLkWnJIzw&list=${nbsNordicPlaylistId}`,
    duration: "16:11",
    level: "Practice",
    title: {
      da: "NBS Nordic #7: kobling NBS Nordic med Sigma for beregning af priser",
      en: "NBS Nordic #7: Connect NBS Nordic with Sigma for Price Calculation",
      ar: "NBS Nordic #7: ربط NBS Nordic مع Sigma لحساب الأسعار",
    },
    summary: {
      da: "Kobling mellem NBS Nordic og Sigma til beregning af priser.",
      en: "Connecting NBS Nordic and Sigma for price calculation.",
      ar: "ربط NBS Nordic وSigma لحساب الأسعار.",
    },
    description: {
      da: "Videoen gennemgår koblingen mellem NBS Nordic og Sigma, så priser kan beregnes som en del af arbejdsflowet.",
      en: "The video walks through the connection between NBS Nordic and Sigma so prices can be calculated as part of the workflow.",
      ar: "يشرح الفيديو الربط بين NBS Nordic وSigma بحيث يمكن حساب الأسعار كجزء من سير العمل.",
    },
    resources: nbsNordicResources,
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
  ...femDesignVideos,
];

export function getVideo(id: string) {
  return videos.find((video) => video.id === id);
}
