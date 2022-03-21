import React, { createContext, useContext, useEffect, useState } from 'react'

const CryptoCurrency =createContext();
const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {
      if (currency === "INR") setSymbol("₹");
      else if (currency === "USD") setSymbol("$");
    }, [currency]);
    
  return (
    <CryptoCurrency.Provider value={{currency,symbol,setCurrency}}>
            {children}
    </CryptoCurrency.Provider>
  )
}

export default CryptoContext;

export const CryptoCurrencyState = () => {
    return useContext(CryptoCurrency);

}