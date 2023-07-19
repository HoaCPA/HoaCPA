import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ecda013bbf823982cc6f4882e598734e~c5_100x100.jpeg?x-expires=1689908400&x-signature=lcbozv5HkvC0hWTd%2FM0Ffifz%2F2g%3D"
                alt=""
            />
            <div className={cx('item-inf')}>
                <p className={cx('nickname')}>
                    <strong>liruixi_</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>LIRUIXI</p>
            </div>
        </div>
    );
}

export default AccountItem;
