import { Link } from 'react-router-dom';

const EHeader =
    <div style={{ borderBottom: 'solid green 2px', margin: 15, padding: 10, fontSize: 25 }}>
        Header Ruppin
        <div>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/menu">Menu</Link>
        </div>

    </div>;
export default EHeader;