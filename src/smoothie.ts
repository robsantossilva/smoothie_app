import data from "./data.json";

interface SmoothieAndIngredients {
  smoothie: string;
  ingredients: string[];
}

export default class Smoothie {
  protected data: SmoothieAndIngredients[];
  protected allSmoothiesName: string[];

  constructor() {
    this.allSmoothiesName = [];
    this.data = this.formatData(data);
  }

  public getIngredients(smoothieAndIngredients: string) {
    let ingredients = smoothieAndIngredients.split(",");

    let smoothieType: string = "";
    let ingredientsList: string[] | undefined = [];

    /**
     * Get a ingredient list by smoothie name
     */
    for (let i = 0; i < ingredients.length; i++) {
      ingredientsList = this.getIngredientsBySmoothieName(ingredients[i]);
      if (ingredientsList !== undefined) {
        console.log("2", smoothieAndIngredients, ingredientsList);
        smoothieType = ingredients[i];
        delete ingredients[i];
        break;
      }
    }

    /**
     * Add or remove ingredients from the list
     */
    ingredients.forEach((item) => {
      if (item.startsWith("+")) {
        ingredientsList = ingredientsList?.concat(item.replace("+", ""));
      } else if (item.startsWith("-")) {
        ingredientsList = ingredientsList?.filter(
          (ingredient) => !item.includes(ingredient)
        );
      }
    });

    return ingredientsList?.sort() || [];
  }

  protected getIngredientsBySmoothieName(
    smoothieName: string
  ): string[] | undefined {
    const data: SmoothieAndIngredients[] = this.data;
    const result = data.find((item) => item.smoothie === smoothieName);

    return result?.ingredients;
  }

  protected formatData(data: {}): SmoothieAndIngredients[] {
    let newData = Object.entries<string[]>(data);

    console.log("newData", newData);

    return newData.map<SmoothieAndIngredients>((item) => {
      this.allSmoothiesName.push(item[0]);
      return {
        smoothie: item[0],
        ingredients: item[1],
      };
    });
  }
}
