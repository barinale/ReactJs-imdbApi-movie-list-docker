import {AllRouter} from './Router/AllRouter'
import { Header,Footer } from './componenets';
function App() {
  return (
    <div className="App dark:bg-slate-800 min-h-screen		">
      <Header />
      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
