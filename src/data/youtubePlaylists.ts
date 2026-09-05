import type { VideoItem, VideoResource } from "./videos";

type PlaylistVideoInput = {
  id: string;
  youtubeId: string;
  duration: string;
  level: VideoItem["level"];
  titleDa: string;
  titleEn: string;
  titleAr: string;
  summaryDa: string;
  summaryEn: string;
  summaryAr: string;
};

const revitElementProjectPlaylistId = "PLQe1c9gMRl9n0R45In3WQRrsvUMq0ZByg";

const revitElementProjectResources: VideoResource[] = [
  {
    kind: "worksheet",
    title: {
      da: "Øvelse til elementprojektering",
      en: "Element design exercise",
      ar: "تمرين تصميم العناصر",
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
      da: "Revit-eksempelfiler",
      en: "Revit example files",
      ar: "ملفات Revit أمثلة",
    },
    note: {
      da: "Her kan modeller, families eller ZIP-pakker linkes senere.",
      en: "Models, families, or ZIP packages can be linked here later.",
      ar: "يمكن ربط النماذج أو العائلات أو حزم ZIP هنا لاحقا.",
    },
  },
];

function revitElementProjectVideo(input: PlaylistVideoInput): VideoItem {
  return {
    id: input.id,
    subject: "bim",
    language: "da",
    access: "public",
    provider: "YouTube",
    youtubeId: input.youtubeId,
    playlistId: revitElementProjectPlaylistId,
    externalUrl: `https://www.youtube.com/watch?v=${input.youtubeId}&list=${revitElementProjectPlaylistId}`,
    duration: input.duration,
    level: input.level,
    title: {
      da: input.titleDa,
      en: input.titleEn,
      ar: input.titleAr,
    },
    summary: {
      da: input.summaryDa,
      en: input.summaryEn,
      ar: input.summaryAr,
    },
    description: {
      da: `${input.summaryDa} Videoen er en del af Revit 2026 - Elementprojektering-playlisten.`,
      en: `${input.summaryEn} This video is part of the Revit 2026 - Element Design playlist.`,
      ar: `${input.summaryAr} هذا الفيديو جزء من قائمة تشغيل Revit 2026 - تصميم العناصر.`,
    },
    resources: revitElementProjectResources,
  };
}

export const revitElementProjectVideos: VideoItem[] = [
  revitElementProjectVideo({
    id: "revit-2026-elementprojekt-00-opsaetning",
    youtubeId: "eMNf0P_P_DE",
    duration: "17:27",
    level: "Intro",
    titleDa: "#0 Opsætning af elementprojekt",
    titleEn: "#0 Setting Up an Element Design Project",
    titleAr: "#0 إعداد مشروع تصميم العناصر",
    summaryDa: "Opsætning af et Revit 2026-elementprojekt som grundlag for den videre modellering.",
    summaryEn: "Setting up a Revit 2026 element design project as the basis for further modelling.",
    summaryAr: "إعداد مشروع تصميم عناصر في Revit 2026 كأساس لمتابعة النمذجة.",
  }),
  revitElementProjectVideo({
    id: "revit-2026-elementprojekt-01-ydervaeg-stolpeskelet",
    youtubeId: "bidhUzEShlk",
    duration: "19:33",
    level: "Practice",
    titleDa: "#1 Ydervæg - Opbygning af stolpeskelet",
    titleEn: "#1 External Wall - Building a Stud Frame",
    titleAr: "#1 الجدار الخارجي - بناء هيكل القوائم",
    summaryDa: "Opbygning af ydervæg og stolpeskelet i BIM-modellen med fokus på praktisk elementprojektering.",
    summaryEn: "Building an external wall and stud frame in the BIM model with a practical element design focus.",
    summaryAr: "بناء جدار خارجي وهيكل قوائم في نموذج BIM مع تركيز عملي على تصميم العناصر.",
  }),
  revitElementProjectVideo({
    id: "revit-2026-elementprojekt-02-tagelement-void",
    youtubeId: "Cg3kphDqqTQ",
    duration: "9:22",
    level: "Practice",
    titleDa: "#2 Tagelement - Geometrisk udskæring med Void-funktion",
    titleEn: "#2 Roof Element - Geometric Cut-Out with Void Tools",
    titleAr: "#2 عنصر السقف - قص هندسي باستخدام أدوات Void",
    summaryDa: "Geometrisk udskæring i tagelement med saddelhak og ovenlys ved hjælp af Void-funktioner.",
    summaryEn: "Geometric cut-outs in a roof element with saddle notch and skylight using Void tools.",
    summaryAr: "قص هندسي في عنصر سقف مع شق سرجي وفتحة سقف باستخدام أدوات Void.",
  }),
];
