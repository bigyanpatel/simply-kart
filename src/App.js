import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { AppRoute } from "./components/Route/AppRoute";
import { useDataStore } from "./contexts/DataStoreContext";
import { ToastContainer } from 'react-toastify';

function App() {
  const { showLoader } = useDataStore();
  return (
    <>
      {showLoader && <Loader />}
      <div className="app">
        <ToastContainer />
        <AppRoute />
      </div>
    </>
  );
}

export default App;