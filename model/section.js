import {size} from 'lodash';
import Row from './row';

export default class Section {
    constructor(obj) {
        Object.assign(this, obj);
        if (!this.rows || !size(this.rows)) {
            this.rows = [new Row({order: 1})];
        }
    }
}
