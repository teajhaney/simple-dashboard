import { Dashboard } from './components/dashboard/Dashboard';
import { mockRootProps } from './data/dashboardMockData';

function App() {
  return <Dashboard {...mockRootProps} />;
}

export default App;
