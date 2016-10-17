System.register(["@angular/router", "./portafolio.component", "./proyecto.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, portafolio_component_1, proyecto_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (portafolio_component_1_1) {
                portafolio_component_1 = portafolio_component_1_1;
            },
            function (proyecto_component_1_1) {
                proyecto_component_1 = proyecto_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', redirectTo: 'portafolio', pathMatch: 'full' },
                { path: 'portafolio', component: portafolio_component_1.PortafolioComponent, data: { title: 'Portafolio' } },
                { path: 'sodimac', component: proyecto_component_1.ProyectoComponent, data: { title: 'Sodimac' } },
                { path: 'vtr', component: proyecto_component_1.ProyectoComponent, data: { title: 'VTR' } }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    }
});

//# sourceMappingURL=app.routing.js.map
