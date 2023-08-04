import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <>
            <Tippy interactive delay={[500, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Link>
                        <img
                            className={cx('avatar')}
                            src="https://yt3.ggpht.com/yti/AOXPAcXRl1G6hUvsc7oJVMkIk7lZdl3J13B0FPxkFKSZjw=s88-c-k-c0x00ffffff-no-rj"
                            alt=""
                        />
                    </Link>
                    <div className={cx('item-inf')}>
                        <p className={cx('nickname')}>
                            <strong>liruixi_</strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>LIRUIXI</p>
                    </div>
                </div>
            </Tippy>
        </>
    );
}

export default AccountItem;
