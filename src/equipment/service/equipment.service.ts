import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment } from '../equipment.entity';

@Injectable()
export class EquipmentService {
    constructor(
        @InjectRepository(Equipment)
        private readonly equipmentRepo: Repository<Equipment>,
    ) { }

    async getAllEquipment(): Promise<Equipment[]> {
        try {
            return await this.equipmentRepo.find();
        } catch (error) {
            throw new Error(`Failed to fetch equipment: ${error.message}`);
        }
    }

    async getEquipmentById(id: number): Promise<Equipment> {
        try {
            const equipment = await this.equipmentRepo.findOneBy({ id });
            if (!equipment) {
                throw new NotFoundException(`Equipment with ID ${id} not found`);
            }
            return equipment;
        } catch (error) {
            throw new Error(`Failed to fetch equipment by ID: ${error.message}`);
        }
    }

    async createEquipment(equipment: Equipment): Promise<Equipment> {
        try {
            return await this.equipmentRepo.save(equipment);
        } catch (error) {
            throw new Error(`Failed to create equipment: ${error.message}`);
        }
    }

    async updateEquipment(id: number, equipment: Equipment): Promise<Equipment> {
        try {
            await this.equipmentRepo.update(id, equipment);
            return await this.getEquipmentById(id);
        } catch (error) {
            throw new Error(`Failed to update equipment: ${error.message}`);
        }
    }

    async deleteEquipment(id: number): Promise<void> {
        try {
            const result = await this.equipmentRepo.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException(`Equipment with ID ${id} not found`);
            }
        } catch (error) {
            throw new Error(`Failed to delete equipment: ${error.message}`);
        }
    }
}
