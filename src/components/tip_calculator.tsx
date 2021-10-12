import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';

import { Calculator } from './calculator';
import { Result } from './result';
import { SxProps, Theme } from '@mui/system';

const mainGridContainer: SxProps<Theme> = {
    width: "40em", 
    height:'30rem', 
    backgroundColor: 'common.white',
    borderRadius: '25px'
};

export const TipCalculator:FC<{}> = () => {    
    const [tips, setTips] = useState(0);
    const [bill, setBill] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [customTips, setCustomTips] = useState<string>("");

    const handleReset = () =>{
        setTips(0);
        setBill(0);
        setNumberOfPeople(1);
        setCustomTips("");
    };

    const getAmount = (bill:number, tips: number, numberOfPeople: number) =>{
        let amount: string= "0.0";
        if(numberOfPeople !== 0){
            let result = (bill * (tips/100))/numberOfPeople;
            amount = result.toFixed(2);
        }
        return amount;
    };

    const getTotal = (bill:number, tips: number, numberOfPeople: number) =>{
        let total: string= "0.0";
        if(numberOfPeople !== 0){
            let result = (bill * (1+(tips/100)))/numberOfPeople;
            total = result.toFixed(2);
        }
        return total;
    };

    let amount = getAmount(bill, tips, numberOfPeople);
    let total = getTotal(bill, tips, numberOfPeople);
    return(
        <Grid container sx={mainGridContainer}> 
            <Grid container sx={{margin:'1.5rem' }} columnGap={7} >
                <Grid item sx={{width:'50%'}}>
                    <Calculator 
                        setTips={setTips} 
                        tips={tips}
                        bill={bill} 
                        setBill={setBill} 
                        numberOfPeople={numberOfPeople} 
                        setNumberOfPeople={setNumberOfPeople}  
                        customTips={customTips}
                        setCustomTips={setCustomTips}
                    />
                </Grid>
                <Grid item sx={{width:'43%', backgroundColor: 'secondary.main', borderRadius: '20px'}}>
                    <Result amount={amount} total={total} handleReset={handleReset} />
                </Grid>
            </Grid>
        </Grid>
    )
}
