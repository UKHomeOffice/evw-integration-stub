module.exports = {
  'json': {
    'objectId': '56ec2057084d726f6a4611b8',
    'passport': {
      'givenNames': 'Ahmed',
      'surname': 'Shehab Malbas Abdulla Alobeidli',
      'passportNumber': '12345678Y',
      'expiryDate': '2018-04-27',
      'issueDate': '2013-04-28',
      'placeOfIssue': 'Kuwait',
      'gender': 'F',
      'dateOfBirth': '1987-08-12',
      'placeOfBirth': 'KUWAIT',
      'countryOfBirth': 'KWT',
      'nationality': 'ARE',
      'holdOtherNationalities': 'No',
      'heldPreviousNationalities': 'No'
    },
    'payment': {
      'orderCode': 'Free',
      'feeInPence': 0,
      'paid': true,
      'paymentDate': '2016-03-18 15:35:51'
    },
    'contactDetails': {
      'emailAddress': 'test@gmail.com',
      'secondEmail': 'testing@gmail.com',
      'homeAddress': [
        'My House',
        'STREET 32',
        'HOUSE NUMBER 16',
        '',
        'KWT',
        '00000'
      ],
      'mobilePhoneNumber': '+123-99028325',
      'phoneNumber': '+123-44422555',
      'countryAppliedFrom': 'Kuwait',
      'countryAppliedFromCode': 'KWT',
      'areYouEmployed': 'No'
    },
    'journey': {
      'travelBy': 'Plane',
      'arrivalTravel': 'BA0156',
      'arrivalDate': '2016-07-25',
      'departureForUKDate': '2016-04-30 08:20:00',
      'arrivalTime': '12:15',
      'portOfArrival': 'London - Heathrow',
      'portOfArrivalCode': 'LHR',
      'ukAddress': [
        'The hotel in London',
        'Westminster, London W1 7YT,',
        '',
        '',
        'W1 7YT'
      ],
      'departureDate': '2016-04-21',
      'departureTravel': 'BA157',
      'portOfDeparture': 'London - Heathrow, LHR',
      'inwardDepartureCountry': 'KWT',
      'inwardDeparturePort': 'Kuwait - Kuwait Intl',
      'inwardDeparturePortCode': 'KWI',
      'reasonForTravel': 'Tourism',
      'travelWithOthers': 'No',
      'knowDepartureDetails': 'Yes',
      'ukVisitPhoneNumber': '+12345234234',
      'visitMoreThanOnce': 'No'
    },
    'miscellaneous': {
      'onBehalfOfMinor': 'No',
      'asAnAgent': 'No',
      'flightDetailsCheck': 'Yes'
    },
    'passportFileId': '56ec1bd8aee7c384447463f0',
    'asdasd': '9AVS89BE'
  },
  'error': 'error: object instance has properties which are not allowed by the schema: [\'asdasd\']\n    level: \'error\'\n    schema: {\'loadingURI\':\'#\',\'pointer\':\'\'}\n    instance: {\'pointer\':\'\'}\n    domain: \'validation\'\n    keyword: \'additionalProperties\'\n    unwanted: [\'asdasd\']\n, error: object has missing required properties ([\'applicationReference\'])\n    level: \'error\'\n    schema: {\'loadingURI\':\'#\',\'pointer\':\'\'}\n    instance: {\'pointer\':\'\'}\n    domain: \'validation\'\n    keyword: \'required\'\n    required: [\'applicationReference\',\'contactDetails\',\'journey\',\'miscellaneous\',\'objectId\',\'passport\',\'passportFileId\',\'payment\']\n    missing: [\'applicationReference\']\n'
};
