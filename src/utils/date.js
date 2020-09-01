const getDay = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString("en-US", { weekday: "long" });
};

export default {
    getDay
};