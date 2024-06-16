export const translateDifficulty = (value: string): string => {
    switch (value) {
        case 'EASY':
            return 'Легко';
        case 'MEDIUM':
            return 'Средне';
        case 'HARD':
            return 'Сложно';
        default:
            return value;
    }
};

export const translateMeal = (value: string): string => {
    switch (value) {
        case 'BREAKFAST':
            return 'Завтрак';
        case 'LUNCH':
            return 'Обед';
        case 'DINNER':
            return 'Ужин';
        case 'SNACK':
            return 'Снэк';
        default:
            return value;
    }
};

export const translateMeasure = (value: string): string => {
    switch (value) {
        case 'PIECE':
            return 'шт';
        case 'GRAM':
            return 'г';
        case 'KILOGRAM':
            return 'кг';
        case 'LITER':
            return 'л';
        case 'MILLILITER':
            return 'мл';
        case 'TEASPOON':
            return 'ч.л.';
        case 'TABLESPOON':
            return 'ст.л.';
        case 'CUP':
            return 'ст.';
        case 'PINCH':
            return 'щеп.';
        default:
            return value;
    }
};
