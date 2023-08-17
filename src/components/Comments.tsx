import React, { useEffect, useState } from 'react';
import {
  Avatar,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Box,
  Typography,
  Divider,
} from '@material-ui/core';
import { ThumbUp as ThumbUpIcon, Comment as CommentIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';
import axios from 'axios';
import { Location } from 'pages/HomePage'
import { Resolution } from 'models/WidgetData';
// const mockComments = [
//   {
//     id: 1,
//     author: 'יוסי כהן',
//     text: 'זהו התגובה הראשונה.',
//     timestamp: '2023-08-16T12:30:00Z',
//     image: 'https://randomuser.me/api/portraits/men/44.jpg',
//     upVotes: 31,
//     subComments: [
//       {
//         author: 'רחל לוי',
//         text: 'פוסט מעולה! תודה ששיתפת.',
//         timestamp: '2023-08-16T13:15:00Z',
//         image: 'https://randomuser.me/api/portraits/women/45.jpg',
//         upVotes: 7,
//       },
//     ],
//   },
//   {
//     id: 2,
//     author: 'רחל לוי',
//     text: 'פוסט מעולה! תודה ששיתפת.',
//     timestamp: '2023-08-16T13:15:00Z',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     upVotes: 7,
//     subComments: [],
//   },
//   {
//     id: 3,
//     author: 'משה מנטין',
//     text: 'יש לי שאלה על הנושא.',
//     timestamp: '2023-08-16T14:00:00Z',
//     image: 'https://randomuser.me/api/portraits/men/50.jpg',
//     upVotes: 88,
//     subComments: [],
//   },
//   {
//     id: 4,
//     author: 'שרה אטליס',
//     text: 'צפיה לעוד תוכן כמו זה.',
//     timestamp: '2023-08-16T15:45:00Z',
//     image: 'https://randomuser.me/api/portraits/women/20.jpg',
//     upVotes: 2,
//     subComments: [],
//   },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: '30%',
    overflow: 'auto',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  commentInput: {
    marginTop: theme.spacing(2),
  },
  secondaryRow: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(4),
  },
  likeButton: {
    width: '5vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  },
}));

const Comment = ({ author, text, image }: any) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar src={image}>{author.substring(0, 1).toUpperCase()}</Avatar>
    </ListItemAvatar>
    <ListItemText style={{ textAlign: 'right' }} primary={author} secondary={text} />
  </ListItem>
);

const BASE_COMMENTS_ROUTE = '/api/comments';

const getCommentsUrl = ({ resolution, segmentId, street, yishuv_name: city }: Location): string => {
  const query = [];

  if (resolution === Resolution.SUBURBAN_ROAD) {
    query.push(`${BASE_COMMENTS_ROUTE}?road_segment_id=${segmentId}`);
  }
  if (resolution === Resolution.STREET) {
    query.push(`${BASE_COMMENTS_ROUTE}?street1_hebrew=${street}&yishuv_name=${city}`);
  }

  return query.join('&');
};

const Comments = ({ location }: { location: Location }) => {
  const classes = useStyles();
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');


  useEffect(() => {
    axios.get(getCommentsUrl(location))
  }, [])

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const newComments = [...comments, { author: 'User', text: newComment }];
      setComments(newComments);
      setNewComment('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      handleCommentSubmit();
    }
  };



  const likeComment = (index) => {
    const tempComments = [...comments];
    tempComments[index].upVotes++;

    setComments(tempComments);
  };

  return (
    <Paper className={classes.root}>
      <List>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            <Comment author={comment.author} text={comment.text} image={comment.image} />
            <Box
              style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'row-reverse' }}
            >
              <Button variant="outlined" className={classes.likeButton} onClick={() => likeComment(index)}>
                <Typography>{comment.upVotes || 0}</Typography>
                <ThumbUpIcon color="primary" />
              </Button>
              <IconButton>
                <CommentIcon color="primary" />
              </IconButton>
            </Box>
            <Box
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
              }}
            >
              <Box style={{ width: '90%' }}>
                {comment.subComments?.map((subComment, subCommentIndex) => (
                  <Comment
                    key={subCommentIndex}
                    author={subComment.author}
                    text={subComment.text}
                    image={subComment.image}
                  />
                ))}
              </Box>
            </Box>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <TextField
        className={classes.commentInput}
        label="כתוב תגובה"
        size="small"
        fullWidth
        value={newComment}
        onChange={handleCommentChange}
        onKeyDown={handleKeyPress}
      />
      <IconButton onClick={handleCommentSubmit}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default Comments;
