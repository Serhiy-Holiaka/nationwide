import { useState, useEffect } from 'react';
import MobileMenu from '@/components/menu/MobileMenu';
import DesktopMenu from '@/components/menu/DesktopMenu';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Button from '@/components/ui/button';
import LogoIcon from '@/components/ui/icons/LogoIcon';
import { Link, useNavigate } from 'react-router-dom';
import { MenuProvider } from '@/context/MenuContext';
import { useDocumentLockScrollY } from '@/hooks/useDocumentLockScrollY';

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 1000px)');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { lockScrollY, unlockScrollY } = useDocumentLockScrollY();
    const navigate = useNavigate();

    useEffect(() => {
        isMenuOpen ? lockScrollY() : unlockScrollY();
    }, [isMenuOpen, lockScrollY, unlockScrollY]);

    return (
        <MenuProvider isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <div className="relative container max-w-container flex justify-between items-center py-5 z-[4]">
                <Link onClick={e => e.stopPropagation()} to="/">
                    <LogoIcon />
                </Link>
                <div className="relative inline-flex items-center -z-[1]">
                    {!isMobile && <DesktopMenu />}
                    <Button onClick={() => navigate('/contact-us')} additionalClasses="z-[5]">Contact Us</Button>
                    {isMobile && <MobileMenu />}
                </div>
            </div>
        </MenuProvider>
    );
};

export default Header;
