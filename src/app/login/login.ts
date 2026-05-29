// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginId: string = '';
  password: string = '';
  errorMessage: string = '';



  login() {

    if (this.loginId === 'admin' && this.password === 'admin@123') {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid Login ID or Password';
    }
  }
  constructor(private router: Router) {}
}