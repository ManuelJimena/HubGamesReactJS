import './NotFound.css';

import { Link } from 'react-router-dom';

import Title from '../../components/Title/Title';

const NotFound = () => {
  return (
    <>
      <Title text="404 Not Found" />
      <div className="NotFound">
        <Link to="/">
          <button className="btn-notfound">Go to home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
