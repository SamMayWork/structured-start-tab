import { Options, OPTS } from '../defaults.js';
import { ExtensionStorage } from '../extension-storage.js';

export class LocalStorage implements ExtensionStorage {
  load(): Promise<void> {
    const dataAsString = localStorage.getItem('structured-start-tab');
    if (dataAsString) {
      const data = JSON.parse(dataAsString) as Options;
      Object.assign(OPTS, data);
    }
    return Promise.resolve();
  }

  write(): Promise<void> {
    localStorage.setItem('structured-start-tab', JSON.stringify(OPTS));
    return Promise.resolve();
  }
}
