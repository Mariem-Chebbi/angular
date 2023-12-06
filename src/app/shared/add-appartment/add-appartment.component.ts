import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Appartement } from 'src/app/models/appartement';
import { Residence } from 'src/app/models/residence';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
  appartform!: FormGroup
  id = 0
  imageUrl = "/assets/images/";
  res: Residence = { id: 1, name: "", address: "", image: this.imageUrl + "residence1.jpg" }
  app: Appartement = {
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
  @Output() addForm = new EventEmitter<Appartement>
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

  add() {
    console.log("notre form" + JSON.stringify(this.appartform.value))
    this.app.numAppart = this.appartform.value.numAppart
    this.app.description = this.appartform.value.description
    this.addForm.emit(this.app)
  }
}
