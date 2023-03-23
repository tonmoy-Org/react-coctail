import React, { useState } from 'react';

const Header = (props) => {
    const [name , setName] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(name);
    }
    return (
        <div className='fw-bold'>
            <nav className="navbar bg-danger-subtle px-5">
                <div className="container-fluid">
                    <a href='https://www.thecocktaildb.com/api.php' target='_blank' className="navbar-brand fw-bolder fs-3">The Cocktail</a>
                    <form className="d-flex " role="search" onSubmit={handleSubmit}>
                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                         className="form-control me-2 fw-bold" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success fw-bold" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;