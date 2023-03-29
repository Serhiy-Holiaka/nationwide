import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout';
import Home from '@/pages/Home';
import Nationwide from '@/pages/Nationwide';
import Directions from '@/pages/Directions';
import FillableForm from '@/pages/FillableForm';
import RateQuotes from '@/pages/RateQuotes';
import Transfer from '@/pages/Transfer';
import Expedited from '@/pages/Expedited';
import ContactUs from '@/pages/ContactUs';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'nationwide-services',
                    element: <Nationwide />,
                },
                {
                    path: 'directions',
                    element: <Directions />,
                },
                {
                    path: 'online-fillable-form',
                    element: <FillableForm />,
                },
                {
                    path: 'rate-quotes',
                    element: <RateQuotes />,
                },
                {
                    path: 'nm-transfer',
                    element: <Transfer />,
                },
                {
                    path: 'nm-expedited',
                    element: <Expedited />,
                },
                {
                    path: 'contact-us',
                    element: <ContactUs />,
                }
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
