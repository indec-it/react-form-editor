/* global window */
import {saveAs} from 'file-saver';

export default class DownloadService {
    static download(data, filename = 'section') {
        saveAs(
            new window.Blob([JSON.stringify(data)], {type: 'application/json;charset=utf-8'}),
            `${filename}.json`
        );
    }
}
