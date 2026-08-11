export type Locale = "da" | "en" | "ar";

export const defaultLocale: Locale = "da";

export const locales: Record<
  Locale,
  {
    label: string;
    nativeName: string;
    dir: "ltr" | "rtl";
    prefix: string;
  }
> = {
  da: {
    label: "Danish",
    nativeName: "Dansk",
    dir: "ltr",
    prefix: "",
  },
  en: {
    label: "English",
    nativeName: "English",
    dir: "ltr",
    prefix: "/en",
  },
  ar: {
    label: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
    prefix: "/ar",
  },
};

export type PageKey = "home" | "videos" | "video" | "about" | "lesson";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string) {
  if (!basePath) return path;
  if (path === "/") return `${basePath}/`;
  return `${basePath}${path}`;
}

export function getAssetPath(path: string) {
  return withBase(path.startsWith("/") ? path : `/${path}`);
}

export function getLocalePath(locale: Locale, page: PageKey, slug?: string) {
  const prefix = locales[locale].prefix;

  if (page === "home") return withBase(`${prefix || "/"}`);
  if (page === "videos") return withBase(`${prefix}/videos`);
  if (page === "video" && slug) return withBase(`${prefix}/videos/${slug}`);
  if (page === "about") return withBase(`${prefix}/about`);
  if (page === "lesson" && slug) return withBase(`${prefix}/lessons/${slug}`);

  return withBase(prefix || "/");
}

