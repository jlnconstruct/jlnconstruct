import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer>
        <div className="logoHeader">
            <img src="/assets/logoHeader.png" alt="logoHeader" />
        </div>
        <hr />
        <div className="contenu_footer">
            <div className="email_footer">
                <a className="email_lien" href='mailto:jlnconstruct21@hotmail.com'> 
                <img src="/assets/icon/mail.svg" alt="logo mail" /> 
                <p className='mail_paragraphe_footer'>JLNCONSTRUCT21@hotmail.com</p>
              </a>
              </div>
            <div className="telephone_footer"> 
              <img src="/assets/icon/phone.svg" alt="logo phone" /> 
              <p className='telephone_paragraphe_footer'>+32 497/86.91.58</p> 
            </div>
            <div className="tva_footer"> 
              <img src="/assets/icon/doc.svg" alt="logo tva" /> 
              <p className='tva_paragraphe_footer'>BE 0762.910.047</p>
            </div>
            <div className="adresse_entreprise_footer"> 
              <img src="/assets/icon/map.svg" alt="logo map" /> 
              <p className='adresse_paragraphe_footer'>Rue sur les Trixhes 18, 4218 Couthuin</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer