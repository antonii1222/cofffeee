import "./style.css"

function Project ({title, img, skils, item}) {
return (
  <div className="menu-foto-one">
                          <img src={img} alt="" className="menu-coffe-foto" />
                          <p className="menu-coffe-title">{title}</p>
                          <div className="menu-shop">
                              <div className="menu-shop-one">
                              <p className="shop-title-one">{item}</p>
                              <p className="shop-title-two">{skils}</p>
                              </div>
                              <div className="menu-shop-two">
                                  <a href="#!" className="shop-href"><button className="shop-btn">Купить</button></a>
                              </div>
                          </div>
                      </div>  
)

}

export default Project

