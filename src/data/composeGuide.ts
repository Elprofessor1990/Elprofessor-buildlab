export type PromptCategory = "planer" | "modeldata" | "redigering" | "tekst";

export const composeCategories: Array<{ id: "alle" | PromptCategory; label: string }> = [
  { id: "alle", label: "Alle prompts" },
  { id: "planer", label: "Planer og figurer" },
  { id: "modeldata", label: "Modeldata" },
  { id: "redigering", label: "Udskift og opdatér" },
  { id: "tekst", label: "Tekst og kvalitet" },
];

export const composePrompts: Array<{
  id: string;
  category: PromptCategory;
  title: string;
  input: string;
  output: string;
  check: string;
  prompt: string;
}> = [
  {
    id: "planer", category: "planer", title: "Planer ind i notatet",
    input: "En gemt testmodel, præcise visningsnavne og navnet på dokumentafsnittet.",
    output: "De valgte planer som figurer, i den angivne rækkefølge, med billedtekst og kilde.",
    check: "Stemmer visninger, beskæring og læsbarhed? Kan hver figur forbindes med sin kilde?",
    prompt: "Indsæt Revit-visningerne [VISNINGSNAVNE I RÆKKEFØLGE] i afsnittet [AFSNIT] i mit åbne Compose-testdokument. Brug én figur pr. side med visningsnavn og kort billedtekst. Angiv kilde og modelrevision, hvis de er tilgængelige. Bevar resten af dokumentet. Vis mig resultatet til kontrol. Hvis en nødvendig funktion eller oplysning mangler, så forklar præcis hvad der mangler.",
  },
  {
    id: "snit", category: "planer", title: "Et snit med en kort forklaring",
    input: "Et entydigt Revit-snit, det ønskede afsnit og målgruppen.",
    output: "Snittet og en kort forklaring, der bruger tilgængelige modeloplysninger.",
    check: "Er forklaringen i overensstemmelse med snittet? Er alle angivne mål hentet fra data?",
    prompt: "Hent snittet [VISNINGSNAVN] fra testmodellen, og indsæt det i [AFSNIT]. Skriv højst fem linjer til [MÅLGRUPPE] om det viste. Brug kun mål og materialer, der kan aflæses af modeldata, og markér oplysninger, der mangler. Udled ingen mål fra billedets pixels. Vis figuren og teksten til kontrol.",
  },
  {
    id: "rumtabel", category: "modeldata", title: "Rumdata som en tabel",
    input: "En etage med rum og felterne rumnummer, navn og areal.",
    output: "En tabel sorteret efter rumnummer med arealer i m² og tydelige manglende værdier.",
    check: "Sammenlign antal rum og mindst tre rækker med Revit. Kontrollér enheder og afrunding.",
    prompt: "Lav en redigerbar tabel i [AFSNIT] med rumnummer, rumnavn og areal i m² for etagen [ETAGE]. Sortér efter rumnummer. Vis to decimaler, og behold kildeværdierne i datagrundlaget. Markér tomme værdier som 'Mangler i modellen'. Oplys modelkilde og antal rum. Hvis tabellen ikke kan indsættes, så vis data og forklar den manglende funktion.",
  },
  {
    id: "bygningsdele", category: "modeldata", title: "Overblik over valgte bygningsdele",
    input: "Et konkret udvalg af vægge eller dæk samt de ønskede datafelter.",
    output: "En oversigt med element-ID, type og de felter, modellen faktisk indeholder.",
    check: "Er udvalget korrekt? Er modelværdier tydeligt adskilt fra manglende dokumentation?",
    prompt: "Lav en oversigt i [AFSNIT] over de markerede [VÆGGE ELLER DÆK] i Revit. Medtag element-ID, typenavn og [ØNSKEDE FELTER MED ENHEDER]. Brug kun modelværdier, og angiv manglende felter. Tilføj en kort beskrivelse uden at konkludere, at konstruktionerne opfylder statiske, brandmæssige eller andre krav.",
  },
  {
    id: "udskift", category: "redigering", title: "Udskift en skitse",
    input: "Figurens nummer eller navn og den nye billedfil.",
    output: "Én udskiftet figur med bevaret placering, billedtekst og henvisninger.",
    check: "Kontrollér beskæring, figurtekst, nummerering og alle henvisninger til figuren.",
    prompt: "Erstat [FIGURNUMMER ELLER NAVN] i mit Compose-testdokument med den vedhæftede skitse. Bevar figurens placering, billedtekst og henvisninger. Tilpas størrelsen uden at forvrænge billedet. Vis ændringen, og fortæl mig, hvis noget ikke kan bevares automatisk.",
  },
  {
    id: "opdater", category: "redigering", title: "Opdatér data fra modellen",
    input: "En eksisterende rumtabel, dens oprindelige kilde og den opdaterede testmodel.",
    output: "Et ændringsforslag med tilføjede, ændrede og fjernede rækker.",
    check: "Er det samme model og etage? Er egne teksttilføjelser bevaret?",
    prompt: "Sammenlign rumtabellen [TABELNAVN] med de aktuelle rumdata for [ETAGE] i testmodellen. Vis tilføjede, ændrede og fjernede rækker, før tabellen opdateres. Bevar mine egne teksttilføjelser. Hvis den oprindelige kilde ikke kan identificeres, så bed om afklaring først.",
  },
  {
    id: "billedtekster", category: "tekst", title: "Gør teksten klarere",
    input: "Et bestemt tekstudvalg og målgruppen, fx studerende eller en projektleder.",
    output: "Et kortere tekstforslag med uændrede tal, enheder og kildehenvisninger.",
    check: "Sammenlign tallene med originalen. Er den faglige betydning bevaret?",
    prompt: "Gør de markerede billedtekster i Compose kortere og lettere at forstå for [MÅLGRUPPE]. Bevar alle tal, enheder, forbehold og kildehenvisninger. Tilføj ingen nye faglige påstande. Vis den foreslåede tekst, før du erstatter originalen.",
  },
  {
    id: "kvalitet", category: "tekst", title: "Kontrollér dokumentets sammenhæng",
    input: "Et dokumentudkast med figurer, tabeller og kildeoplysninger.",
    output: "En konkret kontrolliste med placering, observation og forslag til rettelse.",
    check: "Efterprøv hvert fund i dokumentet. Kontrollen erstatter ikke faglig godkendelse.",
    prompt: "Gennemgå mit Compose-testdokument for manglende billedtekster, brudte figurhenvisninger, tabeller uden enheder og tal uden angivet kilde. Giv en liste med placering, observation og et konkret forslag til rettelse. Angiv tydeligt, hvad du kunne og ikke kunne kontrollere. Foretag ingen rettelser endnu.",
  },
];

