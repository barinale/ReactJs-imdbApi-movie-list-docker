import {AllRouter} from './Router/AllRouter'
import { Header,Footer } from './componenets';
function App() {
  return (
    // <div className="flex flex-col  dark:bg-slate-800 h-screen">
    //   <Header />
    //   <AllRouter className="flex-shrink h-full  "/>
    //   <Footer className=""/>
    // </div>
    <div className="flex flex-col min-h-screen  justify-between dark:bg-slate-800">
      <Header />
      <AllRouter className="  "/>
      <Footer className=""/>
    </div>
  );
}

export default App;
