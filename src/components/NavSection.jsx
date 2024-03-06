import { searchIcon } from '../assets/images';

const NavSection = () => {
    return (
        <nav className='navSection'>
            <div className='search-container'>
                <img src={searchIcon} alt="search icon" />
                <input type="search" />
            </div>
            <ul>
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's deals</li>
            </ul>
        </nav>
    )
}

export default NavSection;