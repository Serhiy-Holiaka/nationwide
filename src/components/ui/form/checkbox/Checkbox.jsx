import { memo, forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = forwardRef(({ children, name, value, additionalClasses, onChange, ...rest }, ref) => {
    const [isChecked, setIsChecked] = useState(false);
    const changeHandler = e => {
        let checkedVal = e.target.checked;
        setIsChecked(checkedVal);
        if (typeof onChange === 'function') {
            onChange(e);
        }
    };

    return (
        <label
            onClick={e => e.stopPropagation()}
            className={`relative inline-flex items-center cursor-pointer ${additionalClasses}`}
        >
            <input
                className="hidden"
                type="checkbox"
                onChange={changeHandler}
                name={name}
                value={value}
                ref={ref}
                {...rest}
            />
            <span className={`flex items-center justify-center w-5 h-5 border ${isChecked ? 'border-blue-light' : 'border-[#12121254]'} rounded-[4px] transition-all duration-200`}>
                <svg
                    className={`w-3 h-auto ${isChecked ? 'visible' : 'invisible'}`}
                    width={9}
                    height={8}
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 4.6L3.57895 7L8 1"
                        stroke="var(--blue-light)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
            <span className={`text-[15px] leading-[130%] ml-2 ${isChecked ? 'text-black-dark' : 'opacity-50'} transition-opacity`}>{children}</span>
        </label>
    );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
    additionalClasses: PropTypes.string,
    onChange: PropTypes.func
};

export default memo(Checkbox);
