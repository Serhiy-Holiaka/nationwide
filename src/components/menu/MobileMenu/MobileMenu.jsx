import { memo } from 'react';
import PropTypes from 'prop-types';
import MenuLinkMobile from '../MenuLink/MenuLinkMobile';
import { useMenuContext } from '@/context/MenuContext';
import { MENU_LIST } from '@/constants/menu.constants';

const MobileMenu = ({ menuList = MENU_LIST }) => {
    const { isMenuOpen, setIsMenuOpen } = useMenuContext();

    const handleClick = e => {
        e.stopPropagation();
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className={`relative ${isMenuOpen ? 'z-[4]' : 'z-[3]'} ml-8`}>
            <div
                onClick={e => {
                    e.stopPropagation();
                    setIsMenuOpen(false);
                }}
                className={`${isMenuOpen ? 'visible' : 'invisible'} backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-[5]`}
            />
            <button
                type="button"
                onClick={handleClick}
                className="is-clickable relative flex flex-col items-center justify-around w-10 h-7 z-[5]"
            >
                <span
                    className={`absolute w-7 h-[2px] rounded-md bg-blue-dark ${
                        isMenuOpen ? 'rotate-[135deg] top-[14px]' : 'rotate-0 top-[4px]'
                    } transition-transform duration-200`}
                />
                <span className={`absolute w-4 rounded-md left-[6px] h-[2px] bg-blue-dark ${isMenuOpen ? 'invisible' : 'visible'}`} />
                <span
                    className={`absolute w-7 h-[2px] rounded-md bg-blue-dark ${
                        isMenuOpen ? '-rotate-[135deg] top-[14px]' : 'rotate-0 top-[22px]'
                    } transition-transform duration-200`}
                />
            </button>
            <nav
                className={`absolute top-[55px] -right-3.5 z-[5] tablet:-right-8 flex flex-col w-screen max-w-[450px] bg-white rounded-lg transition-all duration-150 shadow-lg ${
                    isMenuOpen ? 'translate-y-0 opacity-1 visible' : '-translate-y-10 opacity-0 invisible'
                }`}
            >
                <ul className="flex flex-col justify-center w-full">
                    {menuList.map(({ name, href, subMenu }, i) => (
                        <li key={i} className="text-center">
                            <MenuLinkMobile href={href} subMenu={subMenu}>
                                {name}
                            </MenuLinkMobile>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

MobileMenu.propTypes = {
    menuList: PropTypes.arrayOf(PropTypes.object),
};

export default memo(MobileMenu);
