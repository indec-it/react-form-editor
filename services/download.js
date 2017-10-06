/* global window */
import {saveAs} from 'file-saver';
import javascriptStringify from 'javascript-stringify';

export default class DownloadService {
    static download(data, filename = 'section') {
        saveAs(
            new window.Blob([javascriptStringify(data)], {type: 'application/javascript;charset=utf-8'}),
            `${filename}.js`
        );
    }
}
