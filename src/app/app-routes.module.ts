import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
// import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
 import { CambioClaveComponent } from './components/ModuloGeneral/cambio-clave/cambio-clave.component';
// import { MantenimientoPerfilComponent } from './components/ModuloGeneral/mantenimiento-perfil/mantenimiento-perfil.component';
// import { FavoritosComponent } from './components/ModuloGeneral/favoritos/favoritos.component';
// import { MantenimientoUsuariosComponent } from './components/ModuloGeneral/mantenimiento-usuarios/mantenimiento-usuarios.component';
// import { PermisosComponent } from './components/ModuloGeneral/permisos/permisos.component';
// import { ObjetosOpcionComponent } from './components/ModuloGeneral/objetos-opcion/objetos-opcion.component';
// import { PermisosObjetosComponent } from './components/ModuloGeneral/permisos-objetos/permisos-objetos.component';
// import { ConfiguracionCorreoComponent } from './components/ModuloGeneral/configuracion-correo/configuracion-correo.component';
// import { MantenimientoEmpresasComponent } from './components/ModuloGeneral/mantenimiento-empresas/mantenimiento-empresas.component';
// import { MantenimientoSucursalesComponent } from './components/ModuloGeneral/mantenimiento-sucursales/mantenimiento-sucursales.component';
// import { AmbienteComponent } from './components/ModuloFE/ambiente/ambiente.component';
// import { ParametrosFeComponent } from './components/ModuloFE/parametros-fe/parametros-fe.component';
// import { ParametrosBatchComponent } from './components/ModuloFE/parametros-batch/parametros-batch.component';
// import { MantenimientoCorreoComponent } from './components/ModuloFE/mantenimiento-correo/mantenimiento-correo.component';
// import { MantenimientoCorreoErroresComponent } from './components/ModuloFE/mantenimiento-correo-errores/mantenimiento-correo-errores.component';
// import { ProcesarDocumentosElectronicosComponent } from './components/ModuloFE/procesar-documentos-electronicos/procesar-documentos-electronicos.component'
// import { PermisosTiposDocumentosComponent } from './components/ModuloFE/permisos-tipos-documentos/permisos-tipos-documentos.component';

// import { AuthGuard } from './guards/auth.guard';
// import { PermisosGuard } from './guards/permisos.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cambio-clave',
        component: CambioClaveComponent,
        //canActivate: [AuthGuard, PermisosGuard]
    },
    // {
    //     path: 'favoritos/:id_menu',
    //     component: FavoritosComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'mantenimiento-perfil/:id_menu',
    //     component: MantenimientoPerfilComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'mantenimiento-usuarios/:id_menu',
    //     component: MantenimientoUsuariosComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'permisos/:id_menu',
    //     component: PermisosComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'objetos-opcion/:id_menu',
    //     component: ObjetosOpcionComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'permisos-objetos/:id_menu',
    //     component: PermisosObjetosComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'configuracion-correo/:id_menu',
    //     component: ConfiguracionCorreoComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'mantenimiento-empresas/:id_menu',
    //     component: MantenimientoEmpresasComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'mantenimiento-sucursales/:id_menu',
    //     component: MantenimientoSucursalesComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },

    // {
    //     path: 'ambiente/:id_menu',
    //     component: AmbienteComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'parametros-fe/:id_menu',
    //     component: ParametrosFeComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'parametros-batch/:id_menu',
    //     component: ParametrosBatchComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'mantenimiento-correo/:id_menu',
    //     component: MantenimientoCorreoComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'mantenimiento-correo-errores/:id_menu',
    //     component: MantenimientoCorreoErroresComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'permisos-tipos-documentos/:id_menu',
    //     component: PermisosTiposDocumentosComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },
    // {
    //     path: 'procesar-documentos-electronicos/:id_menu',
    //     component: ProcesarDocumentosElectronicosComponent,
    //     canActivate: [AuthGuard, PermisosGuard]
    // },

    // {
    //     path: 'pagina-error',
    //     component: PaginaErrorComponent,
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'home',
        component: HomeComponent
        //canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule { }

