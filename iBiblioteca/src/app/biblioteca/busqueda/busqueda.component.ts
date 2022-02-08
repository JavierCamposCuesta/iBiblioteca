import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino:string = '';
  constructor() { }

  ngOnInit() {}

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
