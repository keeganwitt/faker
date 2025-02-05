var address = {};
module['exports'] = address;
address.country = require('./country');
address.building_number = require('./building_number');
address.street_prefix = require('./street_prefix');
address.secondary_address = require('./secondary_address');
address.postcode = require('./postcode');
address.state = require('./state');
address.state_abbr = require('./state_abbr');
address.city_name = require('./city_name');
address.city = require('./city');
address.street_name = require('./street_name');
address.street_address = require('./street_address');
address.default_country = require('./default_country');
