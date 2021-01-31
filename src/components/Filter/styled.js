import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
        paddingBottom: '0.5rem',
    }
}));

export const TabContainer = styled.div`
display: flex;
  `

export const TabBox = styled(Box)`
width: 90%;
`