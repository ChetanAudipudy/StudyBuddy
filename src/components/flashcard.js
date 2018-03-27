import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
};

const Flashcard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title= {props.flashcardText}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.flashcardText}
          </Typography>
          <Typography component="p">
           {props.flashcardText}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Continue Studying
          </Button>
          <Button size="small" color="primary">
            Delete Flashcard
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}



export default withStyles(styles)(Flashcard);
