import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.entity';

@Controller('equipment')
export class EquipmentController {
    constructor (private readonly equipmentService:EquipmentService){}
    @Get()
  getAllEquipment(): Promise<Equipment[]> {
    return this.equipmentService.getAllEquipment();
  }
}
