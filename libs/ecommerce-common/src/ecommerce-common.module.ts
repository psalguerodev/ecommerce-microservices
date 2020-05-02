import { Module } from '@nestjs/common';
import { EcommerceCommonService } from './ecommerce-common.service';

@Module({
  providers: [EcommerceCommonService],
  exports: [EcommerceCommonService],
})
export class EcommerceCommonModule {}
