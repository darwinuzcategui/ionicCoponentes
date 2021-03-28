import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  nombre:string;
  redireccionA:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'basketball',
      nombre: 'Action Sheet',
      redireccionA: '/action-sheet'
    },
    {
      icon: 'baseball',
      nombre: 'alerta',
      redireccionA: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
