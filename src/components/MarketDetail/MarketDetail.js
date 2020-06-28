import React from 'react';
import classnames from 'classnames/bind';
import style from './MarketDetail.scss';
import { IoIosArrowForward } from 'react-icons/io';
import moment from 'moment';

const cx = classnames.bind(style);

const MarketDetail = ({ item }) => {

  const { idx, title, description, price, phone, 
    name, email, joinDate, push, memberId, category } = item;

    const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');
  

  return (
    <>
      <div className={cx('MarketDetailTemplate')}>
        <div className={cx('MarketDetailTemplate-imageDiv')}>

        </div>
        <div className={cx('MarketDetailTemplate-orderDiv')}>
          <div className={cx('MarketDetailTemplate-orderDiv-headerDiv')}>
            <div className={cx('MarketDetailTemplate-orderDiv-headerDiv-memberIdDiv')}>
              {memberId}님의 아이디어
            </div>
            <div className={cx('MarketDetailTemplate-orderDiv-headerDiv-iconDiv')}>
              <IoIosArrowForward className={cx('MarketDetailTemplate-orderDiv-headerDiv-iconDiv-icon')}/>
            </div>
          </div>
          <div className={cx('MarketDetailTemplate-orderDiv-titleDiv')}>
            <span>[{category}] {title}</span>
          </div>
          <div className={cx('MarketDetailTemplate-orderDiv-priceDiv')}>
            <div className={cx('MarketDetailTemplate-orderDiv-priceDiv-price')}>
              <span>예상 가격:</span>
              <span>{price}원</span>
            </div>
            <div className={cx('MarketDetailTemplate-orderDiv-priceDiv-pushDiv')}>

            </div>
          </div>
          <div className={cx('MarketDetailTemplate-orderDiv-infoDiv')}>
            <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoNameDiv')}>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoNameDiv-nameDiv')}>
                <span>전화 번호</span>
              </div>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoNameDiv-nameDiv')}>
                <span>이메일</span>
              </div>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoNameDiv-nameDiv')}>
                <span>이름</span>
              </div>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoNameDiv-nameDiv')}>
                <span>작성일</span>
              </div>
            </div>
            <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoContentsDiv')}>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoContentsDiv-contentsDiv')}>
                <span>{phone}</span>
              </div>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoContentsDiv-contentsDiv')}>
                <span>{email}</span>
              </div>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoContentsDiv-contentsDiv')}>
                <span>{name}</span>
              </div>
              <div className={cx('MarketDetailTemplate-orderDiv-infoDiv-infoContentsDiv-contentsDiv')}>
                <span>{joinDateFormat}</span>
              </div>
            </div>
          </div>
          <div className={cx('MarketDetailTemplate-orderDiv-contactDiv')}>

          </div>
        </div>
      </div>
      <div className={cx('ContentsDiv')}>
        
      </div>
    </>
  );
};

export default MarketDetail;