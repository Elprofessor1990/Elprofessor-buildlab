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

export type PageKey = "home" | "subjects" | "subject" | "videos" | "video" | "about" | "lesson";

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
  if (page === "subjects") return withBase(`${prefix}/subjects`);
  if (page === "subject" && slug) return withBase(`${prefix}/subjects/${slug}`);
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
      openSubject: "Åbn emne",
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
      subjectsTitle: "Vælg et emne",
      subjectsText:
        "Klik på et emne for at få en kort introduktion, relevante videoer og emner der hænger sammen.",
      workflowTitle: "Klar til video, grafik og kursusforløb",
      workflowText:
        "Offentlige videoer kan indlejres fra YouTube, studenterindhold kan ligge bag adgangskontrol, og Remotion kan bruges til de forklaringer, der kræver præcis grafik og animation.",
      workflowItems: ["Videometadata i repoet", "Adgangsstyrede materialer", "Remotion-klare lektionsforløb"],
    },
    library: {
      title: "Videobibliotek",
      text:
        "Biblioteket kan filtreres efter emne. LCAByg- og NBS Nordic-videoerne er lagt ind med YouTube-thumbnails og direkte embeds.",
      allSubjects: "Alle fag",
      subjectLabel: "Fag",
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
    subjectPage: {
      eyebrow: "Emnefane",
      startHere: "Start her",
      objectives: "Læringsmål",
      videoTypes: "Hvilke videoer finder du her?",
      videos: "Videoer i emnet",
      connections: "Hænger sammen med",
      materials: "Materialer og øvelser",
      materialsPlaceholder: "Filer, øvelser og links kan tilføjes her, når materialet er klar.",
      noVideos: "Der er ikke lagt videoer ind i dette emne endnu.",
      videoCount: "videoer",
      openLibraryFilter: "Se alle videoer i biblioteket",
      levels: {
        Intro: "Intro",
        Practice: "Praksis",
        Advanced: "Avanceret",
      },
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
      openSubject: "Open subject",
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
      subjectsTitle: "Choose a Subject",
      subjectsText:
        "Click a subject to get a short introduction, relevant videos, and connected subjects.",
      workflowTitle: "Ready for video, graphics, and course paths",
      workflowText:
        "Public videos can be embedded from YouTube, student-only content can stay access controlled, and Remotion can support explanations that need precise graphics and animation.",
      workflowItems: ["Video metadata in the repo", "Access-controlled resources", "Remotion-ready lesson paths"],
    },
    library: {
      title: "Video Library",
      text:
        "The library can be filtered by subject. The LCAByg and NBS Nordic videos are added with YouTube thumbnails and direct embeds.",
      allSubjects: "All subjects",
      subjectLabel: "Subject",
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
    subjectPage: {
      eyebrow: "Subject Tab",
      startHere: "Start Here",
      objectives: "Learning Objectives",
      videoTypes: "What kind of videos are here?",
      videos: "Videos in This Subject",
      connections: "Connected Subjects",
      materials: "Resources and Exercises",
      materialsPlaceholder: "Files, exercises, and links can be added here when the material is ready.",
      noVideos: "No videos have been added to this subject yet.",
      videoCount: "videos",
      openLibraryFilter: "View all videos in the library",
      levels: {
        Intro: "Intro",
        Practice: "Practice",
        Advanced: "Advanced",
      },
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
      openSubject: "فتح الموضوع",
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
      subjectsTitle: "اختر موضوعا",
      subjectsText:
        "اضغط على موضوع للحصول على مقدمة قصيرة وفيديوهات مرتبطة وموضوعات متصلة.",
      workflowTitle: "جاهزة للفيديو والرسوم والمسارات التعليمية",
      workflowText:
        "يمكن تضمين فيديوهات YouTube العامة، ووضع محتوى الطلاب خلف صلاحيات وصول، واستخدام Remotion للشرح الذي يحتاج إلى رسوم دقيقة وحركة.",
      workflowItems: ["بيانات الفيديو داخل المستودع", "مواد بصلاحيات وصول", "مسارات جاهزة لـ Remotion"],
    },
    library: {
      title: "مكتبة الفيديو",
      text:
        "يمكن تصفية المكتبة حسب الموضوع. تمت إضافة فيديوهات LCAByg وNBS Nordic مع صور مصغرة من YouTube وتضمين مباشر.",
      allSubjects: "كل الموضوعات",
      subjectLabel: "الموضوع",
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
    subjectPage: {
      eyebrow: "تبويب الموضوع",
      startHere: "ابدأ هنا",
      objectives: "أهداف التعلم",
      videoTypes: "ما نوع الفيديوهات هنا؟",
      videos: "فيديوهات هذا الموضوع",
      connections: "موضوعات مرتبطة",
      materials: "المواد والتمارين",
      materialsPlaceholder: "يمكن إضافة الملفات والتمارين والروابط هنا عندما تصبح المادة جاهزة.",
      noVideos: "لم تتم إضافة فيديوهات لهذا الموضوع بعد.",
      videoCount: "فيديوهات",
      openLibraryFilter: "عرض كل الفيديوهات في المكتبة",
      levels: {
        Intro: "مقدمة",
        Practice: "تطبيق",
        Advanced: "متقدم",
      },
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
