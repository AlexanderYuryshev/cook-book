import {getRecipes} from '@/actions/actions';
import {Flex, Label, Table} from '@/lib/gravity';
import {translateDifficulty, translateMeal} from '@/lib/translation';

const recipesTableConfig = [
    {id: 'title', name: 'Название'},
    {id: 'difficulty', name: 'Сложность'},
    {id: 'meal', name: 'Прием пищи'},
    {id: 'category', name: 'Категории'},
    {id: 'ingredients', name: 'Ингредиенты'},
    {id: 'portion', name: 'Кол-во порций'},
    {id: 'cookingTime', name: 'Время приготовления'},
];

const convertRecipesData = (data: Awaited<ReturnType<typeof getRecipes>>) =>
    data.map((item) => ({
        ...item,
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

export default async function RecipesPage() {
    const data = convertRecipesData(await getRecipes());

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Table columns={recipesTableConfig} data={data} />
        </div>
    );
}
