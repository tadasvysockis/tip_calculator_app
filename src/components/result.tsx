import React, { FC } from 'react';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';

import { SxProps, Theme } from '@mui/system';

interface IResultProps{
    amount: string;
    total: string;
    handleReset: () => void;
}

const resultText: SxProps<Theme> = {
    color:'primary.main',
    textAlign:'end'
};

const resultLabel:SxProps<Theme> = {
    color:'common.lightGrayish1'
}

export const Result:FC<IResultProps> = ({amount, total, handleReset}) =>{
    const matches = useMediaQuery('(min-width:445px)');
    let resultStyle = matches ? resultText : {...resultText, fontSize: '2rem'};
    let resultLabelStyle = matches ? resultLabel : {...resultLabel, fontSize: '0.75rem'};
    let resultLargeStyle = matches ? {} : {fontSize: '1rem'};
    return(
        <Grid container alignContent="space-between">
            <Grid container rowGap={5} sx={{margin:'2rem'}} >
                <Grid item container xs={12} alignItems="center" >
                    <Grid xs={6} item>
                        <Typography variant="h5" sx={resultLargeStyle}>
                            Tip Amount
                            <Typography variant="h1" sx={resultLabelStyle}>
                                / person
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography variant="h6" sx={resultStyle}>
                            {"$"+amount}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid xs={6} item>
                        <Typography variant="h5" sx={resultLargeStyle}>
                            Total
                            <Typography variant="h1" sx={resultLabelStyle}>
                                / person
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography variant="h6" sx={resultStyle}>
                            {"$"+total}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sx={{marginTop:'4rem'}}>
                    <Grid xs={12} item sx={{height:'4rem'}}>
                        <Button variant="contained" sx={{ backgroundColor: 'primary.main', width:'100%', height:'100%'}} onClick={handleReset}>
                            <Typography variant="body2">RESET</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}