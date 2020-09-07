import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const Post = (props) => {
    const { postId, id, title, body } = props.post;
    const history = useHistory();
    const handleClick = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-xVACM892qAxHYgQD0bvqasyBQSFIo_HS8A&usqp=CAU"
                    />
                    <CardContent>
                        <Typography>{postId}</Typography>
                        <Typography><strong>POST ID:{id} </strong></Typography>
                        <Typography gutterBottom variant="h5" component="h2">

                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button variant="contained" color="primary" onClick={() => handleClick(id)}>See more</Button>

                </CardActions>
            </Card>

        </div>
    );
};

export default Post;