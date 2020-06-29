import React from 'react';
import classnames from 'classnames/bind';
import style from './MarketWrite.scss';

const cx = classnames.bind(style);

const MarketWrite = ({
  titleObj,
  descriptionObj,
  emailObj,
  phoneObj,
  nameObj,
  priceObj,
  categoryObj
}) => {

  const { title ,setTitle } = titleObj;
  const { description ,setDescription } = descriptionObj;
  const { email ,setEmail } = emailObj;
  const { phone ,setPhone } = phoneObj;
  const { name ,setName } = nameObj;
  const { price ,setPrice } = priceObj;
  const { category ,setCategory } = categoryObj;


  return (
    <div className={cx('MarketWriteTemplate')}>
      <div className={cx('MarketWriteTemplate-contentsDiv')}>
        <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv')}>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-nameDiv')}>
            <span>* 제목</span>
          </div>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents')}>
            <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv')}>
              <input className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv-input')} placeholder={'제목'}/>
            </div>
          </div>
        </div>
        <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv')}>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-nameDiv')}>
            <span>* 아이디어 설명</span>
          </div>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents')}>
            <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-textareaDiv')}>
              <textarea className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-textareaDiv-textarea')} placeholder={'제목'}/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('MarketWriteTemplate-contentsDiv')}>

      </div>
      <div className={cx('MarketWriteTemplate-contentsDiv')}>

      </div>
      <div className={cx('MarketWriteTemplate-contentsDiv')}>

      </div>
    </div>
  );
};

export default MarketWrite;