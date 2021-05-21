import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplesModule } from './apples/apples.module';

@Module({
  imports: [ApplesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
