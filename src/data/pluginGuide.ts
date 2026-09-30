/*
 * Indhold til plugin-guiden (install-plugin), adskilt fra layoutet.
 * Videoer: sæt youtubeId, når en video er optaget (kun ID'et, fx "dQw4w9WgXcQ").
 * Ingen videofiler i repoet; indlejres via youtube-nocookie og indlæses først ved klik.
 */

export type PluginVideo = {
  id: string;
  title: string;
  description: string;
  /** Kapitlet på siden, videoen hører til. */
  section: string;
  youtubeId: string | null;
};

export const pluginVideos: PluginVideo[] = [
  {
    id: "installer",
    title: "Installér pluginet",
    description: "Download, kør installationsfilen og læs konsolvinduet – trin for trin.",
    section: "#installer",
    youtubeId: null,
  },
  {
    id: "foerste-prompt",
    title: "Første prompt og kontrol",
    description: "Tjek forbindelsen i Revit og i AI-appen, og send din første prompt.",
    section: "#kontroller",
    youtubeId: null,
  },
  {
    id: "forbind-nbs",
    title: "Forbind NBS Nordic",
    description: "API-nøgle, vælg projekt, Gem og forbind – og husk at gemme RVT-filen.",
    section: "#nbs",
    youtubeId: null,
  },
  {
    id: "kod-bygningsdele",
    title: "Kod bygningsdele med NBS",
    description: "Hele kæden: klassificér, Excel-import i NBS, tilknyt og synkronisér.",
    section: "#kodning",
    youtubeId: null,
  },
  {
    id: "tegninger-molio",
    title: "Tegninger efter Molio A104",
    description: "Tegningsnumre med Molio-skillen, og opret arkene i Revit.",
    section: "#tegninger",
    youtubeId: null,
  },
];

/* ---------- Nyt i version 2.5.0 ---------- */
export const nextVersionIcons = [
  { file: "icon-issana.svg", label: "ISSANA MCP", note: "Om og version" },
  { file: "icon-connection.svg", label: "Forbindelse", note: "Til / Fra" },
  { file: "icon-panel.svg", label: "MCP-panel", note: "Chat og godkendelser" },
  { file: "icon-settings.svg", label: "Indstillinger", note: "Konfiguration" },
];

export const nextVersionFeatures = [
  "Nyt navn og design: ISSANA MCP med fire nye ikoner i båndet.",
  "Kontrolleret tilstand, som du selv slår til under Indstillinger → Forbindelse: AI'en foreslår, og du godkender hver ændring i panelet, før noget sker i modellen.",
  "Kod bygningsdele hurtigere: tilknyt alle kategorier og synkronisér med NBS i én plan og ét klik.",
  "Links til issana.dk og kontakt, hvis I vil bruge ISSANA MCP i jeres virksomhed.",
];

/* ---------- Kod bygningsdele med NBS ---------- */
export const codingConcepts = [
  { term: "Bygningsdel", text: "En komponent i NBS-projektet. Hver Revit-type bliver én bygningsdel med en CCI-kode." },
  { term: "Gruppekode", text: "CCI-koden for hovedgruppen, fx [L]%AD (Vægopbygning). Det er den, Excel-importen skal have." },
  { term: "Fuld kode", text: "Gruppekoden plus et løbenummer, fx [L]%AD.001. NBS giver selv løbenummeret ved importen – det er ikke CCI-listens underkode." },
  { term: "Kode i typenavnet", text: "Navngiv typen med koden forrest, fx L-%AD210 Skillevæg, Præfabrikeret element. Så kan AI'en læse både gruppe og underkode uden at gætte." },
  { term: "OST_-koder", text: "Revits interne, sproguafhængige navne på kategorier: OST_Walls = vægge, OST_Floors = gulve, OST_Roofs = tage, OST_Ceilings = lofter, OST_Doors = døre, OST_Windows = vinduer. Prompterne bruger dem, så AI'en rammer rigtigt, uanset om Revit er på dansk eller engelsk." },
  { term: "Tilknyt", text: "NBS-id, kode og navn skrives ind i Revit-typerne og -elementerne. Det ændrer modellen." },
  { term: "Synkronisér", text: "NBS' egen Sync Now sender elementer og mængder op til NBS-projektet. Det ændrer NBS." },
];

export const codingSteps = [
  { title: "Kobl og gem", text: "Indstillinger → NBS Nordic → Gem og forbind. Gem derefter RVT-filen (Ctrl+S)." },
  { title: "Klassificér", text: "Koden tages fra typenavnet eller fra CCI-opslaget – aldrig gættet." },
  { title: "Lav Excel-filen", text: "Én række pr. type: typenavn, gruppekode og en beskrivelse med den fulde kode." },
  { title: "Importér i NBS", text: "Journal → pil ved Opret ny bygningsdel → Importer fra Excel… (projektadministrator)." },
  { title: "Tilknyt", text: "Prøvekørsel først. Skriv først, når prøvekørslen har 0 uafklarede." },
  { title: "Synkronisér og gem", text: "Sync Now efter aftale med underviseren. Gem modellen, og kontrollér i NBS." },
];

