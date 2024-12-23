 import big1 from "./../img/big1.svg"
 
 function Product () {
    return (
        <main className="section">
            <div className="sec-prod">

                <div className="sec-prod-info">

                <div className="sec-prod-href"><a href="#!" className="prod-href">Назад</a></div>

                <div className="sec-info">
                    <h2 className="sec-prod-item">Капучино</h2>
                    <p className="sec-prod-title">
                    Молочный кофейный <br />
                    напиток на основе эспрессо <br />
                    и нежного <br />
                    взбитого молока. Наше зерно: <br />
                    свежеобжареная 100% арабика <br />
                    Бразилия Моджиана <br />
                    </p>

                    <div className="sec-prod-info-block">

                        <div className="sec-prod-info-title">
                        <p className="prod-info-block-one">350 мл</p>
                        <p className="prod-info-block-two">170₽</p>
                        </div>
                    <div className="sec-prod-info-btn">
                        <a href="#!" className="prod-info-href"><button className="prod-info-btn">Купить</button></a>
                    </div>
                    </div>
                </div>
                </div>

                <div className="sec-prod-foto">
                    <img src={big1} alt="" className="prod-foto" />
                </div>
            </div>
        </main>
    )
 }

 export default Product