// Replace a status only when a dated test record supports it.
// Keep command paths, private model names and raw internal logs out of public content.
export const composeTestStatus = [
  { name: "Dokumentmotor · v4", status: "9 afgrænsede prøver bestået", detail: "14. oktober 2026: struktureret testprojekt via CLI med syntetiske data. Indsættelse af to figurer og en tabel, danske tegn, 1,25, nul og tom celle indgår. PDF-kompilering tog ca. 3 sekunder i dette forsøg." },
  { name: "Redigering i dokumentmotoren", status: "Teknisk afprøvet", detail: "Prøverne omfatter gentagelse uden dubletter, figurudskiftning med bevaret identitet og billedtekst, fortrydelse og ombytning. Forældet revision, ugyldige billeder og manglende billedreferencer blev afvist uden delvise ændringer." },
  { name: "Revit-planer til Compose", status: "Ikke live-testet", detail: "Skal afprøves med en gemt testmodel og kontrol af hver figur." },
  { name: "Modeldata til tabel", status: "Ikke live-testet", detail: "Tal, enheder og manglende felter skal sammenlignes med modellen." },
  { name: "Arbejdsgangen i Compose-appen", status: "Ikke live-testet", detail: "Samspillet mellem brugerfladen, Revit, figurer og dokument skal afprøves samlet. Promptforslagene er endnu ikke live-testet." },
  { name: "Typst i Compose-appen · testudgave 18.10", status: "Intern afprøvning", detail: "Nyt Typst-projekt, Typst-editoren og konvertering af en kopi er med i testudgaven fra 18. oktober 2026. Funktionerne afprøves internt og er ikke afprøvet hos en ny bruger." },
  { name: "Installation hos en ny bruger", status: "Ikke afprøvet", detail: "Opsætning, systemkrav og første overførsel skal afprøves, før en Windows-udgave præsenteres til download." },
];

// Features as described in the test build notes of 18 October 2026, not test results.
export const composeTypstNews = [
  { title: "Typst som standardmotor", text: "Nye dokumenter oprettes som Typst-projekter. Typst kræver ingen ekstra installation. LaTeX virker som før og kræver fortsat MiKTeX." },
  { title: "Nyt Typst-projekt", text: "«Nyt projekt …» har motoren «Typst (anbefalet)» valgt på forhånd. Projektet starter med main.typ og en dansk standardtekst, og æ, ø og å virker uden opsætning." },
  { title: "Kompilering efter tillid", text: "Et nyt Typst-projekt kompileres først, når du har læst advarslen og markeret det som betroet. Derefter bygger «Kompilér» eller Ctrl+Enter PDF'en ved siden af teksten." },
  { title: "Typst-editoren", text: "Overskrifter skrives som = og == og vises i dispositionen. Henvisninger skrives som @etiket, og editoren foreslår etiketter og filstier. Du kan springe mellem tekst og PDF." },
  { title: "Konvertér en kopi til Typst", text: "Et LaTeX-projekt kan konverteres til et nyt projekt i en mappe ved siden af originalen. Originalen ændres ikke. Bagefter vises filer, mangler, ord, kompilering og tillid." },
  { title: "Mangler, du kan se", text: "Det, der ikke kan konverteres automatisk, står som røde bokse i den nye PDF med et ID. Konverteringspanelet viser listen over mangler og de to PDF'er side om side." },
];

