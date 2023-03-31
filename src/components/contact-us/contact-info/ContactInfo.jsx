const ContactInfo = () => {
    return (
        <div className="container max-w-container py-[100px]">
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-7">
                <div className="text-center tablet:text-left">
                    <h5 className="text-2xl text-black-dark leading-[130%]">Sales</h5>
                    <div className="py-8">
                        <p className="text-base leading-none text-black-dark mb-5">For Customer Service Please Call:</p>
                        <h5 className="text-2xl text-black-dark leading-[130%]">800-236-3230</h5>
                    </div>
                    <div>
                        <p className="text-base leading-none text-black-dark mb-5">Address</p>
                        <h5 className="text-xl desktop:text-2xl text-black-dark leading-[130%]">
                            N&M Nationwide | 630 Muttart Road | Neenah, WI 54956
                        </h5>
                    </div>
                </div>
                <div className="text-center tablet:text-left">
                    <h5 className="text-2xl text-black-dark leading-[130%]">General Inquiries</h5>
                    <div className="py-8">
                        <p className="text-base leading-none text-black-dark mb-5">Call to us:</p>
                        <h5 className="text-2xl text-black-dark leading-[130%]">800-236-4463</h5>
                    </div>
                    <div>
                        <p className="text-base leading-none text-black-dark mb-5">E-Mail</p>
                        <h5 className="text-xl desktop:text-2xl text-black-dark leading-[130%] break-words">
                            nmnationwide@nmtransfer.com
                        </h5>
                    </div>
                </div>
                <div className="text-center tablet:text-left">
                    <h5 className="text-2xl text-black-dark leading-[130%]">N&M Nationwide</h5>
                    <div className="py-8">
                        <p className="text-base leading-none text-black-dark mb-5">Call to us:</p>
                        <h5 className="text-2xl text-black-dark leading-[130%]">800-236-3230</h5>
                    </div>
                    <div>
                        <p className="text-base leading-none text-black-dark mb-5">E-Mail</p>
                        <h5 className="text-xl desktop:text-2xl text-black-dark leading-[130%] break-words">
                            nmnationwide@nmtransfer.com
                        </h5>
                    </div>
                </div>
                <div className="text-center tablet:text-left">
                    <h5 className="text-xl desktop:text-2xl text-black-dark leading-[130%] pb-8 opacity-0 hidden tablet:block">Address</h5>
                    <div>
                        <p className="text-base leading-none text-black-dark mb-5">Address</p>
                        <h5 className="text-xl desktop:text-2xl text-black-dark leading-[130%]">
                            N&M Nationwide | 630 Muttart Road | Neenah, WI 54956
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
