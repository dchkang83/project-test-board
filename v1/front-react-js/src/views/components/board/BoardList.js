import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { boardActions } from '~/slices/board/boardSlice'

// TODO. 페이징
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';

const BoardList = () => {
  // TODO. COLUMNS
  const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'title', label: 'Title', minWidth: 100 },
    { id: 'content', label: 'Content', minWidth: 100 },
    { id: 'insertDate', label: 'insertDate', minWidth: 100, align: 'right' },
    { id: 'updateDate', label: 'updateDate', minWidth: 100, align: 'right' },
    { id: 'boardType', label: 'boardType', minWidth: 100 }
  ];

  const params = useParams();
  const { boardList, status, statusText } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();


  // 페이지가 처음 렌더링 되고 난후 useEffect 무조건 한번 실행!
  React.useEffect(() => {
    console.log('useEffect');
    dispatch(boardActions.getBoardList(params?.boardType ?? 0));
  }, [dispatch, params?.boardType]);


  // TODO. 페이징
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    console.log('handleChangePage');
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log('handleChangeRowsPerPage');

    // TODO. 이렇게 쓰는게 맞나? 확인해봐야함
    dispatch(boardActions.getBoardList(params?.boardType ?? 0));

    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {/* <>
        {
          status === 200 ?
            <>
              {boardList.length > 0 ?
                <div>
                  <div>
                    {
                      boardList.map((board, index) =>
                        <div key={board?.id ?? index}>
                          <Link to={{ pathname: `/board/${board?.id ?? 0}` }}>
                          <span>{board?.title ?? ""}</span>
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
      </> */}
      
      <Link to="/test/boardList/1"><Button variant="text">등록</Button></Link>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {boardList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={boardList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>





    </>
  );
}

export default BoardList;
