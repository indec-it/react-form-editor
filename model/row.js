import {size} from 'lodash';

export default class Row {
    constructor(obj) {
        Object.assign(this, obj);
        if (!this.questions || !size(this.questions)) {
            this.questions = [];
        }
    }
}

