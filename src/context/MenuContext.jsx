import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSafeContext } from '@/hooks/useSafeContext';

const MenuContext = createContext();
MenuContext.displayName = 'MenuContext';

export const useMenuContext = () => {
    const context = useSafeContext(MenuContext);

    return context;
};

export const MenuProvider = ({ children, isMenuOpen, setIsMenuOpen }) => {
    const memoizedValue = useMemo(
        () => ({
            isMenuOpen,
            setIsMenuOpen,
        }),
        [isMenuOpen, setIsMenuOpen]
    );

    return <MenuContext.Provider value={memoizedValue}>{children}</MenuContext.Provider>;
};

MenuProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
};
