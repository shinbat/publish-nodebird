import Reack, { useState, useCallback } from 'react';

export default  (intialValue = null) => {
    const [value, setValue] = useState(intialValue);
    const handler  = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler, setValue];
};