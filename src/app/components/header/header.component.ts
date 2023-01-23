import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private service:UsuariosService, private router:Router){}

ngOnInit(): void {
  
}

salir(){
  this.service.salir()
  .then( ()=> {
    Swal.fire({
      title: '¿Desea salir?',
      text: "¡Esta a punto de cerrar sesión!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo salir!'
    })
    this.router.navigate(['/login']);
  } )
  .catch( error => console.log(error))
  
}
}

