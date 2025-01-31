const allQuestions = [
    { question: "Was ist die Hauptstadt von Deutschland?", options: ["Berlin", "München", "Hamburg", "Frankfurt"], answer: "Berlin" },
    { question: "Welcher Planet ist der Erde am nächsten?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Venus" },
    { question: "Wer schrieb 'Faust'?", options: ["Goethe", "Schiller", "Kafka", "Brecht"], answer: "Goethe" },
    { question: "Wie viele Kontinente gibt es?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Welches Element hat das chemische Symbol 'O'?", options: ["Gold", "Sauerstoff", "Eisen", "Kohlenstoff"], answer: "Sauerstoff" },
    { question: "In welchem Jahr begann der Zweite Weltkrieg?", options: ["1939", "1941", "1945", "1935"], answer: "1939" },
    { question: "Welcher Fluss fließt durch Paris?", options: ["Themse", "Seine", "Donau", "Rhein"], answer: "Seine" },
    { question: "Wer malte die Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"], answer: "Da Vinci" },
    { question: "Welches Land ist das flächenmäßig größte der Welt?", options: ["USA", "China", "Russland", "Kanada"], answer: "Russland" },
    { question: "Wie heißt die längste Wand der Welt?", options: ["Berliner Mauer", "Große Mauer", "Hadrianswall", "Klagemauer"], answer: "Große Mauer" },
    { question: "Welches ist das kleinste Land der Welt?", options: ["Monaco", "Liechtenstein", "Vatikanstadt", "San Marino"], answer: "Vatikanstadt" },
    { question: "Wie viele Planeten hat unser Sonnensystem?", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "Wie viele Bundesländer hat Deutschland?", options: ["14", "15", "16", "17"], answer: "16" },
    { question: "Welche ist die größte Insel der Welt?", options: ["Australien", "Grönland", "Madagaskar", "Borneo"], answer: "Grönland" },
    { question: "Welches Tier ist das größte Säugetier?", options: ["Elefant", "Blauwal", "Giraffe", "Nilpferd"], answer: "Blauwal" },
    { question: "Wie viele Spieler stehen beim Fußball pro Team auf dem Feld?", options: ["9", "10", "11", "12"], answer: "11" },
    { question: "Welche Stadt wird 'die ewige Stadt' genannt?", options: ["Athen", "Rom", "Istanbul", "Kairo"], answer: "Rom" },
    { question: "Wer schrieb das Buch '1984'?", options: ["Aldous Huxley", "George Orwell", "Franz Kafka", "Ernest Hemingway"], answer: "George Orwell" },
    { question: "Welche Farbe hat die Null auf einem Roulette-Tisch?", options: ["Rot", "Schwarz", "Grün", "Blau"], answer: "Grün" },
    { question: "Wie viele Zähne hat ein Erwachsener normalerweise?", options: ["28", "30", "32", "34"], answer: "32" },
    { question: "Welche Sprache hat die meisten Muttersprachler weltweit?", options: ["Englisch", "Spanisch", "Mandarin", "Hindi"], answer: "Mandarin" },
    { question: "In welchem Jahr landete der erste Mensch auf dem Mond?", options: ["1965", "1969", "1972", "1980"], answer: "1969" },
    { question: "Welches Land gewann die erste Fußball-Weltmeisterschaft?", options: ["Brasilien", "Argentinien", "Uruguay", "Deutschland"], answer: "Uruguay" },
    { question: "Wie heißt die Hauptstadt von Kanada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
    { question: "Welcher Ozean ist der größte der Welt?", options: ["Atlantischer Ozean", "Indischer Ozean", "Pazifischer Ozean", "Arktischer Ozean"], answer: "Pazifischer Ozean" },
    { question: "Was ist die häufigste Blutgruppe?", options: ["A", "B", "AB", "0"], answer: "0" },
    { question: "Wie viele Knochen hat der menschliche Körper?", options: ["176", "192", "206", "221"], answer: "206" },
    { question: "Wer erfand die Glühbirne?", options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], answer: "Thomas Edison" },
    { question: "Welches Land ist für die Pyramiden bekannt?", options: ["Griechenland", "Mexiko", "Ägypten", "Peru"], answer: "Ägypten" },
    { question: "Welches ist das höchste Gebäude der Welt?", options: ["Empire State Building", "Shanghai Tower", "Burj Khalifa", "Eiffelturm"], answer: "Burj Khalifa" },
    { question: "Welche ist die meistgesprochene Sprache in Südamerika?", options: ["Portugiesisch", "Spanisch", "Französisch", "Englisch"], answer: "Spanisch" },
    { question: "Welcher ist der kälteste Planet in unserem Sonnensystem?", options: ["Neptun", "Uranus", "Saturn", "Pluto"], answer: "Neptun" },
    { question: "Wie viele Muscheln benötigt man für eine Perle?", options: ["1", "10", "100", "1000"], answer: "1" },
    { question: "Wie viele Sekunden hat eine Stunde?", options: ["3600", "6000", "7200", "4800"], answer: "3600" },
    { question: "Welches Vitamin bekommt man hauptsächlich durch Sonnenlicht?", options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin C"], answer: "Vitamin D" },
    { question: "Was ist das Symbol für Gold im Periodensystem?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
    { question: "Welcher Künstler malte 'Sternennacht'?", options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"], answer: "Vincent van Gogh" },
    { question: "Wie viele Tasten hat ein klassisches Klavier?", options: ["66", "76", "88", "98"], answer: "88" },
    { question: "Welches ist das meistverkaufte Musikalbum aller Zeiten?", options: ["Thriller", "The Dark Side of the Moon", "Back in Black", "Abbey Road"], answer: "Thriller" },
    { question: "Welcher Sportler hat die meisten Olympischen Goldmedaillen gewonnen?", options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"], answer: "Michael Phelps" },
    { question: "Wie viele Seiten hat ein Würfel?", options: ["4", "5", "6", "8"], answer: "6" },
    { question: "Welches Jahr gilt als das Gründungsjahr des Internets?", options: ["1969", "1975", "1983", "1991"], answer: "1983" },
    { question: "Wie viele Herzen hat ein Oktopus?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "Welche Stadt wird die Stadt der Liebe genannt?", options: ["Venedig", "Paris", "Rom", "Barcelona"], answer: "Paris" },
    { question: "Wie viele Monate haben 31 Tage?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Welches ist das größte Organ des menschlichen Körpers?", options: ["Leber", "Lunge", "Haut", "Herz"], answer: "Haut" },
    { question: "Wie viele Beine hat eine Spinne?", options: ["6", "8", "10", "12"], answer: "8" },
    { question: "Welche Farbe hat ein Smaragd?", options: ["Blau", "Grün", "Rot", "Gelb"], answer: "Grün" },
    { question: "Wie viele Seiten hat ein Hexagon?", options: ["4", "5", "6", "8"], answer: "6" },
    { question: "Welches chemische Element hat das Symbol 'Fe'?", options: ["Silber", "Eisen", "Blei", "Fluor"], answer: "Eisen" },
    { question: "Wie viele Beine hat ein Tausendfüßler?", options: ["100", "50", "90", "Variiert"], answer: "Variiert" },
    { question: "Welche Einheit wird zur Messung von elektrischer Spannung verwendet?", options: ["Ohm", "Volt", "Ampere", "Watt"], answer: "Volt" },
    { question: "Welches ist das schnellste Landtier?", options: ["Löwe", "Gepard", "Antilope", "Leopard"], answer: "Gepard" },
    { question: "Wie viele Spieler hat eine Basketballmannschaft auf dem Spielfeld?", options: ["5", "6", "7", "8"], answer: "5" },
    { question: "Welcher Planet hat den Spitznamen 'Roter Planet'?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "Wie heißt die Hauptstadt von Japan?", options: ["Seoul", "Peking", "Tokio", "Bangkok"], answer: "Tokio" },
    { question: "Wer erfand die Relativitätstheorie?", options: ["Newton", "Einstein", "Tesla", "Galileo"], answer: "Einstein" },
    { question: "Welche Sportart wird bei Wimbledon gespielt?", options: ["Tennis", "Fußball", "Golf", "Cricket"], answer: "Tennis" },
    { question: "Wie viele Stunden hat ein Tag?", options: ["12", "24", "36", "48"], answer: "24" },
    { question: "Welches Tier steht für das Sternzeichen Löwe?", options: ["Tiger", "Panther", "Löwe", "Jaguar"], answer: "Löwe" },
    { question: "Wie viele Beine hat ein Hummer?", options: ["4", "6", "8", "10"], answer: "10" },
    { question: "Welches ist das chemische Symbol für Silber?", options: ["Si", "Ag", "Au", "Sr"], answer: "Ag" },
    { question: "Wie viele Streifen hat die US-Flagge?", options: ["10", "11", "12", "13"], answer: "13" },
    { question: "Welches ist das heißeste Planetensystem?", options: ["Merkur", "Venus", "Mars", "Jupiter"], answer: "Venus" },
    { question: "Wer hat den Roman 'Der große Gatsby' geschrieben?", options: ["Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway", "George Orwell"], answer: "F. Scott Fitzgerald" },
    { question: "Wie viele Minuten hat eine Stunde?", options: ["30", "45", "60", "90"], answer: "60" },
    { question: "Wie viele Zeitzonen hat die Erde?", options: ["12", "18", "24", "30"], answer: "24" },
    { question: "Welches Tier kann sein Geschlecht ändern?", options: ["Frosch", "Seepferdchen", "Nashorn", "Krokodil"], answer: "Seepferdchen" },
    { question: "Wer war der erste Präsident der USA?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], answer: "George Washington" },
    { question: "Welcher ist der größte Planet im Sonnensystem?", options: ["Saturn", "Jupiter", "Neptun", "Uranus"], answer: "Jupiter" },
    { question: "Wie nennt man ein Baby-Känguru?", options: ["Kalb", "Jungtier", "Joey", "Fohlen"], answer: "Joey" },
    { question: "Welcher Ozean liegt zwischen Europa und Amerika?", options: ["Pazifik", "Atlantik", "Indischer Ozean", "Arktischer Ozean"], answer: "Atlantik" },
    { question: "Was ist die Hauptstadt von Brasilien?", options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], answer: "Brasília" },
    { question: "Welcher Buchstabe steht für römisch 1000?", options: ["X", "L", "C", "M"], answer: "M" },
    { question: "Wie viele Ringe hat das olympische Symbol?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "Wie viele Beine hat ein Skorpion?", options: ["4", "6", "8", "10"], answer: "8" },
    { question: "Wie nennt man einen Vulkanausbruch unter Wasser?", options: ["Lavaerupt", "Seismische Eruption", "Unterwasservulkan", "Hydrovulkan"], answer: "Unterwasservulkan" },
    { question: "Wer ist der Autor von 'Harry Potter'?", options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"], answer: "J.K. Rowling" },
    { question: "Wie viele Kontinente gibt es auf der Erde?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Welches Meer trennt Europa und Afrika?", options: ["Indischer Ozean", "Rotes Meer", "Mittelmeer", "Karibisches Meer"], answer: "Mittelmeer" },
    { question: "Was ist das Symbol für Wasser im Periodensystem?", options: ["H2O", "O2", "CO2", "H2"], answer: "H2O" },
    { question: "Wie nennt man das Studium der Sterne und Planeten?", options: ["Geologie", "Astronomie", "Biologie", "Physik"], answer: "Astronomie" },
    { question: "Welcher Dinosaurier hatte einen langen Hals?", options: ["Tyrannosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"], answer: "Brachiosaurus" },
    { question: "Wer war der erste Mensch im All?", options: ["Neil Armstrong", "Juri Gagarin", "Buzz Aldrin", "John Glenn"], answer: "Juri Gagarin" }
];
