import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import logoTikTok from '~/assets/image/TikTok-Logo.png';
import styles from './Image.module.scss';

function Image({ src, alt, fallback: customFallback = logoTikTok, className, ...props }, ref) {
   const [fallback, setFallback] = useState('');
   return (
      <img
         className={clsx(styles.wrapper, className)}
         src={fallback || src}
         alt={alt}
         ref={ref}
         {...props}
         onError={() => setFallback(customFallback)}
      />
   );
}

export default forwardRef(Image);
