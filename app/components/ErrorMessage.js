import React from 'react';

import AppText from './AppText';


function ErrorMessage({ error }) {
    
    if (!error) return null;
    
    return (
       <AppText style={{color: 'red'}}>{error}</AppText>
    );
}



export default ErrorMessage;