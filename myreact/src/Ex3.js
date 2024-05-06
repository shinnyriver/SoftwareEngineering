import React from 'react';
import ReactDOM from 'react-dom';

const Ex3 = () => {
  return (
    <>
      <div id="class-name">
        <h1>Class name</h1>
        <p>Mobile Software</p>
      </div>
      <div id="professor-name">
        <h1>Professor's name</h1>
        <p>WoongSup Kim</p>
      </div>
      <div id="students-list">
        <h1>List of Students</h1>
        <ul>
          <li>Student 1</li>
          <li>Student 2</li>
          <li>Student 3</li>
          <li>Student 4</li>
        </ul>
      </div>
    </>
  );
};

const renderComponents = () => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Ex3 />, rootElement);
};

renderComponents();

export default Ex3;
