import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Backdrop from '@material-ui/core/Backdrop';


import green_painting from '../assets/images/green-abstract.jpg'
import splatter_painting from '../assets/images/Hernandez-Kevin-acrylic.jpg'
import oil_landscape from '../assets/images/Hernandez-Kevin-oil.jpg'
import oil_window from '../assets/images/sky-above-the-horizon.jpg'
import portrait_angel from '../assets/images/portrait_angel.jpg'
import portrait_albert from '../assets/images/portrait_albert.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '95vw',
    height: 'auto',
  },
  image:{
    maxHeight: '80vh',
    width: 'auto'
  },
  icon: {
   color: 'rgba(255, 255, 255, 0.54)',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  popoverImg: {
    width: 'auto',
    maxWidth: '80vw',
    height: 'auto',
    maxHeight: '90vh'
  }
}));

const itemData = [
  {
    img: portrait_albert,
    title: 'Portrait of Alberto',
    year: '2019',
    cols: 3,
    rows: 4
  },
  {
    img: portrait_angel,
    title: 'Portrait of Angel',
    year: '2019',
    cols: 3,
    rows: 4
  },
  {
    img: green_painting,
    title: 'Green Abstract',
    year: '2018',
    cols: 2,
    rows: 4,
  },
  {
    img: oil_window,
    title: 'Sky Above The Horizon',
    year: '2018',
    cols: 2,
    rows: 4
  },
  {
    img: splatter_painting,
    title: 'Landscape Splatter',
    year: '2018',
    cols: 4,
    rows: 3
  },
  {
    img: oil_landscape,
    title: 'Lost',
    year: '2018',
    cols: 4,
    rows: 3
  }
];

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     year: 'year',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const ImageCollection = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(500);
  const [image, setImage] = React.useState(0);

  const handleClose = () => {
      setOpen(false);
      setWidth(500);
    };
    const handleToggle = (image) => {
      setOpen(!open);
      setWidth(500);
      setImage(image);
      console.log(image);
    };

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} rowHeight={300} cols={4}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        </ImageListItem>
          {itemData.map((item, index) => (
            item.key = index,
            <ImageListItem className={classes.image} key={item.img} cols={item.cols || 1}  rows={item.rows || 1}>
              <img src={item.img} alt={item.title} onClick={() => handleToggle(index)}/>
              <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.year}</span>}
              actionIcon={
                <IconButton onClick={() => handleToggle(index)} aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
              />
            </ImageListItem>

          ))}
      </ImageList>
      {open ?
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          {itemData.map((item) => (
            item.key === image ?
            <img src={item.img} className={classes.popoverImg}></img>
              : <div/>
          ))}
        </Backdrop> :
        <div/>
      }

    </div>
  );
}

export default ImageCollection;
