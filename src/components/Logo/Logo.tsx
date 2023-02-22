import logo from '../../assets/rocket.svg';
import "./logo.scss"

const Logo = () => {
    return (
        <div className='logo'>
           <img src={logo} alt="rocket"/>
           <div>
           <h1><span>to</span>do</h1>
           <p><span>by</span> unicode</p>
           </div>
        </div>
    );
};

export default Logo;