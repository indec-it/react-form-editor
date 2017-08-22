import {size} from 'lodash';

export default class Option {
    constructor(obj) {
        Object.assign(this, obj);
        if (!this.options || !size(this.options)) {
            this.options = [new Option({order: 1})];
        }
    }
}
