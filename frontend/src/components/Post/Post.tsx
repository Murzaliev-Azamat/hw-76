import React from 'react';

interface PostProps {
  author: string,
  message: string,
  date: string,
}

const Post: React.FC<PostProps> = ({author,message,date}) => {
  return (
    <div className = 'alert alert-info m-2 col-5'>
      <h4 className = 'alert-heading'>{author}</h4>
      <p>{message}</p>
      <hr/>
      <p>{date}</p>
    </div>
  );
};

export default Post;