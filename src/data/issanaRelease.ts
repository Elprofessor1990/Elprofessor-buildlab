/** Dateret status. Kandidatfunktioner må ikke fremstå som indhold i den offentlige download. */
export const releaseStatus = {
  checked: "16. november 2026",
  checkedIso: "2026-11-16",
  downloadChecked: "15. november 2026",
  publicVersion: "3.0.9-test",
  publicReleaseDate: "5. november 2026",
  publicReleaseDateIso: "2026-11-05",
  plannedVersion: "3.10",
  bytes: 142548338,
  sha256: "43bf4c9c3ba60536847251dc6f79a8f8f4e815c53804b360445215f31e3b4196",
  download: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/download/issana-mcp-v3.0.9-test/ISSANA-MCP-Installer-3.0.9-test.exe",
  release: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/tag/issana-mcp-v3.0.9-test",
};

/** Udfyld først download og filkontrol, når den særskilte opdatering er udgivet. */
export const windUpdate = {
  status: "Lokalt installeret · afprøvet i Revit 2027",
  validation: "Afprøvet i Revit 2027 på en projektkopi: de fire vindretninger, zoner og pile, skift til samlet last samt udfoldet diagram virker. Manglende input vises tydeligt; en tagform, der ikke passer til modellen, spærrer tagzonerne. Modellen stod uden ændringer efter prøven. Det er en afgrænset funktionstest, ikke en samlet godkendelse af alle beregninger.",
  sourceStatus: "Kildeændringen ligger separat til review. Den er endnu ikke indarbejdet i hovedudgaven på GitHub.",
  download: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/download/vindzoner-revit2027-test-2026-11-15/ISSANA-Vindzoner-Revit2027-patch.zip" as string | null,
  release: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/tag/vindzoner-revit2027-test-2026-11-15" as string | null,
  filename: "ISSANA-Vindzoner-Revit2027-patch.zip",
  sha256: "a0690d1b8c649b524483ca2c059e09cfaf8ee863e1b783a8ae8196c43c9e0250",
};

export const candidateFeatures = [
  { title: "Byggeplan med flere fagmodeller", status: "Lokal prøve · endnu ikke i EXE-download", text: "Tidsplan, taktplan og 3D bruger samme redigerbare JSON. Den faktiske SEH-arkitektmodel og installationsmodel er samlet via deres Revit-link: 601 bygningsdele og 1.586 installationsdele. Hele Revit-elementer bliver ikke automatisk godkendt som leverede produkter." },
  { title: "Arbejdszoner og installationsvisning", status: "Implementeret · afgrænset kontrol", text: "Opdel geometri som forslag, vis pladsarbejde som arbejdsfront, og isolér installationer. 155 automatiske byggeplantests er bestået. Anvend, Fortryd, installationsfilter og udvidet visning er prøvet lokalt i Revit; det er ikke en samlet installations- eller produktionsgodkendelse." },
  { title: "Et bibliotek til din kode", status: "Bygget · afventer Revit-prøve", text: "Skriv hurtig kode i Python eller C#, gem den med navn og beskrivelse, og find den igen. Egne scripts og medfølgende eksempler er adskilt. Kladder huskes, og du kan kontrollere koden før kørsel." },
  { title: "Spørgsmål før LCA", status: "Pilot · afventer rettelser og samlet prøve", text: "Et guidet forløb bruger modellens oplysninger og dine svar til at udfylde beregningsgrundlaget. Oplysningerne kan rettes bagefter. Kilden skal fortsat være korrekt, når du ændrer et svar." },
  { title: "Data at lære med", status: "Øvepakke · under gennemgang", text: "Et datakatalog og en lille øvebygning skal give de studerende et tydeligt udgangspunkt. Eksempeldata, egne data og det gennemregnede referenceeksempel skal kunne skelnes fra hinanden." },
  { title: "Tydeligere resultater i 3D", status: "Rettelser · afventer samlet prøve", text: "Arbejde med lyd, energi og bygningsdele får bedre inputkontrol og mere præcise statusbeskeder. Manglende oplysninger skal fremgå, så et ufuldstændigt grundlag ikke ligner et færdigt resultat." },
  { title: "Vindzoner og udfoldet diagram", status: windUpdate.status, text: "Se tryk og sug fordelt på vindzoner i 3D, skift til den samlede vindlast, og sammenhold zonerne i et udfoldet diagram. Vindretning og beregningsforudsætninger kan tilpasses i samme arbejdsrum." },
  { title: "Ventilationsføringer", status: "Samlet kandidat · afventer modelprøve", text: "Kandidaten samler arbejdet med installationer. Næste kontrol er at følge forløbet på projektkopier og sammenholde føring, data og beregning." },
  { title: "Mere målrettet AI-hjælp", status: "Samlet kandidat · afventer AI-prøve", text: "En opskriftsliste hjælper AI'en med at vælge værktøj til opgaven. En kort værktøjsprofil og registrering af ventetid skal afprøves med de samme opgaver, så forbedringen kan måles." },
];

