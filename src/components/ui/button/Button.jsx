import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(
    ({ children, actionType = 'button', btnColor = 'bg-red', additionalClasses, onClick, ...rest }, ref) => {
        const handleClick =
            typeof onClick === 'function'
                ? e => {
                    e.stopPropagation();
                    onClick();
                }
                : null;

        return (
            <button
                ref={ref}
                type={actionType}
                className={`is-clickable flex justify-center items-center px-5 py-[15px] min-w-[115px] h-[45px] rounded-[55px] text-[15px] text-white ${btnColor} transition hover:shadow-md active:translate-y-[2px] ${additionalClasses}`}
                onClick={handleClick}
                {...rest}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    actionType: PropTypes.string,
    onClick: PropTypes.func,
    btnColor: PropTypes.string,
    additionalClasses: PropTypes.string,
};

export default Button;
