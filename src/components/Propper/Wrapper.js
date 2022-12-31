import classNames from 'classnames/bind';
import styles from './PropperModule.scss';

const cx = classNames.bind(styles);
function Wrapper({ children }) {
    return <div className={cx('propper')}>{children}</div>;
}

export default Wrapper;
