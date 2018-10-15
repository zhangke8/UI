import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';

// import { TokenPayload } from '../authentication/tokenpayload';
// import { AuthenticationService } from '../authentication/authentication.service';
// import { Employee } from '../models/employee.model';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
// })

// export class LoginComponent implements OnInit {
//     ngOnInit() {}
// }

@Directive({
  selector: '[form]'
})

 @Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  //styleUrls: ['./login.component.css'] 
}) 
 
export class LoginComponent implements OnInit { 
  email: string; 
  password: string; 
  // model = new Employee('test@gmail.com', 'test');
  constructor(private router : Router) { }
  ngOnInit() { } 
  login() { 
    this.router.navigate(['/form']); 
    // if (this.email == 'test@gmail.com' && this.password == 'test') { 
      
    // }
    // else { 
    //   alert("Invalid credentials.");
    // } 
  } 
}