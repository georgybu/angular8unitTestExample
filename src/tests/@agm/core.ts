import {AgmCoreModule} from './origin/packages/core';

class MapsAPILoader {
  load() {
    return Promise.resolve();
  }
}

export {
  AgmCoreModule,
  MapsAPILoader,
};
