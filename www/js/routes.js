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

            .state('loginall', {
                url: '/loginall',
                templateUrl: 'templates/loginall.html',
                controller: 'loginallCtrl'
            })

            .state('menu.estudiante_panel', {
                url: '/estudiante_panel',
                params: {
                    PHOMEWORK_cliente: ''
                },
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/estudiante_panel.html',
                        controller: 'estudiante_panelCtrl'
                    }
                }
            })

            .state('menu.mistareas', {
                url: '/mistareas',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/mistareas.html',
                        controller: 'mistareasCtrl'
                    }
                }
            })

            .state('menu.tareaid', {
                url: '/tareaid',
                params: {
                    tareaid: "",
                },
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/tareaid.html',
                        controller: 'tareaidCtrl'
                    }
                }                
            })

            .state('menu.miperfilestudiante', {
                url: '/miperfilestudiante',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/miperfilestudiante.html',
                        controller: 'miperfilestudianteCtrl'
                    }
                }                
            })

            .state('menu.miperfildocente', {
                url: '/miperfildocente',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/miperfildocente.html',
                        controller: 'miperfildocenteCtrl'
                    }
                }                
            })

            .state('menu.notificaciones', {
                url: '/notificaciones',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/notificaciones.html',
                        controller: 'notificacionesCtrl'
                    }
                }                
            })

            .state('menu.descubre', {
                url: '/descubre',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/descubre.html',
                        controller: 'descubreCtrl'
                    }
                }                
            })

            .state('menu.mistokens', {
                url: '/mistokens',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/mistokens.html',
                        controller: 'mistokensCtrl'
                    }
                }                 
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

            .state('menu.subirtarea', {
                url: '/subirtarea',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/subirtarea.html',
                        controller: 'subirtareaCtrl'
                    }
                } 
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
