import React from 'react';
import { Link } from 'react-router-dom';


// import { useParams } from 'react-router-dom';


class Board extends React.Component {
  // constructor({ match, ...props }) {
  //   console.log('props : ', props);
  // }
  
  render() {
    // console.log(this.props);
    // console.log(this.props.match);
    // console.log('useParams() : ', useParams());

    return (
      <div>
        <h2>게시판</h2>
        <Link to="/test/boardList/1">리스트</Link>
      </div>
    )
  }
}


// const Board = ({ test1, test2 }) => {
//   return (
//     <main>
//       {test1}
//       <br />
//       <div>게시판</div>{test2}
//     </main>
//   )
// };

export default Board;