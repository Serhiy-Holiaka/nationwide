import { memo } from 'react';
import PropTypes from 'prop-types';

const Error = ({ children, additionalClasses }) => {
    return <span className={`absolute left-3 -bottom-4 inline-flex text-xs text-red first-letter:capitalize ${additionalClasses}`}>{children}</span>;
};

Error.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    additionalClasses: PropTypes.string,
};

export default memo(Error);
