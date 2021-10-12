import { Grid, TextField, Typography } from '@mui/material';
import React, {FC} from 'react';
import {StyledButton} from './styledButton';

interface ITipGroupProps{
    setTips:(value:number)=>void;
    tips: number;
    setCustomTips:(value:string) => void;
    customTips:string;
}

export const TipGroup:FC<ITipGroupProps> = ({setTips, tips, setCustomTips, customTips})=>{
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        var value = parseInt(button.name);
        setCustomTips("");
        setTips(value);
    };

    const handleCustomTips = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const fieldValue = event.currentTarget.value;
        const value = parseFloat(fieldValue);
        setCustomTips(fieldValue);
        if(value){
            setTips(value);
        }
    };
    const buttons =[
        {name: "5", label:'5%'},
        {name: "10", label:'10%'},
        {name: "15", label:'15%'},
        {name: "25", label:'25%'},
        {name: "50", label:'50%'}
    ];
    return(
        <Grid container rowSpacing={3} columnSpacing={{ xs: 3 }}>
            {buttons.map((button) =>(
                <Grid item xs={4} key={button.label}>
                    <StyledButton 
                        onClick={handleButtonClick} 
                        variant="contained" 
                        name={button.name} 
                        selected={!customTips && tips === parseInt(button.name) ? true : false}
                    >
                        <Typography variant="h2">{button.label}</Typography>
                    </StyledButton>
                </Grid>
            ))}
            <Grid item xs={4}> 
                <TextField 
                    size="small" 
                    label="Custom" 
                    onChange={handleCustomTips}
                    value={customTips}
                />               
            </Grid>
        </Grid>
    );
}