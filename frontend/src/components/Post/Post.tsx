import React from 'react';
import dayjs from 'dayjs';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

interface PostProps {
  author: string,
  message: string,
  date: string,
  nowDate?: string,
}

const Post: React.FC<PostProps> = ({author,message,date, nowDate}) => {

  const postFormatDate = dayjs(date).format('DD.MM.YYYY HH:mm:ss');
  const postDay = Number(dayjs(date).format('DD'));
  const postMonth = Number(dayjs(date).format('MM'));
  const postYear = Number(dayjs(date).format('YYYY'));

  const nowDay = Number(dayjs(nowDate).format('DD'));
  const nowMonth = Number(dayjs(nowDate).format('MM'));
  const nowYear = Number(dayjs(nowDate).format('YYYY'));

  let infoDate = null;

  if (postMonth === nowMonth && postYear === nowYear && (nowDay - postDay) === 1) {
    infoDate = (
      <Typography variant="subtitle1">
        Вчера
      </Typography>
    )
  } else if (postDay === nowDay && postMonth === nowMonth && postYear === nowYear) {
    infoDate = (
      <Typography variant="subtitle1">
        {dayjs(date).format('HH:mm:ss')}
      </Typography>
    )
  } else {
    infoDate = (
      <Typography variant="subtitle1">
        {postFormatDate}
      </Typography>
    )
  }

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
        {infoDate}
      </CardContent>
    </Card>
  );
};

export default Post;
