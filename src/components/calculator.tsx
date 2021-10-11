import React, { FC } from 'react';

import {Grid, Typography } from '@mui/material';
import { TipGroup } from './tipGroup';
import { InputField } from './inputField';

interface ICalculatorPros {
    setTip: (value:string) => void;
    bill: number;
    setBill: (value: number) => void;
    numberOfPeople: number;
    setNumberOfPeople: (value: number) => void;
}
export const Calculator: FC<ICalculatorPros> = ({setTip, bill, setBill, numberOfPeople, setNumberOfPeople}) =>{
    const errorMessage = numberOfPeople == 0 ? "Can't be zero" : undefined;
    return(
        <Grid container alignContent="space-between" direction="row" sx={{height:'95%'}}>
            <Grid item xs={12}>
                <InputField value={bill} label="Bill" fieldSymbol="$" onChange={setBill} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{marginBottom:'1rem'}}>Select Tip %</Typography>
                <TipGroup setTip={setTip} />
            </Grid>
            <Grid item xs={12}>
                <InputField errorMessage={errorMessage} defaultValue="1" value={numberOfPeople} label="Number of People" onChange={setNumberOfPeople} />
            </Grid>
        </Grid> 
    );
}