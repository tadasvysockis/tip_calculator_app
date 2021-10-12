import React, { FC } from 'react';
import { Button, Grid, Typography } from '@mui/material';

interface IResultProps{
    amount: string;
    total: string;
    handleReset: () => void;
}

export const Result:FC<IResultProps> = ({amount, total, handleReset}) =>{
    return(
        <Grid container alignContent="space-between">
            <Grid container rowGap={5} sx={{margin:'2rem'}} >
                <Grid item container xs={12} alignItems="center" >
                    <Grid xs={6} item>
                        <Typography variant="h5">
                            Tip Amount
                            <Typography variant="h1" sx={{color:'common.lightGrayish1'}}>
                                / person
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography variant="h6" sx={{color:'primary.main', textAlign:'end'}}>
                            {"$"+amount}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid xs={6} item>
                        <Typography variant="h5">
                            Total
                            <Typography variant="h1" sx={{color:'common.lightGrayish1'}}>
                                / person
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography variant="h6" sx={{color:'primary.main', textAlign:'end'}}>
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