export const ui = {
  da: {
    skipToContent: "Spring til indhold",
    brand: "Elprofessor BuildLab",
    tagline: "Learn · Design · Build",
    nav: {
      subjects: "Emner",
      videos: "Videoer",
      about: "Om",
    },
    actions: {
      viewVideos: "Se videobibliotek",
      exploreSubjects: "Udforsk emner",
      openLesson: "Åbn lektion",
      backToVideos: "Tilbage til videoer",
    },
    home: {
      eyebrow: "Struktureret undervisning i byggeri",
      title: "Elprofessor BuildLab",
      intro:
        "En praktisk undervisningskanal for byggeri, BIM, bæredygtighed og beregning. Vælg et emne, og gå videre til videoer, øvelser og materialer.",
      heroTracksLabel: "Hovedemner",
      tracksEyebrow: "Emnerne",
      subjectsTitle: "Byg dit bibliotek op emne for emne",
      subjectsText:
        "Hvert emne kan have sine egne underkategorier, lektioner, filer, øvelser og links. Start enkelt, og udvid når du optager nye videoer.",
      workflowTitle: "Klar til video, grafik og kursusforløb",
      workflowText:
        "Offentlige videoer kan indlejres fra YouTube, studenterindhold kan ligge bag adgangskontrol, og Remotion kan bruges til de forklaringer, der kræver præcis grafik og animation.",
      workflowItems: ["Videometadata i repoet", "Adgangsstyrede materialer", "Remotion-klare lektionsforløb"],
    },
    library: {
      title: "Videobibliotek",
      text:
        "Biblioteket kan filtreres efter emne og sprog. LCAByg-videoerne er lagt ind som første rigtige eksempel med YouTube-thumbnails.",
      allSubjects: "Alle fag",
      allLanguages: "Alle sprog",
      subjectLabel: "Fag",
      languageLabel: "Sprog",
      statusPlaceholder: "Placeholder",
      publicAccess: "Offentlig",
      studentAccess: "Studerende",
      noResults: "Ingen videoer matcher filtrene endnu.",
      resultLabel: "videoer",
    },
    lesson: {
      objectives: "Læringsmål",
      resources: "Materialer",
      exercise: "Øvelse",
      nextLesson: "Næste lektion",
      videoPlaceholder:
        "Videoembed tilføjes her, når den godkendte YouTube-, Panopto- eller Remotion-video er klar.",
      provider: "Videokilde",
      access: "Adgang",
      language: "Sprog",
      placeholderResource: "Tilføjes senere",
    },
    videoDetail: {
      description: "Beskrivelse",
      files: "Filer og materialer",
      noFiles: "Der er ikke tilføjet filer til denne lektion endnu.",
      download: "Download",
      openYoutube: "Åbn på YouTube",
      related: "Flere i samme emne",
      duration: "Varighed",
    },
    about: {
      title: "Om Ali Kadum Hassan og AKLCA",
      intro:
        "Elprofessor BuildLab er opbygget omkring Ali Kadum Hassans undervisning i praktisk byggeri, digitale arbejdsmetoder og bæredygtig projektering.",
      aliTitle: "Ali Kadum Hassan",
      aliText:
        "Ingeniør og underviser. Denne side er klar til en godkendt profiltekst, undervisningsområder og kontaktoplysninger.",
      aklcaTitle: "AKLCA",
      aklcaText:
        "Plads til en kort, godkendt beskrivelse af AKLCA, ydelser, cases og relevante links.",
    },
    footer: {
      note: "Bygget som en statisk Astro-side til Cloudflare Pages.",
      placeholder: "Videoer og materialer tilføjes senere.",
    },
  },
  en: {
    skipToContent: "Skip to content",
    brand: "Elprofessor BuildLab",
    tagline: "Learn · Design · Build",
    nav: {
      subjects: "Subjects",
      videos: "Videos",
      about: "About",
    },
    actions: {
      viewVideos: "View video library",
      exploreSubjects: "Explore subjects",
      openLesson: "Open lesson",
      backToVideos: "Back to videos",
    },
    home: {
      eyebrow: "Structured construction teaching",
      title: "Elprofessor BuildLab",
      intro:
        "A practical teaching channel for construction, BIM, sustainability, and engineering calculations. Pick a subject, then move into videos, exercises, and resources.",
      heroTracksLabel: "Main subjects",
      tracksEyebrow: "Subjects",
      subjectsTitle: "Build the library subject by subject",
      subjectsText:
        "Each subject can have its own subcategories, lessons, files, exercises, and links. Start simple, then expand as new videos are recorded.",
      workflowTitle: "Ready for video, graphics, and course paths",
      workflowText:
        "Public videos can be embedded from YouTube, student-only content can stay access controlled, and Remotion can support explanations that need precise graphics and animation.",
      workflowItems: ["Video metadata in the repo", "Access-controlled resources", "Remotion-ready lesson paths"],
    },
    library: {
      title: "Video Library",
      text:
        "The library can be filtered by subject and language. The LCAByg videos are added as the first real example with YouTube thumbnails.",
      allSubjects: "All subjects",
      allLanguages: "All languages",
      subjectLabel: "Subject",
      languageLabel: "Language",
      statusPlaceholder: "Placeholder",
      publicAccess: "Public",
      studentAccess: "Students",
      noResults: "No videos match the filters yet.",
      resultLabel: "videos",
    },
    lesson: {
      objectives: "Learning Objectives",
      resources: "Resources",
      exercise: "Exercise",
      nextLesson: "Next Lesson",
      videoPlaceholder:
        "The video embed will appear here when the approved YouTube, Panopto, or Remotion video is ready.",
      provider: "Video source",
      access: "Access",
      language: "Language",
      placeholderResource: "Added later",
    },
    videoDetail: {
      description: "Description",
      files: "Files and Resources",
      noFiles: "No files have been added to this lesson yet.",
      download: "Download",
      openYoutube: "Open on YouTube",
      related: "More in this subject",
      duration: "Duration",
    },
    about: {
      title: "About Ali Kadum Hassan and AKLCA",
      intro:
        "Elprofessor BuildLab is built around Ali Kadum Hassan's teaching in practical construction, digital workflows, and sustainable design.",
      aliTitle: "Ali Kadum Hassan",
      aliText:
        "Engineer and lecturer. This page is ready for an approved profile text, teaching areas, and contact details.",
      aklcaTitle: "AKLCA",
      aklcaText:
        "Space for a short approved description of AKLCA, services, cases, and relevant links.",
    },
    footer: {
      note: "Built as a static Astro site for Cloudflare Pages.",
      placeholder: "Videos and resources will be added later.",
    },
  },
  ar: {
    skipToContent: "انتقل إلى المحتوى",
    brand: "Elprofessor BuildLab",
    tagline: "Learn · Design · Build",
    nav: {
      subjects: "الموضوعات",
      videos: "الفيديوهات",
      about: "حول",
    },
    actions: {
      viewVideos: "عرض مكتبة الفيديو",
      exploreSubjects: "استكشاف الموضوعات",
      openLesson: "فتح الدرس",
      backToVideos: "العودة إلى الفيديوهات",
    },
    home: {
      eyebrow: "تعليم منظم في مجال البناء",
      title: "Elprofessor BuildLab",
      intro:
        "قناة تعليمية عملية للبناء وBIM والاستدامة والحسابات الهندسية. اختر موضوعا، ثم انتقل إلى الفيديوهات والتمارين والمواد.",
      heroTracksLabel: "الموضوعات الرئيسية",
      tracksEyebrow: "الموضوعات",
      subjectsTitle: "ابن المكتبة موضوعا بعد موضوع",
      subjectsText:
        "يمكن لكل موضوع أن يحتوي على فئاته الفرعية ودروسه وملفاته وتمارينه وروابطه. ابدأ ببساطة، ثم وسع المحتوى عند تسجيل فيديوهات جديدة.",
      workflowTitle: "جاهزة للفيديو والرسوم والمسارات التعليمية",
      workflowText:
        "يمكن تضمين فيديوهات YouTube العامة، ووضع محتوى الطلاب خلف صلاحيات وصول، واستخدام Remotion للشرح الذي يحتاج إلى رسوم دقيقة وحركة.",
      workflowItems: ["بيانات الفيديو داخل المستودع", "مواد بصلاحيات وصول", "مسارات جاهزة لـ Remotion"],
    },
    library: {
      title: "مكتبة الفيديو",
      text:
        "يمكن تصفية المكتبة حسب الموضوع واللغة. تمت إضافة فيديوهات LCAByg كأول مثال حقيقي مع صور مصغرة من YouTube.",
      allSubjects: "كل الموضوعات",
      allLanguages: "كل اللغات",
      subjectLabel: "الموضوع",
      languageLabel: "اللغة",
      statusPlaceholder: "مؤقت",
      publicAccess: "عام",
      studentAccess: "للطلاب",
      noResults: "لا توجد فيديوهات تطابق عوامل التصفية حاليا.",
      resultLabel: "فيديوهات",
    },
    lesson: {
      objectives: "أهداف التعلم",
      resources: "المواد",
      exercise: "تمرين",
      nextLesson: "الدرس التالي",
      videoPlaceholder:
        "سيظهر تضمين الفيديو هنا عندما يصبح فيديو YouTube أو Panopto أو Remotion المعتمد جاهزا.",
      provider: "مصدر الفيديو",
      access: "الوصول",
      language: "اللغة",
      placeholderResource: "يضاف لاحقا",
    },
    videoDetail: {
      description: "الوصف",
      files: "الملفات والمواد",
      noFiles: "لم تتم إضافة ملفات لهذا الدرس بعد.",
      download: "تنزيل",
      openYoutube: "فتح على YouTube",
      related: "المزيد في نفس الموضوع",
      duration: "المدة",
    },
    about: {
      title: "حول Ali Kadum Hassan و AKLCA",
      intro:
        "تم بناء Elprofessor BuildLab حول تدريس Ali Kadum Hassan للبناء العملي، وسير العمل الرقمي، والتصميم المستدام.",
      aliTitle: "Ali Kadum Hassan",
      aliText:
        "مهندس ومحاضر. هذه الصفحة جاهزة لنص تعريفي معتمد، ومجالات التدريس، وبيانات التواصل.",
      aklcaTitle: "AKLCA",
      aklcaText:
        "مساحة لوصف معتمد مختصر عن AKLCA والخدمات والحالات والروابط ذات الصلة.",
    },
    footer: {
      note: "تم بناؤه كموقع Astro ثابت لـ Cloudflare Pages.",
      placeholder: "ستضاف الفيديوهات والمواد لاحقا.",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const languageNames: Record<Locale, Record<Locale, string>> = {
  da: {
    da: "Dansk",
    en: "Engelsk",
    ar: "Arabisk",
  },
  en: {
    da: "Danish",
    en: "English",
    ar: "Arabic",
  },
  ar: {
    da: "الدنماركية",
    en: "الإنجليزية",
    ar: "العربية",
  },
};
