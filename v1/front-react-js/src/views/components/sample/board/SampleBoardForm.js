import { QrCodeScannerOutlined } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice'
import SampleBoardRegister from "~/views/components/sample/board/SampleBoardRegister";
import SampleBoardDetail from "~/views/components/sample/board/SampleBoardDetail";

const SampleBoardForm = () => {

    const params = useParams();

    const boardId = params?.boardId;
    console.log('boardId : ', boardId);

    // TODO. 등록/수정/삭제 분기처리
    // TODO. page랑 컴포넌트 나누자.. 헷갈림...
    // TODO. 중복되는 이벤트를 여기서 모두 컨트롤


    /*
    const onSubmitArticle = (event) => {
        event.preventDefault();
    
        if (title === "" || title === null || title === undefined) {
            alert("제목을 작성하십시오.");
            return false;
        }
    
        if (content === "" || content === null || content === undefined) {
            alert("내용을 작성하십시오.");
            return false;
        }
    
        const article = {
            id: id, ///
            title: title,
            content: content,
            views: views,
            date: date,
            editDate: IsForUpdate ? Date.now() : editDate,
        };
    
        if (IsForUpdate) {
            dispatch(articleActions.updateArticle(article));
        } else {
            dispatch(articleActions.registerArticle(article));
        }
        };
    */


    return (
        <>
            {
                boardId === '' || boardId === null || boardId === undefined ?
                    <SampleBoardRegister
                    />
                    :
                    <SampleBoardDetail
                    />
            }
        </>
    )
}


export default SampleBoardForm;