import React from 'react';
import { useExchangeRate } from '../context/api';

export const ExchangeRateAPIStatus = () => {
    const {error, status, data} = useExchangeRate('USD', ['EUR', 'GBP'])

    if (status === 'loading') {
        return <span>Loading...</span>
    }
    if (error) {
        return <span>{error.message}</span>
    }
    return <pre><code>
        {(JSON.stringify(data))}
        </code></pre>
}