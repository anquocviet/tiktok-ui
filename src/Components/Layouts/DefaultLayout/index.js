import { Header } from '~/Components/Layouts/Components';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <Sidebar />
            {children}
         </div>
      </div>
   );
}

export default DefaultLayout;
