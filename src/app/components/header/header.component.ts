import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private router:Router){}

ngOnInit(): void {
  
}

salir(){
  Swal.fire({
    title: '¿Desea salir?',
    text: "¡Esta a punto de cerrar sesión!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo salir!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Cerrado',
        'Tu sesión se ha cerrado',
        'success'
      )
      this.router.navigate(['login']);
    }
  })
  
  
}
}

