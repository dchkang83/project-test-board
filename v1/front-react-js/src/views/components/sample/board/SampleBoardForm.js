import { QrCodeScannerOutlined } from '@mui/icons-material';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { Link, useParams, useHistory } from 'react-router';
// import { useHistory, useParams } from 'react-router';

import { Link, useParams, useNavigate } from 'react-router-dom';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice'
import SampleBoardRegister from "~/views/components/sample/board/SampleBoardRegister";
import SampleBoardDetail from "~/views/components/sample/board/SampleBoardDetail";

// const SampleBoardForm = (): JSX.Element => {
const SampleBoardForm = (props) => {
    // function SampleBoardForm() {


    const dispatch = useDispatch();
    // v6
    const navigate = useNavigate();
    // navigate('/home');
    // navigate('/home', {replace: true});

    // 아래처럼 보내고 받을수 있음
    // navigate('/detail', {state : {cardId : e.currentTarget.id }})
    // import { useLocation } from 'react-router-dom';
    // const location = useLocation().state;

    // v6 에서의 앞으로, 뒤로 가기 사용방법 변화 
    // <button onClick={() => navigate(-2)}>Go 2 pages back</button>
    // <button onClick={() => navigate(-1)}>Go back</button>
    // <button onClick={() => navigate(1)}>Go forward</button>
    // <button onClick={() => navigate(2)}>Go 2 pages forward</button>

    const params = useParams();
    const id = params?.id;
    console.log('id : ', id);

    // TODO. 등록/수정/삭제 분기처리
    // TODO. page랑 컴포넌트 나누자.. 헷갈림...
    // TODO. 중복되는 이벤트를 여기서 모두 컨트롤
    // const { sampleBoard, status, statusText } = useSelector((state) => state.sampleBoardReducer);
    // // 페이지가 처음 렌더링 되고 난후 useEffect 무조건 한번 실행!
    // React.useEffect(() => {
    //     console.log('useEffect');
    //     dispatch(sampleBoardActions.getSampleBoard(params?.id ?? 0));
    // }, [dispatch, params?.id]);



    // TODO. ################### 등록/수정 시작
    // const [ sampleBoard, setSampleBoard ] = React.useState({});
    const [sampleBoard, setSampleBoard] = React.useState({});
    function onChangeBoard(e) {
        setSampleBoard({
            ...sampleBoard,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    function onClickSubmitButton() {
        console.log(sampleBoard);
        if (sampleBoard?.boardType > 0 && sampleBoard?.title) {
            if (sampleBoard?.id > 0) {
                dispatch(sampleBoardActions.putSampleBoard(sampleBoard));
            } else {
                dispatch(sampleBoardActions.postSampleBoard(sampleBoard));
            }
        } else {
            alert("게시판타입과 제목은 필수값입니다.");
        }
    }

    React.useEffect(() => {
        if (params?.id) {
            dispatch(sampleBoardActions.setSampleBoard({ id: params?.id, setSampleBoard }));
        } else {
            setSampleBoard({});
        }
    }, [dispatch, params?.id]);


    // TODO. ################### 등록/수정 종료


    // const [ article, setArticle ] = useState({});
    // function onClickSubmitButton() {
    //     if (article?.id > 0 && article?.title)
    //     {
    //         if (article?.id > 0)
    //         {
    //             dispatch(articleActions.putArticle(article));
    //         } else {
    //             dispatch(articleActions.postArticle(article));
    //         }
    //     } else {
    //         alert("게시판과 제목은 필수값입니다.");
    //     }
    // }

    return (
        <>
            {/* {
                id === '' || id === null || id === undefined ?
                    <SampleBoardRegister
                        handleSubmit={onSubmitBoard}
                    />
                    :
                    <SampleBoardDetail
                    />
            } */}

            <h2>등록</h2>
            <h3>{sampleBoard?.title}</h3>

            <div><span>id: </span><span>{sampleBoard?.id ?? ""}</span></div>
            <div><span>title: </span><span>{sampleBoard?.title ?? ""}</span></div>
            <div><span>content: </span><span>{sampleBoard?.content ?? ""}</span></div>
            <div><span>insertDate: </span><span>{sampleBoard?.insertDate ?? ""}</span></div>
            <div><span>updateDate: </span><span>{sampleBoard?.updateDate ?? ""}</span></div>
            <div><span>boardType: </span><span>{sampleBoard?.boardType ?? ""}</span></div>
            

            <div>
                <span>게시판 타입: </span>
                <input
                    name="boardType"
                    onChange={onChangeBoard}
                    value={sampleBoard?.boardType ?? ""}
                />
            </div>
            <div>
                <span>제목: </span>
                <input
                    name="title"
                    onChange={onChangeBoard}
                    value={sampleBoard?.title ?? ""}
                />
            </div>
            <div>
                <span>내용: </span>
                <textarea
                    name="content"
                    onChange={onChangeBoard}
                    value={sampleBoard?.content ?? ""}
                />
            </div>


            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label="fullWidth" id="fullWidth" />
            </Box>



            <Button variant="contained" onClick={onClickSubmitButton}>
                등록
            </Button>
        </>
    )
}


export default SampleBoardForm;