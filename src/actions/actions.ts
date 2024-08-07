'use server';
import type {RecipeFormData} from '@/app/models';
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

export const saveRecipe = async (data: RecipeFormData) => {
    const recipe = data.recipeId
        ? await prisma.recipes.update({
              where: {recipeId: Number(data.recipeId)},
              data: {
                  ...data,
                  cookingTime: Number(data.cookingTime),
                  portion: Number(data.portion),
                  categories: undefined,
                  ingredients: undefined,
              },
          })
        : await prisma.recipes.create({
              data: {
                  ...data,
                  cookingTime: Number(data.cookingTime),
                  portion: Number(data.portion),
                  categories: undefined,
                  ingredients: undefined,
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
