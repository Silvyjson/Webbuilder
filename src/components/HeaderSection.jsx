import { arrowDownIcon, arrowrightIcon, tickIcon, warningIcon } from "../assets/images"

const HeaderSection = () => {
    return (
        <section className="header-section">
            <h1>Best Website builders in the US</h1>
            <div className="header-scetion_container">
                <div className="header-scetion_content">
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
                <span>
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
    const lastList = nav.length - 1

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
                        <li style={{ fontSize: index === 0 ? '13px' : '14px', color: index === 0 || index === 2 ? '#727D87' : '#5C6874' }}>{navItem}</li>
                        {index === lastList ? null : <img src={arrowrightIcon} alt="arrow right" />}
                    </span>
                ))}
            </div>
        </section>
    )
}


export default HeaderSection