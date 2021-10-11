import { Button, Grid, TextField, Typography } from '@mui/material';
import React, {FC} from 'react';


interface ITipGroupProps{
    setTip:(value:string)=>void;
}

export const TipGroup:FC<ITipGroupProps> = ({setTip})=>{
    const markSelected = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        setTip(button.name);
    }
    
    return(
        <Grid container rowSpacing={3} columnSpacing={{ xs: 3 }}>
            <Grid item xs={4}>
              <Button onClick={markSelected} name="5" variant="contained" sx={{width:'100%', backgroundColor: 'secondary.main'}}>
                  <Typography variant="h2">5%</Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={markSelected} name="10" variant="contained"  sx={{width:'100%', backgroundColor: 'secondary.main'}}>
                  <Typography variant="h2">10%</Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={markSelected} name="15" variant="contained"  sx={{width:'100%', backgroundColor: 'secondary.main'}}>
                  <Typography variant="h2">15%</Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={markSelected} name="25" variant="contained"  sx={{width:'100%', backgroundColor: 'secondary.main'}}>
                  <Typography variant="h2">25%</Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={markSelected} name="50" variant="contained"  sx={{width:'100%', backgroundColor: 'secondary.main'}}>
                  <Typography variant="h2">50%</Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth  label="CUSTOM" />
            </Grid>
        </Grid>
    );
}