/** Dateret status. Kandidatfunktioner må ikke fremstå som indhold i den offentlige download. */
export const releaseStatus = {
  checked: "16. november 2026",
  checkedIso: "2026-11-16",
  downloadChecked: "16. november 2026",
  publicVersion: "3.10.0 · rettet installer 1",
  programVersion: "3.10.0",
  publicReleaseDate: "16. november 2026",
  publicReleaseDateIso: "2026-11-16",
  plannedVersion: "3.10",
  bytes: 293121412,
  sha256: "c3868ff3d5b82dce03bb47dc48b141836d53b01e1586bbfb7795550569386c80",
  download: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/download/issana-mcp-v3.10.0-full-setup.1-test/ISSANA-MCP-3.10.0-full-setup.1-test.exe",
  release: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/tag/issana-mcp-v3.10.0-full-setup.1-test",
};

/** Udfyld først download og filkontrol, når den særskilte opdatering er udgivet. */
export const windUpdate = {
  status: "Lokalt installeret · afprøvet i Revit 2027",
  validation: "Afprøvet i Revit 2027 på en projektkopi: de fire vindretninger, zoner og pile, skift til samlet last samt udfoldet diagram virker. Manglende input vises tydeligt; en tagform, der ikke passer til modellen, spærrer tagzonerne. Modellen stod uden ændringer efter prøven. Det er en afgrænset funktionstest, ikke en samlet godkendelse af alle beregninger.",
  sourceStatus: "Vindrettelsen er med i den samlede programdownload 3.10. Kildediffen står separat til projektreview; tidligere liveprøve og ny samlet udgave skal skelnes.",
  download: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/download/vindzoner-revit2027-test-2026-11-15/ISSANA-Vindzoner-Revit2027-patch.zip" as string | null,
  release: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/tag/vindzoner-revit2027-test-2026-11-15" as string | null,
  filename: "ISSANA-Vindzoner-Revit2027-patch.zip",
  sha256: "a0690d1b8c649b524483ca2c059e09cfaf8ee863e1b783a8ae8196c43c9e0250",
};

export const candidateFeatures = [
  { title: "Byggeplan med flere fagmodeller", status: "Samlet i program 3.10 · testudgave", text: "Tidsplan, taktplan og 3D bruger samme redigerbare JSON. Den faktiske SEH-arkitektmodel og installationsmodel er samlet via deres Revit-link: 601 bygningsdele og 1.586 installationsdele. Hele Revit-elementer bliver ikke automatisk godkendt som leverede produkter." },
  { title: "Arbejdszoner og installationsvisning", status: "Samlet i program 3.10 · 155/155 byggeplantests", text: "Opdel geometri som forslag, vis pladsarbejde som arbejdsfront, og isolér installationer. Åbninger bevares, og arbejdszoner følger væggenes retning. Tidligere lokale prøver dækker afgrænsede funktioner; den samlede 3.10-udgave mangler endnu en liveprøve i Revit og en faglig produktionskontrol." },
  { title: "Et bibliotek til din kode", status: "Kodekørsel afprøvet i Revit 2027", text: "Skriv Python eller C#, gem med navn og beskrivelse, og find koden igen. Egne scripts, medfølgende eksempler og kladder holdes adskilt. Python og C# er kørt i Revit 2027 med forventede svar, og et C#-script læste det aktuelle Revit-valg. Hertil kommer 24 isolerede kørselskontroller, 17 biblioteksscenarier og to kommunikationsprøver. Gem/redigér-forløbet og Revit 2026.5 mangler liveprøve." },
  { title: "Spørgsmål før LCA", status: "Samlet i program 3.10 · rettelser testet", text: "Modellens oplysninger og dine svar udfylder beregningsgrundlaget, som du kan rette bagefter. Manuelle ændringer markeres som brugeroplyste og ophæver en tidligere afsluttet afklaring. Tal kontrolleres, og AI'en får dialogens relevante felter. Rettelserne er automatisk testet; det samlede forløb mangler liveprøven." },
  { title: "Data at lære med", status: "Samlet i program 3.10 · beregnet med Rust-motoren", text: "Et lokalt datakatalog og en lille øvebygning giver et fælles udgangspunkt. Øvelsens to materialevalg er kørt gennem den faktiske Rust-motor: 602 og 674,8 kg CO₂e for A1–A3 i materialeudsnittet. Det er ikke en fuld bygnings-LCA: B6 og A4/A5 mangler fortsat i dette elevudsnit. C20/25-valget er også kørt fra selve øvelsen i Revit 2027 og gav 602 kg CO₂e. Øvedata, egne data og lærerens reference er tydeligt adskilt." },
  { title: "Tydeligere resultater i 3D", status: "Samlet i program 3.10 · 675/675 webtests", text: "Lyd, energi og LCA har fælles kontrol af tal og tydeligere kilde- og manglervisning. Et afkortet modeludtræk markeres på tværs af fagene, så det ikke ligner hele bygningen. Alle 675 automatiske webtests er bestået; studerendes brug og den samlede Revit-udgave skal stadig afprøves." },
  { title: "Vindzoner og udfoldet diagram", status: "Program 3.10 afprøvet i Revit 2027", text: "Se tryk og sug fordelt på vindzoner i 3D, skift til den samlede vindlast, og sammenhold zonerne i et udfoldet diagram. Vindretning og forudsætninger kan tilpasses. I program 3.10 er modeludtræk, zoner A–I, terrænvalg, udfoldet diagram og fuldskærm afprøvet på en projektkopi i Revit 2027. Det er en funktionstest, ikke en faglig godkendelse af beregningen." },
  { title: "Ventilationsføringer", status: "Samlet i program 3.10 · afventer modelprøve", text: "Den samlede kandidat indeholder installationsforløbene. Næste kontrol er at følge dem på projektkopier og sammenholde føring, forbindelser, data og beregning. Synlige rør og kanaler er ikke i sig selv dokumentation for et sammenhængende, dimensioneret system." },
  { title: "Mere målrettet AI-hjælp", status: "Samlet i program 3.10 · samme 195 værktøjer", text: "En opskriftsliste hjælper AI'en med at vælge værktøj til opgaven. Øvedata tilgås gennem det eksisterende materialeforløb, uden et ekstra MCP-værktøj. Værktøjskontrakten er fortsat på 195 værktøjer. De samme opgaver skal prøves i AI-apperne, før en gevinst i brug og ventetid kan vurderes." },
];

