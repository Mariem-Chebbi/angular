import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Residence } from '../models/residence';
import { Appartement } from '../models/appartement';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-appartment',
  templateUrl: './update-appartment.component.html',
  styleUrls: ['./update-appartment.component.css']
})
export class UpdateAppartmentComponent {
  appartform!: FormGroup

  imageUrl = "/assets/images/";
  res: Residence = { id: 1, name: "", address: "", image: this.imageUrl + "residence1.jpg" }
  @Input() app: Appartement = {
    id: 0,
    numAppart: 0,
    numEtage: 0,
    surface: 0,
    terrasse: "",
    surfaceTerrasse: 0,
    category: "",
    description: "",
    residence: this.res,
    status: true

  }

  @Output() updateForm = new EventEmitter<Appartement>
  constructor(private acr: ActivatedRoute) { }
  ngOnInit(): void {
    this.appartform = new FormGroup({

      numAppart: new FormControl(this.app.numAppart, Validators.required),
      description: new FormControl(this.app.description, [Validators.required, Validators.minLength(10)]),
      residence: new FormControl(this.res.id, Validators.required),

    })
  }

  get numappart() { return this.appartform.get('numAppart') }
  get description() { return this.appartform.get('description') }

  onUpdate(): void {
    this.app.numAppart = this.appartform.value.numAppart
    this.app.description = this.appartform.value.description
    this.updateForm.emit(this.app);

  }

}
