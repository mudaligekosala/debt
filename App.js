import { Navigation } from 'react-native-navigation';

//import pages
import Login from './src/view/Login';
import Savings from './src/view/Savings';
import Income from './src/view/Income';
import Expense from './src/view/Expense';
import Home from './src/view/Home';
import AddWallet from './src/view/AddWallet';




Navigation.registerComponent('debt.Login',() => Login);
Navigation.registerComponent('debt.home', ()=> Home);
Navigation.registerComponent('debt.savings', ()=>Savings);
Navigation.registerComponent('debt.income', ()=>Income);
Navigation.registerComponent('debt.expense', ()=>Expense);
Navigation.registerComponent('debt.add_wallet', ()=>AddWallet);



export default () => Navigation.startSingleScreenApp({
  screen:{
    screen:'debt.income',
    title:'login',
    navigatorStyle:{
      navBarHidden:true
    }
  }
})