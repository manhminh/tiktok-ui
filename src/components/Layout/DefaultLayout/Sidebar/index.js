import classNames from 'classnames/bind';
import styles from './SidebarModule.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('sidebar')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
