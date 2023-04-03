import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Radiobox = forwardRef(({ children, handleChange, isSelected, value, additionalClasses }, ref) => {
    return (
        <label
            onClick={e => e.stopPropagation()}
            className={`relative inline-flex items-center cursor-pointer ${additionalClasses}`}
        >
            <input className='hidden' type="radio" onChange={handleChange} checked={isSelected} value={value} ref={ref}/>
            <span className={`flex justify-center items-center w-5 h-5 border rounded-full ${isSelected ? 'border-blue-light' : 'border-[#12121254]'} transition-all duration-200`}>
                <span className={`block w-3 h-3 rounded-full ${isSelected ? 'opacity-100' : 'opacity-0'} bg-blue-light transition-all duration-200`} />
            </span>
            <span className={'text-[15px] leading-[130%] ml-2 opacity-50 transition-opacity'}>{children}</span>
        </label>
    );
});

Radiobox.displayName = 'Radiobox';

Radiobox.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
    additionalClasses: PropTypes.string,
    handleChange: PropTypes.func,
    isSelected: PropTypes.bool,
};

export default memo(Radiobox);