export const composeTypstLimits = [
  "Den visuelle editor findes kun til LaTeX. Typst har kodevisning.",
  "TikZ-figurer konverteres ikke og skal tegnes på ny i Typst.",
  "Konverteringen følger højst 64 filer via \\input og \\include. Egne makroer og nogle layoutkommandoer bliver til mangler.",
  "Felter, skabeloner og vandmærke findes endnu kun til LaTeX. Skabelonprojekter kan ikke konverteres endnu.",
  "Litteraturliste virker med en .bib-fil i projektet, #bibliography og @nøgle.",
  "AI virker i Typst-projekter, men må ikke hente pakker fra nettet, bruge plugins eller stier uden for projektet.",
];

// The download stays closed until the bundled components' licences are reviewed.
// Set file, url and sha256 when a public build exists.
export const composeDownload: {
  version: string;
  format: string;
  requirements: string;
  optional: string;
  file?: string;
  url?: string;
  sha256?: string;
} = {
  version: "Testudgave 18. oktober 2026",
  format: "Zip-fil med fem programfiler. Ingen installer.",
  requirements: "Windows 10 eller 11, 64-bit, med Microsoft Edge WebView2 (følger med Windows 11).",
  optional: "MiKTeX, hvis du vil arbejde i LaTeX-projekter. Typst kræver ingen ekstra installation.",
};

export const composeInstallSteps = [
  { title: "Hent og pak ud", text: "Hent zip-filen, og pak den ud i en mappe, du selv vælger, fx Dokumenter\\ISSANA Compose. Lad alle fem .exe-filer ligge i samme mappe." },
  { title: "Start appen", text: "Dobbeltklik på compose-desktop.exe. Der er ingen installer, så appen kører direkte fra mappen." },
  { title: "Hvis Windows advarer", text: "Programfilerne er endnu ikke kodesigneret. Viser Windows «Windows beskyttede din pc», så kontrollér filens SHA-256 her på siden. Vælg derefter «Flere oplysninger» og «Kør alligevel»." },
  { title: "Opret dit første projekt", text: "Vælg «Nyt projekt …». Motoren «Typst (anbefalet)» er valgt på forhånd. Giv projektet et navn og en mappe, og opret det." },
  { title: "Markér som betroet og kompilér", text: "Klik «Læs mere og markér som betroet …», læs advarslen, og bekræft. Tryk «Kompilér» eller Ctrl+Enter. PDF'en vises til højre." },
  { title: "LaTeX, hvis du har brug for det", text: "LaTeX-projekter kræver MiKTeX. Installér det kun, hvis du vil arbejde i LaTeX." },
];

export const composePackageFiles = [
  { name: "compose-desktop.exe", text: "Appen. Den er den eneste, du starter." },
  { name: "compose-typst.exe", text: "Typst-motoren, som bygger PDF'en." },
  { name: "compose-svg.exe", text: "Konverterer SVG-figurer ved kompilering." },
  { name: "compose-mcp.exe", text: "Forbindelsen til en AI-klient (MCP)." },
  { name: "compose.exe", text: "Kommandolinjen. Valgfri." },
];

// Add a youtubeId when a video is published; the card then shows the video.
export const composeVideos: Array<{ id: string; title: string; text: string; youtubeId?: string }> = [
  { id: "installation", title: "Installation og første start", text: "Hent og pak Compose ud, start appen, og kom forbi Windows-advarslen." },
  { id: "typst-projekt", title: "Dit første Typst-projekt", text: "Opret et projekt, markér det som betroet, skriv overskrifter og henvisninger, og kompilér." },
  { id: "konvertering", title: "Konvertér LaTeX til Typst", text: "Konvertér en kopi, gennemgå manglerne, og sammenlign de to PDF'er side om side." },
  { id: "revit", title: "Fra Revit til Compose", text: "Pilotarbejdsgangen: planer og modeldata fra en testmodel ind i dokumentet." },
];

export const composeTemplates = [
  "Bygningsdelsbeskrivelser", "Statiknotat", "Brandnotat", "Lydnotat", "Fugtnotat", "Installationsnotat",
];
