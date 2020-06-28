import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import style from './MarketItem.scss';
import noImage from 'assets/image/noImageLogo.png';
import { withRouter } from 'react-router-dom';

const cx = classnames.bind(style);

const MarketItem = ({ item, history }) => {

  const { idx, title, joinDate, picture, push, description, category } = item;

  const [isPicture, setIsPicture] = useState(false);
  
  const handelMarketDetail = () => {
    localStorage.setItem('idea-market-idx', idx);

    history.push('/market-detail');
  };

  useEffect(() => {
    if (picture) {
      setIsPicture(true);
    }
  }, [picture]);
  
  return (
    <div className={cx('MarketItem')} onClick={() => handelMarketDetail()}>
      <div className={cx('MarketItem-imageDiv')}>
        {
          isPicture ?
            <img className={cx('MarketItem-imageDiv-image')} src={picture[0].url}/>
          : <img  className={cx('MarketItem-imageDiv-image')} src={noImage}/>
        }
      </div>
      <div className={cx('MarketItem-titleDiv')}>
        <span className={cx('MarketItem-titleDiv-category')}>[{category}]</span>
        <span>{title}</span>
      </div>
      <div className={cx('MarketItem-pushDiv')}>
        <span>추천수: {push}</span>
      </div>
      <div className={cx('MarketItem-previewDiv')}>
        {description}
      </div>
    </div>
  );
};

export default withRouter(MarketItem);