export default function MyWorkButton({click2, className, category, count}) {
    return (
        <>
            <button className={className} onClick={() => {click2(category)}}>
                {category}
                <span className="category__count">{count}</span>
            </button>
        </>
    );
}