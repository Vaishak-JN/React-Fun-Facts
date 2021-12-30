import { useState } from 'react';

export function Header({ darkMode, toggleDarkMode }) {

    // const [show, setShow] = useState("false");
    // const styles = { height: show ? 0 : "auto" }


    return (
        <header>
            <nav className={darkMode ? "dark" : ""}>

                <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />

                <h1>ReactFacts</h1>

                <div className="toggler">
                    <p className="toggler-light">Light</p>
                    <div className="toggler-slider" onClick={toggleDarkMode} >
                        <div className="toggler-slider-circle"></div>
                    </div>
                    <p className="toggler-dark">Dark</p>
                </div>


            </nav>
        </header>
    );
}
