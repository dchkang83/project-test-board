import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice'

const SampleBoardDetail = () => {

  const params = useParams();
  console.log('params : ', params);

  const dispatch = useDispatch();
  const { sampleBoard, status, statusText } = useSelector((state) => state.sampleBoardReducer);

  // 페이지가 처음 렌더링 되고 난후 useEffect 무조건 한번 실행!
  React.useEffect(() => {
    console.log('useEffect');
    dispatch(sampleBoardActions.getSampleBoard(params?.boardId ?? 0));
  }, [dispatch, params?.boardId]);

  return (
    <>
      <div>
        <h2>SampleBoardDetail</h2>
        {sampleBoard?.title}
      </div>
    </>
  )
}


export default SampleBoardDetail;