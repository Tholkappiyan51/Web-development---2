import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Context from './Context';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { Input, Radio } from '@mui/material';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

 const Yprofile=()=> {
  const {theme, toggleTheme}=React.useContext(Context)
    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <div>
        <div style={{backgroundColor:theme=== 'light' ? '#fff' : '#333',color:theme=== 'light'?'#333':'#fff'}}>
        <center><h1>Your profile</h1>
        <br></br>
        <br></br>
        <br></br>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            T
            </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Tholkappiyan"
        subheader="last modified on September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg"
        alt="Paella dish"
      />
      <CardContent>
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Your Name
      </AccordionSummary>
      <AccordionDetails>
        Tholkappiyan
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Modify</Button>
      </AccordionActions>
    </Accordion>
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Your MobileNumber
      </AccordionSummary>
      <AccordionDetails>
        7094741364
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Modify</Button>
      </AccordionActions>
    </Accordion>
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Your MailId
      </AccordionSummary>
      <AccordionDetails>
        tholkappiyan51@gmail.com
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Modify</Button>
      </AccordionActions>
    </Accordion>
    </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Your Date Of Birth
        </AccordionSummary>
        <AccordionDetails>
          13/08/05
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Modify</Button>
        </AccordionActions>
      </Accordion>
      <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Your Native
      </AccordionSummary>
      <AccordionDetails>
        Tiruvallur
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Modify</Button>
      </AccordionActions>
    </Accordion>
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Purpose
      </AccordionSummary>
      <AccordionDetails>
        <Radio name='purpose' value='b'/><label>business</label>
        <Radio name='purpose' value='p'/><label>Personal</label>
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Modify</Button>
      </AccordionActions>
    </Accordion>
        </CardContent>
      </Collapse>
    </Card>
    </center>
    </div>
    </div>
    );
  }
  export default Yprofile