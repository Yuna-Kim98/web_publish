import React from "react";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pasinate({ pageCount, onPageChange, currentPage }) {
    return (
        <ReactPaginate
            previousLabel={<FiChevronLeft />} // 이전 페이지 버튼
            nextLabel={<FiChevronRight />} // 다음 페이지 버튼

            pageCount={pageCount} // 총 페이지(전체 항목 수 / 한 페이지에 표시될 항목 수)
            onPageChange={onPageChange} // 페이지 핸들링 함수
            forcePage={currentPage} // 현재 페이지

            containerClassName={"pagination"}
            pageLinkClassName={"pagination__link"}
            activeLinkClassName={"pagination__link__active"}
        />
    );
};