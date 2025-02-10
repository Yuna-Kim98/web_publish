import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple({getFileName}) {
    const [oldFile, setOldFile] = useState([]);
    
    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;

        // if (files.length < 6) {
            // formData에 append 추가 - file 개별로 append 되어야 함
            for (const file of files) formData.append("files", file);
            // for (let i = 0; i < files.length; i++) formData.append("files", files[i]);
            // files.forEach((file) => formData.append("files", file)); // iterable 호출로 인해 사용 불가 :: 단순 순회를 목적으로 하기 때문
    
            // server 전송
            // 파일 업로드 갯수 제한 없이 사용자가 선택한 갯수만큼 전송 -> ?maxFiles=${files.length}
            axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData) 
                .then(res => {
                    console.log(res.data);
                    getFileName(res.data); // NewProduct로 전송
                    setOldFile(res.data.oldFile);
                })
                .catch(err => console.log(err));
        // } else {
        //     alert("파일 업로드는 최대 5개까지 가능합니다.");
        // }
    }
    
    return (
        <div>
            <Form.Control
                type='file'
                onChange={(e) => handleFileUploadMultiple(e)}
                multiple />
        </div>
    );
}