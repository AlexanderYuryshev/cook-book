import type {SubmitHandler} from 'react-hook-form';
import type {RecipeFormData, RecipeNotNullData} from './models';
import {saveRecipe} from '@/actions/actions';

export const convertToRecipeFormData = (data: RecipeNotNullData): RecipeFormData => ({
    ...data,
    categories: data.categories.map((category) => String(category.categoryId)),
    ingredients: data.ingredients.map((ingredient) => String(ingredient.ingredientId)),
});

export const submitRecipeForm: SubmitHandler<RecipeFormData> = async (data: RecipeFormData) => {
    console.log(data);
    await saveRecipe(data);
};
