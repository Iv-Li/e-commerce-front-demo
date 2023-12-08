import { RouterProvider} from 'react-router-dom';
import { useGlobalContext } from './context';
import router from "./router.jsx";
function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return <RouterProvider router={router}/>;
}

export default App;