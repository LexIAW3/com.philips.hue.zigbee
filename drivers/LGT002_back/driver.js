'use strict';

const { ZigBeeDriver } = require('homey-zigbeedriver');

class HueTwilightBackDriver extends ZigBeeDriver {

  onInit() {
    this.log('Hue Twilight (back) driver has been initialized');
  }

}

module.exports = HueTwilightBackDriver;
