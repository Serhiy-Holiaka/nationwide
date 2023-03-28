import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '@/hooks/useToggle';
import { useDocumentLockScrollY } from '@/hooks/useDocumentLockScrollY';

const MobileMenu = () => {
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
    return (
        <ul className="flex flex-row justify-center">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link onClick={toggleModalHandler} to="#">
                    Srevices
                </Link>
                {openedCancelModal && <div>Modal</div>}
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
    );
};

export default memo(MobileMenu);
