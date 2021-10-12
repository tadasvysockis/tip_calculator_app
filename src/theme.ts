import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const strongCyan = "#26c0ab";
const darkCyan = "#00494d";
const darkGrayish1 = "#5e7a7d";
const darkGrayish2 = "#7f9c9f";
const lightGrayish1 = "#c5e4e7";
const lightGrayish2 = "#f4fafa";
const white = "#ffffff";

const theme = createTheme({
    palette:{
        primary:{
            main: strongCyan,
            
        },
        secondary:{
            main: darkCyan,
        },
        common:{
            darkGrayish1,
            darkGrayish2,
            lightGrayish1,
            lightGrayish2,
            white
        }
    },
    typography:{
        fontFamily: "Space Mono",
        body1:{
            margin: 0,
            fontWeight: 400,
            fontSize: '1.5rem',           
        },
        body2:{
            margin: 0, 
            fontWeight: 500,
            fontSize: '1.5rem',
        },
        h1:{
            margin: 0, 
            fontWeight: 500,
            fontSize: '1rem'

        },
        h2:{
            margin: 0, 
            fontWeight: 500,
            fontSize: '1.5rem',
            color: white
        },
        h3:{
            margin: 0,
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.5,
            letterSpacing: "0.5em",
        },
        h4:{
            margin: 0, 
            fontWeight: 700,
            fontSize: '1rem'
        },
        h5:{
            margin: 0, 
            fontWeight: 500,
            fontSize: '1.25rem',
            color: white
        },
        h6:{
            margin: 0, 
            fontWeight: 700,
            fontSize: '2.5rem',
        }
        
    },
    status: {
      danger: orange[500],
    },
    components:{
        MuiCssBaseline: {
            styleOverrides:`
                body {
                    margin: 0;
                }
            `,
        },
        MuiOutlinedInput:{
            styleOverrides:{              
                input:{
                    textAlign: "right"
                }  
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    width:'100%', 
                    height:'51.5px', 
                    backgroundColor: darkCyan
                },
                   
            }
        }
    }
  });


export default theme;