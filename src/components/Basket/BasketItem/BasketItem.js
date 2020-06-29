import React from 'react';
import classnames from 'classnames/bind';
import style from './BasketItem.scss';
import moment from 'moment';
import defaultImage from 'assets/image/noImageLogo.png';
import { withRouter } from 'react-router-dom';

const cx = classnames.bind(style);

const BasketItem = ({ item, handelDeleteBasket, history }) => {

  const { idx, memberId, category, price, description, title,
    phone, email, picture, joinDate, basketIdx } = item;
    console.log(idx);
    
    const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');

    const handelMarketDetail = () => {
      localStorage.setItem('idea-market-idx', idx);
  
      history.push('/market-detail');
    };

  return (
    <div className={cx('BasketItemTemplate')}>
      <div className={cx('BasketItemTemplate-writerInfoDiv')}>
        <div className={cx('BasketItemTemplate-writerInfoDiv-writer')}>
          작성자: {memberId}
        </div>
        <div className={cx('BasketItemTemplate-writerInfoDiv-joinDate')}>
          게시일: {joinDateFormat}
        </div>
      </div>
      <div className={cx('BasketItemTemplate-contentsDiv')}>
        <div className={cx('BasketItemTemplate-contentsDiv-imageDiv')}>
          <div className={cx('BasketItemTemplate-contentsDiv-imageDiv-viewDiv')}>
            {
              picture ? 
                <img className={cx('BasketItemTemplate-contentsDiv-imageDiv-viewDiv-image')} src={picture[0].url}/>
              : <img className={cx('BasketItemTemplate-contentsDiv-imageDiv-viewDiv-image')} src={defaultImage}/>
            }
          </div>
        </div>
        <div className={cx('BasketItemTemplate-contentsDiv-infoDiv')}>
          <div className={cx('BasketItemTemplate-contentsDiv-infoDiv-titleDiv')} onClick={() => handelMarketDetail()}>
            <span>[{category}] {title}</span>
          </div>
          <div className={cx('BasketItemTemplate-contentsDiv-infoDiv-contents')}>
            <div className={cx('BasketItemTemplate-contentsDiv-infoDiv-contents-description')} onClick={() => handelMarketDetail()}>{description}</div>
              <div className={cx('BasketItemTemplate-contentsDiv-infoDiv-contents-info')}>
                가격: {price}원, 
                카테고리: {category}
                <div className={cx('BasketItemTemplate-contentsDiv-infoDiv-contents-info-contactDiv')}>
                  <button className={cx('BasketItemTemplate-contentsDiv-infoDiv-contents-info-contactDiv-button')} onClick={() => handelDeleteBasket(basketIdx)}>장바구니 취소</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BasketItem);