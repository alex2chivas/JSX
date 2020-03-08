import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';

const App = (props) => {
  return (
    <div className='ui container comments'>
      <CommentDetail author={'Alexis'} />
      <CommentDetail author={'James'} />
      <CommentDetail author={'Frank'} />
      <CommentDetail author={'Freddie'} />
      <CommentDetail author={'David'} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
