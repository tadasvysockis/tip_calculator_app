import theme from './theme';
import { ThemeProvider } from '@mui/private-theming';

import  MainPage from '../src/components/main_page';
export const TipApp = () =>{
    return(
        <ThemeProvider theme={theme}>
            <MainPage hi="text"  />
        </ThemeProvider>
    );
} 