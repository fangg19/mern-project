import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-js';

const reactotron = Reactotron.configure({ name: 'React Native Demo' })
  .use(reactotronRedux())
  .connect();

export default reactotron;
