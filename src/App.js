import './App.css';
import Nav from "./components/Nav"
import Banner from "./components/Banner";
import Ntrabalho from "./components/NossoTrabalho";
import CardTrabalho from "./components/CardTrabalho";
import Servicos from "./components/Serviços";
import Form from "./components/Form";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
        <Nav></Nav>
        <div className="container-fluid">
            <Banner></Banner>
            <Ntrabalho></Ntrabalho>
            <Servicos></Servicos>
            <Form></Form>
            <Rodape></Rodape>
        </div>
    </>
  );
}

export default App;
