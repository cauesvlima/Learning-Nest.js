import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('equipment')
export class EquipmentController {
    @Get()
    getEquipment():Object{
        return("")
    }
}
