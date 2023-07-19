import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchBtn } from '~/components/Icons';
import { Link } from 'react-router-dom';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);

function InputSearch() {
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 600);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!debouncedValue.trim()) return;

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(e.target.value);
    };

    const renderResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h4 className={cx('search-title')}>Tài khoản</h4>
                {searchResult.map((result) => (
                    <AccountItem key={result.id} data={result} />
                ))}
                <Link to={'/search'} className={cx('search-title-more')}>
                    Xem tất cả kết quả dành cho " {searchValue} "
                </Link>
            </PopperWrapper>
        </div>
    );

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={renderResult}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    ></input>
                    <div className={cx('clear-loading')}>
                        {debouncedValue && !loading && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    </div>
                    <button className={cx('search-btn')}>
                        <SearchBtn />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default InputSearch;
