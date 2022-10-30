import Content from './components/Content';
import Header from './components/Header/Header';
import SideBar from './components/SideBar';
import Image from './components/Image';

const App = () => {
  return (
    <div className="hotel">
      <Header />
      <Image />
      <SideBar />
      <Content />
    </div> 
  );
};

export default App;