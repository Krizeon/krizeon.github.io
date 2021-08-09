import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

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
    width: 750,
    height: 1500,
  },
}));

const itemData = [
  {
    img: portrait_albert,
    title: 'Portrait of Alberto',
    author: 'Kevin Hernandez',
    cols: 3,
    rows: 4
  },
  {
    img: portrait_angel,
    title: 'Portrait of Angel',
    author: 'Kevin Hernandez',
    cols: 3,
    rows: 4
  },
  {
    img: green_painting,
    title: 'Green Abstract',
    author: 'Kevin Hernandez',
    cols: 2,
    rows: 4,
  },
  {
    img: oil_window,
    title: 'Sky Above The Horizon',
    author: 'Kevin Hernandez',
    cols: 2,
    rows: 4
  },
  {
    img: splatter_painting,
    title: 'Landscape Splatter',
    author: 'Kevin Hernandez',
    cols: 4,
    rows: 3
  },
  {
    img: oil_landscape,
    title: 'Lost',
    author: 'Kevin Hernandez',
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
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const ImageCollection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={300} cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}  rows={item.rows || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default ImageCollection;
