import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroInterface } from '../../biblioteca/libros.interface';
import { BibliotecaService } from '../../biblioteca/biblioteca.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  libro!:LibroInterface;

  mostrar:boolean = false;

  constructor(private rutaActiva: ActivatedRoute, private bibliotecaService:BibliotecaService, private route:ActivatedRoute) { }

  ngOnInit() {
    const isbn : string = this.route.snapshot.params['isbn'];
    this.bibliotecaService.getBook(isbn).subscribe(resp=>{
      this.libro = resp.docs[0];
      this.mostrar = true;
    });
  }

  

}
