import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';
import faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Title</h4>Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45AM'
          image={faker.image.avatar()}
          text='Nice blog post!'
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Eva'
          timeAgo='Today at 5:45PM'
          image={faker.image.avatar()}
          text='Nice blog post!!'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
