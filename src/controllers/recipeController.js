function addRecipe(event) {
    // Forhindre standard innsending av skjemaet som laster siden på nytt
    event.preventDefault();

    // Hent verdier fra skjemaet
    const titleInput = document.getElementById('title');
    const tagsInput = document.getElementById('tags');
    const ingredientsInput = document.getElementById('ingredients');
    const instructionsInput = document.getElementById('instructions');

    // Lag et nytt oppskriftsobjekt
    const newRecipe = {
        id: model.recipes.length > 0 ? Math.max(...model.recipes.map(r => r.id)) + 1 : 1, // Enkel ID-generering
        title: titleInput.value,
        tags: tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag), // Del og rens tags
        ingredients: ingredientsInput.value.split('\n').map(ing => ing.trim()).filter(ing => ing), // Del og rens ingredienser
        instructions: instructionsInput.value.split('\n').map(step => step.trim()).filter(step => step) // Del og rens instruksjoner
    };

    // Legg til den nye oppskriften i modellen
    model.recipes.push(newRecipe);

    // Lagre den oppdaterte listen til localStorage
    saveRecipesToStorage(model.recipes); // Kall lagringsfunksjonen

    // Tøm skjemaet
    titleInput.value = '';
    tagsInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';

    // Bytt tilbake til oppskriftsvisningen og oppdater viewet
    setActiveTab(model.app.tabs.recipes);
    // updateView() kalles allerede av setActiveTab
}