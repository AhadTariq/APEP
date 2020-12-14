import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';


function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    
    return (
        <AppButton 
            title="Login" 
            onPress={handleSubmit} color="secondary"/>
    );
}

export default SubmitButton;