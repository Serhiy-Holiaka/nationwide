import { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const linkStyles = 'text-[15px] whitespace-nowrap hover:underline hover:underline-offset-4 py-1 transition';

    return (
        <section className="block w-full bg-black-dark py-[52px]">
            <div className="container">
                <ul className="flex flex-wrap gap-1 justify-center text-white [&>li]:flex [&>li]:items-center [&>li]:h-[15px] [&>li]:border-l [&>li]:border-l-white first:[&>li]:border-none [&>li]:px-2 last:[&>li]:pr-0 first:[&>li]:pl-0">
                    <li>
                        <Link className={linkStyles} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={linkStyles} to="/contact-us">
                            How to Contact Us{' '}
                        </Link>
                    </li>
                    <li>
                        <Link className={linkStyles} to="/contact-us">
                            Questions or Comments?
                        </Link>
                    </li>
                    <li>
                        <Link className={linkStyles} to="#">
                            Terms of Service
                        </Link>
                    </li>
                </ul>
                <p className="text-[13px] text-white opacity-50 text-center pt-8">© Copyright 2007-2011. N & M Transfer Co., Inc. ALL RIGHTS RESERVED.</p>
            </div>
        </section>
    );
};

export default memo(Footer);
