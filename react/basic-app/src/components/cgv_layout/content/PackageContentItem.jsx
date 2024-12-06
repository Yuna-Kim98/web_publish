export default function PackageContentItem({src, alt, text, price}) {
    return (
        <>
            <div>
                <img src={src} alt={alt} width="60px" />
            </div>
            <div>
                <p>{text}</p>
                <p>{price}</p>
            </div>
        </>
    );
}