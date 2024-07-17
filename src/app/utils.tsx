import {Flex, Label, Link} from '@/lib/gravity';
import {translateDifficulty, translateMeal} from '@/lib/translation';
import type {CategoriesData, IngredientsData, RecipesData} from './models';

export const convertRecipesDataToTableData = (data: RecipesData) =>
    data.map((item) => ({
        ...item,
        title: <Link href={`recipes/${item.recipeId}`}>{item.title}</Link>,
        difficulty: translateDifficulty(item.difficulty),
        meal: (
            <Flex gap={2}>
                {item.meal?.map((meal) => (
                    <Label size="xs" interactive theme="success" key={meal}>
                        {translateMeal(meal)}
                    </Label>
                ))}
            </Flex>
        ),
        category: (
            <Flex gap={2}>
                {item.categories?.map((cat) => (
                    <Label size="xs" interactive theme="info" key={cat.category.categoryId}>
                        {cat.category.title}
                    </Label>
                ))}
            </Flex>
        ),
        ingredients: (
            <Flex gap={2}>
                {item.ingredients?.map((ingr) => (
                    <Label size="xs" interactive theme="warning" key={ingr.ingredientId}>
                        {ingr.ingredient.title}
                    </Label>
                ))}
            </Flex>
        ),
    }));

export const getCategoriesOptions = (data?: CategoriesData) =>
    data?.map((item) => ({value: String(item.categoryId), content: item.title}));

export const getIngredientsOptions = (data?: IngredientsData) =>
    data?.map((item) => ({value: String(item.ingredientId), content: item.title}));
