import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link>
                    <img
                        className={cx('avatar')}
                        src="https://yt3.ggpht.com/yti/AOXPAcXRl1G6hUvsc7oJVMkIk7lZdl3J13B0FPxkFKSZjw=s88-c-k-c0x00ffffff-no-rj"
                        alt=""
                    />
                </Link>
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-inf')}>
                    <Link>
                        <p className={cx('nickname')}>
                            <strong>liruixi_</strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>LIRUIXI</p>
                        <p className={cx('analytics')}>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Theo dõi</span>
                            <strong className={cx('value')}>100M </strong>
                            <span className={cx('label')}>Thích</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
