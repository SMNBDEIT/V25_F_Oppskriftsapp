

function addRecipeView() {
    return /*HTML*/ `
        <div id="add-recipe">
            <h2>Legg til ny oppskrift</h2>
            ${addRecipeForm()}
        </div>
    `;
}
function addRecipeForm() {
    return /*HTML*/ `
    <form id="recipe-form">
        <div class="form-group"> 
            <label for="recipeTitle">Tittel</label>
            <input type="text" id="recipeTitle" placeholder="Skriv inn tittel" required/>
        </div>

        <div class="form-group">
            <label for="recipeIngredients">Ingredienser</label>
            <input type="text" id="recipeIngredients" placeholder="Ingredienser, separert med komma" required/>
        </div>

        <div class="form-group">
            <label for="recipeTags">Tags</label>
            <input type="text" id="recipeTags" placeholder="Tags, separert med komma"/>

            <div class="form-group">
                <label for="instructions">Instruksjoner</label>
                <textarea id="instructions" placeholder="Beskriv steg for steg" required></textarea>
            </div>
            
            <button type="submit" onclick="handleSubmit(event)">Legg til oppskrift</button>
        </form>
    `;
}