import React from 'react';
import Review from './Review';
// import { FaGithubSquare } from 'react-icons/fa';

function App() {
  return (
    <main>
      <div className='container'>
        <div className='title'>
          <h2>our reviews</h2>
        </div>
        <div className='underline'></div>
        <Review />
      </div>
    </main>
  );
}

export default App;
