import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useToggle } from '@/hooks/useToggle';
import { NavLink } from 'react-router-dom';
import { useDocumentLockScrollY } from '@/hooks/useDocumentLockScrollY';

const MenuLink = ({ children, href, subMneu }) => {
    const [openedCancelModal, toggleCancelModal] = useToggle(false);
    const { lockScrollY, unlockScrollY } = useDocumentLockScrollY();

    const toggleModalHandler = useCallback(
        (unlockScroll = true) => {
            if (!openedCancelModal) {
                lockScrollY();
            }

            toggleCancelModal(state => {
                if (!state && unlockScroll) {
                    unlockScrollY();
                }
            });
        },
        [lockScrollY, openedCancelModal, toggleCancelModal, unlockScrollY]
    );

    return subMneu ? (
        <div className="relative">
            <div
                onClick={e => {
                    e.stopPropagation();
                    toggleCancelModal();
                }}
                className={`${openedCancelModal ? 'visible' : 'invisible'} fixed top-0 left-0 right-0 bottom-0 z-[4]`}
            />
            <button
                className="text-[15px] text-black-dark hover:text-blue-dark transition relative z-10"
                onClick={toggleModalHandler}
                type="button"
            >
                {children}
            </button>
            {subMneu && (
                <div
                    className={`absolute top-[35px] left-0 rounded-lg z-[5] transition-all duration-150 shadow-lg ${
                        openedCancelModal ? 'translate-y-0 opacity-1 visible' : '-translate-y-10 opacity-0 invisible'
                    }`}
                >
                    <ul className="relative z-[5]">
                        {subMneu.map(({ name, href }, i) => (
                            <li key={i}>
                                <NavLink
                                    className="text-[15px] text-black-dark block whitespace-nowrap px-[10px] py-[13px] border-b hover: transition"
                                    onClick={toggleCancelModal}
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
            className={({ isActive }) =>
                `${isActive ? 'text-blue-dark' : 'text-black-dark'} text-[15px] py-1 hover:text-blue-dark transition`
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
    subMneu: PropTypes.arrayOf(PropTypes.object),
};

export default MenuLink;
