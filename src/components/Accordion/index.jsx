import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Toggle from '../toggle'
import { Paper } from "@material-ui/core";
import '../../style/components/accordion.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightLight
  }
}));

export default ({title,toggle}) => {
  const classes = useStyles();
 
  
  
  return (
    <div className={classes.root} style={{direction:"rtl"}}>
       {toggle===false ?
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            sssssssssssssssssssssssssss
              sssssssssssssssssssssssss
            </Typography>
          </AccordionDetails>
        </Accordion>

        :
        <Paper className="paperContainer">
           <div className="paperBox">
            <Typography className={classes.heading}>{title}</Typography>
            <Toggle/>
           </div>
        </Paper>
        
          
       }
    </div>
  );
}
