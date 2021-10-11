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
      <Grid sx={gridContainer} container> 
        <Grid item container spacing={3} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h3">
              SPLI<br />TTER
            </Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center" justifyContent="center">
            <TipCalculator />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider> 
  );
};