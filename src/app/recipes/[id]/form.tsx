'use client';
import React, {useCallback, useMemo, useState} from 'react';
import {Select, TextInput} from '@/lib/gravity';
import {
    type CategoriesData,
    type IngredientsData,
    type RecipeData,
    difficultyOptions,
    mealOptions,
} from '../../models';
import {getCategoriesOptions, getIngredientsOptions} from '@/app/utils';

type RecipeNotNullData = Exclude<RecipeData, null>;

type RecipePrimitiveFields = Omit<RecipeNotNullData, 'categories' | 'ingredients' | 'meal'>;

type RecipeArrayFields = Pick<RecipeNotNullData, 'categories' | 'ingredients' | 'meal'>;

interface Props {
    recipeData: RecipeNotNullData;
    ingredients?: IngredientsData;
    categories?: CategoriesData;
}

export const RecipeForm = ({recipeData, categories, ingredients}: Props) => {
    const [data, setData] = useState<Partial<RecipeNotNullData>>(recipeData);

    const categoriesOptions = useMemo(() => getCategoriesOptions(categories), [categories]);
    const ingredientsOptions = useMemo(() => getIngredientsOptions(ingredients), [ingredients]);

    const handleTextChange = useCallback(
        (fieldName: keyof RecipePrimitiveFields) => (e: React.ChangeEvent<HTMLInputElement>) =>
            setData(
                data
                    ? {...data, [fieldName]: e.currentTarget.value}
                    : {[fieldName]: e.currentTarget.value},
            ),
        [data],
    );

    const handleArrayChange = useCallback(
        (fieldName: keyof RecipeArrayFields) => (value: string[] | undefined) =>
            setData(data ? {...data, [fieldName]: value} : {[fieldName]: value}),
        [data],
    );

    return (
        <>
            <TextInput
                value={data?.title}
                label="Название"
                type="text"
                onChange={handleTextChange('title')}
            />
            <TextInput
                value={String(data?.cookingTime)}
                label="Время приготовления"
                type="number"
                onChange={handleTextChange('cookingTime')}
            />
            <TextInput
                value={String(data?.portion)}
                label="Количество порций"
                type="number"
                onChange={handleTextChange('portion')}
            />
            <Select
                label="Прием пищи"
                value={data.meal ?? undefined}
                options={mealOptions}
                onUpdate={handleArrayChange('meal')}
                multiple
            />
            <Select
                label="Сложность"
                value={data.difficulty ? [data.difficulty] : undefined}
                options={difficultyOptions}
            />
            <Select
                label="Категории"
                value={categoriesOptions
                    ?.filter(
                        (item) =>
                            data.categories
                                ?.map((category) => category.categoryId)
                                .includes(Number(item.value)),
                    )
                    .map((item) => item.value)}
                options={categoriesOptions}
                onUpdate={handleArrayChange('categories')}
                multiple
            />
            <Select
                label="Ингредиенты"
                value={ingredientsOptions
                    ?.filter(
                        (item) =>
                            data.ingredients
                                ?.map((ingredient) => ingredient.ingredientId)
                                .includes(Number(item.value)),
                    )
                    .map((item) => item.value)}
                options={ingredientsOptions}
                onUpdate={handleArrayChange('ingredients')}
                multiple
            />
        </>
    );
};
