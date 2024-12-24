export default function EventListContent({src, alt, title, detail}) {
    return (
        <a href="#" target="_parent">
            <img src={src} alt={alt} width="250px" />
            <p>{title}</p>
            <p>{detail}</p>
        </a>
    );
}