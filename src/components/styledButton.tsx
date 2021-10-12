import { Button, ButtonProps } from '@mui/material';
import styled from '@mui/styled-engine';

interface StyledButtonProps extends ButtonProps{
    selected ?: boolean; 
};

export const StyledButton = styled(Button,{
    shouldForwardProp: (prop) => prop !== 'selected',
})<StyledButtonProps>(({selected, theme}) =>({
    ...(selected &&{
        backgroundColor: '#26c0ab'
    }),
    
}));