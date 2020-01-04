import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  // const classes = useStyles();

  return (
    <Card >
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Instructions:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <div>You can send events to chat by changing form fields below.             </div>
            <div>You can type in chat window something like <code>email:chapkovski@gmail.com</code>           or <code>comment:hello!</code> to set form fields. </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}