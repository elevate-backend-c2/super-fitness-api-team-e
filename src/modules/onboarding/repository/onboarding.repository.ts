import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../../../DB/repositories/abstract.repository';
import { DataSource } from 'typeorm';
import { Onboarding } from '../entities/onboarding.entity';

@Injectable()
export class OnboardingRepository extends AbstractRepository<Onboarding> {
  protected readonly tableName = 'onboarding';

  constructor(dataSource: DataSource) {
    super(dataSource);
  }
}
