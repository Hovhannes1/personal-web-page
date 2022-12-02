import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }

  form: FormGroup = new FormGroup({
    userEmail: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.authService.SignUp(this.form.value.userEmail, this.form.value.password);
    }
  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
