// model.js (Eksempel)

// VIKTIG: Sørg for at funksjonene loadRecipesFromStorage og loadUsersFromStorage
// er definert FØR denne filen lastes (f.eks. i en utils/storage.js fil).

// --- Standard Data (brukes hvis localStorage er tom eller feiler) ---
const defaultRecipes = [
    {
        id: 1,
        title: 'Pannekaker',
        addedByUser: 1,
        ingredients: [
            '3 dl hvetemel',
            '4 egg',
            '6 dl melk',
            '1 ss sukker',
            '½ ts salt',
            'Smør til steking'
        ],
        instructions: [
            'Bland mel, sukker og salt i en bolle.',
            'Visp inn egg og tilsett gradvis melk mens du fortsetter å vispe.',
            'La røren hvile i 30 minutter.',
            'Smelt smør i en stekepanne og stek pannekakene på middels varme til de er gylne på begge sider.'
        ],
        tags: [
            'Frokost',
            'Enkel'
        ]
    },
    {
        id: 2,
        title: 'Hjemmelaget Pizza',
        addedByUser: 1,
        ingredients: [
            '500g hvetemel',
            '1 pose tørrgjær',
            '3 dl lunkent vann',
            '2 ss olivenolje',
            '1 ts salt',
            '200g tomatsaus',
            '250g mozzarella',
            'Fyll etter eget ønske (pepperoni, sopp, paprika, osv.)'
        ],
        instructions: [
            'Bland mel, gjær og salt i en stor bolle.',
            'Tilsett vann og olivenolje, og elt til en smidig deig.',
            'La deigen heve tildekket i ca. 1 time.',
            'Kjevle ut deigen, legg på tomatsaus, ost og ønsket fyll.',
            'Stek pizzaen på 250°C i ca. 10-12 minutter.'
        ],
        tags: [
            'Middag',
            'Italiensk',
            'Familie'
        ]
    },
    {
        id: 3,
        title: 'Kylling Curry',
        addedByUser: 2,
        ingredients: [
            '500g kyllingbryst, i biter',
            '2 ss vegetabilsk olje',
            '1 stor løk, finhakket',
            '3 fedd hvitløk, hakket',
            '1 ss ingefær, revet',
            '2 ss karripulver',
            '1 ts gurkemeie',
            '1 boks (400ml) kokosmelk',
            '2 ss tomatpuré',
            'Salt og pepper etter smak',
            'Frisk koriander til pynt',
            'Ris til servering'
        ],
        instructions: [
            'Varm olje i en stor panne på middels varme.',
            'Tilsett løk og stek til den er myk.',
            'Tilsett hvitløk og ingefær, stek i 1 minutt til det dufter.',
            'Tilsett kylling og stek til den er brunet på alle sider.',
            'Rør inn karripulver og gurkemeie, stek i 1 minutt.',
            'Tilsett kokosmelk og tomatpuré, bring til småkoking.',
            'Reduser varmen og la det småkoke i 15-20 minutter til kyllingen er gjennomstekt og sausen tykner.',
            'Smak til med salt og pepper.',
            'Pynt med frisk koriander og server med ris.'
        ],
        tags: [
            'Middag',
            'Indisk',
            'Sterk'
        ]
    },
    {
        id: 4,
        title: 'Klassisk Cæsarsalat',
        addedByUser: 3,
        ingredients: [
            '1 stort romanosalathode, hakket',
            '100g krutonger',
            '50g parmesanost, i flak',
            '2 fedd hvitløk, hakket',
            '2 ansjosfilleter, hakket (valgfritt)',
            '1 eggeplomme',
            '1 ss dijonsennep',
            '2 ss sitronsaft',
            '120ml olivenolje',
            'Salt og svart pepper etter smak'
        ],
        instructions: [
            'For dressingen, visp sammen hvitløk, ansjos, eggeplomme, sennep og sitronsaft.',
            'Hell i olivenoljen i en tynn stråle mens du visper kontinuerlig for å emulgere.',
            'Smak til med salt og pepper.',
            'I en stor bolle, vend salaten med nok dressing til å dekke.',
            'Tilsett krutonger og vend forsiktig.',
            'Topp med parmesanflak og server umiddelbart.'
        ],
        tags: [
            'Salat',
            'Lunsj',
            'Vegetarisk'
        ]
    },
    {
        id: 5,
        title: 'Sjokoladekjeks',
        addedByUser: 1,
        ingredients: [
            '225g smør, myknet',
            '200g hvitt sukker',
            '200g brunt sukker',
            '2 store egg',
            '1 ts vaniljeekstrakt',
            '350g hvetemel',
            '1 ts bakepulver',
            '½ ts salt',
            '300g sjokoladebiter',
            '100g hakkede nøtter (valgfritt)'
        ],
        instructions: [
            'Forvarm ovnen til 190°C.',
            'I en stor bolle, rør sammen smør, hvitt sukker og brunt sukker til det er glatt.',
            'Rør inn eggene ett om gangen, deretter vanilje.',
            'I en separat bolle, bland mel, bakepulver og salt. Rør gradvis inn i smørblandingen.',
            'Vend inn sjokoladebiter og nøtter hvis du bruker det.',
            'Plasser avrundede spiseskjeer med deig på stekebrett uten fett.',
            'Stek i 9-11 minutter eller til gyllenbrune.',
            'La kjeksene avkjøles på stekebrettet i 2 minutter før du flytter dem til et avkjølingsrist.'
        ],
        tags: [
            'Dessert',
            'Baking',
            'Søtt'
        ]
    },
    // ... (legg til flere standardoppskrifter her om nødvendig, f.eks. Biff Wok, Guacamole, Bærsmootie Bowl)
];

const defaultUsers = [
    { id: 1, name: 'Dag' },
    { id: 2, name: 'Bruker2' },
    { id: 3, name: 'Bruker3' }
];

// --- Forsøk å laste data fra localStorage ---
let initialRecipes = null;
let initialUsers = null;

try {
    // Kall funksjonene som *bør* være definert globalt eller i en importert fil FØR model.js
    initialRecipes = loadRecipesFromStorage(); // Returnerer array eller null
    initialUsers = loadUsersFromStorage();   // Returnerer array eller null
} catch (error) {
    console.error("Error calling load functions (ensure they are defined before model.js):", error);
    // Lar initialRecipes/initialUsers forbli null hvis funksjonene ikke finnes
}

// --- Definer selve modellen ---
const model = {
    app: {
        activeTab: 'recipes', // Start på oppskriftsfanen
        searchTerm: '',
        tabs: {
            recipes: 'recipes',
            addRecipe: 'addRecipe'
        },
        // currentUser: null // Kan legges til senere for innlogging
    },
    // Initialiser med data fra localStorage. Bruk || [] for å gi en tom liste hvis localStorage er tom eller gir feil.
    // Bruk data lastet fra localStorage HVIS den er en array, ellers bruk standardlisten.
    // Bruk lastet data HVIS det er en array OG den har innhold, ellers bruk standardlisten.
    // Bruk lastet data HVIS det ble lastet (ikke null), ellers bruk standardlisten.
    recipes: initialRecipes !== null ? initialRecipes : defaultRecipes,

    // Gjør det samme for brukere, eller bruk en hardkodet liste som fallback/standard hvis ønskelig.
    // Bruk data lastet fra localStorage HVIS den er en array, ellers bruk standardlisten.
    // users: Array.isArray(initialUsers) && initialUsers.length > 0 ? initialUsers : defaultUsers,
    users: initialUsers || defaultUsers, // Hvis initialUsers er null, bruk defaultUsers som fallback.
}; // Siste krøllparentes for hele model-objektet
    