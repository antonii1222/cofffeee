import logo from "./../../img/logo.png";
import tg from "./../../img/tg.svg";
import vk from "./../../img/tg.svg";
import "./style.css"

function Head () {
    return (
        <nav className="nav">   
                    <div className="start">
                      <img src={logo} alt="" />
                      <h1 className="nav-name">COFFE.MY</h1>
                      </div>
                  
                      <div className="menu">
                        <ul className="start-menu">
                          <li className="start-title"><a href="#!" className="start-href">Меню кофейни</a></li>
                          <li className="start-title"><a href="#!" className="start-href">Главная</a></li>
                          <li className="start-title"><a href="#!" className="start-href">Корзина</a></li>
                          </ul>
                        </div>
                  
                      <div className="start-con">
                         <a href="#!" className="number">+7 977 169 66 07</a>
                        <img src={tg} alt="" className="icons-start" />
                        <img src={vk} alt="" className="icons-start" />
                       </div>
                      </nav>
    )
}

export default Head;