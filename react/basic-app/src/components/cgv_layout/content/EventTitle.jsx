export default function EventTitle({text1, text2}) {
    return (
        <div>
            <div>
                <span class="main-content-title">{text1}</span>
            </div>
            <div>
                <a href="#" target="_parent">{text2}<i class="fa-solid fa-angle-right"></i></a>
            </div>
        </div>
    );
}