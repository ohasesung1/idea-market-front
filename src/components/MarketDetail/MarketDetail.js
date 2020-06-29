import React from 'react';
import classnames from 'classnames/bind';
import style from './MarketDetail.scss';
import { IoIosArrowForward } from 'react-icons/io';
import defaultImage from 'assets/image/noImageLogo.png';
import PropTypes from 'prop-types';
import moment from 'moment';

const cx = classnames.bind(style);

const MarketDetail = ({ item, handleBasket }) => {

  const { idx, title, description, price, phone, 
    name, email, joinDate, push, memberId, category, picture } = item;

    const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');
  
    
  return (
    <>
      <div className={cx('MarketDetailTemplate')}>
        <div className={cx('MarketDetailTemplate-imageDiv')}>
          {
            picture ? 
              <img className={cx('MarketDetailTemplate-imageDiv-image')} src={picture[0].url}/>
            : <img className={cx('MarketDetailTemplate-imageDiv-image')} src={defaultImage}/>
          }
        
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
            {/* <div className={cx('MarketDetailTemplate-orderDiv-priceDiv-pushDiv')}>

            </div> */}
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
            <div className={cx('MarketDetailTemplate-orderDiv-contactDiv-buttonDiv')}>
              <button className={cx('MarketDetailTemplate-orderDiv-contactDiv-buttonDiv-button', 'buttonColor')} onClick={() => handleBasket()}>장 바구니 담기</button>
            </div>
            <div className={cx('MarketDetailTemplate-orderDiv-contactDiv-buttonDiv')}>
              <button className={cx('MarketDetailTemplate-orderDiv-contactDiv-buttonDiv-button')}>연락 하기</button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('contentsGuide')}>
        아이디어 설명
      </div>
      <div className={cx('ContentsDiv')}>
        <div className={cx('ContentsDiv-titleDiv')}>
          <span>[{category}] {title}</span>
        </div>
        <pre className={cx('ContentsDiv-fontStyle')}>
          {
            description
          }
        </pre>
      </div>
    </>
  );
};

MarketDetail.propTypes = {
  item: PropTypes.object,
  handleBasket: PropTypes.func,
};

export default MarketDetail;