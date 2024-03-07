import { arrowDown } from "../assets/images";

const FooterLinks = (props) => {
    const { title, links } = props;

    return (
        <div className="footer-links">
            <h3>{title}</h3>
            {links.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer_section">
            <div className="footer-container">
                <FooterLinks
                    title="Categories"
                    links={[
                        "Web Builder",
                        "Hosting",
                        "Data Center",
                        "Robotic-Automation"
                    ]}
                />
                <FooterLinks
                    title="Contact"
                    links={[
                        "Contact",
                        "Privacy Policy",
                        "Terms Of Service",
                        "Categories",
                        "About"
                    ]}
                />
                <span className="footer-location">
                    <p>United States</p>
                    <img src={arrowDown} alt="arrow down" />
                </span>
            </div>
        </footer>
    );
}

export default Footer;