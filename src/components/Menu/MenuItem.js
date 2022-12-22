import clsx from 'clsx';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
   return (
      <Button
         className={clsx(styles.menuItem, { [styles.separate]: data.separate })}
         to={data.to}
         leftIcon={data.leftIcon}
         rightIcon={data.rightIcon}
         onClick={onClick}
      >
         {data.title}
      </Button>
   );
}

export default MenuItem;
