import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  standalone: false,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(): void {
    console.log('OnChanges');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem(){
    console.log('Estão tentando me calar.', this.item.id);
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}
