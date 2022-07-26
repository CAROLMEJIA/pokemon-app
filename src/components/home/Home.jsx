import React from "react";
import Cards from "../cards/Cards.jsx";
import Nav from "../nav/Nav.jsx";
import styles from "./home.module.css";

export default function Home(){

    return(
        <div className={styles.contenedor}>
            <Nav></Nav>
            <br/>
            <Cards></Cards>
        </div>
    )
}