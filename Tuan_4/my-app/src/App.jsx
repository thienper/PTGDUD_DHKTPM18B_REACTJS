
import { useEffect, useState } from "react";
import './App.css';
import Item from "./assets/Item";
import Emma from './components/Emma';
import Info from "./components/Info";

function App() {
  var url = "https://67c83bb60acf98d070858496.mockapi.io/myreactapp/myAppReact";
  var [arr, setArr] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    var fn = fetch(url).then((r) => r.json())
      .then(
        (data) => {
          setArr(data)
        }
      )
  }, []
  )
  return (
    <>
      <div className='container-fluid'>
        <div className='row  g-0'>
          <div className='text-left col-12'>
            <Emma />
          </div>
          <div className="col-12"><Info /></div>
          <div className="col-12 item">
            <ul className="row g-0">
              {arr.map((e) => (
                <li key={e.id} className="col-sm-6 col-md-4 col-lg-3">
                  <Item id={e.id} name={e.title} img={e.image} />
                </li>
              ))}
            </ul>
          </div>


        </div>

      </div>

    </>
  )
}

export default App
