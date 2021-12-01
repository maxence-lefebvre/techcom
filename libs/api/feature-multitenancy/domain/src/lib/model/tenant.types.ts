import { Opaque } from '@techintell/shared/extensions/lang';

const $TenantId$ = Symbol('TenantId');
export type TenantId = Opaque<string, typeof $TenantId$>;

export interface TenantProps {
  name: string;
}

export interface CreateTenantProps {
  name: string;
}
