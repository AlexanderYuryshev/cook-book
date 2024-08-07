'use client';
import React, {useMemo, useTransition} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useRouter} from 'next/navigation';
import block from 'bem-cn-lite';
import {Flex, Select, TextInput} from '@/lib/gravity';
import {getEntitySelectOptions} from '@/app/utils';
import {
    type CategoriesData,
    type IngredientsData,
    type RecipeFormData,
    type RecipeNotNullData,
    difficultyOptions,
    mealOptions,
} from '../../models';
import {convertToRecipeFormData, submitRecipeForm} from './utils';
import './recipe.scss';

interface Props {
    recipeData: RecipeNotNullData;
    ingredients?: IngredientsData;
    categories?: CategoriesData;
}

const b = block('recipe');

export const RecipeForm = ({recipeData, categories, ingredients}: Props) => {
    const router = useRouter();
    const {control, handleSubmit, watch, getValues} = useForm<RecipeFormData>({
        defaultValues: convertToRecipeFormData(recipeData),
    });
    const [isPending, startTransition] = useTransition();
    const watchIngredients = watch('ingredients');
    const categoriesOptions = getEntitySelectOptions(categories, 'title', 'categoryId');
    const ingredientsOptions = getEntitySelectOptions(ingredients, 'title', 'ingredientId');
    const ingredientsField = useMemo(
        () =>
            ingredients
                ?.filter((ingr) => getValues().ingredients?.includes(String(ingr.ingredientId)))
                .map((ingr) => (
                    <Flex direction="row" key={ingr.ingredientId}>
                        <TextInput value={ingr.title}></TextInput>
                        {/* <TextInput type="number" value={String(ingr.amount)}></TextInput> */}
                    </Flex>
                )),
        [watchIngredients],
    );

    const onSubmit = handleSubmit((data: RecipeFormData) => {
        startTransition(() => {
            submitRecipeForm(data);
        });
        router.push('/recipes');
    });

    return (
        <form onSubmit={onSubmit}>
            <div className={b()}>
                <Controller
                    name="title"
                    control={control}
                    render={({field}) => <TextInput label="Название" type="text" {...field} />}
                />
                <Controller
                    name="cookingTime"
                    control={control}
                    render={({field}) => (
                        <TextInput label="Время приготовления" type="number" {...field} />
                    )}
                />
                <Controller
                    name="portion"
                    control={control}
                    render={({field}) => (
                        <TextInput label="Количество порций" type="number" {...field} />
                    )}
                />
                <Controller
                    name="meal"
                    control={control}
                    render={({field}) => (
                        <Select
                            label="Прием пищи"
                            options={mealOptions}
                            multiple
                            onUpdate={field.onChange}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="difficulty"
                    control={control}
                    render={({field}) => (
                        <Select
                            label="Сложность"
                            options={difficultyOptions}
                            {...field}
                            value={[
                                // Нестрогое сравнение, так как строгое не дает равенства строки и перечисления
                                difficultyOptions.find((dif) => dif.value == field.value)
                                    ?.content ?? '',
                            ]}
                            onUpdate={field.onChange}
                        />
                    )}
                />
                <Controller
                    name="categories"
                    control={control}
                    render={({field}) => (
                        <Select
                            label="Категории"
                            options={categoriesOptions}
                            onUpdate={field.onChange}
                            multiple
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="ingredients"
                    control={control}
                    render={({field}) => (
                        <Select
                            label="Ингредиенты"
                            options={ingredientsOptions}
                            onUpdate={field.onChange}
                            multiple
                            {...field}
                        />
                    )}
                />
                <div></div>
                <div style={{flexDirection: 'column'}}>{ingredientsField}</div>
            </div>
            <button type="submit" disabled={isPending}>
                Сохранить
            </button>
        </form>
    );
};
