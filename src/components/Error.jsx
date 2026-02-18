import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-danger text-center mb-4">Error: No se encuentra la Ruta</h1>
            <Link className="btn-primary-custom mt-3" to='/'>Volver a Home</Link>
        </div>
    )
}

export default Error;