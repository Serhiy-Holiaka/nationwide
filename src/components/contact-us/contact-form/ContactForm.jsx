import { memo } from 'react';
import Input from '@/components/ui/form/input';

const ContactForm = () => {
    return <form>
        <div>
            <Input />
        </div>
    </form>;
};

export default memo(ContactForm);