export const remainingWork = [
  { title: "Gør byggeplanen udførelsesklar", done: "De faktiske ARK- og MEP-filer er fundet og eksporteret uden afkortning. Den samlede pakke indeholder 448 rør og 368 kanaler samt fittings og armaturer.", next: "Afklar Tagkrone-afvigelsen på 239,6 mm. Kontrollér lagopdeling, produktmål, samlinger, transport og løft, og gennemgå kollisioner og MEP-forbindelser. Fastlæg virkelige tider, hold og afhængigheder; filmens rækkefølge og arbejdszoner er planforslag." },
  { title: "Saml og review ændringerne", done: "En samlet kandidat og særskilte rettelser findes.", next: "Gennemgå de nye ændringer, ret de åbne fund, og kør regressionstests på præcis den version, der skal udgives." },
  { title: "Gør beregningsgrundlaget gennemskueligt", done: "LCA-dialog og øvedata findes som piloter.", next: "Saml inputkontrollen, ret kildevisning efter manuelle ændringer, og færdiggør øvedata uden endnu et særskilt MCP-værktøj." },
  { title: "Færdiggør de manglende fagforløb", done: "LCA er første guidede forløb; flere fag har allerede beregningsfunktioner.", next: "Lav udregningsrapport for Energi samt guidede forløb for lyd, energi og statik. Afklar og implementér egentlig sol-/skyggeanalyse og overophedningsberegning; en 3D-skyggevisning er ikke dokumentation for disse beregninger." },
  { title: "Prøv hele kæden på projektkopier", done: "Modelbanken og automatiske kontroller giver et udgangspunkt.", next: "Prøv de tre projekter i Revit: data → analyse → ændring → ny analyse → kodning → ny pris. Frys input og referenceværdier, og kontrollér resultaterne uafhængigt." },
  { title: "Se studerende løse opgaverne", done: "Et enklere scriptbibliotek er bygget og kontrolleret i to vinduesstørrelser.", next: "Lad studerende definere rum, rette konstruktioner og gennemføre analyser uden hjælp. Registrér gennemførsel, fejl, behov for hjælp og tid. Automatiske UI-tests erstatter ikke denne prøve." },
  { title: "Kontrollér installation og udgiv", done: "Offentlig EXE kan hentes; en ny kandidat er pakket. Opsætning af Claude Code og Codex findes i installeren.", next: `Bevar egne ISSANA-env- og filterindstillinger ved geninstallation; den nuværende helper erstatter hele ISSANA-posten. Prøv den endelige EXE på en ren Windows-bruger med Revit og de relevante AI-apps. Kontrollér geninstallation, eksisterende konfiguration og beregningsmotorens .NET 10-krav på en pc med kun Revit 2026. Gennemgå afhængighederne, og udgiv version ${releaseStatus.plannedVersion}, når rettelser, review og de samlede tests er færdige.` },
];

export const constructionUpdate = {
  date: "16. november 2026",
  status: "Lokal prøve · frem mod 3.10",
  totals: [
    { value: "2.187", label: "modeldele i den samlede pakke" },
    { value: "448", label: "rør fra installationsmodellen" },
    { value: "368", label: "kanaler fra installationsmodellen" },
    { value: "155 / 155", label: "byggeplantests bestået" },
  ],
  rows: [
    { area: "Modeller og placering", state: "Kontrolleret på projektkopier", done: "601 ARK-dele og 1.586 MEP-dele. Det faktiske ARK-link er læst i Revit; ingen rotation eller flytning. Eksporten er ikke afkortet.", next: "Tagkrone ligger 239,6 mm forskelligt. Linkplacering er ikke det samme som kollisionsfri eller fagligt korrekt projektering." },
    { area: "Opdeling og murværk", state: "Implementeret som forslag", done: "Trekanter og åbninger bevares. Pladsarbejde og leverede dele behandles forskelligt. Claude har lavet tre kode-/datareviews. Verificerede kodefejl er rettet og regressionstestet; det er ikke en Claude-godkendelse af udførelsen. 448 arbejdszoner følger de faktiske vægretninger.", next: "Laggeometri og produktgrundlag mangler. En vist arbejdszone er hverken et produktmål eller en godkendt montageenhed." },
    { area: "Tidsplan og 3D-video", state: "Lokal projektprøve", done: "Samme JSON driver aktiviteter og 3D. Den nye film bruger den faktiske bygning og installationer med særskilte visninger og forklaringer.", next: "Tider, bemanding og rækkefølge er illustrative. MS Project XML skal også afprøves i MS Project. Offentlig videohosting er ikke oprettet." },
    { area: "Videoeksport", state: "Rettet lokalt · mangler Revit-prøve", done: "Grænsen på én samlet 175 MB-billedpakke er erstattet af dele på ca. 32 MB med checkpoints. 900 billeder er prøvet gennem pakkefunktionen uden tab; 1080p bevares. Videoprojektet kan også gemmes som JSON.", next: "Gem/fortsæt-forløbet skal prøves i Revit. Direkte MP4 med ét klik er endnu ikke tilsluttet i 3D-vinduet." },
    { area: "Pris og CO₂", state: "Tilvalg i datamodellen", done: "Kildehenvisninger og aktiviteter kan indgå i projektpakken.", next: "Den aktuelle SEH-prøve har ingen godkendte Sigma-priser eller CO₂-tal. Afstem mængder og dubletter mellem fagmodeller før summering." },
    { area: "Samlet udgivelse", state: "3.10 er ikke udgivet", done: "Den offentlige 3.0.9-test og den særskilte vindopdatering kan hentes. Ny byggeplan og rettelser findes lokalt.", next: "Saml og review den endelige kode, byg en ny EXE, og prøv installation, opgradering og MCP-opsætning på en ren Windows-bruger." },
  ],
};
