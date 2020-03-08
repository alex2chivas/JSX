import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  const date = new Date();
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{date.toUTCString()}</span>
        </div>
        <div className='text'> {faker.lorem.text()}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
