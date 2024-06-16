'use server';
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
