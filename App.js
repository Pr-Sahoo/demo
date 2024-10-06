
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <Navbar title= "Homelander" about="Homelander"/> */}
      <Navbar title="Icoder" about="blog"/>
      <div className="container my-4">
      <TextForm heading="Enter text to analyze"/>
      </div>
    </>
  );
}

export default App;
