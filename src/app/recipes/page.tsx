import {getRecipes} from '@/actions/actions';
import {Flex, Label, Table} from '@/lib/gravity';
import Link from 'next/link';

const recipesTableConfig = [
    {id: 'title', name: 'Название'},
    {id: 'difficulty', name: 'Сложность'},
    {id: 'meal', name: 'Прием пищи'},
    {id: 'category', name: 'Категории'},
    {id: 'ingredients', name: 'Ингредиенты'},
];

export default async function RecipesPage() {
    const data = (await getRecipes()).map((item) => ({
        ...item,
        meal: (
            <Flex gap={2}>
                {item.meal.map((meal) => (
                    <Label size="xs" interactive theme="success" key={meal}>
                        {meal}
                    </Label>
                ))}
            </Flex>
        ),
        category: (
            <Flex gap={2}>
                {item.category.map((cat) => (
                    <Label size="xs" interactive theme="info" key={cat}>
                        {cat}
                    </Label>
                ))}
            </Flex>
        ),
        ingredients: (
            <Flex gap={2}>
                {item.ingredients.map((ingr) => (
                    <Link
                        href={`ingredients/${ingr.ingredient.ingredientId}`}
                        key={ingr.ingredientId}
                    >
                        <Label size="xs" interactive theme="warning">
                            {ingr.ingredient.title}
                        </Label>
                    </Link>
                ))}
            </Flex>
        ),
    }));

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Table columns={recipesTableConfig} data={data} />
        </div>
    );
}
