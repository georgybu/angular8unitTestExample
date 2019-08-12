import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule()
class AgmCoreModule {
  static forRoot(...args): ModuleWithProviders {
    return {
      ngModule: AgmCoreModule,
      providers: []
    };
  }
}

class MapsAPILoader {
  load() {
    return Promise.resolve();
  }
}

export {
  AgmCoreModule,
  MapsAPILoader,
};
