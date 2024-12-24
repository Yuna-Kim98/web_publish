export default function SpecialItem({className, text, hashtag, click}) {
    return (
        <a href="#" target="_parent" onMouseOver={() => click(text)}>
            <span className={className}>{text}</span>
            <span>{hashtag}</span>
        </a>
    );
}