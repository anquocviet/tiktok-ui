import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({ className, to, href, children, type, size, disable, leftIcon, rightIcon, onClick, ...passProps }) {
   let Component = 'button';
   const props = {
      onClick,
      ...passProps,
   };
   if (to) {
      Component = Link;
      props.to = to;
   } else if (href) {
      Component = 'a';
      props.href = href;
   }

   if (disable) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }

   const classes = clsx(styles.wrapper, {
      [className]: className,
      [styles[type]]: type,
      [styles[size]]: size,
      [styles.disable]: disable,
   });
   return (
      <Component className={classes} {...props}>
         {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
         <span className={styles.title}>{children}</span>
         {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </Component>
   );
}

export default Button;
