import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from './user.model';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public profilePictureUrl: SafeUrl | null = null;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      state: ['', Validators.required],
      athleteName: [''],
      profilePicture: [null]
    });
  }

  onProfilePictureChange(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      // Converte a imagem para uma URL segura
      this.profilePictureUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));

      // Define o valor do campo profilePicture no formulário
      this.registerForm.patchValue({ profilePicture: file });
    }
  }

  onSubmit(): void {
    const user: User = this.registerForm.value;
    console.log('Usuário registrado:', user);
  }
}