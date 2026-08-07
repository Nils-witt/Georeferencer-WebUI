import './style.scss';
import 'maplibre-gl/dist/maplibre-gl.css';
import EditProjectPage from './pages/EditProjectPage.tsx';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import { setWorkerUrl } from 'maplibre-gl';

setWorkerUrl(workerUrl);
function App() {
    return <EditProjectPage />;
}

export default App;
