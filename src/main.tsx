
import { AppRegistry } from 'react-native';
import App from './App';

// Register the app
AppRegistry.registerComponent('Wardrobify', () => App);

// For web compatibility
AppRegistry.runApplication('Wardrobify', {
  rootTag: document.getElementById('root')
});
