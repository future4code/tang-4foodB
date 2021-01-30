import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        textTransform: "capitalize",
        fontSize: '1rem',        
    },
    tabPanel: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

export const TabContainer = styled.div`
display: flex;
  `