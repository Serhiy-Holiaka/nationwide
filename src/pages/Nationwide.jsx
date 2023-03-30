const Nationwide = () => {
    const headingClass = 'text-[40px] tablet:text-[52px] text-white leading-[130%]';
    return (
        <div className="container max-w-container ">
            <h1 className="text-[32px] leading-none text-center text-black-dark my-[52px]">Our Services</h1>
            <div className="grid tablet:grid-cols-2 gap-x-[30px] gap-y-[52px] mb-[72px]">
                <div className="flex flex-col justify-center desktop:min-h-[450px] order-1 rounded-[50px] py-12 px-8 bg-[#53A9DE] overflow-hidden">
                    <h2 className={headingClass}>Services</h2>
                    <ul className="ul-style pl-5 mt-6 text-base leading-[150%] text-white opacity-70">
                        <li>
                            A full range of transportation services await you with N&M Nationwide. Working with over 200
                            carriers nationwide we are able to move your product with door to door delivery, exceptional
                            services, and on time product delivery.
                        </li>
                        <li>
                            With various equipment options, we have the capability to grant your request of 48 or 53
                            foot vans, refrigerated trailers or flatbeds.
                        </li>
                        <li>
                            We are shipper and carrier friendly and any questions or requests will be top priority to
                            fit your transportation needs.
                        </li>
                        <li>We offer competitive rates and easy access to give you peace of mind.</li>
                        <li>Heated Trailer Service.</li>
                        <li>Lift Gate Service.</li>
                        <li>Serving all 48 States and Canada.</li>
                    </ul>
                </div>
                <div className="relative flex min-h-[450px] order-2 rounded-[50px] bg-[#53A9DE] overflow-hidden">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        width={690}
                        height={450}
                        src="/images/service-img-1.webp"
                        alt="service img"
                    />
                </div>
                <div className="relative flex min-h-[450px] order-4 tablet:order-3 rounded-[50px] bg-[#53A9DE] overflow-hidden">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        width={690}
                        height={450}
                        src="/images/service-img-2.webp"
                        alt="service img"
                    />
                </div>
                <div className="flex flex-col justify-center desktop:min-h-[450px] order-3 tablet:order-4 rounded-[50px] py-12 px-7 bg-[#2D6FB8] overflow-hidden">
                    <h2 className={headingClass}>Carriers</h2>
                    <ul className="ul-style pl-5 mt-6 text-base leading-[150%] text-white opacity-70">
                        <li>
                            A full range of transportation services await you with N&M Nationwide. Working with over 200
                            carriers nationwide we are able to move your product with door to door delivery, exceptional
                            services, and on time product delivery.
                        </li>
                        <li>
                            With various equipment options, we have the capability to grant your request of 48 or 53
                            foot vans, refrigerated trailers or flatbeds.
                        </li>
                        <li>
                            We are shipper and carrier friendly and any questions or requests will be top priority to
                            fit your transportation needs.
                        </li>
                        <li>We offer competitive rates and easy access to give you peace of mind.</li>
                        <li>Heated Trailer Service.</li>
                        <li>Lift Gate Service.</li>
                        <li>Serving all 48 States and Canada.</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center desktop:min-h-[450px] order-5 rounded-[50px] py-12 px-7 bg-[#143B78] overflow-hidden">
                    <h2 className={headingClass}>Shippers</h2>
                    <ul className="mt-6 text-base leading-[150%] text-white opacity-70">
                        <li>
                            A full range of transportation services await you with N&M Nationwide. Working with over 200
                            carriers nationwide we are able to move your product with door to door delivery, exceptional
                            services, and on time product delivery.
                        </li>
                    </ul>
                </div>
                <div className="relative flex min-h-[450px] order-6 rounded-[50px] bg-[#53A9DE] overflow-hidden">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        width={690}
                        height={450}
                        src="/images/service-img-3.webp"
                        alt="service img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nationwide;
