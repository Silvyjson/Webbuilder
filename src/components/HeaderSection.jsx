import { useEffect, useState } from 'react';
import { arrowDownIcon, arrowrightIcon, tickIcon, warningIcon } from "../assets/images"

const HeaderSection = () => {
    return (
        <section className="header-section">
            <h1>Best Website builders in the US</h1>
            <div className="header-section_container">
                <div className="header-section_content">
                    <span>
                        <img src={tickIcon} alt="tick icon" />
                        <article className="update-note">
                            Last Updated - <p> February 22, 2020 </p>
                        </article>
                    </span>
                    <span>
                        <img src={warningIcon} alt="warning icon" />
                        <p>Advertising Disclosure</p>
                    </span>
                </div>
                <span className='search-relevent'>
                    <p>Top Relevant</p>
                    <img src={arrowDownIcon} alt="arrow down" />
                </span>
            </div>
            <HeaderList />
        </section>
    )
}


const HeaderList = () => {
    const items = ["Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting"];
    const nav = ["Home", "Hosting for all", "Hosting", "Hosting", "Hosting5"];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shouldDisplayDots = windowWidth < 550;

    return (
        <section>
            <div className="header-list-container">
                {items.map((item, index) => (
                    <span className="list-box" key={index}>
                        <li>{item}</li>
                    </span>
                ))}
            </div>
            <div className="header-navlist-container">
                {nav.map((navItem, index) => (
                    <span className="nav-list" key={index}>
                        {shouldDisplayDots && (index === 1 || index === 2 || index === 3) ? <li>...</li> : 
                        <li style={{ fontSize: index === 0 ? '0.7rem' : '0.8rem', color: index === 0 || index === 2 ? '#727D87' : '#5C6874' }}>{navItem}</li>}
                        {index === nav.length - 1 ? null : <img src={arrowrightIcon} alt="arrow right" />}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default HeaderSection