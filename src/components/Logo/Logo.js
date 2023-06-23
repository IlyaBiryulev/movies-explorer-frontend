import './Logo.css';

import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link className='logo' to='/'></Link>
    </>
  );
}

export default Logo;
