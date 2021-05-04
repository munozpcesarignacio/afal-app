"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Index_controller {
    constructor() {
    }
    index(req, res) {
        res.send('hello word');
    }
}
const indexController = new Index_controller;
exports.default = indexController;
