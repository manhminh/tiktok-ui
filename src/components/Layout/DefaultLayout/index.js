import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar';
import styles from './DefaultLayoutModule.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('layout')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
