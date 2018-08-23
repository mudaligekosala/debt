import { Navigation } from 'react-native-navigation';

//import pages
import Login from './src/view/Login';

Navigation.registerComponent('debt.Login',() => Login);

export default () => Navigation.startSingleScreenApp({
  screen:{
    screen:'debt.Login',
    title:'login',
    navigatorStyle:{
      navBarHidden:true
    }
  }
})