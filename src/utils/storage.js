// Inne i utils/storage.js (eller tilsvarende)

const RECIPES_STORAGE_KEY = 'recipesApp_recipes'; // Samme nøkkel som brukes i load

function saveRecipesToStorage(recipes) {
    if (!Array.isArray(recipes)) {
        console.error("Attempted to save non-array to recipe storage:", recipes);
        return; // Ikke lagre hvis det ikke er en array
    }
    try {
        console.log("Attempting to save recipes:", recipes); // Logg dataen som skal lagres
        console.log("Stringifying data...");
        const dataToStore = JSON.stringify(recipes);
        console.log("Calling localStorage.setItem with key:", RECIPES_STORAGE_KEY, "and data:", dataToStore);
        localStorage.setItem(RECIPES_STORAGE_KEY, dataToStore);
        console.log("localStorage.setItem call completed."); // Bekreft at kallet er ferdig
        // console.log("Data saved:", dataToStore); // Valgfritt: logg den stringifiserte dataen
    } catch (e) {
        console.error("Error saving recipes to localStorage:", e);
        // Vis en enkel feilmelding til brukeren siden vi ikke sjekker konsoll
        alert("Kunne ikke lagre oppskriften! LocalStorage er kanskje full eller deaktivert.");
        // Vurder å gi brukeren beskjed her hvis lagring feiler kritisk
    }
}

// ... (loadRecipesFromStorage og evt. andre funksjoner) ...
    function loadRecipesFromStorage() {
        console.log("Attempting to load recipes from key:", RECIPES_STORAGE_KEY);
        const data = localStorage.getItem(RECIPES_STORAGE_KEY);
        if (data) {
            console.log("Found data in localStorage:", data);
            try {
                const parsedData = JSON.parse(data);
                if (Array.isArray(parsedData)) {
                    console.log("Successfully parsed data as array:", parsedData);
                    return parsedData;
                } else {
                    console.error("Loaded data is not an array:", parsedData);
                    return null; // Returner null hvis data ikke er gyldig array
                }
            } catch (e) {
                console.error("Error parsing recipes from localStorage:", e);
                return null; // Returner null ved parse-feil
            }
        }
        console.log("No data found in localStorage for key:", RECIPES_STORAGE_KEY);
        return null; // Returner null hvis det ikke finnes noe i localStorage
    }
