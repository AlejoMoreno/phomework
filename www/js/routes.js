angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('menu', {
                url: '/side-menu21',
                templateUrl: 'templates/menu.html',
                controller: 'menuCtrl'
            })

            .state('menu.inicioDeSesiN', {
                url: '/login',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/inicioDeSesiN.html',
                        controller: 'inicioDeSesiNCtrl'
                    }
                }
            })

            .state('info_estudiante', {
                url: '/info_estudiante',
                templateUrl: 'templates/info_estudiante.html',
                controller: 'info_estudianteCtrl'
            })

            .state('info_docente', {
                url: '/info_docente',
                templateUrl: 'templates/info_docente.html',
                controller: 'info_docenteCtrl'
            })

            .state('registroEstudiante', {
                url: '/soporte',
                templateUrl: 'templates/registroEstudiante.html',
                controller: 'registroEstudianteCtrl'
            })

            .state('registroDocente', {
                url: '/registro',
                templateUrl: 'templates/registroDocente.html',
                controller: 'registroDocenteCtrl'
            })

            .state('menu.miPerfil', {
                url: '/perfil',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/miPerfil.html',
                        controller: 'miPerfilCtrl'
                    }
                }
            })

            .state('menu.misReclamos', {
                url: '/misreclamos',
                params: {
                    CRAWFORD_cliente: ''
                },
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/misReclamos.html',
                        controller: 'misReclamosCtrl'
                    }
                }
            })

            .state('menu.nuevoReclamo13', {
                url: '/reclamo1',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/nuevoReclamo13.html',
                        controller: 'nuevoReclamo13Ctrl'
                    }
                }
            })

            .state('nuevoReclamo23', {
                url: '/reclamo2',
                params: {
                    cedula: "",
                    nombreasegurado: "",
                    apellidoasegurado: "",
                    fechanacimientoasse: "",
                    email: "",
                    marca: "",
                    tipo_seguro: "",
                    aseguradora: "",
                    ciudadrecidencia: "",
                    telefonofijo: "",
                    celular: "",
                    direccion: "",
                    telefonolaboral: ""
                },
                templateUrl: 'templates/nuevoReclamo23.html',
                controller: 'nuevoReclamo23Ctrl'
            })

            .state('nuevoReclamo33', {
                url: '/reclamo3',
                params: {
                    reclamoid: "",
                    cedula: "",
                    nombreasegurado: "",
                    apellidoasegurado: "",
                    fechanacimientoasse: "",
                    ciudadrecidencia: "",
                    telefonofijo: "",
                    celular: "",
                    direccion: "",
                    email: "",
                    telefonolaboral: "",
                    producto: "",
                    jsonrespuestaform: "",
                    tipo_poliza: ""
                },
                templateUrl: 'templates/nuevoReclamo33.html',
                controller: 'nuevoReclamo33Ctrl'
            })

            .state('checklist', {
                url: '/checklist',
                params: {
                    id_reclamo: "",
                    tipo_poliza: ""
                },
                templateUrl: 'templates/checklist.html',
                controller: 'checklistCtrl'
            })

            .state('escanear', {
                url: '/camara',
                params: {
                    id_reclamo: "",
                    id_checklist: "",
                    tipo_poliza: ""
                },
                templateUrl: 'templates/escanear.html',
                controller: 'escanearCtrl'
            })

            .state('grabarAudio', {
                url: '/audio',
                params: {
                    id_reclamo: "",
                    id_checklist: "",
                    tipo_poliza: ""
                },
                templateUrl: 'templates/grabarAudio.html',
                controller: 'grabarAudioCtrl'
            })

            .state('menu.caso1402', {
                url: '/caso',
                params: {
                    id_reclamo: "",
                    tipo_poliza: "",
                    ayuda: ""
                },
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/caso1402.html',
                        controller: 'caso1402Ctrl'
                    }
                }
            })

            .state('menu.preguntasFrecuentes', {
                url: '/FAQ',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/preguntasFrecuentes.html',
                        controller: 'preguntasFrecuentesCtrl'
                    }
                }
            })

            .state('menu.enviarMensaje', {
                url: '/enviarmensaje',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/enviarMensaje.html',
                        controller: 'enviarMensajeCtrl'
                    }
                }
            })

            .state('menu.quieroQuEmeLlamen', {
                url: '/llamada',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/quieroQuEmeLlamen.html',
                        controller: 'quieroQuEmeLlamenCtrl'
                    }
                }
            })

            .state('menu.chat', {
                url: '/chat',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/chat.html',
                        controller: 'chatCtrl'
                    }
                }
            })

            .state('menu.misPolizas', {
                url: '/polizas',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/misPolizas.html',
                        controller: 'misPolizasCtrl'
                    }
                }
            })

            .state('menu.pLizaPantallaProtegida', {
                url: '/poliza1',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/pLizaPantallaProtegida.html',
                        controller: 'pLizaPantallaProtegidaCtrl'
                    }
                }
            })

            .state('menu.pAGOPAYU', {
                url: '/PAYU',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/pAGOPAYU.html',
                        controller: 'pAGOPAYUCtrl'
                    }
                }
            })

            .state('record', {
                url: '/record',
                templateUrl: 'templates/record.html',
                controller: 'recordCtrl'
            })

        $urlRouterProvider.otherwise('/side-menu21/login')


    });
