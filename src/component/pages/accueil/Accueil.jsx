import React, { useState } from 'react';
import "./Accueil.css";

function Accueil() {

    const [imageCarousel,setImageCarousel] = useState([])

    const [services , setService] = useState([
        {
           image : "/assets/amenagement_exterieur1.jpg" ,
           contenu : "Aménagement Extérieur" 
        },
        {
            image : "/assets/construction.jpg" ,
           contenu : "Construction"
        },
        {
            image : "/assets/renovation.jpg" ,
           contenu : "Rénovation"
        }
    ])


  return (
    <div className='container_accueil'>
        <div className="carousel_image"></div>
        <div className="description_entreprise">
            <h2 className="titre_description">JLN CONSTRUCT : VOTRE ENTREPRISE DE RÉNOVATION À COUTHUIN, HUY ET AUX ALENTOURS</h2>
            <p className="paragraphe_description">
             Vous préparez un projet de bâtir ou de remise à neuf ? Vous êtes à la recherche d’une entreprise de rénovation à Couthuin, 
             Huy ou aux <br />  alentours ? Vous pouvez faire appel à ma société spécialisée dans le domaine depuis plus de 20 ans. Je mets 
             toute cette expérience à la disposition de vos idées et attentes. N’hésitez pas à me faire part de vos besoins !
            </p>
        </div>
        <div className="service">
            <h2 className="titre_service">Nos Services</h2>
            <div className="block_tuiles_service">
                {
                    services.map((service,index)=>(
                        <div className={"tuile_service"} key={"service_"+index}>
                            <img src={service.image} alt="" />
                            <p>{service.contenu}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Accueil