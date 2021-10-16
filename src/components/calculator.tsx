import React, { FC } from 'react';

import {Grid, Typography } from '@mui/material';
import { TipGroup } from './tipGroup';
import { InputField } from './inputField';

interface ICalculatorPros {
    setTips: (value:number) => void;
    tips: number;
    bill: number;
    setBill: (value: number) => void;
    numberOfPeople: number;
    setNumberOfPeople: (value: number) => void;
    customTips: string;
    setCustomTips: (value: string) => void;
}
export const Calculator: FC<ICalculatorPros> = ({setTips, tips, bill, setBill, numberOfPeople, setNumberOfPeople, customTips, setCustomTips}) =>{
    const errorMessage = numberOfPeople == 0 ? "Can't be zero" : undefined;
    return(
        <Grid container alignContent="space-between" direction="row" sx={{height:'95%'}}>
            <Grid item xs={12}>
                <InputField 
                    key="billValue" 
                    value={bill} 
                    label="Bill" 
                    fieldSymbol="$" 
                    onChange={setBill} 
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{marginBottom:'1rem'}}>Select Tip %</Typography>
                <TipGroup setTips={setTips} tips={tips} setCustomTips={setCustomTips} customTips={customTips} />
            </Grid>
            <Grid item xs={12}>
                <InputField 
                    errorMessage={errorMessage} 
                    value={numberOfPeople} 
                    label="Number of People" 
                    onChange={setNumberOfPeople} 
                />
            </Grid>
        </Grid> 
    );
}