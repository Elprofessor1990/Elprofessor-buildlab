import type { Locale } from "../i18n";

type LocalizedText = Record<Locale, string>;

export type Subject = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  objectives: Record<Locale, string[]>;
  resources: Array<{
    title: LocalizedText;
    type: "download" | "link" | "exercise";
    url?: string;
  }>;
  links: Array<{
    title: LocalizedText;
    url: string;
  }>;
};

export const subjects: Subject[] = [
  {
    slug: "bim",
    title: { da: "BIM", en: "BIM", ar: "BIM" },
    description: {
      da: "Modelbaserede arbejdsgange, koordinering og praktisk brug af bygningsinformation.",
      en: "Model-based workflows, coordination, and practical use of building information.",
      ar: "سير عمل قائم على النماذج، والتنسيق، والاستخدام العملي لمعلومات البناء.",
    },
    objectives: {
      da: ["Forstå modelstruktur", "Koordinere fagmodeller", "Dokumentere beslutninger"],
      en: ["Understand model structure", "Coordinate discipline models", "Document decisions"],
      ar: ["فهم بنية النموذج", "تنسيق نماذج التخصصات", "توثيق القرارات"],
    },
    resources: [],
    links: [],
  },
  {
    slug: "ai-in-construction",
    title: { da: "AI", en: "AI", ar: "AI" },
    description: {
      da: "Praktiske AI-arbejdsgange til analyse, dokumentation og undervisningsproduktion.",
      en: "Practical AI workflows for analysis, documentation, and teaching production.",
      ar: "سير عمل عملية بالذكاء الاصطناعي للتحليل والتوثيق وإنتاج المحتوى التعليمي.",
    },
    objectives: {
      da: ["Vurdere AI-output", "Strukturere prompts", "Bruge AI ansvarligt i projektarbejde"],
      en: ["Evaluate AI output", "Structure prompts", "Use AI responsibly in project work"],
      ar: ["تقييم مخرجات الذكاء الاصطناعي", "تنظيم التعليمات", "استخدام الذكاء الاصطناعي بمسؤولية"],
    },
    resources: [],
    links: [],
  },
  {
    slug: "pyrevit",
    title: { da: "pyRevit", en: "pyRevit", ar: "pyRevit" },
    description: {
      da: "Automatisering, små værktøjer og Revit-arbejdsgange med Python-baserede udvidelser.",
      en: "Automation, small tools, and Revit workflows with Python-based extensions.",
      ar: "الأتمتة، والأدوات الصغيرة، وسير عمل Revit باستخدام إضافات مبنية على Python.",
    },
    objectives: {
      da: ["Planlægge simple værktøjer", "Læse modeldata", "Reducere gentagne opgaver"],
      en: ["Plan simple tools", "Read model data", "Reduce repetitive tasks"],
      ar: ["تخطيط أدوات بسيطة", "قراءة بيانات النموذج", "تقليل المهام المتكررة"],
    },
    resources: [],
    links: [],
  },
  {
    slug: "dalux",
    title: { da: "Dalux", en: "Dalux", ar: "Dalux" },
    description: {
      da: "Digital byggeplads, mobil registrering, dokumentation og praktisk brug i byggeprocessen.",
      en: "Digital construction site workflows, mobile registration, documentation, and practical use in the construction process.",
      ar: "سير عمل موقع البناء الرقمي والتسجيل عبر الهاتف والتوثيق والاستخدام العملي في عملية البناء.",
    },
    objectives: {
      da: ["Forstå Dalux i byggeprocessen", "Registrere og dokumentere på mobil", "Koble observationer til projektarbejde"],
      en: ["Understand Dalux in the construction process", "Register and document on mobile", "Connect observations to project work"],
      ar: ["فهم Dalux في عملية البناء", "التسجيل والتوثيق عبر الهاتف", "ربط الملاحظات بعمل المشروع"],
    },
    resources: [],
    links: [],
  },
  {
    slug: "building-physics",
    title: { da: "Bygfys", en: "Building Physics", ar: "فيزياء المباني" },
    description: {
      da: "Varme, fugt, indeklima og dokumentation med tydelige beregningstrin.",
      en: "Heat, moisture, indoor climate, and documentation with clear calculation steps.",
      ar: "الحرارة والرطوبة والمناخ الداخلي والتوثيق بخطوات حسابية واضحة.",
    },
    objectives: {
      da: ["Forklare principper", "Opbygge beregninger", "Kontrollere resultater"],
      en: ["Explain principles", "Build calculations", "Check results"],
      ar: ["شرح المبادئ", "بناء الحسابات", "التحقق من النتائج"],
    },
    resources: [],
    links: [],
  },
  {
    slug: "nbs-nordic",
    title: { da: "NBS Nordic", en: "NBS Nordic", ar: "NBS Nordic" },
    description: {
      da: "Struktur for beskrivelser, krav og sammenhæng mellem model og tekst.",
      en: "Structure for specifications, requirements, and links between model and text.",
      ar: "بنية للمواصفات والمتطلبات والربط بين النموذج والنص.",
    },
    objectives: {
      da: ["Opbygge beskrivelser", "Knytte krav til bygningsdele", "Sikre sporbarhed"],
      en: ["Build specifications", "Link requirements to elements", "Support traceability"],
      ar: ["بناء المواصفات", "ربط المتطلبات بالعناصر", "دعم التتبع"],
    },
    resources: [
      {
        title: {
          da: "Installer Revit MCP + NBS Nordic",
          en: "Install Revit MCP + NBS Nordic",
          ar: "تثبيت Revit MCP + NBS Nordic",
        },
        type: "download",
        url: "/install-plugin",
      },
    ],
    links: [],
  },
  {
    slug: "lcabyg",
    title: { da: "LCAByg", en: "LCAByg", ar: "LCAByg" },
    description: {
      da: "Helhedsorienteret livscyklusvurdering med plads til metode, data og resultater.",
      en: "Whole-building life-cycle assessment with space for method, data, and results.",
      ar: "تقييم دورة الحياة للمبنى بالكامل مع مساحة للمنهجية والبيانات والنتائج.",
    },
    objectives: {
      da: ["Strukturere data", "Forstå resultater", "Dokumentere forudsætninger"],
      en: ["Structure data", "Understand results", "Document assumptions"],
      ar: ["تنظيم البيانات", "فهم النتائج", "توثيق الافتراضات"],
    },
    resources: [],
    links: [],
  },
  {
    slug: "lccbyg",
    title: { da: "LCCByg", en: "LCCByg", ar: "LCCByg" },
    description: {
      da: "Levetidsøkonomi, alternativer og beslutningsgrundlag for byggeri.",
      en: "Life-cycle costing, alternatives, and decision support for construction.",
      ar: "تكلفة دورة الحياة والبدائل ودعم القرار في مشاريع البناء.",
    },
    objectives: {
      da: ["Opstille alternativer", "Læse økonomiske resultater", "Forklare valg"],
      en: ["Set up alternatives", "Read cost results", "Explain choices"],
      ar: ["إعداد البدائل", "قراءة نتائج التكلفة", "شرح الاختيارات"],
    },
    resources: [],
    links: [],
  },
  {
    slug: "fem-design",
    title: { da: "FEM-Design", en: "FEM-Design", ar: "FEM-Design" },
    description: {
      da: "Beregningsmodeller, lastforståelse og resultatkontrol i konstruktionsanalyse.",
      en: "Analysis models, load understanding, and result checks in structural analysis.",
      ar: "نماذج التحليل، وفهم الأحمال، والتحقق من النتائج في التحليل الإنشائي.",
    },
    objectives: {
      da: ["Opbygge modeller", "Kontrollere laster", "Vurdere resultater"],
      en: ["Build models", "Check loads", "Assess results"],
      ar: ["بناء النماذج", "فحص الأحمال", "تقييم النتائج"],
    },
    resources: [],
    links: [],
  },
];

export function getSubject(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}
