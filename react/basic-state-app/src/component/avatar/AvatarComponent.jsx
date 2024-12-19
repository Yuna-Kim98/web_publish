
export default function AvatarComponent({img, alt, isNew, name}) {
    return (
        <>
            <img src={img} alt={alt} className="avatar-img" />
            {isNew && <span className="new">new!</span>}
            <p className="avatar-name">{name}</p>
        </>
    );
}