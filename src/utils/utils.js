const getWeeklyWeatherData = (list) => {
    const temperatureArray = [];
    let dayNumber = 0;
    let readingNumber = 0;

    list.forEach((item) => {
        let temp = item.main.temp;

        if (readingNumber === 0) {
            temperatureArray.push(item);
        } else if (temp > temperatureArray[dayNumber].main.temp) {
            temperatureArray[dayNumber] = item;
        } else {
            console.log("Error: unable to find temperature in object")
        }

        readingNumber += 1;
        if (readingNumber === 8) {
            readingNumber = 0;
            dayNumber += 1;
        }
    });

    return temperatureArray;
}

export {
    getWeeklyWeatherData
}