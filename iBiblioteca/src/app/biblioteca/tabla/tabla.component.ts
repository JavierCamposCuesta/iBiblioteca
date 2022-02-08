import { Component, Input, OnInit } from '@angular/core';
import { LibroInterface} from '../libros.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  @Input() librosTabla: LibroInterface[] = [];
  constructor() { }

  ngOnInit() {}

  verDetalles(isbn:string){


  }

}