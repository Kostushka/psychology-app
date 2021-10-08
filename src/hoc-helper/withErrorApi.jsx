import { useState } from 'react';
import ErrorMessage from '@components/ErrorMessage';

export const withErrorApi = (Component) => (props) => {
    const [errorApi, setErrorApi] = useState(false);
    return (
        <>
            {errorApi ? (
                <ErrorMessage />
            ) : (
                <Component setErrorApi={setErrorApi} {...props} />
            )}
        </>
    );
};
