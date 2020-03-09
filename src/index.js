import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  const date = new Date();
  return ( <
    div className = 'ui container comments' >

    <
    ApprovalCard >
    <
    div >
    <
    h4 > Warning! < /h4>
    Are you sure you want to do this ?
      <
      /div> <
      /ApprovalCard>

      <
      ApprovalCard >
      <
      CommentDetail
    author = {
      'Alexis'
    }
    timeAgo = {
      date.toLocaleDateString()
    }
    src = {
      faker.image.avatar()
    }
    commentsText = {
      faker.lorem.text()
    }
    /> <
    /ApprovalCard> <
    ApprovalCard >
    <
    CommentDetail author = {
      'James'
    }
    timeAgo = {
      date.toISOString()
    }
    src = {
      faker.image.avatar()
    }
    commentsText = {
      faker.lorem.text()
    }
    /> <
    /ApprovalCard> <
    ApprovalCard >
    <
    CommentDetail author = {
      'Frank'
    }
    timeAgo = {
      date.toUTCString()
    }
    src = {
      faker.image.avatar()
    }
    commentsText = {
      faker.lorem.text()
    }
    /> <
    /ApprovalCard> <
    ApprovalCard >
    <
    CommentDetail author = {
      'Freddie'
    }
    timeAgo = {
      date.toTimeString()
    }
    src = {
      faker.image.avatar()
    }
    commentsText = {
      faker.lorem.text()
    }
    /> <
    /ApprovalCard> <
    ApprovalCard >
    <
    CommentDetail author = {
      'David'
    }
    timeAgo = 'Today at 1:45pm'
    src = {
      faker.image.avatar()
    }
    commentsText = {
      faker.lorem.text()
    }
    /> <
    /ApprovalCard> <
    /div>
  );
};

ReactDOM.render( < App / > , document.querySelector( '#root' ) );