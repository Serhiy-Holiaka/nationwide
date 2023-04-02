import { memo } from 'react';
import PropTypes from 'prop-types';
import Input from '@/components/ui/form/input';
import Textarea from '@/components/ui/form/textarea';
import Button from '@/components/ui/button/Button';
import { useForm } from 'react-hook-form';

const ContactForm = ({ subTitle }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();// eslint-disable-next-line no-console
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
            <h1 className={`text-[32px] leading-none text-center text-black-dark ${subTitle ? 'mt-[52px]' : 'mb-[52px]'}`}>Contact Us</h1>
            {subTitle && <p className="text-base leading-[150%] text-black-dark text-center py-8">{subTitle}</p>}
            <div className="[&>div]:mb-6 last:[&>div]:mb-8">
                <Input
                    placeholder="Name*"
                    error={errors.name ? true : false}
                    helperText={errors.name && 'Name is required!'}
                    {...register('name', { required: true })}
                />
                <Input
                    type="mail"
                    placeholder="Email*"
                    error={errors.email ? true : false}
                    helperText={errors.email?.type === 'required' ? 'Email is required!' : 'Field should have - @'}
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                <Input
                    type="tel"
                    placeholder="Phone*"
                    error={errors.phone ? true : false}
                    helperText={errors.phone?.type === 'required' ? 'Phone is required!' : 'Only numbers are allowed'}
                    {...register('phone', { required: true, pattern: /^[0-9]*$/i })}
                />
                <Textarea
                    placeholder="Place all specific instructions here INCLUDING ENTRY AND GATE CODES PLEASE!"
                    {...register('comment')}
                />
            </div>
            <Button type="submit" additionalClasses="mx-auto">
                Send message
            </Button>
        </form>
    );
};

ContactForm.propTypes = {
    subTitle: PropTypes.string
};

export default memo(ContactForm);
