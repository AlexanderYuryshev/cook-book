import prisma from '@/lib/db';

export const getIngredients = async () => {
    const data = await prisma.ingredients.findMany({
        include: {
            recipes: {include: {recipe: true}},
        },
    });
    return data;
};

export const getRecipes = async () => {
    const data = await prisma.recipes.findMany({
        include: {
            ingredients: {include: {ingredient: true}},
            categories: {include: {category: true}},
        },
    });
    return data;
};

export const getRecipe = async (id: string) => {
    const recipe = await prisma.recipes.findUnique({
        where: {recipeId: Number(id)},
        include: {
            ingredients: {include: {ingredient: true}},
            categories: {include: {category: true}},
        },
    });
    return recipe;
};

export const getCategories = async () => {
    const data = await prisma.categories.findMany({
        include: {
            recipes: {include: {recipe: true}},
        },
    });
    return data;
};
