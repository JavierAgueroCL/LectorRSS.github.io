System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PROYECTOS, PortafolioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PROYECTOS = [
                { id: 11, nombre: 'Sodimac Frontend', imagen: 'sodimac.jpg', ruta: 'sodimac' },
                { id: 12, nombre: 'VTR Corporativo', imagen: 'vtr.jpg', ruta: 'vtr' }
            ];
            PortafolioComponent = (function () {
                function PortafolioComponent() {
                    this.proyectos = PROYECTOS;
                }
                PortafolioComponent = __decorate([
                    core_1.Component({
                        selector: 'task-list',
                        template: "\n    <main class=\"wrapper\">\n\t\t<ul class=\"proyect-list\">\n\t\t\t<li *ngFor=\"let proyecto of proyectos\">\n\t\t\t\t<a routerLink=\"/{{proyecto.ruta}}\">\n\t\t\t\t\t<img src=\"assets/proyectos/{{proyecto.imagen}}\" class=\"img-responsive img-thumbnail\">\n\t\t\t\t\t<p>{{proyecto.nombre}}</p>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</main>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PortafolioComponent);
                return PortafolioComponent;
            }());
            exports_1("PortafolioComponent", PortafolioComponent);
        }
    }
});

//# sourceMappingURL=portafolio.component.js.map
