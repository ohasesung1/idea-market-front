import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import GroupingState from 'lib/HookState/GroupingState';
import MarketWriteTemplate from 'components/MarketWrite/MarketWrite';
import { withRouter } from 'react-router-dom';

const MarketWriteConatiner = ({ store, history }) => {

  const { writeMarket } = store.marketStore;
  const { modal } = store.dialog;
  const { uploadImage } = store.uploadStore;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('IT');
  const [images, setImages] = useState([]);

    // images url 값 설정
    const handleImageSetting = imageFiles => {
      const fileList = images;
      const fileLength = imageFiles.length;
      
      // url 값 변수 저장 && contents card 데이터 저장
      for (let i = 0; i < fileLength; i++) {
        const file = imageFiles[i];
  
        fileList.push(file);
      }
  
      setImages(fileList);
    };
  

    // file input 태그의 이벤트 value 가져오기
    const handleImageChange = event => {
      const imageFiles = event.target.files;
  
      handleImageSetting(imageFiles);
  
      event.target.value = null;
    };

  const handleImageData = async () => {
    let picture = [];

    for(let image of images) {
      const formData = new FormData();

      formData.append('img', image);

      await uploadImage(formData)
        // eslint-disable-next-line no-loop-func
        .then(response => {
          const data = {
            uploadName: response.data.imgs[0].fileName,
            type: response.data.imgs[0].fileType
          };

          picture = [...picture, data];
        }).catch(error => {
          const { status } = error.response;

          if(status === 400){
            modal({
              title: 'Error',
              stateType: 'error',
              contents: '이미지가 아닙니다.'
            });
            
            return true;
          }
        });
    }

    return { picture };
  };

  const requestWriteMarket = async () => {

    let data;

    const { picture } = await handleImageData();

    if (title.length === 0 || description.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '제목 혹은 아이디어 설명을 적어주세요!'
      });

      return;
    }

    if (email.length === 0 || phone.length === 0 || name.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '기본 정보 혹은 연락처를 적어주세요!'
      });

      return;
    }

    if (price.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '가격을 정해주세요!'
      });

      return;
    }

    if (category === 'default') {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '카테고리를 정해주세요!'
      });

      return;
    }

        
    if (images.length === 0) {
      data = {
        title,
        description,
        email,
        phone,
        name,
        price,
        category,
        picture: null,
      };
    } else {
      data = {
        title,
        description,
        email,
        phone,
        name,
        price,
        category,
        picture,
      };
    }

    await writeMarket(data).
      then(response => {
        modal({
          title: 'Success!',
          stateType: 'success',
          contents: '등록 완료!'
        });
        
        history.goBack(1);
      })
      .catch(error => {
        const { status } = error.response;

        if (status === 400) {
          modal({
            title: 'Warning!',
            stateType: 'warning',
            contents: '양식 오류.'
          });

          return;
        }

        if (status === 500) {
          modal({
            title: 'Warning!',
            stateType: 'warning',
            contents: '서버 에러.'
          });

          return;
        }
      });
  };

  return (
    <MarketWriteTemplate
      titleObj={GroupingState('title', title, setTitle)}
      descriptionObj={GroupingState('description', description, setDescription)}
      emailObj={GroupingState('email', email, setEmail)}
      phoneObj={GroupingState('phone', phone, setPhone)}
      nameObj={GroupingState('name', name, setName)}
      priceObj={GroupingState('price', price, setPrice)}
      categoryObj={GroupingState('category', category, setCategory)}
      requestWriteMarket={requestWriteMarket}
      handleImageChange={handleImageChange}
    />
  );
};

export default withRouter(inject('store')(observer(MarketWriteConatiner)));