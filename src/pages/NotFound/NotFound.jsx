import './NotFound.css';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697219458/21467706_q8uxfs.webp"
        alt="404 not found"
      ></img>
      <Link to="/">
        <button className="btn-notfound">Go to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
