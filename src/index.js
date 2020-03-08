import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  const date = new Date();
  return (
    <div className='ui container comments'>
      <CommentDetail
        author={'Alexis'}
        timeAgo={date.toLocaleDateString()}
        src={faker.image.avatar()}
        commentsText={faker.lorem.text()}
      />
      <CommentDetail
        author={'James'}
        timeAgo={date.toISOString()}
        src={faker.image.avatar()}
        commentsText={faker.lorem.text()}
      />
      <CommentDetail
        author={'Frank'}
        timeAgo={date.toUTCString()}
        src={faker.image.avatar()}
        commentsText={faker.lorem.text()}
      />
      <CommentDetail
        author={'Freddie'}
        timeAgo={date.toTimeString()}
        src={faker.image.avatar()}
        commentsText={faker.lorem.text()}
      />
      <CommentDetail
        author={'David'}
        timeAgo='Today at 1:45pm'
        src={faker.image.avatar()}
        commentsText={faker.lorem.text()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
