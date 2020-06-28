import React from 'react';
import classnames from 'classnames/bind';
import style from './MyInfoTemplate.scss';
import moment from 'moment';

const cx = classnames.bind(style);

const MyInfoTemplate = ({ myInfo }) => {

  const { memberId, phone, email, name, joinDate } = myInfo;

  const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');

  return (
    <div className={(cx('MyInfoTemplate'))}>
      <div className={(cx('MyInfoTemplate-title'))}>
        <span>내 정보</span>
      </div>
      <div className={(cx('MyInfoTemplate-contentsDiv'))}>
        <div className={(cx('MyInfoTemplate-contentsDiv-title'))}>
          <span>이름/전화번호/이메일</span>
        </div>
        <div className={(cx('MyInfoTemplate-contentsDiv-content'))}>
          <span>이름 : {name}</span>
        </div>
        <div className={(cx('MyInfoTemplate-contentsDiv-content'))}>
          <span>E-Mail : {email}</span>
        </div>
        <div className={(cx('MyInfoTemplate-contentsDiv-content'))}>
          <span>전화 번호 : {phone}</span>
        </div>
        <div className={(cx('MyInfoTemplate-contentsDiv-content'))}>
          <span>가입 일자 : {joinDateFormat}</span>
        </div>
      </div>
    </div>
  );
};

export default MyInfoTemplate;