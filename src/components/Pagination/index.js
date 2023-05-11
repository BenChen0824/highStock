import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import styles from './pagination.module.css';

const Pagination = (props) => {
  // 從props導入的資料，包含每頁資料、要套入渲染的元件、顯示分頁數、每頁資料數
  const { data, RenderComponent, pageLimit, dataLimit } = props;
  // 總分頁數目
  const pages = Math.ceil(data.length / dataLimit);
  // 用一個state儲存目前在哪個頁面
  const [currentPage, setCurrentPage] = useState(1);
  // 下一頁
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  }
  // 上一頁
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  }
  // 跳至該頁面
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  // 載入當頁資料
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  // 計算目前分頁的數字是哪幾個分頁
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div className="dataContainer">
        <Row>
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </Row>
      </div>
      <div className={styles.pagination}>
        <button
          onClick={goToPreviousPage}
          className={`${styles.prev} ${currentPage === 1 ? styles.disabled : ''}`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${styles.paginationItem} ${currentPage === item ? styles.active : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`${styles.next} ${currentPage === pages || pages === 0 ? styles.disabled : ''}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;