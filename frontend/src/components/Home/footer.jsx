import "./styles/footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="left">
                <h1 className="logo">REP Co.</h1>
            </div>
            <div className="center">
                <h3 className="title">Useful Links</h3>
                <ul className="list">
                    <li className="list-item">Home</li>
                    <li className="list-item">Cart</li>
                    <li className="list-item">Man Fashion</li>
                    <li className="list-item">Woman Fashion</li>
                    <li className="list-item">Order Tracking</li>
                    <li className="list-item">Terms</li>
                    <li className="list-item">Support</li>
                    <li className="list-item">Help</li>
                </ul>
            </div>

            <div className="right">
                <h3 className="title">Contact</h3>
                <div className="contact-item">
                    <RoomIcon style={{marginRight:"10px"}}/> Av. Itália, KM 08, Carreiros, Rio Grande - RS
                </div>
                <div className="contact-item">
                    <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> +55 99624-4800
                </div>
                <div className="contact-item">
                    <EmailOutlinedIcon style={{marginRight:"10px"}} /> demoraes.romulo@furg.br
                </div>
                <div className="contact-item">
                    <div className="social-container">
                        <div className="social-icon">
                            <FacebookIcon style={{ color: "#ffffff"}}/>
                        </div>
                        <div className="social-icon">
                            <InstagramIcon style={{ color: "#ffffff"}}/>
                        </div>
                        <div className="social-icon">
                            <TwitterIcon style={{ color: "#ffffff"}}/>
                        </div>
                        <div className="social-icon">
                            <GitHubIcon style={{ color: "#ffffff"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Footer;