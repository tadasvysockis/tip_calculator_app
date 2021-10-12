import React, {FC, useState} from 'react';
import { Grid, useMediaQuery } from '@mui/material';

import { Calculator } from './calculator';
import { Result } from './result';
import { SxProps, Theme } from '@mui/system';

const mainGridLargeContainer: SxProps<Theme> = {
    width: "40em", 
    height:'30rem', 
    backgroundColor: 'common.white',
    borderRadius: '25px',
};
const mainGridSmallContainer: SxProps<Theme> = {
    width: "100%", 
    height:'90%', 
    backgroundColor: 'common.white',
    borderRadius: '25px 25px 0 0',
};


export const TipCalculator:FC<{}> = () => {    
    const [tips, setTips] = useState(0);
    const [bill, setBill] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [customTips, setCustomTips] = useState<string>("");
    
    const matches = useMediaQuery('(min-width:970px)');
    
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
        <Grid container sx={matches ? mainGridLargeContainer : mainGridSmallContainer}> 
            <Grid container sx={{margin:'1.5rem' }} rowGap={matches ? undefined : 5} columnGap={matches ? 7 : undefined} >
                <Grid item sx={matches ? {width:'50%'} : {width: '100%'}}>
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
                <Grid item sx={matches ? { width:'43%', backgroundColor: 'secondary.main', borderRadius: '20px'} : { width:'100%', backgroundColor: 'secondary.main', borderRadius: '20px'}}>
                    <Result amount={amount} total={total} handleReset={handleReset} />
                </Grid>
            </Grid>
        </Grid>
    )
}
