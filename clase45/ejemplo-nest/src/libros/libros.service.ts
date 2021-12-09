import { Injectable } from '@nestjs/common';
import { libroDTO } from './dto/libros.dto';

@Injectable()
export class LibrosService {
  getLibros(): string {
    return 'buscando todos los libros desde el service';
  }
  createLibro(libro: libroDTO): string {
    return 'crear libro desde el service';
  }
  modifyLibro(idLibro: string, libro: libroDTO): string {
    return 'modificando libro desde el service';
  }
  deleteLibro(idLibro: string): string {
    return 'borrando libro desde el service';
  }
}
