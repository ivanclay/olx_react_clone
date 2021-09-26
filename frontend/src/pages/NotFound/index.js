import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Página não encontrada.</h3>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Page;