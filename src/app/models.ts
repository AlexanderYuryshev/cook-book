import {getCategories, getIngredients, getRecipe, getRecipes} from '@/actions/actions';
import type {SelectOption} from '@gravity-ui/uikit';

export type RecipeData = Awaited<ReturnType<typeof getRecipe>>;
export type RecipesData = Awaited<ReturnType<typeof getRecipes>>;
export type CategoriesData = Awaited<ReturnType<typeof getCategories>>;
export type IngredientsData = Awaited<ReturnType<typeof getIngredients>>;

export type RecipeNotNullData = Exclude<RecipeData, null>;

export type RecipePrimitiveFields = Omit<RecipeNotNullData, 'categories' | 'ingredients' | 'meal'>;

export type IngredientFormValue = SelectOption & {amount: string};

export interface RecipeFormData
    extends Omit<RecipeNotNullData, 'cookingTime' | 'ingredients' | 'categories' | 'portion'> {
    categories?: Array<string>;
    // meal?: SelectOptions;
    ingredients?: Array<string>;
    cookingTime?: string;
    portion?: string;
}

export const mealOptions = [
    {value: 'BREAKFAST', content: 'Завтрак'},
    {value: 'LUNCH', content: 'Обед'},
    {value: 'DINNER', content: 'Ужин'},
    {value: 'SNACK', content: 'Перекус'},
];

export const difficultyOptions = [
    {value: 'EASY', content: 'Легко'},
    {value: 'MEDIUM', content: 'Средне'},
    {value: 'HARD', content: 'Сложно'},
];
