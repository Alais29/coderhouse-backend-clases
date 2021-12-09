import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { libroDTO } from './dto/libros.dto';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get()
  getAllLibros(): string {
    return this.librosService.getLibros();
  }

  @Post()
  @UsePipes(ValidationPipe)
  crearLibro(@Body() libro: libroDTO): string {
    return this.librosService.createLibro(libro);
  }

  @Put(':id')
  modificarLibro(
    @Param('id') idLibro: string,
    @Body() libro: libroDTO,
  ): string {
    return this.librosService.modifyLibro(idLibro, libro);
  }

  @Delete(':id')
  borrarLibro(@Param('id') idLibro: string): string {
    return this.librosService.deleteLibro(idLibro);
  }
}
