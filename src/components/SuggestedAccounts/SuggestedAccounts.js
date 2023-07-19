import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <>
            <p className={cx('heading')}>{label}</p>
            <div className={cx('account')}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
            <p className={cx('more-account')}>Xem thêm</p>
        </>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
