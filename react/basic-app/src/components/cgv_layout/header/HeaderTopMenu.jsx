
export default function HeaderTopMenu({href, src, alt, name}) {
    return (
        <a href={href} target='_parent'>
            <img src={src} alt={alt} />
            <span>{name}</span>
        </a>
    );
}