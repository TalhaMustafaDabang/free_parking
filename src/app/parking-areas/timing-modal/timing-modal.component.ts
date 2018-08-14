import { Component, OnInit, Input } from '@angular/core';
import { ModelsService } from '../../services/models.service';
import { parkingarea } from '../../models/parking-area';

@Component({
  selector: 'app-timing-modal',
  templateUrl: './timing-modal.component.html',
  styleUrls: ['./timing-modal.component.css']
})
export class TimingModalComponent implements OnInit {

  constructor(private modalService: ModelsService) { }
@Input() tempSlotForModal: parkingarea;
  ngOnInit() {
  }

  closeModal()
  {
    this.modalService.closeModal();
  }

}
