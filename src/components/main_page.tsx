import { FC } from 'react';
import { CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';

import theme from '../theme';
import { TipCalculator } from './tip_calculator';
import { SxProps, Theme } from '@mui/system';

const gridContainer: SxProps<Theme> = {
  backgroundColor: 'common.lightGrayish1',
  color: "primary.dark",
  minHeight: '100vh'
};

export const MainPage:FC<{}> = () =>{
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid sx={gridContainer} container alignContent="space-evenly"> 
        <Grid item container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h3" sx={{marginBottom:'3rem'}}>
              SPLI<br />TTER
            </Typography>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center">
            <TipCalculator />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider> 
  );
};