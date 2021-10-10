import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";



const strongCyan = "#26c0ab";
const darkCyan = "#5e7a7d";
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
        h1:{
            fontFamily: "Space Mono",
            fontSize: "1.5rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: darkCyan
            
        },
        h2:{
            fontFamily: "Space Mono",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: darkCyan
        },
        h3:{
            fontFamily: "Space Mono",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: darkCyan
        },
    },
    status: {
      danger: orange[500],
    },
  });


export default theme;