import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Switch from '@mui/material/Switch';
// import MYhello from './MYhello';
import Grow from '@mui/material/Grow';

import Container from '@mui/material/Container';
export default function AccordionExpandIcon() {
   const [checked, setChecked] = React.useState(false);
  const id = React.useId();
  return (
    <Container maxWidth="sm">
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
               <Switch  value={checked} onChange={(event) => setChecked(event.target.checked)} defaultChecked/>
            
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
    

     <Grow in={checked}>  <div style={{backgroundColor:'orange' , textAlign:'center'}}>
 <h1>hello brahim</h1>
    </div></Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
    
 
</Container>
  );
}

 