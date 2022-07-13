import React from "react";
import './Containers.css';
import Header from "../components/Header";
import Footer from "../components/Footer";


const Science = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="main">
                <br/><br/>
                <h2>Science Facts</h2>
                <br/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, odit dolorem porro molestiae aliquam adipisci, rem fugiat inventore voluptatum maxime facilis in ducimus beatae, excepturi consectetur cum sunt! Fugit, repudiandae?</p>
                <br/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, odit dolorem porro molestiae aliquam adipisci, rem fugiat inventore voluptatum maxime facilis in ducimus beatae, excepturi consectetur cum sunt! Fugit, repudiandae?</p>
                <br/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, odit dolorem porro molestiae aliquam adipisci, rem fugiat inventore voluptatum maxime facilis in ducimus beatae, excepturi consectetur cum sunt! Fugit, repudiandae?</p>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Science;