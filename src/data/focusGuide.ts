// Only the newest version is shown. For a new version, change these four values and check
// focusLimitation below. File name, folder, tag and download link follow from focusVersion.
export const focusVersion = "1.0.0";
export const focusDate = "4. november 2026";
export const focusDateIso = "2026-11-04";
export const focusSha256 = "1bceefd6292fe750d199564092c8f137f2a3764a71b331ded318527f59105683";

// The ZIP file is a GitHub Release in this (public) repo, not in public/downloads, as on the plugin page.
const repoName = "Elprofessor1990/Elprofessor-buildlab";
const repoUrl = `https://github.com/${repoName}`;
const releaseTag = `fokus-v${focusVersion}`;
export const focusFolder = `ISSANA-Focus-${focusVersion}-win-x64`;
export const focusSavedFile = `${focusFolder}.zip`;
export const focusDownloadUrl = `${repoUrl}/releases/download/${releaseTag}/${focusSavedFile}`;

export const focusRequirements = "Windows 11 version 24H2 eller nyere, 64-bit.";
export const focusNoInstall = "Ingen .NET-installation nødvendig, og du skal ikke være administrator.";

export const focusInstallSteps = [
  { title: "Download ZIP-filen", text: `Hent filen med download-knappen på denne side. Den hedder ${focusSavedFile}.` },
  { title: "Pak den ud i en mappe", text: "Højreklik på ZIP-filen, og vælg «Pak alle ud». Vælg en mappe, du selv kan skrive i, fx Dokumenter. Start ikke programmet inde fra ZIP-filen." },
  { title: "Kør Focus.App.exe", text: `Åbn mappen ${focusFolder}, og dobbeltklik på Focus.App.exe. Alle filer skal blive liggende samlet.` },
];

// Applies to version 1.0.0. Remove or rewrite it when the default keys change to Ctrl.
export const focusLimitation = {
  lead: "I tegnetilstand kan du ikke skrive visse tegn i andre programmer.",
  blockedKeys: ["!", "\"", "#", "stort T"],
  next: "Næste udgave ændrer standarden til Ctrl.",
};
