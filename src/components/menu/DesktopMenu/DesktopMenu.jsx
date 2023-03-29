import { memo } from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../MenuLink/MenuLink';
import { MENU_LIST } from '@/constants/menu.constants';

const DesktopMenu = ({ menuList = MENU_LIST }) => {
    return (
        <ul className="flex flex-row justify-center mr-[52px]">
            {menuList.map(({ name, href, subMenu }, i) => (
                <li key={i} className="mr-[32px] last:mr-0">
                    <MenuLink href={href} subMneu={subMenu}>
                        {name}
                    </MenuLink>
                </li>
            ))}
        </ul>
    );
};

DesktopMenu.propTypes = {
    menuList: PropTypes.arrayOf(PropTypes.object),
};

export default memo(DesktopMenu);
