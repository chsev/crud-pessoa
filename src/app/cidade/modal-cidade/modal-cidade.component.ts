import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cidade } from 'src/app/shared';

@Component({
  selector: 'app-modal-cidade',
  templateUrl: './modal-cidade.component.html',
  styleUrls: ['./modal-cidade.component.css']
})
export class ModalCidadeComponent  {
  @Input() cidade!: Cidade;
  constructor(public activeModal: NgbActiveModal) { }



}
