import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useToggle } from '@/hooks/useToggle';
import { NavLink } from 'react-router-dom';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';
import { useMenuContext } from '@/context/MenuContext';

const MenuLinkMobile = ({ children, href, subMneu }) => {
    const { isMenuOpen, setIsMenuOpen } = useMenuContext();
    const [openedCancelModal, toggleCancelModal] = useToggle(false);

    useEffect(() => {
        if (!isMenuOpen && openedCancelModal) {
            toggleCancelModal();
        }
    }, [isMenuOpen, openedCancelModal, toggleCancelModal]);

    return subMneu ? (
        <div className="relative">
            <button
                className={`text-[15px] ${
                    openedCancelModal ? 'text-blue-dark' : 'text-black-dark'
                } flex items-center justify-center w-full py-[25px] hover:text-blue-dark transition relative z-10`}
                onClick={toggleCancelModal}
                type="button"
            >
                {children}
                <ArrowDownIcon className={`${openedCancelModal ? 'rotate-180 [&>path]:stroke-blue-dark' : 'rotate-0'} ml-1 transition-transform`} />
            </button>
            {subMneu && (
                <div
                    className={`relative rounded-lg z-[5] bg-white overflow-hidden transition-all duration-150 border-y border-y-neutral-50 ${
                        openedCancelModal && isMenuOpen ? 'translate-y-0 opacity-1 visible h-auto' : '-translate-y-10 opacity-0 invisible h-0'
                    }`}
                >
                    <ul className="relative z-[5]">
                        {subMneu.map(({ name, href }, i) => (
                            <li key={i}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${
                                            isActive ? 'text-blue-dark' : 'text-black-dark'
                                        } relative block text-[15px] whitespace-nowrap py-[20px] hover:text-blue-dark transition z-10`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
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
            onClick={toggleCancelModal}
            className={({ isActive }) =>
                `${
                    isActive ? 'text-blue-dark' : 'text-black-dark'
                } relative flex justify-center text-[15px] desktop:py-1 py-[25px] hover:text-blue-dark transition z-10`
            }
            to={href}
        >
            {children}
        </NavLink>
    );
};

MenuLinkMobile.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    href: PropTypes.string,
    subMneu: PropTypes.arrayOf(PropTypes.object),
};

export default MenuLinkMobile;
