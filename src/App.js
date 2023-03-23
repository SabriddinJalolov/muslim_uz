import { Button, Form } from "antd";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Inputs from "./components/Inputs";
import Card from "./components/Card";
import Image from "../src/assets/image/islamic.png";
import "./App.css"

function App() {
  const [tori,setnotori]=useState(false)

  const [prayTime, setPrayTime] = useState({
    
    region: "",
    month: "",
    day: "",
  });
  const [data, setData] = useState({});
  const { region, month, day } = prayTime;
  
  async function fetcher() {
    const res = await fetch(
      `https://islomapi.uz/api/daily?region=${region.trim()}&month=${month}&day=${day.trim()}`
    );
    const datas = await res.json();
    setData(datas);
    setnotori(true);

  }

  console.log(data);
  return (
    <div className="App">
      <div className="container">


        <div className="wrapper d-flex">
        <img className="site_logo" src={Image} alt="logo"></img>
        <Form.Item className="color-danger" label="Bugungi namoz vaqti">
        <Button>Bugungi namoz vaqtlari</Button>
      </Form.Item>

        </div>

      <Inputs prayTime={prayTime} setPrayTime={setPrayTime} />
      <Button className="nomoz_vaqti" onClick={fetcher}>Namoz vaqtini ko'rish</Button>
      {tori && <Card {...data} />}
    </div>
    </div>
  );
}

export default App;
