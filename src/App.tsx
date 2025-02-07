import './App.css';
import PageFooter from './components-space/PageFooter';
import PageHeader from './components-space/PageHeader';
import PageHomeLook from './components-space/PageHomeLook';
import PageProductType1 from './components-space/PageProductType1';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageHomeLook />
      <PageProductType1 />
      <PageFooter />
    </div>
  );
}

export default App;
