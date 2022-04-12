import React from 'react';
// import RootRoutes from './routes/RootRoutes';


const Title = ({ text }) => (
  <h1>{text}</h1>
);

if (process.env.NODE_ENV) {
  console.log('DEV!!!');
  console.log('process.env.NODE_ENV : ', process.env.NODE_ENV);
  console.log('process.env.ONLY_DEV : ', process.env.ONLY_DEV);
  console.log('process.env.API_URL : ', process.env.API_URL);
}

const App = () => {
  return (
    // <RootRoutes />
    <div>
      <Title text="제목" />
      <h2>{ process.env.API_URL }</h2>
      <div>test</div>
    </div>
  );
}

export default App;