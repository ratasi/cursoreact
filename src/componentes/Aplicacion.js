import React, { Component } from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component {

    render() {
        const productos = [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Carpeta', precio: 1772},
            {nombre: 'USB', precio: 2091},
            {nombre: 'Reproductor musical ', precio: 1000}
        ]
        return (
            <div>
                <Header 
                    titulo="Nuestra tienda virtual"
                />
                <Productos 
                    productos={productos}
                />
                <Footer />
            </div>
        )
    }
}

export default Aplicacion;