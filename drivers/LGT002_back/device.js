'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');
const { debug, CLUSTER } = require('zigbee-clusters');

// Uncomment for verbose zigbee logs during development
// debug(true);

class HueTwilightBack extends ZigBeeLightDevice {

  async onNodeInit({ zclNode }) {
    // Target endpoint 12 (back / ambient gradient light zone)
    this.endpoint = 12;

    await super.onNodeInit({ zclNode });

    this.log('Hue Twilight (back) initialized on endpoint', this.endpoint);
  }

}

module.exports = HueTwilightBack;
