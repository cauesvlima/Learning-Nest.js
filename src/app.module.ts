import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { ConfigModule } from '@nestjs/config';
import { EquipmentController } from './equipment/equipment.controller';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,})
  ],
  controllers: [AppController, HelloController, EquipmentController],
  providers: [AppService],
})
export class AppModule {}
