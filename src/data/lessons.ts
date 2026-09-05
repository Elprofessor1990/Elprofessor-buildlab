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

export const lessons: Lesson[] = [];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
