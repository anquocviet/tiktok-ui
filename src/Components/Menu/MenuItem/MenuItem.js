import clsx from 'clsx';
import styles from './MenuItem.module.scss';
import Button from '~/Components/Button';

function MenuItem({ data }) {
   return (
      <Button className={clsx(styles.wrapper)} leftIcon={data.leftIcon} rightIcon={data.rightIcon}>
         {data.title}
      </Button>
   );
}

export default MenuItem;
