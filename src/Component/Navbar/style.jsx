import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    AppBar: {
        boxShadow: '0 4px 2px -2px #e0e0e0',
        backgroundColor: 'white',
       
    },

    Title: {
        
        color: 'black',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')] : {
            display: 'none'
        }
    },

   

    username: {
        color: 'black',
        marginLeft: theme.spacing(2)

    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')] : {
            margin: 'auto'
        }


    },

    navItem: {
        display: 'flex',
        alignItems: 'center'
        
    },

    Logout: {
      marginLeft: theme.spacing(3)
    }

}))

export default useStyles