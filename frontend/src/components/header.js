import React from "react";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Student Management</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                <a className="nav-link" href="/add">Add Student</a>
                <a className="nav-link" href="/ret">Ret Student</a>
                <a className="nav-link" href="/up">Update Student</a>
                
            </div>
            </div>
        </div>
    </nav>
    )
}

export default Header;