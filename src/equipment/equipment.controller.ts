import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EquipmentService } from './service/equipment.service';
import { Equipment } from './equipment.entity';

@Controller('equipment')
export class EquipmentController {
    constructor(private readonly equipmentService: EquipmentService) { }


    @Get()
    getAllEquipment(): Promise<Equipment[]> {
        return this.equipmentService.getAllEquipment();
    }

    @Get(':id')
    getEquipmentById(@Param('id') id: number): Promise<Equipment> { 
        return this.equipmentService.getEquipmentById(id);
    }

    @Post()
    createEquipment(@Body() equipment: Equipment): Promise<Equipment> {
        return this.equipmentService.createEquipment(equipment);
    }       

    @Put(':id')
    updateEquipment(
        @Param('id') id: number, 
        @Body() equipment: Equipment): Promise<Equipment> {
        return this.equipmentService.updateEquipment(id, equipment);
    }

    @Delete(':id')
    deleteEquipment(@Param('id') id: number): Promise<void> {
        return this.equipmentService.deleteEquipment(id);
    }
}