export const masterCodingPrompt = `Jeg vil kode alle bygningsdele i den åbne Revit-model korrekt i NBS. Følg trinnene i rækkefølge, og STOP ved hvert STOP, indtil jeg svarer.

1. Kør get_connection_status. Er modellen koblet til et NBS-projekt uden manglende NBS-parametre? Hvis ikke: STOP og bed mig koble modellen under Indstillinger → NBS Nordic og gemme filen.
2. Find de anvendte typer i OST_Walls, OST_Floors, OST_Roofs, OST_Ceilings, OST_Doors og OST_Windows med ai_element_filter (includeTypes: true, includeInstances: false).
3. Klassificér hver type: Starter navnet med en kode som L-%AD210, så kontrollér den med nbs_lookup_classification. Ellers foreslå en CCI-gruppekode med nbs_lookup_classification ud fra kategori og navn. Opfind aldrig koder – skriv "ukendt", hvis intet passer. Vis en tabel med type-id, typenavn, gruppekode, fuld kode, kilde og usikkerhed. STOP.
4. Når jeg godkender tabellen: lav Excel-filen med nbs_prepare_component_import – component_name = typenavnet præcis, classification_code = gruppekoden uden løbenummer, description = "CCI <fuld kode> · Revit: <kategori> / <familie>". Spring "ukendt" over. Vis filstien. STOP, mens jeg importerer filen i NBS.
5. Når jeg skriver "importeret": kør nbs_list_components, og kontrollér at hver type har præcis én bygningsdel med samme navn.
6. Kør sync_revit_types_to_nbs med dryRun: true for hver kategori med explicitMapping { "<Revit-type-id>": <komponent-id> } og inheritTypeForUnlinkedInstances: true. Vis pr. kategori typer, instanser, parametre og uafklarede. STOP.
7. Når jeg godkender prøvekørslen: kør de samme kald med dryRun: false, én kategori ad gangen, og stop ved første fejl. Kør derefter nbs_run_native_sync med confirmUpload: true, kun hvis jeg har skrevet "upload godkendt".
8. Afslut med et resumé og mind mig om at gemme modellen.`;

export const codingPitfalls = [
  { symptom: "\"Modellen er ikke koblet\", selvom du har koblet den", fix: "Filen blev ikke gemt efter koblingen. Kobl igen, og gem (Ctrl+S)." },
  { symptom: "NBS afviser en række ved importen", fix: "Koden har et løbenummer (fx [L]%AD.210). Brug kun gruppekoden [L]%AD." },
  { symptom: "Bygningsdelen hedder [L]Komponent på web", fix: "Den er oprettet via API i stedet for Excel-importen. Brug altid Excel-importen." },
  { symptom: "En type bliver ikke tilknyttet", fix: "Navnet i NBS er ikke præcis Revit-typenavnet, eller to bygningsdele har samme navn." },
  { symptom: "Dubletter i NBS", fix: "Filen er importeret to gange. Importér kun én gang pr. projekt." },
  { symptom: "Sync Now starter ikke", fix: "Luk åbne dialoger i Revit, og kontrollér at NBS' eget plugin er installeret." },
];

/* ---------- Tegninger efter Molio A104 ---------- */
export const sheetSteps = [
  { title: "Installér Molio-skillen", text: "Skill-pakken molio-drawing-information kender A104's koder, indhold og målestok pr. tegningstype." },
  { title: "Angiv projektet", text: "Projektnavn, Projekt-ID og bygherre. Uden Projekt-ID kan skillen ikke danne et fuldt tegningsnummer." },
  { title: "Få en tegningsliste", text: "Nummer efter [Projekt-ID]_[Vidensområde]_[Afbildningstype]_[Etage], fx IXXX_K01_H1_E1, med navn og målestok." },
  { title: "Opret arkene", text: "I en gemt kopi opretter AI'en arkene med de godkendte numre og din titelblok." },
  { title: "Tjek de eksisterende", text: "Lad skillen kontrollere modellens ark mod A104 og foreslå rettelser – du godkender dem." },
];

/* ---------- Idéer ---------- */
export type Idea = { title: string; text: string; status: "Nyt i 2.5.0" | "Idé" };

export const pluginIdeas: Idea[] = [
  { title: "Ét klik: tilknyt og synkronisér", text: "Alle kategorier tilknyttes og synkroniseres med NBS i én plan og én godkendelse.", status: "Nyt i 2.5.0" },
  { title: "Kontrolleret tilstand", text: "Slås til under Indstillinger → Forbindelse. Så foreslår AI'en, og du godkender hver ændring i panelet. Alt logges.", status: "Nyt i 2.5.0" },
  { title: "Beskrivelser med lag og U-værdier", text: "Bygningsdelene får en beskrivelse med lagopbygning, U-værdi og for vinduer g-værdi – hentet fra modellen.", status: "Idé" },
  { title: "Skraveringstjek efter Molio C223b", text: "Kontrollér materialernes snitskraveringer mod C223b, og få rettelser til godkendelse.", status: "Idé" },
  { title: "QA-rapport til afleveringen", text: "Modelkontrol mod firmastandard og informationsniveau samlet i en rapport.", status: "Idé" },
  { title: "Faste prompt-skabeloner", text: "Færdige kommandoer som /kod-bygningsdele, så AI'en rammer de rigtige værktøjer første gang.", status: "Idé" },
];
