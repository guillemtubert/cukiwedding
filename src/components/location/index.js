import React from 'react'
import Sectiontitle from '../section-title'
import './style.css'

const Location = () => {
    return(

        
    <div id="event" className="service-area section-padding">
        <div className="container">
            <Sectiontitle section={'La cerimònia'}/>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img className="ceromony-img" src='https://www.calendarpedia.com/images/espana/mensual/2024/calendario-de-mayo-2024.png' alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content ceromony-content2">
                            {/*https://www.calendarpedia.com/images/espana/mensual/2024/calendario-de-mayo-2024.png*/}
                            <h3>Dia i hora</h3>
                            {/* <span>Dissabte, 4 de maig del 2024</span> */}
                            {/* <span>256 Apay Road,Califonia Bong, London</span> */}
                            <p>Celebrarem el casament el dissabte 4 de maig del 2024. <br></br> L'arribada sera a partir de les 16:30h.</p>
                            {/* <Link to="/">See Location</Link> */}
                        </div>
                    </div>
                    {/* <div className="col-lg-5">
                        <div className="ceromony-img">
                            <img src={strory2} alt=""/>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <a href="https://maps.app.goo.gl/vL5HdKrXr6h6GeEHA" target="_blank" rel="noopener noreferrer">
                                    <img className="ceromony-img" src="https://www.masmuxach.com/imgs/foto.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Ubicació</h3>
                                {/* <span>Mas Muxach</span>
                                <span>Brunyola, Girona</span> */}
                                <p>La cerimònia, el convit i la festa les durem a terme al MAS MUXACH. <br></br>És una casa pairal situada al municipi de Brunyola (Girona).<br></br> Si feu click a la foto us obrirà la ubicació amb el google maps. És un camí sense nom.</p>
                                {/* <a href="https://maps.app.goo.gl/vL5HdKrXr6h6GeEHA" target="_blank" rel="noopener noreferrer">LOCALITZACIÓ</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img className="ceromony-img" src='https://www.masmuxach.com/imgs/galeries/interiors//10.jpg' alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content">
                            <h3>On dormir</h3>
                            <p>La casa disposa de llits perquè tothom qui vulgui pugui quedar a dormir.<br></br> Es tracta d'habitacions compartides amb lliteres, ja que és una casa rural.<br></br> D'aquesta manera podrem allargar la festa tant com vulguem i no caldrà que ningú es procupi d'agafar el cotxe. Els més ben aventurats ni tocaran el llit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img className="ceromony-img" src='https://m.media-amazon.com/images/M/MV5BMTQxMzE3Mjg4MV5BMl5BanBnXkFtZTgwNDMwNjMwMjE@._V1_.jpg' alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content">
                            <h3>La ressaca</h3>
                            <p>L'endemà al matí qui hagi dormit a la casa podrà gaudir d'un bon esmorzar per intentar recuperar els cinc sentits. Disposarem de piscina, pista multi esportiva i una half pipe d'skate.<br></br> Tenim l'opció de quedar-nos a dinar i poder allargar una mica més la festa. El menú són 25€ per persona que haurà de pagar cadascú de la seva butxaca.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img className="ceromony-img" src='https://media.tenor.com/VWlHE5LJ98kAAAAC/suit-up.gif' alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content">
                            <h3>Dress code</h3>
                            <p>Cadascú pot venir vestit com se senti més còmode, però ben elegant!<br></br>Recomanem NO portar talons d'agulla, ja que el terra és de gespa natural.<br></br>A més, com és costum en els casaments, millor que no porteu un vestit blanc. Deixem aquest color a la núvia!</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='Ceremony-wrap'>
                {/* <Testing/> */}
            </div>
        </div>
    </div>
    )
}
export default Location;