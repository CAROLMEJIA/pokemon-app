import React from "react";
import {Link} from "react-router-dom";
import pikachu from "../../img/pikachu-happy.gif";
import styles from "./landingPage.module.css";

function LandingPage(){
    return(
        <div className={styles.contenedor}>
            <div className={styles.contenedor2}>
                 <h1>Pokémon App</h1>
                 <img src={pikachu} className={styles.img}/>
                <Link to="/home"><button className={styles.boton}>Ingresar</button></Link>

            </div>
            
            
        </div>
    )
}

export default LandingPage;