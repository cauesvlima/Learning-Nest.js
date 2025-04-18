import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity';
import { EquipmentController } from './equipment.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Equipment])],
  providers: [EquipmentService],
  controllers: [EquipmentController],
})
export class EquipmentModule {}
