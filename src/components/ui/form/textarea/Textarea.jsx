import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Error from '@/components/ui/form/error';

const Textarea = forwardRef(({ id, type = 'text', name, value, placeholder, error, onChange, onBlur, helperText, ...rest }, ref) => {
    const changeHandler = e => {
        if (typeof onChange === 'function') {
            onChange(e);
        }
    };

    const blurHandler = e => {
        if (typeof onBlur === 'function') {
            onBlur(e);
        }
    };

    return (
        <div className="relative min-w-0">
            <textarea
                className="outline-none w-full text-[15px] text-black-dark border border-[#12121254] hover:border-blue-light focus:border-blue-light rounded-2xl py-3 px-4 transition-all duration-250"
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                rows="4"
                onClick={(e) => e.stopPropagation()}
                onChange={changeHandler}
                onBlur={blurHandler}
                {...rest}
                ref={ref}
            />
            {error && <Error>{helperText}</Error>}
        </div>
    );
});

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    helperText: PropTypes.string
};

export default memo(Textarea);
