function recipeView() {
    let recipeHtml = '';
    const searchTerm = model.app.searchTerm ? model.app.searchTerm.toLowerCase() : '';

    // Filtrer oppskrifter basert på søketermen (sjekker tittel og tags)
    const filteredRecipes = model.recipes.filter(recipe => {
        const titleMatch = recipe.title.toLowerCase().includes(searchTerm);
        const tagsMatch = recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || tagsMatch;
    });

    // Generer HTML for de filtrerte oppskriftene
    if (filteredRecipes.length === 0) {
         recipeHtml = '<p>Ingen oppskrifter funnet.</p>'; // Melding ved ingen treff
    } else {
        for(const recipe of filteredRecipes) {
            recipeHtml += recipeComponent(recipe); // Antar at recipeComponent finnes
        }
    }

    // Returner den genererte HTML-strengen, pakket inn i en container
    return /*HTML*/`
        <div class="content recipe-list">
            ${recipeHtml}
        </div>
    `;
}