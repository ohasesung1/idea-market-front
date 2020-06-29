import signStore from './sign';
import dialogStore from './dialog';
import myInfoStore from './myInfo';
import marketStore from './market';
import uploadStore from './upload';

const stores = {
  sign: new signStore(),
  dialog: new dialogStore(), 
  myInfoStore: new myInfoStore(),
  marketStore: new marketStore(),
  uploadStore: new uploadStore(),
};

export default stores;