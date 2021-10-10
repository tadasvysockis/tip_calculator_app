import { FC } from 'react';
import { createStyles, Grid, Theme } from '@mui/material';

import { WithStyles, withStyles } from '@mui/styles';

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
        /*background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;*/
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: palette.common.lightGrayish1,
      color: palette.primary.dark,
      minHeight: '100vh',
    },
    "@global":{
        "body":{
          margin: 0
        }
      }
  });

  // declare props as an extension of the interface we just defined in the 'styles' variable. Any
// other props can appear here. I've put one in as an example of how to use it.
interface Props extends WithStyles<typeof styles> {
    hi: string;
}
const MainPage: FC<Props> = (props) =>{
    console.log(props);
    const { classes } = props;
    return(
        <div className={classes.root}>

        </div>
    );
};

// instrument the component with the CSS styles defined above, and export it.
export default withStyles(styles)(MainPage);