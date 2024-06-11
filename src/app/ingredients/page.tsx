import {getIngredients} from '@/actions/actions';
import {Table} from '@/lib/gravity';

const ingredientsTableConfig = [
    {id: 'title', name: 'Название'},
    {id: 'measure', name: 'Мера'},
];

export default async function IngredientsPage() {
    const data = await getIngredients();

    return <Table columns={ingredientsTableConfig} data={data} />;
}
