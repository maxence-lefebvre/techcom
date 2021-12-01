import { AggregateRoot } from '@nestjs/cqrs';

import { TenantCreatedDomainEvent } from '../events/tenant-created.domain-event';

import { CreateTenantProps, TenantId, TenantProps } from './tenant.types';

export class Tenant extends AggregateRoot {
  id?: TenantId;

  constructor(protected props: TenantProps) {
    super();
  }

  static create(createProps: CreateTenantProps): Tenant {
    const props = { name: createProps.name };
    Tenant.validate(props);

    const tenant = new Tenant(props);

    this.apply(new TenantCreatedDomainEvent(tenant));

    return tenant;
  }

  updateName(name: string): Tenant {
    const props = { ...this.props, name };

    Tenant.validate(props);

    this.props = props;

    // TODO: Emit TenantNameUpdatedDomainEvent

    return this;
  }

  static validate(props: TenantProps): void {
    // invariant: name must have length >= 10
    if (props.name.length < 10) {
      throw new Error('Tenant name length must be greater or equal than 10');
    }
  }
}
