export default function SpecialItem({text, hashtag}) {
    return (
        <a href="#" target="_parent">
            <span>{text}</span>
            <span>{hashtag}</span>
        </a>
    );
}