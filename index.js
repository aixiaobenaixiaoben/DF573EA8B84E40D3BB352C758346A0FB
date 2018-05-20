import { AppRegistry, YellowBox } from 'react-native';
import App from './src/navigator/Stack';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('RNNative', () => App);
