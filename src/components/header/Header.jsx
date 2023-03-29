import { useState } from 'react';
import MobileMenu from '@/components/menu/MobileMenu';
import DesktopMenu from '@/components/menu/DesktopMenu';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Button from '@/components/ui/button';
import LogoIcon from '@/components/ui/icons/LogoIcon';
import { Link } from 'react-router-dom';
import { MenuProvider } from '@/context/MenuContext';

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 1000px)');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuProvider isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <div className="container max-w-container flex justify-between items-center py-5">
                <Link to="/">
                    <LogoIcon />
                </Link>
                <div className="inline-flex items-center">
                    {!isMobile && <DesktopMenu />}
                    <Button additionalClasses="z-[5]">Contact Us</Button>
                    {isMobile && <MobileMenu />}
                </div>
            </div>
        </MenuProvider>
    );
};

export default Header;
