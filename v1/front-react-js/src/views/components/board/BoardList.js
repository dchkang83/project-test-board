import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

import { articleActions } from '~/slices/board/articleSlice'
import { boardActions } from '~/slices/board/boardSlice'

const BoardList = () => {
  const params = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();

  // console.log(params);
  // console.log(params?.boardId);
  // console.log(searchParams.get("aaa"));

  const { articleList, status, statusText } = useSelector((state) => state.articleReducer);
  const boardList = useSelector((state) => state.boardReducer.boardList);
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(boardActions.getBoardList());
    
    // TODO. test
    dispatch(boardActions.getBoard(1));
  }, [dispatch]);

  React.useEffect(() => {
    // dispatch(boardActions.getBoardList(1));
    dispatch(articleActions.getArticleList(params?.boardId ?? 0));
  }, [dispatch, params?.boardId]);


  console.log('articleList : ', articleList);
  console.log('boardList : ', boardList);

  // TODO. test
  console.log('board : ', board);

  return (
    <div>
      List
      <>
        {
          status === 200 ?
            <>
              <div>
                <span>게시판: </span>
                <span>
                  <span>
                  {
                    boardList.length > 0 && boardList.find((board) => board.id === parseInt(params?.boardId))?.name
                  }
                  </span>
                  <span>
                  test :
                  {
                    board.name
                  }
                  </span>
                </span>
              </div>
              {articleList.length > 0 ?
                <div>
                  <div>
                    {
                      articleList.map((article, index) =>
                        <div key={article?.id ?? index}>
                          <Link to={{ pathname: `/article/${article?.id ?? 0}` }}>
                            <span>{article?.title ?? ""}</span>
                          </Link>
                        </div>
                      )

                    }
                  </div>
                </div>
                :
                <div> 게시글이 없습니다. </div>
              }
            </>
            :
            <div>
              <div>
                <span>{status}</span>
              </div>
              <div>
                <span>{statusText}</span>
              </div>
            </div>
        }
      </>

    </div>
  );
}

export default BoardList;




// class BoardList extends React.Component {

//   render() {
//     // console.log(this.props.match)
//     // const params = useParams();
//     // const [searchParams, setSearchParams] = useSearchParams();

//     // console.log(params);
//     // console.log(params?.boardId);
//     // console.log(searchParams.get("aaa"));

//     return (
//       <div>
//         LIST
//       </div>
//     );
//   }
// }
