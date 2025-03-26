import { IoIosArrowForward } from "react-icons/io";

export default function MovieChartTilte({text1, text2, text3}) {
    return (
        <div class="moviechart-menu">
            <div class="main-content-title">
                <a href=""><span>{text1}</span></a>
                <span>&#124;</span>
                <a href=""><span>{text2}</span></a>
            </div>
            <div>
                <a href="#" target="_parent">{text3}<IoIosArrowForward /></a>
            </div>
        </div>
    );
}