import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'flex',
      justifyContent: 'space-around',
      flexGrow: 1,
    },
  }));
  