export const remainingWork = [
  { title: "Gør byggeplanen udførelsesklar", done: "De faktiske ARK- og MEP-filer er fundet og eksporteret uden afkortning. Den lokale projektprøve omfatter 448 rør og 368 kanaler samt fittings og armaturer. Byggeplanen er samlet i program 3.10, og 155/155 automatiske tests er bestået.", next: "Afklar Tagkrone-afvigelsen på 239,6 mm. Kontrollér lagopdeling, produktmål, samlinger, transport og løft, og gennemgå kollisioner og MEP-forbindelser. Fastlæg virkelige tider, hold og afhængigheder; filmens rækkefølge og arbejdszoner er planforslag." },
  { title: "Afslut projektreview og faglig kontrol", done: "Program 3.10 er samlet. 675 webtests og 155 byggeplantests er bestået. Friske DLL'er er bygget til Revit 2026 og 2027. Claude har gennemgået integrationen, og de konkrete fund er rettet og testet.", next: "Projektejeren skal gennemgå MCP-kildediffen før commit. Det udførte kodereview dækker ikke alle faglige beregninger eller hele brugerforløbet i Revit." },
  { title: "Udfyld projektets beregningsgrundlag", done: "Fundene i LCA-dialogen og elevdata er rettet og testet. Begge materialevalg er beregnet af Rust-motoren, og kildevisningen følger manuelle ændringer. Der er ikke tilføjet et nyt MCP-værktøj.", next: "Udfyld projektets egne konstruktioner, driftsenergi B6 og byggeproces A4/A5. Elevudsnittets 602 og 674,8 kg CO₂e dækker kun A1–A3, ikke en færdig bygnings-LCA. Kontrollér fagresultaterne mod et fastlagt referencegrundlag." },
  { title: "Færdiggør de manglende fagforløb", done: "LCA er første guidede forløb; flere fag har allerede beregningsfunktioner. Fælles inputkontrol og de rettede elevdata indgår i 3.10-kandidaten.", next: "Lav udregningsrapport for Energi samt guidede forløb for lyd, energi og statik. Afklar og implementér egentlig sol-/skyggeanalyse og overophedningsberegning; en 3D-skyggevisning er ikke dokumentation for disse beregninger." },
  { title: "Prøv hele 3.10-kæden i Revit", done: "Programmet er bygget til Revit 2026 og 2027. Udvalgte 3.10-forløb er liveafprøvet i Revit 2027: modeludtræk, vindzoner/diagram/fuldskærm, LCA-øvelse og Python/C#. Testmodellen stod uden ændringer. Hele produktet er ikke færdigtestet.", next: "Prøv de tre projekter i en matrix med Revit 2026/2027 og de relevante AI-apps: data → analyse → ændring → ny analyse → kodning → ny pris. Brug projektkopier, frys input og referenceværdier, og kontrollér resultaterne uafhængigt." },
  { title: "Se studerende løse opgaverne", done: "Scriptbiblioteket, spørgsmål før LCA og øvedata er samlet i 3.10. De automatiske kontroller dækker kodekørsel, bibliotek, kommunikation og beregningsdata.", next: "Lad studerende definere rum, rette konstruktioner og gennemføre analyser uden hjælp. Registrér gennemførsel, fejl, behov for hjælp og tid. Automatiske UI-tests erstatter ikke denne prøve." },
  { title: "Prøv installationen på en ren pc", done: "Den komplette programudgave 3.10 kan hentes som testudgave. Pakkens filer, versioner og hashes er kontrolleret, og installationsplanen dækker både Revit 2026 og 2027. Downloadfeltet viser den konkrete EXE og dens SHA-256.", next: "Prøv installation, opgradering og MCP-opsætning på en ren Windows-bruger med Revit 2026.5. Kontrollér eksisterende konfiguration og F#-motorens .NET 10-krav. Den samlede liveaccept mangler fortsat." },
];

