import type {default as Bottle, Decorator} from 'bottlejs';
import type ApiServiceFactory from '@/core/factory/api-service.factory';
import type {LoginService} from "@/core/service/login.service";
import AccountService from "@/core/service/api/account.service";

export interface SubContainer<ContainerName extends string> {
  $decorator(name: string | Decorator, func?: Decorator): this;

  $register(Obj: Bottle.IRegisterableObject): this;

  $list(): (keyof Bottle.IContainer[ContainerName])[];
}

declare global {
  /**
   * "any" type which looks more awful in the code so that spot easier
   * the places where we need to fix the TS types
   */
  type $TSFixMe = any;
  type $TSFixMeFunction = (...args: any[]) => any;

  /**
   * Dangerous "unknown" types which are specific enough but do not provide type safety.
   * You should avoid using these.
   */
  type $TSDangerUnknownObject = { [key: string | symbol]: unknown };

  /**
   * Mark some properties as required
   */
  type Require<T, K extends keyof T> = T & { [P in K]-?: T[P] };

  /**
   * Mark some properties as optional
   */
  type Optional<T, K extends keyof T> = T & { [P in K]?: T[P] };

  interface CustomHeyUniProperties {
  }

  /**
   * Mark some properties as optional
   */
  type Remove<T, K extends keyof T> = T & { [P in K]?: never };

  interface InitPostContainer extends SubContainer<'init-post'> {
  }

  interface InitPreContainer extends SubContainer<'init-pre'> {
    state: $TSFixMe;
  }

  interface FactoryContainer extends SubContainer<'factory'> {
    serviceFactory: $TSFixMe;
    apiService: typeof ApiServiceFactory;
  }

  /**
   * Define global container for the bottle.js containers
   */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ServiceContainer extends SubContainer<'service'> {
    loginService: LoginService;
    accountService: AccountService;
  }

  interface InitContainer extends SubContainer<'init'> {
    httpClient: $TSFixMe;
  }

  interface PiniaRootState {
  }
}
/**
 * Link global bottle.js container to the bottle.js container interface
 */
declare module 'bottlejs' {
  // Use the same module name as the import string
  type IContainerChildren = 'factory' | 'service' | 'init' | 'init-post' | 'init-pre';

  interface IContainer {
    factory: FactoryContainer;
    service: ServiceContainer;
    'init-pre': InitPreContainer;
    init: InitContainer;
    'init-post': InitPostContainer;
  }
}
