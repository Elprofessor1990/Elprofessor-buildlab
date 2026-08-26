import type { Locale } from "../i18n";

type LocalizedText = Record<Locale, string>;

export type SubjectHub = {
  subject: string;
  intro: LocalizedText;
  videoTypes: Array<{
    title: LocalizedText;
    description: LocalizedText;
  }>;
  connectionNote: LocalizedText;
  connections: string[];
};

export const subjectHubs: SubjectHub[] = [
  {
    subject: "bim",
    intro: {
      da: "BIM-fanen samler modelbaserede arbejdsgange, Revit-grundlag, koordinering og de første praktiske trin i digitale byggeprojekter.",
      en: "The BIM tab collects model-based workflows, Revit basics, coordination, and the first practical steps in digital construction projects.",
      ar: "يجمع تبويب BIM سير العمل المعتمد على النماذج وأساسيات Revit والتنسيق والخطوات العملية الأولى في مشاريع البناء الرقمية.",
    },
    videoTypes: [
      {
        title: { da: "Grundkursus", en: "Basic Course", ar: "دورة أساسية" },
        description: {
          da: "Korte introduktioner til modelstruktur, views, levels og almindelige arbejdsgange.",
          en: "Short introductions to model structure, views, levels, and common workflows.",
          ar: "مقدمات قصيرة عن بنية النموذج والعروض والمستويات وسير العمل الشائع.",
        },
      },
      {
        title: { da: "Koordinering", en: "Coordination", ar: "التنسيق" },
        description: {
          da: "Videoer om fagmodeller, kontrol og hvordan information hænger sammen i projektet.",
          en: "Videos about discipline models, checks, and how information connects in a project.",
          ar: "فيديوهات عن نماذج التخصصات والفحص وكيفية ترابط المعلومات في المشروع.",
        },
      },
      {
        title: { da: "Automatisering", en: "Automation", ar: "الأتمتة" },
        description: {
          da: "Indhold der kan kobles videre til pyRevit og små værktøjer til gentagne opgaver.",
          en: "Content that can connect onward to pyRevit and small tools for repeated tasks.",
          ar: "محتوى يمكن ربطه لاحقا بـ pyRevit وأدوات صغيرة للمهام المتكررة.",
        },
      },
    ],
    connectionNote: {
      da: "BIM hænger især sammen med pyRevit, Dalux og modelbaseret dokumentation.",
      en: "BIM connects especially with pyRevit, Dalux, and model-based documentation.",
      ar: "يرتبط BIM خصوصا بـ pyRevit وDalux والتوثيق المعتمد على النماذج.",
    },
    connections: ["pyrevit", "dalux", "nbs-nordic"],
  },
  {
    subject: "ai-in-construction",
    intro: {
      da: "AI-fanen er til praktisk brug af AI i byggeri, analyse, dokumentation, undervisningsgrafik og kontrolleret projektarbejde.",
      en: "The AI tab is for practical use of AI in construction, analysis, documentation, teaching graphics, and controlled project work.",
      ar: "تبويب AI مخصص للاستخدام العملي للذكاء الاصطناعي في البناء والتحليل والتوثيق ورسوم التعليم والعمل المنظم في المشاريع.",
    },
    videoTypes: [
      {
        title: { da: "Prompt og analyse", en: "Prompting and Analysis", ar: "التعليمات والتحليل" },
        description: {
          da: "Metodevideoer om at stille gode spørgsmål, strukturere svar og kontrollere output.",
          en: "Method videos about asking better questions, structuring answers, and checking output.",
          ar: "فيديوهات منهجية عن صياغة أسئلة أفضل وتنظيم الإجابات والتحقق من المخرجات.",
        },
      },
      {
        title: { da: "Visuelle forklaringer", en: "Visual Explanations", ar: "شرح مرئي" },
        description: {
          da: "Indhold til diagrammer, animationer og korte forklaringer af komplekse emner.",
          en: "Content for diagrams, animations, and short explanations of complex topics.",
          ar: "محتوى للمخططات والرسوم المتحركة والشروحات القصيرة للموضوعات المعقدة.",
        },
      },
      {
        title: { da: "Ansvarlig brug", en: "Responsible Use", ar: "استخدام مسؤول" },
        description: {
          da: "Videoer der viser, hvordan AI-resultater kan vurderes fagligt før de bruges.",
          en: "Videos showing how AI results can be professionally assessed before use.",
          ar: "فيديوهات توضح كيفية تقييم نتائج الذكاء الاصطناعي مهنيا قبل استخدامها.",
        },
      },
    ],
    connectionNote: {
      da: "AI kan støtte BIM, pyRevit, bygningsfysik og produktion af undervisningsmaterialer.",
      en: "AI can support BIM, pyRevit, building physics, and production of teaching resources.",
      ar: "يمكن أن يدعم AI مجالات BIM وpyRevit وفيزياء المباني وإنتاج مواد التعليم.",
    },
    connections: ["bim", "pyrevit", "building-physics"],
  },
  {
    subject: "pyrevit",
    intro: {
      da: "pyRevit-fanen er til små Revit-værktøjer, scripts og automatisering, som gør gentagne BIM-opgaver mere overskuelige.",
      en: "The pyRevit tab is for small Revit tools, scripts, and automation that make repeated BIM tasks easier to manage.",
      ar: "تبويب pyRevit مخصص لأدوات Revit الصغيرة والسكربتات والأتمتة التي تجعل مهام BIM المتكررة أسهل.",
    },
    videoTypes: [
      {
        title: { da: "Første værktøjer", en: "First Tools", ar: "الأدوات الأولى" },
        description: {
          da: "Korte videoer om simple værktøjer og hvordan de tænkes før de bygges.",
          en: "Short videos about simple tools and how to plan them before building.",
          ar: "فيديوهات قصيرة عن أدوات بسيطة وكيفية التخطيط لها قبل بنائها.",
        },
      },
      {
        title: { da: "Modeldata", en: "Model Data", ar: "بيانات النموذج" },
        description: {
          da: "Gennemgange af hvordan data kan læses, kontrolleres og bruges i Revit.",
          en: "Walkthroughs of how data can be read, checked, and used in Revit.",
          ar: "شروحات عن كيفية قراءة البيانات وفحصها واستخدامها في Revit.",
        },
      },
      {
        title: { da: "Workflow", en: "Workflow", ar: "سير العمل" },
        description: {
          da: "Eksempler på hvor automatisering passer ind i det almindelige BIM-arbejde.",
          en: "Examples of where automation fits into everyday BIM work.",
          ar: "أمثلة عن مكان الأتمتة ضمن عمل BIM اليومي.",
        },
      },
    ],
    connectionNote: {
      da: "pyRevit ligger tæt op ad BIM og kan også kobles til AI, når scripts og datakontrol skal planlægges.",
      en: "pyRevit sits close to BIM and can also connect with AI when scripts and data checks are planned.",
      ar: "يرتبط pyRevit ارتباطا وثيقا بـ BIM ويمكن ربطه أيضا بـ AI عند تخطيط السكربتات وفحص البيانات.",
    },
    connections: ["bim", "ai-in-construction"],
  },
  {
    subject: "dalux",
    intro: {
      da: "Dalux-fanen samler videoer om digital byggeplads, anvendelse i byggeprocessen og mobil registrering med dokumentation.",
      en: "The Dalux tab collects videos about digital construction site workflows, use in the construction process, and mobile registration with documentation.",
      ar: "يجمع تبويب Dalux فيديوهات عن موقع البناء الرقمي والاستخدام في عملية البناء والتسجيل عبر الهاتف مع التوثيق.",
    },
    videoTypes: [
      {
        title: { da: "Byggeprocessen", en: "Construction Process", ar: "عملية البناء" },
        description: {
          da: "Introduktion til hvordan Dalux kan bruges i projektets praktiske arbejdsgange.",
          en: "Introduction to how Dalux can be used in practical project workflows.",
          ar: "مقدمة عن كيفية استخدام Dalux في سير العمل العملي للمشروع.",
        },
      },
      {
        title: { da: "Mobil registrering", en: "Mobile Registration", ar: "التسجيل عبر الهاتف" },
        description: {
          da: "Videoer om registrering på mobil, observationer og dokumentation på byggepladsen.",
          en: "Videos about mobile registration, observations, and site documentation.",
          ar: "فيديوهات عن التسجيل عبر الهاتف والملاحظات وتوثيق الموقع.",
        },
      },
      {
        title: { da: "Dokumentation", en: "Documentation", ar: "التوثيق" },
        description: {
          da: "Indhold der viser, hvordan registreringer kan bruges videre i projektarbejdet.",
          en: "Content showing how registrations can be reused in project work.",
          ar: "محتوى يوضح كيف يمكن استخدام التسجيلات لاحقا في عمل المشروع.",
        },
      },
    ],
    connectionNote: {
      da: "Dalux hænger især sammen med BIM, NBS Nordic og digital dokumentation på byggepladsen.",
      en: "Dalux connects especially with BIM, NBS Nordic, and digital site documentation.",
      ar: "يرتبط Dalux خصوصا بـ BIM وNBS Nordic والتوثيق الرقمي في موقع البناء.",
    },
    connections: ["bim", "nbs-nordic", "lcabyg"],
  },
  {
    subject: "building-physics",
    intro: {
      da: "Bygfys-fanen er til varme, fugt, indeklima, beregningstrin og den dokumentation, der gør resultaterne forståelige.",
      en: "The Building Physics tab is for heat, moisture, indoor climate, calculation steps, and documentation that makes results understandable.",
      ar: "تبويب فيزياء المباني مخصص للحرارة والرطوبة والمناخ الداخلي وخطوات الحساب والتوثيق الذي يجعل النتائج مفهومة.",
    },
    videoTypes: [
      {
        title: { da: "Varme", en: "Heat", ar: "الحرارة" },
        description: {
          da: "Korte videoer om lag, U-værdi, varmetab og energiforståelse.",
          en: "Short videos about layers, U-values, heat loss, and energy understanding.",
          ar: "فيديوهات قصيرة عن الطبقات وقيمة U وفقد الحرارة وفهم الطاقة.",
        },
      },
      {
        title: { da: "Fugt og indeklima", en: "Moisture and Indoor Climate", ar: "الرطوبة والمناخ الداخلي" },
        description: {
          da: "Forklaringer om fugttransport, komfort, ventilation og dokumentation.",
          en: "Explanations of moisture transport, comfort, ventilation, and documentation.",
          ar: "شروحات عن انتقال الرطوبة والراحة والتهوية والتوثيق.",
        },
      },
      {
        title: { da: "Regneeksempler", en: "Calculation Examples", ar: "أمثلة حسابية" },
        description: {
          da: "Trin-for-trin videoer med plads til opgaver og kontrol af resultater.",
          en: "Step-by-step videos with room for exercises and result checks.",
          ar: "فيديوهات خطوة بخطوة مع مساحة للتمارين وفحص النتائج.",
        },
      },
    ],
    connectionNote: {
      da: "Bygfys kan bruges sammen med BIM og materialevalg i LCAByg.",
      en: "Building Physics can be used with BIM and material choices in LCAByg.",
      ar: "يمكن استخدام فيزياء المباني مع BIM واختيار المواد في LCAByg.",
    },
    connections: ["bim", "lcabyg"],
  },
  {
    subject: "nbs-nordic",
    intro: {
      da: "NBS Nordic-fanen samler videoer om konto, projekt, bygningsdele, Revit-kobling, tilbudslister, LCA-eksport og prisberegning.",
      en: "The NBS Nordic tab collects videos about accounts, projects, building elements, Revit links, tender lists, LCA export, and price calculation.",
      ar: "يجمع تبويب NBS Nordic فيديوهات عن الحساب والمشروع وعناصر المبنى وربط Revit وقوائم العروض وتصدير LCA وحساب الأسعار.",
    },
    videoTypes: [
      {
        title: { da: "Kom i gang", en: "Getting Started", ar: "البدء" },
        description: {
          da: "Konto, adgang, plug-in, projektoprettelse og de første bygningsdele.",
          en: "Account, access, plug-in, project setup, and first building elements.",
          ar: "الحساب والوصول والإضافة وإعداد المشروع وأول عناصر المبنى.",
        },
      },
      {
        title: { da: "Model og beskrivelser", en: "Model and Specifications", ar: "النموذج والمواصفات" },
        description: {
          da: "Revit-kobling, mængder, klassifikation og bygningsdelsbeskrivelser.",
          en: "Revit connection, quantities, classification, and building element descriptions.",
          ar: "ربط Revit والكميات والتصنيف وأوصاف عناصر المبنى.",
        },
      },
      {
        title: { da: "Videre brug", en: "Further Use", ar: "استخدام لاحق" },
        description: {
          da: "Tilbudsliste, LCA-eksport til LCAbyg og kobling til Sigma.",
          en: "Tender list, LCA export to LCAbyg, and connection to Sigma.",
          ar: "قائمة العروض وتصدير LCA إلى LCAbyg والربط مع Sigma.",
        },
      },
    ],
    connectionNote: {
      da: "NBS Nordic passer godt sammen med BIM, LCAByg og LCCByg, fordi data kan bruges videre i flere arbejdsgange.",
      en: "NBS Nordic connects well with BIM, LCAByg, and LCCByg because data can be reused across workflows.",
      ar: "يرتبط NBS Nordic جيدا بـ BIM وLCAByg وLCCByg لأن البيانات يمكن استخدامها في عدة مسارات عمل.",
    },
    connections: ["bim", "lcabyg", "lccbyg"],
  },
  {
    subject: "lcabyg",
    intro: {
      da: "LCAByg-fanen er til helhedsorienteret livscyklusvurdering, data, materialer, resultater og dokumentation af klimapåvirkning.",
      en: "The LCAByg tab is for whole-building life-cycle assessment, data, materials, results, and documentation of climate impact.",
      ar: "تبويب LCAByg مخصص لتقييم دورة الحياة للمبنى بالكامل والبيانات والمواد والنتائج وتوثيق الأثر المناخي.",
    },
    videoTypes: [
      {
        title: { da: "Installation og data", en: "Installation and Data", ar: "التثبيت والبيانات" },
        description: {
          da: "Videoer om opsætning, biblioteker og de data der skal være klar først.",
          en: "Videos about setup, libraries, and the data that needs to be ready first.",
          ar: "فيديوهات عن الإعداد والمكتبات والبيانات التي يجب تجهيزها أولا.",
        },
      },
      {
        title: { da: "Projekt og beregning", en: "Project and Calculation", ar: "المشروع والحساب" },
        description: {
          da: "Trin-for-trin opbygning af projekt, mængder og første beregninger.",
          en: "Step-by-step project setup, quantities, and first calculations.",
          ar: "إعداد المشروع والكميات والحسابات الأولى خطوة بخطوة.",
        },
      },
      {
        title: { da: "Resultater", en: "Results", ar: "النتائج" },
        description: {
          da: "Læsning, forklaring og dokumentation af resultater og forudsætninger.",
          en: "Reading, explaining, and documenting results and assumptions.",
          ar: "قراءة وشرح وتوثيق النتائج والافتراضات.",
        },
      },
    ],
    connectionNote: {
      da: "LCAByg hænger sammen med NBS Nordic, LCCByg og materialevalg i projektering.",
      en: "LCAByg connects with NBS Nordic, LCCByg, and material choices in design work.",
      ar: "يرتبط LCAByg بـ NBS Nordic وLCCByg واختيار المواد في التصميم.",
    },
    connections: ["nbs-nordic", "lccbyg", "building-physics"],
  },
  {
    subject: "lccbyg",
    intro: {
      da: "LCCByg-fanen er til levetidsøkonomi, sammenligning af alternativer og beslutningsgrundlag for byggeri.",
      en: "The LCCByg tab is for life-cycle costing, comparison of alternatives, and decision support for construction.",
      ar: "تبويب LCCByg مخصص لتكلفة دورة الحياة ومقارنة البدائل ودعم القرار في البناء.",
    },
    videoTypes: [
      {
        title: { da: "Grundlag", en: "Foundations", ar: "الأساسيات" },
        description: {
          da: "Videoer om perioder, levetider, omkostningstyper og første struktur.",
          en: "Videos about periods, lifetimes, cost types, and initial structure.",
          ar: "فيديوهات عن الفترات والأعمار وأنواع التكلفة والبنية الأولى.",
        },
      },
      {
        title: { da: "Alternativer", en: "Alternatives", ar: "البدائل" },
        description: {
          da: "Sammenligning af løsninger og forklaring af økonomiske konsekvenser.",
          en: "Comparison of solutions and explanation of cost consequences.",
          ar: "مقارنة الحلول وشرح النتائج الاقتصادية.",
        },
      },
      {
        title: { da: "Beslutninger", en: "Decisions", ar: "القرارات" },
        description: {
          da: "Indhold der kobler beregninger til valg i projekteringen.",
          en: "Content connecting calculations to design choices.",
          ar: "محتوى يربط الحسابات باختيارات التصميم.",
        },
      },
    ],
    connectionNote: {
      da: "LCCByg kan bruges sammen med LCAByg, NBS Nordic og valg mellem løsninger.",
      en: "LCCByg can be used with LCAByg, NBS Nordic, and choices between solutions.",
      ar: "يمكن استخدام LCCByg مع LCAByg وNBS Nordic والاختيار بين الحلول.",
    },
    connections: ["lcabyg", "nbs-nordic"],
  },
  {
    subject: "fem-design",
    intro: {
      da: "FEM-Design-fanen er til beregningsmodeller, lastforståelse, resultatlæsning og kontrol af konstruktionsanalyse.",
      en: "The FEM-Design tab is for analysis models, load understanding, result reading, and checking structural analysis.",
      ar: "تبويب FEM-Design مخصص لنماذج الحساب وفهم الأحمال وقراءة النتائج وفحص التحليل الإنشائي.",
    },
    videoTypes: [
      {
        title: { da: "Modelopbygning", en: "Model Setup", ar: "إعداد النموذج" },
        description: {
          da: "Videoer om at opbygge modeller, forstå systemer og forberede analyse.",
          en: "Videos about building models, understanding systems, and preparing analysis.",
          ar: "فيديوهات عن بناء النماذج وفهم الأنظمة وتجهيز التحليل.",
        },
      },
      {
        title: { da: "Laster", en: "Loads", ar: "الأحمال" },
        description: {
          da: "Gennemgange af laster, kombinationer og kontrolpunkter.",
          en: "Walkthroughs of loads, combinations, and checkpoints.",
          ar: "شروحات عن الأحمال والتركيبات ونقاط الفحص.",
        },
      },
      {
        title: { da: "Resultater", en: "Results", ar: "النتائج" },
        description: {
          da: "Læsning af resultater og forklaring af dokumentation.",
          en: "Reading results and explaining documentation.",
          ar: "قراءة النتائج وشرح التوثيق.",
        },
      },
    ],
    connectionNote: {
      da: "FEM-Design kan kobles til bygningsfysik og BIM, når analyse og dokumentation samles.",
      en: "FEM-Design can connect with building physics and BIM when analysis and documentation are collected.",
      ar: "يمكن ربط FEM-Design بفيزياء المباني وBIM عند جمع التحليل والتوثيق.",
    },
    connections: ["building-physics", "bim"],
  },
];

export function getSubjectHub(subject: string) {
  return subjectHubs.find((hub) => hub.subject === subject);
}