export const constructionUpdate = {
  date: "16. november 2026",
  status: "Samlet i program 3.10 · testudgave",
  totals: [
    { value: "2.187", label: "modeldele i den lokale projektprøve" },
    { value: "448", label: "rør fra installationsmodellen" },
    { value: "368", label: "kanaler fra installationsmodellen" },
    { value: "155 / 155", label: "byggeplantests bestået" },
  ],
  rows: [
    { area: "Modeller og placering", state: "Kilder kontrolleret på projektkopier", done: "601 ARK-dele og 1.586 MEP-dele. Det faktiske ARK-link er læst i Revit; ingen rotation eller flytning. Eksporten er ikke afkortet. Det dokumenterer modelkilderne, ikke liveaccept af program 3.10.", next: "Tagkrone ligger 239,6 mm forskelligt. Linkplacering er ikke det samme som kollisionsfri eller fagligt korrekt projektering." },
    { area: "Opdeling og murværk", state: "Samlet i program 3.10 · forslag", done: "Trekanter og åbninger bevares. Pladsarbejde og leverede dele behandles forskelligt. Claude har lavet tre kode-/datareviews, og de verificerede kodefejl er rettet og regressionstestet. 448 arbejdszoner følger de faktiske vægretninger.", next: "Laggeometri og produktgrundlag mangler. En vist arbejdszone er hverken et produktmål eller en godkendt montageenhed. Kode- og datareview er ikke en godkendelse af udførelsen." },
    { area: "Tidsplan og 3D-video", state: "Samlet i program 3.10 · afventer liveprøve", done: "Samme JSON driver aktiviteter og 3D. Den lokale projektfilm bruger den faktiske bygning og installationer med særskilte visninger og forklaringer.", next: "Tider, bemanding og rækkefølge er illustrative. MS Project XML skal også afprøves i MS Project. Offentlig videohosting er ikke oprettet." },
    { area: "Videoeksport", state: "Samlet i program 3.10 · afventer liveprøve", done: "Grænsen på én samlet 175 MB-billedpakke er erstattet af dele på ca. 32 MB med checkpoints. 900 billeder er prøvet gennem pakkefunktionen uden tab; 1080p bevares. Videoprojektet kan også gemmes som JSON.", next: "Gem/fortsæt-forløbet skal prøves i Revit. Direkte MP4 med ét klik er endnu ikke tilsluttet i 3D-vinduet." },
    { area: "Pris og CO₂", state: "Tilvalg i datamodellen", done: "Kildehenvisninger og aktiviteter kan indgå i projektpakken. Øvebygningens materialevalg er beregnet separat og er ikke CO₂-tal for SEH-projektet.", next: "Den aktuelle SEH-prøve har ingen godkendte Sigma-priser eller CO₂-tal. Afstem mængder og dubletter mellem fagmodeller før summering." },
    { area: "Samlet udgivelse", state: "Program 3.10 kan hentes · udvalgte liveprøver bestået", done: "Den fulde testudgave samler funktionerne i én EXE: 675/675 webtests og 155/155 byggeplantests er bestået. Friske DLL-builds til Revit 2026/2027 og C#-testsuiten for NBS er afsluttet uden fejl.", next: "Afslut projektreview af kildediffen, og prøv den præcise udgivelse i Revit og på en ren Windows-bruger. Udvalgte 3.10-forløb er afprøvet i Revit 2027; byggeplan/video og en ren Revit 2026.5-installation mangler fortsat liveaccept." },
  ],
};
