var depTime = new Date('10 October 2015 08:37 UTC+3');
var arrTime = new Date('10 October 2015 12:55 GMT');

module.exports = {
    name: 'Abdulaziz M H Al-Besharah',
    passportNumber: '087492749',
    evwNumber: 'A198093473',
    dob: '10/10/1980',
    nationality: 'Kuwait',
    departure: {
        country: 'Kuwait',
        port: 'Kuwait City',
        time: depTime.toISOString()
    },
    arrival: {
        country: 'UK',
        port: 'London Heathrow',
        time: arrTime.toISOString(),
        travelReference: 'BA156'
    }
};
