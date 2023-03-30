import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { useMenuContext } from '@/context/MenuContext';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';

const MenuLink = ({ children, href, subMenu }) => {
    const { pathname } = useLocation();
    const { isMenuOpen, setIsMenuOpen } = useMenuContext();
    const [linkActive, setLinkActive] = useState(false);

    useEffect(() => {
        const hrefArr = subMenu && subMenu.map(item => item.href);
        pathname && hrefArr && setLinkActive(hrefArr.includes(pathname));
    }, [pathname, subMenu]);

    return subMenu ? (
        <div className="relative">
            <div
                onClick={e => {
                    e.stopPropagation();
                    setIsMenuOpen(false);
                }}
                className={`${isMenuOpen ? 'visible' : 'invisible'} fixed top-0 left-0 right-0 bottom-0 z-[4]`}
            />
            <button
                className={`is-clickable text-[15px] ${
                    isMenuOpen || linkActive ? 'text-blue-dark' : 'text-black-dark'
                }  inline-flex items-center hover:text-blue-dark transition relative z-10`}
                onClick={() => setIsMenuOpen(prev => !prev)}
                type="button"
            >
                {children}
                <ArrowDownIcon
                    className={`${
                        isMenuOpen ? 'rotate-180 [&>path]:stroke-blue-dark' : 'rotate-0'
                    } ml-1 transition-transform ${linkActive && '[&>path]:stroke-blue-dark'}`}
                />
            </button>
            {subMenu && (
                <div
                    className={`absolute top-[35px] left-0 rounded-lg z-[5] min-w-[204px] bg-white overflow-hidden transition-all duration-150 shadow-lg ${
                        isMenuOpen ? 'translate-y-0 opacity-1 visible' : '-translate-y-10 opacity-0 invisible'
                    }`}
                >
                    <ul className="relative z-[5]">
                        {subMenu.map(({ name, href }, i) => (
                            <li key={i}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${
                                            isActive ? 'text-blue-dark' : 'text-black-dark'
                                        } relative flex items-center text-[15px] whitespace-nowrap px-[10px] py-[13px] border-b hover:text-blue-dark transition z-10`
                                    }
                                    onClick={e => {
                                        e.stopPropagation();
                                        setIsMenuOpen(false);
                                    }}
                                    to={href}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    ) : (
        <NavLink
            onClick={e => {
                e.stopPropagation();
                setIsMenuOpen(false);
            }}
            className={({ isActive }) =>
                `${
                    isActive ? 'text-blue-dark' : 'text-black-dark'
                } relative is-clickable text-[15px] desktop:py-1 py-[26px] hover:text-blue-dark transition z-10`
            }
            to={href}
        >
            {children}
        </NavLink>
    );
};

MenuLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    href: PropTypes.string,
    subMenu: PropTypes.arrayOf(PropTypes.object),
};

export default MenuLink;
