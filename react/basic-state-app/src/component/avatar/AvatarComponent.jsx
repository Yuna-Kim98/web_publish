
export default function AvatarComponent({img, alt, isNew, name}) {
    return (
        <>
            <img src={img} alt={alt} />
            {isNew && <span className="new">new!</span>}
            <p>{name}</p>
        </>
    );
}