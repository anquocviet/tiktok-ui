import { Header } from '~/Components/Layouts/Components';

function HeaderOnly({ children }) {
   return (
      <div>
         <Header />
         <div className="container">{children}</div>
      </div>
   );
}

export default HeaderOnly;
