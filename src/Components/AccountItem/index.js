import clsx from 'clsx';
import styles from './AccountItem.module.scss';

function AccountItem() {
   return (
      <div className={clsx(styles.wrapper)}>
         <img
            className={clsx(styles.avatar)}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c2ab1b921b090cc6f94dfdaa81d1d864~c5_300x300.webp?x-expires=1669284000&x-signature=qLDKazhuqluNj9PNBJ%2FK0k%2Fxo64%3D"
            alt="Avatar"
         />
         <div className={clsx(styles.info)}>
            <h4 className={clsx(styles.username)}>vtvgo</h4>
            <span className={clsx(styles.name)}>VTV GO</span>
         </div>
      </div>
   );
}

export default AccountItem;
