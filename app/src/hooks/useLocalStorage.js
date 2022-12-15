import React from 'react'
const PREFIX = 'inter-iit-'

export default function useLocalStorage(key, initialValue) {
    const prefixKey = PREFIX + key;
    const [value, setValue] = React.useState(() => {
        const jsonValue = localStorage.getItem(prefixKey);
        try {
            const parsed = JSON.parse(jsonValue);
            return parsed;
        } catch (e) {
            if (typeof initialValue === 'function') {
                return initialValue();
            } else {
                return initialValue;
            }
        }
    })
    React.useEffect(() => {
        localStorage.setItem(prefixKey, JSON.stringify(value));
    }, [prefixKey, value])
    return [value, setValue];
}   
