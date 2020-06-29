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
  categoryObj,
  requestWriteMarket,
  handleImageChange
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
              <input className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv-input')} placeholder={'제목'} value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv')}>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-nameDiv')}>
            <span>* 아이디어 설명</span>
          </div>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents')}>
            <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-textareaDiv')}>
              <textarea className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-textareaDiv-textarea')} placeholder={'내용'}  value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('MarketWriteTemplate-contentsDiv')}>
      <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv')}>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-nameDiv')}>
            <span>* E-Mail</span>
          </div>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents')}>
            <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv')}>
              <input className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv-input')} placeholder={'E-Mail'}  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv')}>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-nameDiv')}>
            <span>* 전화번호</span>
          </div>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents')}>
            <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv')}>
              <input className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv-input')} placeholder={'전화번호'}  value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('MarketWriteTemplate-contentsDiv')}>
      <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv')}>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-nameDiv')}>
            <span>* 예상 가격</span>
          </div>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents')}>
            <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv')}>
              <input className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv-input')} placeholder={'예상 가격 (원)'}  value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv')}>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-nameDiv')}>
            <span>* 판매자 이름</span>
          </div>
          <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents')}>
            <div className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv')}>
              <input className={cx('MarketWriteTemplate-contentsDiv-titleDiv-contents-inputDiv-input')} placeholder={'이름'}  value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('MarketWriteTemplate-optionDiv')}>
        <div className={cx('MarketWriteTemplate-optionDiv-imageUploadDiv')}>
          <input  className={cx('MarketWriteTemplate-optionDiv-imageUploadDiv-image')} type={'file'}  onChange={handleImageChange} multiple={'multiple'}/>
        </div>
        <div className={cx('MarketWriteTemplate-optionDiv-categoryDiv')}>
          <select className={cx('MarketWriteTemplate-optionDiv-categoryDiv-category')} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>IT</option>
            <option>가전제품</option>
            <option>장식품</option>
            <option>음식물</option>
            <option>도서</option>
            <option>미용/화장</option>
            <option>아동 물품</option>
            <option>가구</option>
          </select>
        </div> 
        <div className={cx('MarketWriteTemplate-optionDiv-writeButtonDiv')}>
            <button  className={cx('MarketWriteTemplate-optionDiv-writeButtonDiv-button')} onClick={() => requestWriteMarket()}>작성</button>
        </div> 
      </div>
    </div>
  );
};

export default MarketWrite;