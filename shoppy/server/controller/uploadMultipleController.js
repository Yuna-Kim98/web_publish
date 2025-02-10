import multer from 'multer';
import fs from 'fs';
import path from 'path';

// multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
    destination: function (req, file, cb) { // 저장 경로(파일) 지정
        cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now()) // 파일명 설정
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '_' + file.originalname); // 파일이름이 한글로 되어있을 경우 깨지므로 인코딩 라이브러리를 따로 설치해야 함
    }
})


export const fileUploadMultiple = (req, res) => {
    const maxFiles = parseInt(req.query.maxFiles); // string 타입으로 넘어오기 때문에 숫자로 변경해줌
    const upload = multer({ storage: storage }).array("files", maxFiles); // 매핑할 파일명 입력. maxcount를 지정해 파일을 배열로 여러 개 저장

    upload(req, res, (err) =>{
        if (err) {
            console.log(err);
        } else {
            console.log('업로드파일리스트 --> ', req.files);

            // const oldFile = req.body.oldFile;

            // if (oldFile) {
            //     // oldFile 존재 시 업로드 폴더에서 삭제
            //     const oldFilePath = path.join("upload_files/", oldFile);
            //     if (fs.existsSync(oldFilePath)) {
            //         try {
            //             fs.unlinkSync(oldFilePath);
            //         } catch (error) {
            //             console.error("이전 파일 삭제 실패: ", error);
            //         }
            //     }
            // }

            // res 객체를 이용한 전송객체 생성 <-> 같은 기능을 하는 uploadController의 res 객체명과 동일하게 정의
            // 컴포넌트 교체시 수정 없이 바로 사용할 수 있도록 하는 것이 가장 효율적
            let uploadFileName = [];
            let sourceFileName = [];
            let oldFile = [];

            // req.files 배열의 파일 정보를 가져와서 위의 배열에 추가한다.
            for (const file of req.files) {
                uploadFileName.push(file.path);
                sourceFileName.push(file.originalname);
                oldFile.push(file.filename);
            }

            res.json({
                "uploadFileName": uploadFileName, // 저장된 폴더의 파일명. multer가 보낸 파일 경로를 불러오기 때문에 경로가 res.req.
                "sourceFileName": sourceFileName, // 사용자가 선택한 원래 파일명. 저장될 때 넘어온 파일명 경로 req.
                "oldFile": oldFile
            });
        }
    }); // 콜백함수 : 별도로 실행할 함수 작성
}