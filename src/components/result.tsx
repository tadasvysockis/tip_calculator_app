import React, { FC } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { InputField } from './inputField';

export const Result:FC<{}> = () =>{
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
                        <Typography variant="h6" sx={{color:'primary.main'}}>
                            $4.27
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
                        <Typography variant="h6" sx={{color:'primary.main'}}>
                            $32.79
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sx={{marginTop:'4rem'}}>
                    <Grid xs={12} item sx={{height:'3rem'}}>
                        <Button variant="contained" sx={{width:'100%', height:'100%'}}>
                            <Typography variant="body2">RESET</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}