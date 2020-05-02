import { Test, TestingModule } from '@nestjs/testing';
import { EcommerceCommonService } from './ecommerce-common.service';

describe('EcommerceCommonService', () => {
  let service: EcommerceCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcommerceCommonService],
    }).compile();

    service = module.get<EcommerceCommonService>(EcommerceCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
