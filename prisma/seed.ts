const {PrismaClient} = require('@prisma/client');
// const ingredientsData = require('./ingredients.json');
// const recipesData = require('./recipes.json');
const categoriesData = require('./categories.json');
const prisma = new PrismaClient();
const ingredientsData = [
    {
        title: 'Картошка',
        measure: 'PIECE',
        calories: 50,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Морковка',
        measure: 'PIECE',
        calories: 50,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Яйцо',
        measure: 'PIECE',
        calories: 50,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Соль',
        measure: 'PINCH',
        calories: 1,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Мука',
        measure: 'TABLESPOON',
        calories: 100,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Подсолнечное масло',
        measure: 'TABLESPOON',
        calories: 100,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Кислое молоко',
        measure: 'LITER',
        calories: 60,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Кешью',
        measure: 'GRAM',
        calories: 300,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Макароны',
        measure: 'GRAM',
        calories: 150,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Кальмар',
        measure: 'GRAM',
        calories: 30,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Салат',
        measure: 'GRAM',
        calories: 10,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
    {
        title: 'Майонез',
        measure: 'GRAM',
        calories: 150,
        fat: 10,
        carbohydrates: 10,
        protein: 20,
    },
];

const recipesData = [
    {
        title: 'Омлет',
        portion: 2,
        meal: ['BREAKFAST'],
        cookingTime: 10,
        difficulty: 'EASY',
    },
    {
        title: 'Драники',
        portion: 2,
        meal: ['BREAKFAST'],
        cookingTime: 25,
        difficulty: 'EASY',
    },
    {
        title: 'Яичница',
        portion: 2,
        meal: ['BREAKFAST'],
        cookingTime: 10,
        difficulty: 'EASY',
    },
    {
        title: 'Лапша',
        portion: 2,
        meal: ['LUNCH'],
        cookingTime: 8,
        difficulty: 'EASY',
    },
    {
        title: 'Блины',
        portion: 2,
        meal: ['BREAKFAST', 'DINNER'],
        cookingTime: 40,
        difficulty: 'EASY',
    },
    {
        title: 'Сырные сырники',
        portion: 2,
        meal: ['BREAKFAST', 'DINNER'],
        cookingTime: 20,
        difficulty: 'EASY',
    },
    {
        title: 'Хинкали',
        portion: 2,
        meal: ['DINNER'],
        cookingTime: 10,
        difficulty: 'EASY',
    },
    {
        title: 'Кешью',
        portion: 2,
        meal: ['SNACK'],
        cookingTime: 0,
        difficulty: 'EASY',
    },
];

const ingredientInRecipesData = [
    {
        ingredientId: 1,
        recipeId: 1,
        amount: 10,
    },
    {
        ingredientId: 2,
        recipeId: 1,
        amount: 9,
    },
    {
        ingredientId: 3,
        recipeId: 1,
        amount: 8,
    },
    {
        ingredientId: 2,
        recipeId: 2,
        amount: 5,
    },
    {
        ingredientId: 3,
        recipeId: 3,
        amount: 15,
    },
    {
        ingredientId: 4,
        recipeId: 3,
        amount: 15,
    },
    {
        ingredientId: 6,
        recipeId: 3,
        amount: 16,
    },
    {
        ingredientId: 4,
        recipeId: 5,
        amount: 20,
    },
    {
        ingredientId: 8,
        recipeId: 8,
        amount: 100,
    },
];

const categoriesInRecipesData = [
    {
        categoryId: 1,
        recipeId: 1,
    },
    {
        categoryId: 2,
        recipeId: 1,
    },
    {
        categoryId: 2,
        recipeId: 2,
    },
    {
        categoryId: 3,
        recipeId: 3,
    },
    {
        categoryId: 6,
        recipeId: 3,
    },
    {
        categoryId: 4,
        recipeId: 5,
    },
];

async function main() {
    await prisma.ingredients.createMany({
        data: ingredientsData,
    });
    await prisma.recipes.createMany({
        data: recipesData,
    });
    await prisma.ingredientInRecipes.createMany({
        data: ingredientInRecipesData,
    });
    await prisma.categories.createMany({
        data: categoriesData,
    });
    await prisma.categoriesInRecipes.createMany({
        data: categoriesInRecipesData,
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
