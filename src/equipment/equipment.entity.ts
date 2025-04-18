import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tb_equipment')
export class Equipment {
    @PrimaryGeneratedColumn({ name: 'IdEquipment' })
    id: number;

    @Column({ name: 'NameEquipment', type: 'varchar', length: 50 })
    name: string;

    @Column({ name: 'EquipmentDescription', type: 'varchar', length: 255 })
    description: string;

    @Column({ name: 'EquipmentStatus', type: 'int'})
    status: number;
}