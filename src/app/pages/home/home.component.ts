import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private serviciousuario: UsuariosService, private router:Router){}


  salir(){
    this.serviciousuario.salir()
    .then( ()=> {
      Swal.fire({
        title: '¡Hasta luego!',
        text: 'Te esperamos de nuevo.',
        imageUrl: 'https://stories.freepiklabs.com/storage/18961/social-networking-rafiki-1660.png',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
      this.router.navigate(['/login']);
    } )
    .catch( error => console.log(error))
  }
  
  
}
