'use strict';

const { ZigBeeDriver } = require('homey-zigbeedriver');

class HueTwilightFrontDriver extends ZigBeeDriver {

  onInit() {
    this.log('Hue Twilight (front) driver has been initialized');
  }

}

module.exports = HueTwilightFrontDriver;
