import {getIngredients} from '@/actions/actions';
import {Table} from '@/lib/gravity';
import {translateMeasure} from '@/lib/translation';

const ingredientsTableConfig = [
    {id: 'title', name: 'Название'},
    {id: 'measure', name: 'Мера'},
];

const convertIngredientsData = (data: Awaited<ReturnType<typeof getIngredients>>) =>
    data.map((item) => ({
        ...item,
        measure: translateMeasure(item.measure),
    }));

export default async function IngredientsPage() {
    const data = convertIngredientsData(await getIngredients());

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Table columns={ingredientsTableConfig} data={data} />
        </div>
    );
}
