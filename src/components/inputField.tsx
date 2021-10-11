import { FormControl, FormHelperText, InputAdornment, InputBaseComponentProps, OutlinedInput } from '@mui/material';
import React, {FC} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { SxProps, Theme } from '@mui/system';

interface IInputFieldProps{
    label: string;
    value: any;
    onChange:(value: any) => void;
    fieldSymbol ?: string;
    defaultValue ?: string;
    errorMessage ?: string | undefined;
    
}

const inputProps: InputBaseComponentProps  = {
    'aria-label': 'bill',
    style: { textAlign: "right" },

}

const labelTextStyle:SxProps<Theme>={
    margin:0, 
    fontSize: '1rem', 
    fontWeight: 700, 
    color:'primary.dark' 
}
const inputStyle:SxProps<Theme>={
    backgroundColor: 'common.lightGrayish2', 
    borderRadius:'10px', 
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: 'common.lightGrayish2'
    } 
}

export const InputField:FC<IInputFieldProps> = ({label, fieldSymbol, value, onChange, defaultValue, errorMessage}) =>{
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
                sx={inputStyle}
                inputProps={inputProps}
                value={value}
                error={errorMessage ? true : undefined}
                onChange={handleValueChange}
            />               
        </FormControl>
    );
}
