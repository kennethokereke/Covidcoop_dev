import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './style'


function Navbar() {
    const classes = useStyles();
    return (
       <AppBar className={classes.AppBar} position="static" elevation={0} >
           <Toolbar className={classes.toolbar}>
               <Typography className={classes.Title} variant="h5" >
                   CovidCoop
               </Typography>
               <div className={classes.navItem}>
               <Avatar/>
               <Typography className={classes.username}  variant="subtitle2" >
                  Kenneth Okereke
               </Typography>
               <Button className={classes.Logout} variant="outlined">
                   Logout
               </Button>
               </div>
              
           </Toolbar>

        
       </AppBar>
    )
}

export default Navbar
