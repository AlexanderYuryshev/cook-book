'use client';
import React from 'react';
import {Select} from '@/lib/gravity';
import type {SelectOptions, SelectProps} from '@gravity-ui/uikit';

interface Props extends Pick<SelectProps, 'onUpdate' | 'value'> {
    ingredientsOptions?: SelectOptions;
}

export const IngredientSelect = ({ingredientsOptions, ...props}: Props) => {
    return <Select label="Ингредиенты" options={ingredientsOptions} multiple {...props} />;
};
