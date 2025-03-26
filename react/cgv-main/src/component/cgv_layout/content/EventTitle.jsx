import { IoIosArrowForward } from "react-icons/io";

export default function EventTitle({text1, text2}) {
    return (
        <div>
            <div>
                <span class="main-content-title">{text1}</span>
            </div>
            <div>
                <a href="#" target="_parent">{text2}<IoIosArrowForward /></a>
            </div>
        </div>
    );
}