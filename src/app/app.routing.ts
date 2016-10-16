import {Routes, RouterModule} from "@angular/router";
import {PortafolioComponent} from "./portafolio.component";
import {ProyectoComponent} from "./proyecto.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'portafolio', pathMatch: 'full'},
    {path: 'portafolio', component: PortafolioComponent, data: {title: 'Portafolio'}},
    {path: 'proyecto', component: ProyectoComponent, data: {title: 'About'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
