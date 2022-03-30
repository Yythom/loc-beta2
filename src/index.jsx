import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './App.scss'
import './var.scss'
import './font/iconfont.css';
dayjs.locale('zh-cn');

if (process?.env?.NODE_ENV !== "development") window.console.log = () => { }
ReactDOM.render(
    <Provider store={store}>
        < App />
    </Provider>,
    document.getElementById('root')
);
