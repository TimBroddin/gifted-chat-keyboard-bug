import {Navigation} from 'react-native-navigation';
import ChatWindow from './ChatWindow';

const registerScreens = () => {
  Navigation.registerComponent('example.chatWindow', () => ChatWindow);

}


registerScreens(); // this is where you register all of your app's screens


Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.chatWindow', // this is a registered name for a screen
      icon: require('./img/one.png'),
      selectedIcon: require('./img/one_selected.png'),
      title: 'Screen One'
    },
  ]
});


export default {};