export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Instruction {
  instruction: string;
  photo: string;
}

export class Recipe {
  static stcID: number;
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public feedsThisMany: number, // ppl
    public prepTime: number, // minutes
    public ingredients: Ingredient[],
    public instructions: Instruction[],
    public coverPhoto: string,
    public keyword: string[]
  ) {
    Recipe.stcID = this.id;
  }

  public static recipeFromJSON(obj: any): Recipe {
    return new Recipe(
      obj.id,
      obj.title,
      obj.description,
      obj.feeds_this_many,
      obj.preparation_time,
      obj.ingredients,
      obj.instructions,
      obj.cover_photo,
      obj.keywords
    );
  }

  static createBlank(id: number): Recipe {
    return new Recipe(id, '', '', 1, 1, [], [], '', []);
  }
}
