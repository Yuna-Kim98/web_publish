import PackageContentItem from "./PackageContentItem.jsx";
import PackageContentTitle from "./PackageContentTitle.jsx";

export default function PackageContent({title, list}) {
    return (
        <div>
            <PackageContentTitle title={title} />
            <div>
                <ul>
                    {/* list가 null이 아닐 경우에만 map을 돌림 */}
                    {list && list.map((item) => 
                        <li>
                            <PackageContentItem 
                                src={item.src} alt={item.alt}
                                text={item.text} price={item.price}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}