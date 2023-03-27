import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>
                <ul className="flex flex-row justify-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Srevices</Link>
                    </li>
                    <li>
                        <Link to="/rate-quotes">Rate Quotes</Link>
                    </li>
                    <li>
                        <Link to="/nm-transfer">N&M Transfer</Link>
                    </li>
                    <li>
                        <Link to="/nm-expedited">N&M Expedited</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;
