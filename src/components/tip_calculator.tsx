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
    const [tips, setTips] = useState("");
    const [bill, setBill] = useState(0.0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    return(
        <Grid container sx={mainGridContainer}> 
            <Grid container sx={{margin:'2rem' }} >
                <Grid xs={5} item>
                    <Calculator setTip={setTips} bill={bill} setBill={setBill} numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople}  />
                </Grid>
                <Grid xs={1} item>
                </Grid>
                <Grid xs={6} item sx={{backgroundColor: 'secondary.main', borderRadius: '20px'}}>
                    <Result  />
                </Grid>
            </Grid>
        </Grid>
    )
}
