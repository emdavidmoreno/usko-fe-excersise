import PurchaseHistory from '../purchase-history/PurchaseHistory';
import PurchaseDetail from '../purchase-detail/PurchaseDetail';
import { AppProvider } from '../../data/context';
import { Route, Routes } from 'react-router-dom';

function App() { 
   
  return (
    <AppProvider>
      <div className='flex flex-col w-screen h-screen p-4 md:w-1/4 mx-auto'>
        <Routes>
          <Route path='/' element={<PurchaseHistory />} />
          <Route path='/details' element={<PurchaseDetail />} />
        </Routes>
      </div>
    </AppProvider>
  );  
}

export default App;