import {getCategories, getIngredients, getRecipe} from '@/actions/actions';
import {RecipeForm} from './form';

interface Props {
    params: {
        id: string;
    };
}
export default async function RecipePage({params}: Props) {
    const recipe = await getRecipe(params.id);
    const ingredients = await getIngredients();
    const categories = await getCategories();

    return recipe ? (
        <RecipeForm recipeData={recipe} ingredients={ingredients} categories={categories} />
    ) : (
        'Такого рецепта нет'
    );
}
