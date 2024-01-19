import './footer.css';
import logo from '../../assets/logo.png'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <span>Quizzy</span>
            </div>
            <div className="socials">
                <div>
                    <SlSocialInstagram />
                </div>
                <div>
                    <SlSocialFacebook />
                </div>
                <div>
                    <SlSocialLinkedin />
                </div>
                <div>
                    <SlSocialTwitter />
                </div>

            </div>
            <div className="tnc">
                No Copyrights!
            </div>
        </footer>
    );
};

export default Footer;
