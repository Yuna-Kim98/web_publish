import './Header.css';

export default function Header({children}) {
    return (
        <header>
            {children} {/* 컴포넌트가 호출된 곳에서 그 안에 작성된 자식 컴포넌트들을 하나로 묶음 */}
        </header>
    );
}