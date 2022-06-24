import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice'

const SampleBoardDetail = () => {

  const params = useParams();
  console.log('params : ', params);

  const dispatch = useDispatch();
  const { sampleBoard, status, statusText } = useSelector((state) => state.sampleBoardReducer);

  // 페이지가 처음 렌더링 되고 난후 useEffect 무조건 한번 실행!
  React.useEffect(() => {
    console.log('useEffect');
    dispatch(sampleBoardActions.getSampleBoard(params?.id ?? 0));
  }, [dispatch, params?.id]);



  function onClickDeleteButton(id) {
    if (!window.confirm("삭제하시겠습니까?")) return false;
    dispatch(sampleBoardActions.deleteSampleBoard(id));
  }


  return (
    <>
      <div>
        <h2>SampleBoardDetail</h2>
        {sampleBoard?.title}

        <Link to={`/sample/lists/modify/${sampleBoard?.id ?? 0}`}><Button variant="text">수정</Button></Link>
        <Button variant="text" onClick={() => onClickDeleteButton(sampleBoard?.id ?? 0)}>삭제</Button>
      </div>
    </>
  )
}


export default SampleBoardDetail;