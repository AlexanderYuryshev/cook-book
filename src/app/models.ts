import {getCategories, getIngredients, getRecipe, getRecipes} from '@/actions/actions';

export type RecipeData = Awaited<ReturnType<typeof getRecipe>>;
export type RecipesData = Awaited<ReturnType<typeof getRecipes>>;
export type CategoriesData = Awaited<ReturnType<typeof getCategories>>;
export type IngredientsData = Awaited<ReturnType<typeof getIngredients>>;

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
