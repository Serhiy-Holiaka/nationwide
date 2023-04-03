import { memo, useState } from 'react';
import Input from '@/components/ui/form/input';
import Checkbox from '@/components/ui/form/checkbox';
import Radiobox from '@/components/ui/form/radiobox';
import Textarea from '@/components/ui/form/textarea';
import Button from '@/components/ui/button/Button';
import { useForm } from 'react-hook-form';

const RequestForm = () => {
    const [checkedValue, setCheckedValue] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); // eslint-disable-next-line no-console
    const onSubmit = data => console.log(data);

    const handleCheck = e => {
        setCheckedValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[690px] mx-auto mt-[52px]" noValidate>
            <div className="mb-8">
                <h2 className="text-xl leading-none text-center text-black-dark mb-8">CONTACT INFORMATION</h2>
                <div className="[&>div]:mb-6 last:[&>div]:mb-0">
                    <Input
                        placeholder="Company Name*"
                        error={errors.company_name ? true : false}
                        helperText={errors.company_name && 'Company Name is required!'}
                        {...register('company_name', { required: true })}
                    />
                    <Input
                        placeholder="Contact Name*"
                        error={errors.contact_name ? true : false}
                        helperText={errors.contact_name && 'Contact Name is required!'}
                        {...register('contact_name', { required: true })}
                    />
                    <Input
                        type="tel"
                        placeholder="Phone*"
                        error={errors.phone ? true : false}
                        helperText={
                            errors.phone?.type === 'required' ? 'Phone is required!' : 'Only numbers are allowed'
                        }
                        {...register('phone', { required: true, pattern: /^[0-9]*$/i })}
                    />
                    <Input
                        type="mail"
                        placeholder="Email*"
                        error={errors.email ? true : false}
                        helperText={errors.email?.type === 'required' ? 'Email is required!' : 'Field should have - @'}
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-xl leading-none text-center text-black-dark mb-8">SHIPMENT INFORMATION</h2>
                <div className="[&>div]:mb-6 last:[&>div]:mb-0">
                    <Input
                        placeholder="Originating Zip Code*"
                        error={errors.originating_zip_code ? true : false}
                        helperText={errors.originating_zip_code && 'Originating Zip Code is required!'}
                        {...register('originating_zip_code', { required: true })}
                    />
                    <Input
                        placeholder="Destination Zip Code*"
                        error={errors.destination_zip_code ? true : false}
                        helperText={errors.destination_zip_code && 'Destination Zip Code is required!'}
                        {...register('destination_zip_code', { required: true })}
                    />
                    <Input placeholder="Stop 2 Zip Code" {...register('stop_2_zip_code')} />
                    <Input placeholder="Stop 3 Zip Code" {...register('stop_3_zip_code')} />
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-xl leading-none text-center text-black-dark mb-8">TOTAL DIMENSIONS OF SHIPMENT</h2>
                <div className="grid tablet:grid-cols-2 gap-6 tablet:gap-8">
                    <div className="[&>div]:mb-6 last:[&>div]:mb-0">
                        <Input
                            placeholder="Originating Zip Code*"
                            error={errors.originating_zip_code ? true : false}
                            helperText={errors.originating_zip_code && 'Originating Zip Code is required!'}
                            {...register('originating_zip_code', { required: true })}
                        />
                        <Input
                            placeholder="Destination Zip Code*"
                            error={errors.destination_zip_code ? true : false}
                            helperText={errors.destination_zip_code && 'Destination Zip Code is required!'}
                            {...register('destination_zip_code', { required: true })}
                        />
                        <Input placeholder="Stop 2 Zip Code" {...register('stop_2_zip_code')} />
                        <Input placeholder="Stop 3 Zip Code" {...register('stop_3_zip_code')} />
                    </div>
                    <div className="[&>div]:mb-6 last:[&>div]:mb-0">
                        <Input
                            placeholder="Originating Zip Code*"
                            error={errors.originating_zip_code ? true : false}
                            helperText={errors.originating_zip_code && 'Originating Zip Code is required!'}
                            {...register('originating_zip_code', { required: true })}
                        />
                        <Input
                            placeholder="Destination Zip Code*"
                            error={errors.destination_zip_code ? true : false}
                            helperText={errors.destination_zip_code && 'Destination Zip Code is required!'}
                            {...register('destination_zip_code', { required: true })}
                        />
                        <Input placeholder="Stop 2 Zip Code" {...register('stop_2_zip_code')} />
                        <Input placeholder="Stop 3 Zip Code" {...register('stop_3_zip_code')} />
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-xl leading-none text-center text-black-dark mb-8">PICKUP DETAILS</h2>
                <div className="grid tablet:grid-cols-2 row-auto gap-8 [&>div]:mb-6 last:[&>div]:mb-0">
                    <Checkbox name="pickup" value="pickup_appointment" {...register('pickup')}>
                        Pickup Appointment (Notification)
                    </Checkbox>
                    <Checkbox name="pickup" value="residential_pickup" {...register('pickup')}>
                        Residential Pickup
                    </Checkbox>
                    <Checkbox name="pickup" value="limited_access_pickup" {...register('pickup')}>
                        Limited Access Pickup
                    </Checkbox>
                    <Checkbox name="pickup" value="lift_gate_pickup" {...register('pickup')}>
                        Lift Gate Pickup
                    </Checkbox>
                    <Checkbox name="pickup" value="construction_pickup" {...register('pickup')}>
                        Construction Pickup
                    </Checkbox>
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-xl leading-none text-center text-black-dark mb-8">DELIVERY DETAILS</h2>
                <div className="grid tablet:grid-cols-2 row-auto gap-8 [&>div]:mb-6 last:[&>div]:mb-0">
                    <Checkbox name="delivery" value="delivery_appointment" {...register('delivery')}>
                        Delivery Appointment (Notification)
                    </Checkbox>
                    <Checkbox name="delivery" value="inside_delivery" {...register('delivery')}>
                        Inside Delivery
                    </Checkbox>
                    <Checkbox name="delivery" value="lift_gate_delivery" {...register('delivery')}>
                        Lift Gate Delivery
                    </Checkbox>
                    <Checkbox name="delivery" value="residential_delivery" {...register('delivery')}>
                        Residential Delivery
                    </Checkbox>
                    <Checkbox name="delivery" value="construction_delivery" {...register('delivery')}>
                        Construction Delivery
                    </Checkbox>
                    <Checkbox name="delivery" value="limited_access_delivery" {...register('delivery')}>
                        Limited Access Delivery
                    </Checkbox>
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-xl leading-none text-center text-black-dark mb-8">DELIVERY DETAILS</h2>
                <div className="grid tablet:grid-cols-2 row-auto gap-8 [&>div]:mb-6 last:[&>div]:mb-0">
                    <Checkbox name="delivery2" value="cross_border_fee" {...register('delivery')}>
                        Cross Border Fee
                    </Checkbox>
                    <Checkbox name="delivery2" value="freeze_protection" {...register('delivery2')}>
                        Freeze Protection
                    </Checkbox>
                    <Checkbox name="delivery2" value="hazardous_material" {...register('delivery2')}>
                        Hazardous Material
                    </Checkbox>
                    <Checkbox name="delivery2" value="dock_high_truck" {...register('delivery2')}>
                        Dock-High Truck
                    </Checkbox>
                    <Checkbox name="delivery2" value="heated_trailer_refer" {...register('delivery2')}>
                        Heated Trailer/Refer
                    </Checkbox>
                    <Checkbox name="delivery2" value="trade_shows" {...register('delivery2')}>
                        Trade Shows
                    </Checkbox>
                    <Checkbox name="delivery2" value="dimension_over_12_ft" {...register('delivery2')}>
                        Dimension Over 12 Ft.
                    </Checkbox>
                </div>
                <div className="mt-6">
                    <Textarea placeholder="Additional Comments / Instructions" {...register('comment')} />
                </div>
            </div>
            <div className="mb-8">
                <p className="text-[15px] leading-[130%] text-left text-black-dark mb-4">
                    How would you like to receive your quote?
                </p>
                <div className="grid tablet:grid-cols-2 row-auto gap-8 [&>div]:mb-6 last:[&>div]:mb-0">
                    <Radiobox
                        handleChange={handleCheck}
                        value="email"
                        isSelected={checkedValue === 'email'}
                        {...register('email')}
                    >
                        Email
                    </Radiobox>
                    <Radiobox
                        handleChange={handleCheck}
                        value="phone"
                        isSelected={checkedValue === 'phone'}
                        {...register('email')}
                    >
                        Phone Call
                    </Radiobox>
                </div>
            </div>
            <Button type="submit" additionalClasses="mx-auto">
                Submit Quote Request
            </Button>
        </form>
    );
};

export default memo(RequestForm);
