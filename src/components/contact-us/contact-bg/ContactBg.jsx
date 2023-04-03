import PropTypes from 'prop-types';

const ContactBg = ({ children }) => {
    return (
        <div className="relative tablet:min-h-[810px] px-4">
            <div className="absolute top-0 left-0 bottom-0 hidden large:flex flex-col justify-between items-start z-0">
                <img className="w-[347px]" height={230} width={347} src={`${import.meta.env.BASE_URL}images/contact/t-l-bg.webp`} alt="t-l-bg" />
                <img className="w-[251px]" height={240} width={251} src={`${import.meta.env.BASE_URL}images/contact/m-l-bg.webp`} alt="m-l-bg" />
                <img className="w-[347px]" height={230} width={347} src={`${import.meta.env.BASE_URL}images/contact/b-l-bg.webp`} alt="b-l-bg" />
            </div>
            <div className="relative z-10 w-full max-w-[690px] large:pt-[72px] mx-auto">{children}</div>
            <div className="absolute top-0 right-0 bottom-0 hidden large:flex flex-col justify-between items-end z-0">
                <img className="w-[347px]" height={230} width={347} src={`${import.meta.env.BASE_URL}images/contact/t-r-bg.webp`} alt="t-r-bg" />
                <img className="w-[251px]" height={240} width={251} src={`${import.meta.env.BASE_URL}images/contact/m-r-bg.webp`} alt="m-r-bg" />
                <img className="w-[347px]" height={230} width={347} src={`${import.meta.env.BASE_URL}images/contact/b-r-bg.webp`} alt="b-r-bg" />
            </div>
        </div>
    );
};

ContactBg.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default ContactBg;
