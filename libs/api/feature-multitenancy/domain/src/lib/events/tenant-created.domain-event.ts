import { Tenant } from '../model/tenant';

export class TenantCreatedDomainEvent {
  constructor(public tenant: Tenant) {}
}
