import { searchIcon } from '../assets/images';

const NavSection = () => {
  const menuItems = ['Categories', 'Website Builders', "Today's deals"];

  return (
    <nav className='navSection'>
      <div className='search-container'>
        <img src={searchIcon} alt="search icon" />
        <input type="search" />
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default NavSection;
