import type { Locale } from "../i18n";

type LocalizedText = Record<Locale, string>;

export type Lesson = {
  slug: string;
  subject: string;
  language: Locale;
  access: "public" | "student";
  provider: "YouTube" | "Panopto" | "Remotion" | "Placeholder";
  embedUrl?: string;
  duration: string;
  title: LocalizedText;
  summary: LocalizedText;
  objectives: Record<Locale, string[]>;
  resources: Array<{
    title: LocalizedText;
    type: "slides" | "worksheet" | "link";
    url?: string;
  }>;
  exercise: LocalizedText;
  nextLesson: {
    title: LocalizedText;
    href: string;
  };
};

export const lessons: Lesson[] = [
  {
    slug: "bim-introduction-placeholder",
    subject: "bim",
    language: "da",
    access: "public",
    provider: "YouTube",
    duration: "08:00",
    title: {
      da: "BIM - introduktion og arbejdsflow",
      en: "BIM - Introduction and Workflow",
      ar: "BIM - مقدمة وسير العمل",
    },
    summary: {
      da: "En klar skabelon for en videolektion med læringsmål, ressourcer, øvelse og næste trin.",
      en: "A clear template for a video lesson with learning objectives, resources, exercise, and next step.",
      ar: "قالب واضح لدرس فيديو يحتوي على أهداف تعلم ومواد وتمرين وخطوة تالية.",
    },
    objectives: {
      da: ["Beskriv hvad BIM bruges til i et projekt", "Genkend centrale modeltyper", "Forbered spørgsmål til næste lektion"],
      en: ["Describe how BIM is used in a project", "Recognize key model types", "Prepare questions for the next lesson"],
      ar: ["وصف كيفية استخدام BIM في المشروع", "التعرف على أنواع النماذج الأساسية", "تحضير أسئلة للدرس التالي"],
    },
    resources: [
      {
        title: {
          da: "Slides - tilføjes senere",
          en: "Slides - added later",
          ar: "الشرائح - تضاف لاحقا",
        },
        type: "slides",
      },
      {
        title: {
          da: "Arbejdsark - tilføjes senere",
          en: "Worksheet - added later",
          ar: "ورقة العمل - تضاف لاحقا",
        },
        type: "worksheet",
      },
    ],
    exercise: {
      da: "Skriv tre steder i et byggeprojekt, hvor en BIM-model kan reducere misforståelser.",
      en: "Write down three places in a construction project where a BIM model can reduce misunderstandings.",
      ar: "اكتب ثلاثة مواضع في مشروع بناء يمكن أن يقلل فيها نموذج BIM من سوء الفهم.",
    },
    nextLesson: {
      title: {
        da: "AI i byggeri - visuelt overblik",
        en: "AI in Construction - Visual Overview",
        ar: "الذكاء الاصطناعي في البناء - نظرة مرئية",
      },
      href: "/videos?subject=ai-in-construction",
    },
  },
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
