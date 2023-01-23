// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
//
// export default function MultiActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

interface PostProps {
  author: string,
  message: string,
  date: string,
}

const Post: React.FC<PostProps> = ({author,message,date}) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 1, marginLeft: 1, bgcolor: 'lightblue'}}>
      <CardMedia>
        <CardContent>
          <Typography variant="h5">
            {author}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {message}
          </Typography>
        </CardContent>
      </CardMedia>
      <CardContent sx={{ borderTop: 2, borderColor: 'white'}}>
        <Typography variant="subtitle1">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;

// import React from 'react';
//
// interface PostProps {
//   author: string,
//   message: string,
//   date: string,
// }
//
// const Post: React.FC<PostProps> = ({author,message,date}) => {
//   return (
//     <div className = 'alert alert-info m-2 col-5'>
//       <h4 className = 'alert-heading'>{author}</h4>
//       <p>{message}</p>
//       <hr/>
//       <p>{date}</p>
//     </div>
//   );
// };
//
// export default Post;