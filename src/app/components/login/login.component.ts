import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formRegister !: FormGroup
  constructor(private formBuilder:FormBuilder, private service:UsuariosService,
    private router:Router ){

  }


  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({ 
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      check:['',[Validators.required]]
     })
  }


  enviar(){
    console.log(this.formRegister.value)
    if(this.formRegister.valid){
      this.service.login(this.formRegister.value)
      .then( response => {
        console.log(response)
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estas agregado',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No debe haber campos vacios',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
   
  }
}
