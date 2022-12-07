const getCurrencyConversion = async (from, to, mount) => {
    if (from !== "" && to !== "" && mount > 0) {
        try {

            const myHeaders = new Headers();
            myHeaders.append("apikey", "p2Ip6R9S6FFaCCZtKPUVG6Hz8G2sJ5yG");
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            return await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${mount}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    return data.result
                })
        } catch (error) {
            console.log(error)
        }
    }
}

const listOfCountries = [
    "CRC",
    "EUR",
    "USD",
    "AED",
    "AFN",
    "ALL",
    "AMD"
]

export {
    getCurrencyConversion,
    listOfCountries
}