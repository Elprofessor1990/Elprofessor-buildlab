/** Dateret status. Kandidatfunktioner må ikke fremstå som indhold i den offentlige download. */
export const releaseStatus = {
  checked: "15. november 2026",
  checkedIso: "2026-11-15",
  publicVersion: "3.0.9-test",
  bytes: 142548338,
  sha256: "43bf4c9c3ba60536847251dc6f79a8f8f4e815c53804b360445215f31e3b4196",
  download: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/download/issana-mcp-v3.0.9-test/ISSANA-MCP-Installer-3.0.9-test.exe",
  release: "https://github.com/Elprofessor1990/Elprofessor-buildlab/releases/tag/issana-mcp-v3.0.9-test",
};

export const candidateFeatures = [
  { title: "Et bibliotek til din kode", status: "Bygget · afventer Revit-prøve", text: "Skriv hurtig kode i Python eller C#, gem den med navn og beskrivelse, og find den igen. Egne scripts og medfølgende eksempler er adskilt. Kladder huskes, og du kan kontrollere koden før kørsel." },
  { title: "Spørgsmål før LCA", status: "Pilot · afventer rettelser og samlet prøve", text: "Et guidet forløb bruger modellens oplysninger og dine svar til at udfylde beregningsgrundlaget. Oplysningerne kan rettes bagefter. Kilden skal fortsat være korrekt, når du ændrer et svar." },
  { title: "Data at lære med", status: "Øvepakke · under gennemgang", text: "Et datakatalog og en lille øvebygning skal give de studerende et tydeligt udgangspunkt. Eksempeldata, egne data og det gennemregnede referenceeksempel skal kunne skelnes fra hinanden." },
  { title: "Tydeligere resultater i 3D", status: "Rettelser · afventer samlet prøve", text: "Arbejde med lyd, energi og bygningsdele får bedre inputkontrol og mere præcise statusbeskeder. Manglende oplysninger skal fremgå, så et ufuldstændigt grundlag ikke ligner et færdigt resultat." },
  { title: "Vind og installationer", status: "Samlet kandidat · afventer modelprøve", text: "Kandidaten samler arbejde med statikvisning, vindzoner og ventilationsføringer. Næste kontrol er at følge forløbene på projektkopier og sammenholde visning, data og beregning." },
  { title: "Mere målrettet AI-hjælp", status: "Samlet kandidat · afventer AI-prøve", text: "En opskriftsliste hjælper AI'en med at vælge værktøj til opgaven. En kort værktøjsprofil og registrering af ventetid skal afprøves med de samme opgaver, så forbedringen kan måles." },
];

export const remainingWork = [
  { title: "Saml og review ændringerne", done: "En samlet kandidat og særskilte rettelser findes.", next: "Gennemgå de nye ændringer, ret de åbne fund, og kør regressionstests på præcis den version, der skal udgives." },
  { title: "Gør beregningsgrundlaget gennemskueligt", done: "LCA-dialog og øvedata findes som piloter.", next: "Saml inputkontrollen, ret kildevisning efter manuelle ændringer, og færdiggør øvedata uden endnu et særskilt MCP-værktøj." },
  { title: "Færdiggør de manglende fagforløb", done: "LCA er første guidede forløb; flere fag har allerede beregningsfunktioner.", next: "Lav udregningsrapport for Energi samt guidede forløb for lyd, energi og statik. Afklar og implementér egentlig sol-/skyggeanalyse og overophedningsberegning; en 3D-skyggevisning er ikke dokumentation for disse beregninger." },
  { title: "Prøv hele kæden på projektkopier", done: "Modelbanken og automatiske kontroller giver et udgangspunkt.", next: "Prøv de tre projekter i Revit: data → analyse → ændring → ny analyse → kodning → ny pris. Frys input og referenceværdier, og kontrollér resultaterne uafhængigt." },
  { title: "Se studerende løse opgaverne", done: "Et enklere scriptbibliotek er bygget og kontrolleret i to vinduesstørrelser.", next: "Lad studerende definere rum, rette konstruktioner og gennemføre analyser uden hjælp. Registrér gennemførsel, fejl, behov for hjælp og tid. Automatiske UI-tests erstatter ikke denne prøve." },
  { title: "Kontrollér installation og udgiv", done: "Offentlig EXE kan hentes; en ny kandidat er pakket. Opsætning af Claude Code og Codex findes i installeren.", next: "Prøv den endelige EXE på en ren Windows-bruger med Revit og de relevante AI-apps. Kontrollér geninstallation og eksisterende konfiguration. Fastlæg versionsnummer, gennemgå afhængigheder og udgiv derefter den kontrollerede fil." },
];
