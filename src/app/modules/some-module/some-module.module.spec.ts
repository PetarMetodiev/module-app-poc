import { SomeModuleModule } from './some-module.module';

describe('SomeModuleModule', () => {
  let someModuleModule: SomeModuleModule;

  beforeEach(() => {
    someModuleModule = new SomeModuleModule();
  });

  it('should create an instance', () => {
    expect(someModuleModule).toBeTruthy();
  });
});
