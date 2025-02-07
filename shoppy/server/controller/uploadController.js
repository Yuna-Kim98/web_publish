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

const upload = multer({ storage: storage }).single("file"); // 매핑할 파일명 입력. 파일 하나만 저장

export const fileUpload = (req, res) => {
    upload(req, res, (err) =>{
        if (err) {
            console.log(err);
        } else {
            const oldFile = req.body.oldFile;

            if (oldFile) {
                // oldFile 존재 시 업로드 폴더에서 삭제
                const oldFilePath = path.join("upload_files/", oldFile);
                if (fs.existsSync(oldFilePath)) {
                    try {
                        fs.unlinkSync(oldFilePath);
                    } catch (error) {
                        console.error("이전 파일 삭제 실패: ", error);
                    }
                }
            }

            res.json({
                "uploadFileName": res.req.file.path, // 저장된 폴더의 파일명. multer가 보낸 파일 경로를 불러오기 때문에 경로가 res.req.
                "sourceFileName": req.file.originalname, // 사용자가 선택한 원래 파일명. 저장될 때 넘어온 파일명 경로 req.
                "oldFile": res.req.file.filename
            });
        }
    }); // 콜백함수 : 별도로 실행할 함수 작성
}












// /** multer 라이브러리를 이용한 파일 업로드 **/
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'upload_files/')
//     },
//     filename: function (req, file, cb) {
//         // 파일명 중복 방지를 위한 새로운 파일명 생성
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         cb(null, file.fieldname + '_' + file.originalname);
//     }
// })

// /** multer 함수 **/
// const fupload = multer({ storage: storage }).single("file");
// // 파일 1개만 업로드하도록 설정

// /** 파일 업로드 **/
// export const fileUpload = (req, res) => {
//     // console.log(`fileUpload --> ${JSON.stringify(req.file)}`);
//     fupload(req, res, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json({
//                 uploadImage: res.req.file.path,
//                 orgImage: req.file.originalname
//             });
//         }
//     })
// }