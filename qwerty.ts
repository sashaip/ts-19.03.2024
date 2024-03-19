abstract class Recipes {
    constructor(public name: string, public type: string) {}

    abstract showIngredients(): void;
    abstract showRecipe(): void;
}

class Salad extends Recipes {
    constructor(public ingredients: string, public recipeDescription: string) {
        super("Салат", "");
    }

    showIngredients(): void {
        console.log("Ингредиенты для салата: " + this.ingredients);
    }

    showRecipe(): void {
        console.log("Рецепт салата: " + this.recipeDescription);
    }
}

class Pizza extends Recipes {
    constructor(public ingredients: string, public recipeDescription: string) {
        super("Пицца", "");
    }

    showIngredients(): void {
        console.log("Ингредиенты для пиццы: " + this.ingredients);
    }

    showRecipe(): void {
        console.log("Рецепт пиццы: " + this.recipeDescription);
    }
}

class Porridge extends Recipes {
    constructor(public ingredients: string, public recipeDescription: string) {
        super("Каша", "");
    }

    showIngredients(): void {
        console.log("Ингредиенты для каши: " + this.ingredients);
    }

    showRecipe(): void {
        console.log("Рецепт каши: " + this.recipeDescription);
    }
}

const yySalad = new Salad("Листья салата, огурцы, помидоры, соус", "Смешайте все ингредиенты и заправьте соусом.");
const ggPizza = new Pizza("Тесто, помидоры, моцарелла, колбаса", "Накройте тесто начинкой из помидоров,колбасы и сыра, запекайте в духовке.");
const llPorridge = new Porridge("Манка, молоко, сахар", "Сварите манку на молоке и добавьте сахар по вкусу.");

const recipesList: Recipes[] = [yySalad, ggPizza, llPorridge];

recipesList.forEach(recipe => {
    recipe.showIngredients();
    recipe.showRecipe();
});
