import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';

@Module({
  imports: [],
  controllers: [AppController, LibrosController],
  providers: [AppService, LibrosService],
})
export class AppModule {}
