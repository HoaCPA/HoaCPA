import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, DiscoverIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToriiGate } from '@fortawesome/free-solid-svg-icons';
import ItemIntroduce from '~/components/ItemIntroduce/ItemIntroduce';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Đang Follow" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Khám phá" to={config.routes.discover} icon={<DiscoverIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            {/* Phần này kiểm tra chưa có user mới hiện */}
            {/* <div className={cx('container-item', 'test')}>
                <p className={cx('des-login')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                <Button outline large className={cx('sidebar-login')}>
                    Đăng nhập
                </Button>
            </div> */}

            {/* Các tài khoản đang follow */}
            <div className={cx('container-item')}>
                <SuggestedAccounts label="Các tài khoản đang follow" />
            </div>

            {/* Một số trang web thân cận */}
            <div className={cx('container-item')}>
                <Button text leftIcon={<FontAwesomeIcon icon={faToriiGate} />} className={cx('btn-animated')}>
                    Tạo hiệu ứng
                </Button>
                <ItemIntroduce
                    className={cx('item-introduce')}
                    contents={['Giới thiệu', 'Bảng tin', 'Liên hệ', 'Sự nghiệp', 'ByteDance']}
                />
                <ItemIntroduce
                    className={cx('item-introduce')}
                    contents={['TikTok for Good', 'Quảng cáo', 'Developers', 'TikTok Rewards']}
                />
                <ItemIntroduce
                    className={cx('item-introduce')}
                    contents={[
                        'Trợ giúp',
                        'An toàn',
                        'Điều khoản',
                        'Quyền riêng tư',
                        'Cổng thông tin tác giả',
                        'Hướng dẫn cộng đồng',
                    ]}
                />
                <ItemIntroduce className={cx('item-introduce')} contents={['Thêm']} />
                <ItemIntroduce className={cx('item-introduce')} contents={['@ 2024 TikTok']} />
            </div>
        </aside>
    );
}

export default Sidebar;
