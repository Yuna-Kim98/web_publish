import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData(); // 서버로 이미지 파일 전송시 객체로 묶어서 전송하기 위해 사용

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]); // 파일 1개만 formData에 저장

        // 서버 전송
        axios.post('http://localhost:9000/uploads', formData)
            .then(res => {
                console.log('res --> ', res.data);
                getFileName(res.data);
            })
            .catch(err => console.log(err));
    }

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