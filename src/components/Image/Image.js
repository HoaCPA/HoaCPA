import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(images.imageError);
    };

    return <img ref={ref} src={fallBack || src} alt={alt} {...props} className={className} onError={handleError} />;
});

Image.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
};
export default Image;
