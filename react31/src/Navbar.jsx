let Navbar=()=>{

    return <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <a href='./index' className='navbar-brand'>Logo</a>
        <div className='ms-auto'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='./index'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='./about'>About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='./services'>Services</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='./products'>Products</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='./contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>

}
export default Navbar;