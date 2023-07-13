import { forwardRef, useState } from "react";
import images from "~/assets/images";

const Image = forwardRef(({ className, src, ...props}, ref) => {
    const [fallBack, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(images.imageError)
    }

    return (   
        <img ref={ref} src={fallBack || src} {...props} className={className} onError={handleError} />
    );
})

export default Image;