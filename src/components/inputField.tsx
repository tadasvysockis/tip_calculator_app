import { FormControl, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material';
import React, {FC} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { SxProps, Theme } from '@mui/system';

interface IInputFieldProps{
    label: string;
    value: any;
    onChange:(value: any) => void;
    fieldSymbol ?: string;
    errorMessage ?: string | undefined;
    
}

const labelTextStyle:SxProps<Theme>={
    margin:0, 
    fontSize: '1rem', 
    fontWeight: 700, 
    color:'primary.dark' 
}

export const InputField:FC<IInputFieldProps> = ({label, fieldSymbol, value, onChange, errorMessage}) =>{
    const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        onChange(event.target.value);
    }
    return (
        <FormControl variant="outlined" sx={{width:'100%'}}>
            <FormHelperText sx={labelTextStyle} >
                <span style={{display:'inline',float:"left"}}>{label}</span>
                <span style={{display:'inline', color:'red', float:"right"}}>{errorMessage}</span>
            </FormHelperText>
            <OutlinedInput
                startAdornment={
                    <InputAdornment position="start">
                        {fieldSymbol ?? <PersonIcon />}
                    </InputAdornment>}
                value={value}
                error={errorMessage ? true : undefined}
                onChange={handleValueChange}
            />               
        </FormControl>
    );
}
