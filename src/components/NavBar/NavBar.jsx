import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav id='navbar'>
            <h3>Niño Sur</h3>
            <div>
                <button>Remeras</button>
                <button>Gorras</button>
                <button>Buzos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar