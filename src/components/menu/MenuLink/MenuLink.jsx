import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useToggle } from '@/hooks/useToggle';
import { NavLink } from 'react-router-dom';
import { useDocumentLockScrollY } from '@/hooks/useDocumentLockScrollY';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';

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
                className={`text-[15px] ${
                    openedCancelModal ? 'text-blue-dark' : 'text-black-dark'
                }  inline-flex items-center hover:text-blue-dark transition relative z-10`}
                onClick={toggleModalHandler}
                type="button"
            >
                {children}
                <ArrowDownIcon className={`${openedCancelModal ? 'rotate-180 [&>path]:stroke-blue-dark' : 'rotate-0'} ml-1 transition-transform`} />
            </button>
            {subMneu && (
                <div
                    className={`absolute top-[35px] left-0 rounded-lg z-[5] bg-white overflow-hidden transition-all duration-150 shadow-lg ${
                        openedCancelModal ? 'translate-y-0 opacity-1 visible' : '-translate-y-10 opacity-0 invisible'
                    }`}
                >
                    <ul className="relative z-[5]">
                        {subMneu.map(({ name, href }, i) => (
                            <li key={i}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${
                                            isActive ? 'text-blue-dark' : 'text-black-dark'
                                        } relative block text-[15px] whitespace-nowrap px-[10px] py-[13px] border-b hover:text-blue-dark transition z-10`
                                    }
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
            onClick={toggleCancelModal}
            className={({ isActive }) =>
                `${
                    isActive ? 'text-blue-dark' : 'text-black-dark'
                } relative text-[15px] desktop:py-1 py-[26px] hover:text-blue-dark transition z-10`
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
