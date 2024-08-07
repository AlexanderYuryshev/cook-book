import {Flex, Label, Link} from '@/lib/gravity';
import {translateDifficulty, translateMeal} from '@/lib/translation';
import type {RecipesData} from './models';
import type {SelectOptions} from '@gravity-ui/uikit';

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

export const getEntitySelectOptions = <T extends Array<Record<string, unknown>>>(
    data?: T,
    titleField = 'title',
    valueField = 'id',
): SelectOptions =>
    data?.map((item) => ({value: String(item[valueField]), content: item[titleField] as string})) ??
    [];
