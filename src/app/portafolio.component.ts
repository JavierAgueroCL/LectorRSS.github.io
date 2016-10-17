import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {Proyecto} from './proyecto.class';

const PROYECTOS: Proyecto[] = [
  { id: 11, nombre: 'Sodimac Frontend', imagen: 'sodimac.jpg', ruta: 'sodimac' },
  { id: 12, nombre: 'VTR Corporativo', imagen: 'vtr.jpg', ruta: 'vtr' }
];

@Component({
    selector: 'task-list',
    template: `
    <main class="wrapper">
		<ul class="proyect-list">
			<li *ngFor="let proyecto of proyectos">
				<a routerLink="/{{proyecto.ruta}}">
					<img src="assets/proyectos/{{proyecto.imagen}}" class="img-responsive img-thumbnail">
					<p>{{proyecto.nombre}}</p>
				</a>
			</li>
		</ul>
	</main>
    `
})
export class PortafolioComponent {
	proyectos = PROYECTOS;
}

