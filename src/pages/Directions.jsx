import StarInCircleIcon from '@/components/ui/icons/StarInCircleIcon';
import AinCircleIcon from '@/components/ui/icons/AinCircleIcon';
import BinCircleIcon from '@/components/ui/icons/BinCircleIcon';

const Directions = () => {
    return (
        <div className="pb-[72px]">
            <h1 className="text-[32px] leading-none text-center text-black-dark my-[52px]">Directions to N&M</h1>
            <div className="relative max-h-[752px]">
                <img
                    className="relative w-full h-full object-contain"
                    width={1920}
                    height={752}
                    src={`${import.meta.env.BASE_URL}images/map-img.webp`}
                    alt="map-img"
                />
            </div>
            <div className="container">
                <div className="relative flex justify-between max-w-[580px] mx-auto my-[52px] before:absolute before:w-[98%] before:h-[3px] before:left-[1%] before:top-[calc(50%-1px)] before:bg-red before:-z-[1]">
                    <StarInCircleIcon />
                    <AinCircleIcon />
                    <BinCircleIcon />
                </div>
                <div className="grid tablet:grid-cols-2 gap-7 max-w-[720px] mx-auto">
                    <div>
                        <h5 className="text-2xl text-black-dark leading-none">From the North</h5>
                        <ul className="list-disc pl-6 mt-5">
                            <li>Exit east on Breezewood</li>
                            <li>South on Industrial</li>
                            <li>West on Cty G</li>
                            <li>South on Dixie Rd to Terminal on the right</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-2xl text-black-dark leading-none">From the south</h5>
                        <ul className="list-disc pl-6 mt-5">
                            <li>Exit north on Hwy 76, make innediate right on Green Valley</li>
                            <li>East on Cty GG</li>
                            <li>North on Dixie to terminal on left</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Directions;
