import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Card = ({ title, content }) => (
  <div className='flex flex-column border rounded max-width-1'>
    <img
      className='fit'
      src='http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder.svg' />
    <div className='p1'>
      <h2 className='h2'>{title}</h2>
      <p className='ml1'>{content}</p>
      <button className='btn btn-primary right'>Next</button>
    </div>
  </div>
);

ReactDOM.render(
  <Card title='Basscss' content='This is a bass css example'  />,
  document.getElementById('root')
);
