import React, { useState, useRef } from 'react';
import ImageUpload from '../components/ImageUpload.jsx';
import axios from 'axios';

export default function NewProduct() {
    const productNameRef = useRef(null);
    // const productPrice 
    const [fname, setFnames] = useState({});
    const [preview, setPreview] = useState('');
    let [formData, setFormData] = useState({});

    const getFileName = (fileNames) => {
        // console.log('fileNames --> ', fileNames);
        setFnames(fileNames);
        setPreview(`http://localhost:9000/${fileNames.uploadFileName}`);
    }

    // 등록 이벤트 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        if (productNameRef.current.value === '') {
            alert('상품명을 입력해주세요!');
            productNameRef.current.focus();
            return false;
        } else {
            // 서버 전송
            formData = {...formData, "upload_file": fname.uploadFileName, "source_file": fname.sourceFileName};
            console.log('formData --> ', formData);

            axios.post('http://localhost:9000/product/new', formData)
                .then(res => {
                    console.log('res.data --> ', res.data);
                })
                .catch(err => console.log(err));
        }
    }

    // 폼 입력시 값을 formData에 추가하는 이벤트
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <div>
            <h1>상품 등록</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>상품명</label>
                        <input type="text" name='productName' onChange={handleChange} ref={productNameRef} />
                    </li>
                    <li>
                        <label>가격</label>
                        <input type="text" name='price' onChange={handleChange} />
                    </li>
                    <li>
                        <label>상품정보</label>
                        <input type="text" name='description' onChange={handleChange} />
                    </li>
                    <li>
                        <label>파일 업로드</label>
                        <ImageUpload getFileName={getFileName} />
                        { preview && <img src={preview} alt="preview image" style={{width: '100px'}} /> }
                    </li>
                    <li>
                        <input type="text" name='upload' value={fname.uploadFileName} />
                        <input type="text" name='source' value={fname.sourceFileName} />
                    </li>
                    <li>
                        <button type='submit'>등록</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}