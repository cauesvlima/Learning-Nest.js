// create-equipment.dto.ts
import { IsString, IsInt } from 'class-validator';

export class CreateEquipmentDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  status: number;
}
