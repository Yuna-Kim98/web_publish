import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData(); // 서버로 이미지 파일 전송시 객체로 묶어서 전송하기 위해 사용
    const [oldFile, setOldFile] = useState('');

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]); // 파일 1개만 formData에 저장. 선택한 새로운 파일
        formData.append("oldFile", oldFile); // 새로운 파일을 선택했을 때 기존에 있던 파일이 삭제되고 새 파일이 저장되도록 함`

        // 서버 전송
        axios.post('http://localhost:9000/uploads', formData, {
            headers : { "Content-type": "multiple/form-data" } // 파일과 문자 데이터 추가시
        })
            .then(res => {
                getFileName(res.data);
                setOldFile(res.data.oldFile);
            })
            .catch(err => console.log(err));
    }
    // console.log('oldFile --> ', oldFile);

    return (
        <div>
            <Form.Control 
                type='file'
                onChange={(e) => {handleFileUpload(e)}}
            />
        </div>
    );
}


// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';

// export default function ImageUpload() {
//     const formData = new FormData(); // 서버로 이미지 파일 전송시 객체로 묶어서 전송하기 위해 사용

//     // 파일 업로드 이벤트 함수
//     const handleFileUpload = (e) => {
//         formData.append("file", e.target.files[0]); // 파일 1개만 formData에 저장
//         for([key, value] of formData.entries()) {
//             console.log(`key --> ${JSON.stringify(key)}`);
//             console.log('value -->', value)
//         }
        
//         // 서버 전송
//         // axios.post('http://localhost:9000/uploads', formData)
//         //     .then(res => console.log('res.data --> ', res.data))
//         //     .catch(error => console.log(error));
//     }
//     // console.log('formData --> ', formData);

//     return(
//         <div>
//             <Form.Control type='file'
//                         accept='image/*' // 이미지 파일만 사용하도록 함
//                         onChange={(e) => {handleFileUpload(e)}}>
//             </Form.Control>
//         </div>
//     );
// }