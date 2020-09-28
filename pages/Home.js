import React, { useState } from "react";
// react component for creating beautiful carousel
import CarouselSlide from './CarouselSlide';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
import TableChartIcon from '@material-ui/icons/TableChart';
import mediacard from './mediacard'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ViewListIcon from '@material-ui/icons/ViewList';
import Dashboard from "./Dashboard";

 const SLIDE_INFO = [
  { backgroundColor: '#ff7c7c', title: 'Slide 1' },
  { backgroundColor: '#ffb6b9', title: 'Slide 2' },
  { backgroundColor: '#8deaff', title: 'Slide 3' },
  { backgroundColor: '#ffe084', title: 'Slide 4' },
  { backgroundColor: '#d9d9d9', title: 'Slide 5' },
];

export default function Home() {

  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');



  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };
  const useStyles = makeStyles((theme) => ({
    carouselset: {
      textalign: 'center',
      // padding: '100px',
      display: 'ruby',
      justifycontent: 'center',
      alignitems: 'center',
    },
    root: {
      flexGrow: 1,
      paddingTop: '5vh'

    },
    paper: {
      // padding: theme.spacing(2),
      // height: '100px',
      boxShadow: 'none',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
    tittle: {
      paddingTop: 0
    },
    listicon: {
      // border: '1px solid grey',
      boxshadow: '1px 2px 2px grey',
    },
    
  }));
  const classes = useStyles();
  return (
    <div >
      <div class={classes.carouselset} >
        <Arrow
          direction='left'
          clickFunction={() => onArrowClick('left')}
        />
        <Slide in={slideIn} direction={slideDirection}>
          <div>
            <CarouselSlide content={content} />
          </div>
        </Slide>
        <Arrow
          direction='right'
          clickFunction={() => onArrowClick('right')}
        />

      </div>
      <div className={classes.root}>
        <Grid container spacing={3}
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={2} >
            {/* <Paper className={classes.paper}>
              <TableChartIcon style={{ fontSize: '4vw'}}/>
            </Paper> */}

            <Card className={classes.paper}  //onClick={handleNext}
            >
              <CardActionArea>
                <ViewListIcon className={classes.listicon} style={{ fontSize: 78 }} />
                <CardContent className={classes.tittle}>
                  <Typography className={classes.tittle} component="h2">
                    Lizard
          </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>

        </Grid>

      </div>
    </div>
  );
}


function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

  return <div onClick={clickFunction}>{icon}</div>;
}
export function FormikStepper() {

}