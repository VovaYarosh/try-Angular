import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Kyiv', Validators.required)
      }),
      skills: new FormArray([],)
    });
  }
  submit(){
    console.log('Form: ', this.form);
    const formData = {...this.form.value};
    console.log('form data:', formData);
  }
  setCapital(){
    const cityMap = {
      ua: 'Kyiv',
      pl: 'Warsaw',
      us: 'Washington'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}});
  }
  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control)
  }
}
