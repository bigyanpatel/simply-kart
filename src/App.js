import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { AppRoute } from "./components/Route/AppRoute";
import { useDataStore } from "./contexts/DataStoreContext";

function App() {
  const { showLoader } = useDataStore();
  return (
    <>
      {showLoader && <Loader />}
      <div className="app">
        <AppRoute />
      </div>
    </>
  );
}

export default App;