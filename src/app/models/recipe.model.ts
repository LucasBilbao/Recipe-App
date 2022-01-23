export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Instruction {
  instruction: string;
  photo: string;
}

export class Recipe {
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
  ) {}

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

  static createBlank(): Recipe {
    return new Recipe(-1, '', '', 1, 1, [], [], '', []);
  }
}
