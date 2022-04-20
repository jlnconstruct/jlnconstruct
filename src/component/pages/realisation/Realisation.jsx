import React, { useState } from 'react'
import "./Realisation.css";

function Realisation() {

const [listService,setListService] = useState([
    {
        nom: "Aménagement exterieur"
    },
    {
        nom: "Construction"
    },
    {
        nom: "Rénovation"
    }
])


  return (
    <main>
        <h2 className="titre_realisation">Réalisation</h2>
        <div className="contenu_block">
            {listService.map((item) => {
                <h2 className="titre_service_block">{item.nom}</h2>
            })}
            <div className="liste_photo">
            
                <img src="" alt="" />
            </div>
        </div>
    </main>
  )
}

export default Realisation