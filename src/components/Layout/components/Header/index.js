
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEarthAsia,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faMoon, faUser, } from '@fortawesome/free-regular-svg-icons';

import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css'; 
import classNames from 'classnames/bind';
import routeConfig from '~/config/routes';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { BoxMail, LogoTiktok, MoreBtn, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import InputSearch from '../InputSearch';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                    type: 'language',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    type: 'language',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: './@me',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        to: './coin',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Cài đặt',
        to: './settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Đăng xuất',
        to: './logout',
        separate: true
    },
]

function Header() {
    const currentUser = true;

    // hangleLogic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routeConfig.home} className={cx('logo-link')}>
                    <LogoTiktok />
                </Link>

                <InputSearch />
                
                <div className={cx('actions')}>
                    <Button text>Tải lên</Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" placement='bottom'>
                                <button className={cx('action-btn')}>
                                <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <BoxMail />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                            {/* <Button outline large >Đăng nhập</Button> */}
                            {/* <Button outline small>
                             Follow
                            </Button> */}
                            {/* <Button rounded>Tải ứng dụng</Button> */}

                            {/* Đây là phần hiển thị thông tin ở dấu 3 chấm cạnh đăng nhập */}
                        </>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0084894d9c5e92339f6346def4819ddc~c5_100x100.jpeg?x-expires=1689217200&x-signature=tuTasFoq5sWvZqB9pC8SWYERE0o%3D"
                            />
                        ) : (
                            <div className={cx('more-btn')}>
                                <MoreBtn />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
