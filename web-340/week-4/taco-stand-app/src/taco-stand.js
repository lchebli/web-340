/**
 * Author: Leslie Khattarchebli
 * Date:6/22/2025
 * File Name: week-4
 * Description:
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush

import { EventEmitter } from 'events';

export class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit('serve', customer);
  }

  prepareTaco(taco) {
    this.emit('prepare', taco);
  }

  handleRush(rush) {
    this.emit('rush', rush);
  }
}
