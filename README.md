# ngx-validator

An implementation of various angular validators for Angular 2+.

Currently support data-driven form only.

# List of validators

1. isNumber(Allow only number or + or - or .)
1. strongPassword
1. matchPassword
1. requiredIfInputHasValue
1. numberLetterOnly
1. numberLetterSpaceOnly
1. noBlank
1. asyncDuplicate

# Install

`npm install ngx-validate`


# Example

[https://angular-ngx-validate-example.stackblitz.io/]()

#Code 

Html

```
<!-- main app container -->
<div class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h3>Angular Reactive Form with NgxValidate</h3>
        <form [formGroup]="myForm" novalidate (ngSubmit)="onSubmit(myForm)">
          <div class="form-group">
            <label>Name</label>
            <input type="text"
                   formControlName="name"
                   class="form-control"
                   [ngClass]="{'bg-danger': (!myForm.controls['name'].valid && myForm.controls['name'].touched)}"/>
            <validation-error [errorClass]="'text-danger'" [control]="myForm.get('name')"></validation-error>
          </div>

          <div class="form-group">
            <label>Required When Name Has Value</label>
            <input type="text"
                   formControlName="requiredWhenNameHasValue"
                   class="form-control"
                   [ngClass]="{'bg-danger': (!myForm.controls['requiredWhenNameHasValue'].valid && myForm.controls['requiredWhenNameHasValue'].touched)}"/>
            <validation-error [errorClass]="'text-danger'" [control]="myForm.get('requiredWhenNameHasValue')"></validation-error>
          </div>

          <div class="form-group">
            <label>Async Validate</label>
            <input type="text"
                   formControlName="asyncValidate"
                   class="form-control"
                   [ngClass]="{'bg-danger': (!myForm.controls['asyncValidate'].valid && myForm.controls['asyncValidate'].touched)}"/>
            <validation-error [errorClass]="'text-danger'" [control]="myForm.get('asyncValidate')"></validation-error>
          </div>

          <div class="form-group">
            <label>Number</label>
            <input type="text"
                   formControlName="number"
                   class="form-control"
                   [ngClass]="{'bg-danger': (!myForm.controls['number'].valid && myForm.controls['number'].touched)}"/>
            <validation-error [errorClass]="'text-danger'" [control]="myForm.get('number')"></validation-error>
          </div>

          <div class="form-group">
            <label>Number or Letter Only</label>
            <input type="text"
                   formControlName="numberLetterOnly"
                   class="form-control"
                   [ngClass]="{'bg-danger': (!myForm.controls['numberLetterOnly'].valid && myForm.controls['numberLetterOnly'].touched)}"/>
            <validation-error [errorClass]="'text-danger'" [control]="myForm.get('numberLetterOnly')"></validation-error>
          </div>

          <div class="form-group">
            <label>Password</label>
            <p style="font-size: small">should contain number and uppercase letter and lower case letter and length should more than 7</p>
            <input type="text"
                   formControlName="password"
                   class="form-control"
                   [ngClass]="{'bg-danger': (!myForm.controls['password'].valid && myForm.controls['password'].touched)}"/>
            <validation-error [errorClass]="'text-danger'" [control]="myForm.get('password')"></validation-error>
          </div>


          <div class="form-group">
            <label>Repeat Password</label>
            <input type="text"
                   formControlName="repeatPassword"
                   class="form-control"
                   [ngClass]="{'bg-danger': (!myForm.controls['repeatPassword'].valid && myForm.controls['repeatPassword'].touched)}"/>
            <validation-error [errorClass]="'text-danger'" [control]="myForm.get('repeatPassword')"></validation-error>
          </div>

          <div class="form-group">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
```

Component:

```
  class AppComponent {
    public myForm: FormGroup;
  
    constructor(private formBuiler: FormBuilder,
                private http: HttpClient,
                private ngxValidateService: NgxValidateService) {
      this.initFormControl();
    }
  
    initFormControl() {
      this.myForm = this.formBuiler.group({
        name: new FormControl(null, {validators: [Validators.required]}
        ),
        asyncValidate: new FormControl(null, {
            validators: [],
            asyncValidators: [NgxValidators.asyncDuplicate(
              'http://dummy.restapiexample.com/api/v1/employee/1', this.http, true
            )]
          }
        ),
        requiredWhenNameHasValue: new FormControl(null, {
            validators: [NgxValidators.requiredIfInputHasValue('name')]
          }
        ),
        number: new FormControl('abcd',
          {validators: [Validators.required, NgxValidators.isNumber]}
        ),
        numberLetterOnly: new FormControl(null,
          {validators: [NgxValidators.numberLetterOnly]}
        ),
        password: new FormControl(null,
          {
            validators: [
              Validators.required,
              NgxValidators.strongPassword
            ]
          }),
        repeatPassword: new FormControl(null,
          {validators: NgxValidators.matchPassword('password')})
      });
    }
  
    onSubmit({value, valid}: { value: any, valid: boolean }) {
      if (valid) {
        console.log(value);
        alert(JSON.stringify(value));
      } else {
        console.log(this.myForm);
        Object.keys(this.myForm.controls).forEach(key => {
          this.ngxValidateService.validateAllFormFields(this.myForm);
        });
      }
    }
```

