import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../common/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-org-registration',
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './org-registration.html',
  styleUrl: './org-registration.scss',
})
export class OrgRegistrationComponent {

  protected readonly title = 'Organization Registration';

  registrationForm: FormGroup;
  loginForm: FormGroup;

  showLogin = true;


  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      orgName: ['', [Validators.required]],
      adminName: ['', [Validators.required]],
      role: ['student', Validators.required],
      adminEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.loginForm = this.fb.group({
      role: ['student', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Validator to check password match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  onSubmit() {
    // if (this.registrationForm.valid) {
    const formValue = this.registrationForm.value;
    if (true) {
      const data = this.registrationForm.value;
      console.log('Organization Registration Data:', data);

      // TODO: Call backend API here using HttpClient
      // Example: this.http.post('/api/org/register', data)

      // For now, navigate to dashboard or success page
      if (formValue.role == 'student') {
        this.router.navigate(['/dashboard/student']);
      } else {  
        this.router.navigate(['/dashboard/admin']);
      }
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}
