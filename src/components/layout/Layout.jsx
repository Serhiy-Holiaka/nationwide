import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useDebounce } from '@/hooks/useDebounce';

const Layout = () => {
    const [clickable, setClickable] = useState();
    const hide = useDebounce(() => {
        clickable.map(block => {
            block.className = block.className.replace(' active-clickable', '');
        });
    }, 1000);

    useEffect(() => {
        const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
        setClickable(allWithClass);
    }, []);

    const onGlobalClick = e => {
        const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
        setClickable(allWithClass);

        if (e.target.className.includes('is-clickable')) {
            return;
        } else {
            clickable.map(block => {
                !block.className.includes('active-clickable') === true
                    ? (block.className += ' active-clickable')
                    : (block.className += '');
            });
        }
        hide();
    };

    return (
        <div onClick={onGlobalClick}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
