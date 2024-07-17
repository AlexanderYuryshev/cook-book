import {getRecipes} from '@/actions/actions';
import {Table} from '@/lib/gravity';
import {convertRecipesDataToTableData} from '../utils';

const recipesTableConfig = [
    {id: 'title', name: 'Название'},
    {id: 'difficulty', name: 'Сложность'},
    {id: 'meal', name: 'Прием пищи'},
    {id: 'category', name: 'Категории'},
    {id: 'ingredients', name: 'Ингредиенты'},
    {id: 'portion', name: 'Кол-во порций'},
    {id: 'cookingTime', name: 'Время приготовления'},
];

export default async function RecipesPage() {
    const data = convertRecipesDataToTableData(await getRecipes());

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Table columns={recipesTableConfig} data={data} />
        </div>
    );
}
