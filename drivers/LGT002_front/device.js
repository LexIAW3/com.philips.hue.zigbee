'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');
const { debug, CLUSTER } = require('zigbee-clusters');

// Uncomment for verbose zigbee logs during development
// debug(true);

class HueTwilightFront extends ZigBeeLightDevice {

  async onNodeInit({ zclNode }) {
    // Target endpoint 11 (front light zone)
    this.endpoint = 11;

    await super.onNodeInit({ zclNode });

    this.log('Hue Twilight (front) initialized on endpoint', this.endpoint);
  }

}

module.exports = HueTwilightFront;
