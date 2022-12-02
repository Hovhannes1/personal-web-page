import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
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
      this.authService.SignIn(this.form.value.userEmail, this.form.value.password);
    }
  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
