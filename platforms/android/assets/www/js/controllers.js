var host = "https://backendv2.crawfordaffinitycolombia.com";
//var host = "http://localhost:8000";
//var host = "http://192.168.1.17:8080/push_Crawford/crawford/Crawford/public";
//var host = "http://192.168.77.89";

angular.module('app.controllers', [])

    .controller('menuCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state) {

            $scope.cerrarsesion = function () {
                localStorage.setItem("CRAWFORD_cliente", '');
                localStorage.setItem("CRAWFORD_nombre", '');
                localStorage.setItem("CRAWFORD_email", '');
                localStorage.setItem("CRAWFORD_apellido", '');
                localStorage.setItem("CRAWFORD_cedula", '');
                localStorage.setItem("CRAWFORD_fechanacimiento", '');
                localStorage.setItem("CRAWFORD_celular", '');
                localStorage.setItem("CRAWFORD_fechaCC", '');
                localStorage.setItem("CRAWFORD_marca", '');
                localStorage.setItem("CRAWFORD_tipo_seguro", '');
                localStorage.setItem("CRAWFORD_aseguradora", '');
                //ir al inicio
                $state.go('menu.inicioDeSesiN');
            };

        }])

    .controller('inicioDeSesiNCtrl', ['$scope', '$stateParams', '$http', '$state', '$cordovaDialogs', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $cordovaDialogs, $ionicLoading) {

            //Traer el token de One Signal for pushnotification
            $scope.data = {
                'token': localStorage.getItem('device_token') ? localStorage.getItem('device_token') : ''
            };

            //function go_info_estudiante
            $scope.go_info_estudiante = function(){
                $state.go('info_estudiante');
            };

            //function go_info_docente
            $scope.go_info_docente = function(){
                $state.go('info_docente');
            };

        }])

    .controller('info_estudianteCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {
            
            $scope.items = [
                {
                    "id":0,
                    "titulo":"Hola Estudiante",
                    "texto":"Phomework te invita a ",
                    "img":"https://image.flaticon.com/icons/svg/194/194931.svg",
                    "show":"true"
                },
                {
                    "id":1,
                    "titulo":"Mejorar tu rendimiento académico",
                    "texto":"de la mano de profes expertos",
                    "img":"http://www.flaticon.com/premium-icon/icons/svg/124/124772.svg",
                    "show":"false"
                },
                {
                    "id":2,
                    "titulo":"Solicita ayuda con tus tareas en esta plataforma",
                    "texto":"",
                    "img":"https://image.flaticon.com/icons/svg/265/265714.svg",
                    "show":"false"
                },
                {
                    "id":3,
                    "titulo":"Mantén tu cuenta recargada para que uses la App",
                    "texto":"donde y cuando más la necesites",
                    "img":"https://image.flaticon.com/icons/svg/181/181374.svg",
                    "show":"false"
                },
                {
                    "id":4,
                    "titulo":"Phomework",
                    "texto":"el amigo que te ayuda a estudiar.",
                    "img":"http://phomework.com.co/imagenes/logo.png",
                    "show":"false"
                }
                
            ];

            //realzar una actualicacion de los items cada 3 segundos
            $scope.pass = function(id){
                console.log('Cambio id: '+id);
                if(id == 4){
                    $scope.items[0].show = 'true';
                    $scope.items[4].show = 'false';
                }
                else{
                    $scope.items[id].show = 'false';
                    $scope.items[id+1].show = 'true';
                }
            };

            $scope.goregistro = function(){
                $state.go('registroEstudiante');
            };

            $scope.gologin = function(){
                $state.go('login');
            };

            
        }])

    .controller('info_docenteCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {          
            $scope.items = [
                {
                    "id":0,
                    "titulo":"Hola Docente",
                    "texto":"Phomework te invita a ",
                    "img":"https://image.flaticon.com/icons/svg/194/194935.svg",
                    "show":"true"
                },
                {
                    "id":1,
                    "titulo":"Apoyar a estudiantes en su proceso académico",
                    "texto":"",
                    "img":"https://image.flaticon.com/icons/svg/187/187624.svg",
                    "show":"false"
                },
                {
                    "id":2,
                    "titulo":"Resuelve dudas, brinda asesoría y ayuda con tareas",
                    "texto":"",
                    "img":"https://image.flaticon.com/icons/svg/138/138280.svg",
                    "show":"false"
                },
                {
                    "id":3,
                    "titulo":"Phomework",
                    "texto":"el amigo que te ayuda a estudiar.",
                    "img":"http://phomework.com.co/imagenes/logo.png",
                    "show":"false"
                }
                
            ];

            //realzar una actualicacion de los items cada 3 segundos
            $scope.pass = function(id){
                console.log('Cambio id: '+id);
                if(id == 3){
                    $scope.items[0].show = 'true';
                    $scope.items[3].show = 'false';
                }
                else{
                    $scope.items[id].show = 'false';
                    $scope.items[id+1].show = 'true';
                }
            };

            $scope.goregistro = function(){
                $state.go('registroDocente');
            };

            $scope.gologin = function(){
                $state.go('login');
            };

        }])

    .controller('registroEstudianteCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            
        }])

    .controller('registroDocenteCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicLoading) {


            
        }])

    .controller('miPerfilCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            $scope.perfil = {
                'id': localStorage.getItem("CRAWFORD_cliente"),
                'nombre': localStorage.getItem("CRAWFORD_nombre"),
                'email': localStorage.getItem("CRAWFORD_email"),
                'lastname': localStorage.getItem("CRAWFORD_apellido"),
                'cedula': localStorage.getItem("CRAWFORD_cedula"),
                'celular': localStorage.getItem("CRAWFORD_celular"),
                'password': ""
            };

            $scope.update_register = function () {
                $http({
                    url: host + '/clientes/update',
                    method: "POST",
                    data: $scope.registro
                }).then(function (result) {
                    console.log(result);
                    alert('Actualizado correctamente');
                    $state.go('menu.bienvenid');
                }, function (err) {
                    console.log(err);
                });
            };

        }])

    .controller('misReclamosCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            //trar los datos de id
            $scope.misReclamos_data = $stateParams;

            //intervalos de 3 segundos y refresca los Datos
            this.task = setInterval(() => {
                $scope.refreshData();
              }, 1000);

            $scope.refreshData = function(){
                //traer todos los reclamos
                    $http({
                        url: host + '/reclamos/cliente/' + localStorage.getItem("CRAWFORD_cliente"),
                        method: "GET"
                    }).then(function (result) {
                        console.log(result);
                        $scope.casos = result.data.body;
                    }, function (err) {
                        console.log(err);
                    });
            };
            

            $scope.go_checklist = function (id_reclamo, tipo_poliza) {
                $state.go('checklist', {
                    "id_reclamo": id_reclamo,
                    "tipo_poliza": tipo_poliza
                });
            };

            $scope.go_block = function(id_reclamo, tipo_poliza){
                $state.go('menu.caso1402', {
                    "id_reclamo": id_reclamo,
                    "tipo_poliza": tipo_poliza,
                    "ayuda": "Caso en estudio"
                });
            };

        }])

    .controller('nuevoReclamo13Ctrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            $scope.form = {
                'cedula': localStorage.getItem("CRAWFORD_cedula"),
                'nombreasegurado': localStorage.getItem("CRAWFORD_nombre"),
                'apellidoasegurado': localStorage.getItem("CRAWFORD_apellido"),
                'fechanacimientoasse': new Date(localStorage.getItem("CRAWFORD_fechanacimiento")),
                'email': localStorage.getItem("CRAWFORD_email"),

                'marca': localStorage.getItem("CRAWFORD_marca"),
                'tipo_seguro': localStorage.getItem("CRAWFORD_tipo_seguro"),
                'aseguradora': localStorage.getItem("CRAWFORD_aseguradora"),

                'ciudadrecidencia': '',
                'telefonofijo': '',
                'celular': '',
                'direccion': '',
                'telefonolaboral': ''
            };

            //traer todos las ciudades
            $http({
                url: host + '/ciudades/all',
                method: "GET"
            }).then(function (result) {
                console.log(result);
                $scope.ciudades = result.data.body;
            }, function (err) {
                console.log(err);
            });

            $scope.go_pass2 = function () {
                if (this.validate() !== false) {
                    $state.go('nuevoReclamo23', $scope.form);
                }
            };

            $scope.validate = function () {
                if ($scope.form.password === '' ||
                    $scope.form.cedula === '' ||
                    $scope.form.nombreasegurado === '' ||
                    $scope.form.apellidoasegurado === '' ||
                    $scope.form.fechanacimientoasse === '' ||
                    $scope.form.email === '' ||
                    $scope.form.marca === '' ||
                    $scope.form.tipo_seguro === '' ||
                    $scope.form.aseguradora === '' ||
                    $scope.form.ciudadrecidencia === '' ||
                    $scope.form.telefonofijo === '' ||
                    $scope.form.celular === '' ||
                    $scope.form.direccion === '' ||
                    $scope.form.telefonolaboral === '') {

                    alert('Verifica los datos');
                    return false;
                }
            };

            $scope.cancelar = function () {
                $state.go('menu.misReclamos');
            };

        }])

    .controller('nuevoReclamo23Ctrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPlatform',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicPlatform) {

            $scope.form1 = $stateParams;

            $scope.form = {
                'campana': "",
                'tienda': "",
                'tipo_asegurado': "",
                'tipo_poliza': "",
                'producto': "1",
                'jsonrespuestaform': ""
            };

            //traer todos las campanas
            $http({
                url: host + '/campanas/search/' + localStorage.getItem("CRAWFORD_aseguradora"),
                method: "GET"
            }).then(function (result) {
                console.log(result);
                $scope.campanas = result.data.body;
            }, function (err) {
                console.log(err);
            });

            $scope.onChange_campana = function (campana) {
                //traer todos las tiendas
                $http({
                    url: host + '/tiendas/search/' + campana,
                    method: "GET"
                }).then(function (result) {
                    console.log(result);
                    $scope.tiendas = result.data.body;
                }, function (err) {
                    console.log(err);
                });
            };

            $scope.onChange_tienda = function (tienda) {
                //traer todos las tipo_asegurados
                $http({
                    url: host + '/tipo_asegurados/search/' + tienda,
                    method: "GET"
                }).then(function (result) {
                    console.log(result);
                    $scope.asegurados = result.data.body;
                }, function (err) {
                    console.log(err);
                });
            };

            $scope.onChange_tipo_asegurado = function (tipo_asegurado) {
                //traer todos las tipo_poliza
                $http({
                    url: host + '/tipo_polizas/search/' + tipo_asegurado,
                    method: "GET"
                }).then(function (result) {
                    console.log(result);
                    $scope.tipo_polizas = result.data.body;
                }, function (err) {
                    console.log(err);
                });
            };

            $scope.onChange_tipo_poliza = function (tipo_polizas) {
                //traer todos las tipo_poliza
                $http({
                    url: host + '/tipo_polizas/get/' + tipo_polizas,
                    method: "GET"
                }).then(function (result) {
                    //creaate formulario in tipo_polizas
                    console.log(result);
                    $scope.formularios = JSON.parse(result.data.body[0].formulario).pasos;
                    console.log($scope.formularios);
                }, function (err) {
                    console.log(err);
                });
            };

            $scope.go_pass3 = function () {
                try{
                    //consumir respuestas en json formuario backend
                    $scope.form.jsonrespuestaform = '{ "pasos": [';
                    $scope.formularios.forEach(function (element) {
                        $scope.form.jsonrespuestaform += '{ "name" : "' + element.id + '", "value" : "' + document.getElementById(element.id).value + '" }';
                        ;
                        //$scope.form.jsonrespuestaform += element.name;
                    }, this);
                    $scope.form.jsonrespuestaform += " ]}";
                }
                catch(e){
                    console.log('un intento fallido');
                }
                
                //recopilacion datos
                $scope.data_form = {
                    'reclamoid': "NEWRECLAMO",
                    'cedula': $scope.form1.cedula,
                    'nombreasegurado': $scope.form1.nombreasegurado,
                    'apellidoasegurado': $scope.form1.apellidoasegurado,
                    'fechanacimientoasse': $scope.form1.fechanacimientoasse,
                    'ciudadrecidencia': $scope.form1.ciudadrecidencia,
                    'telefonofijo': $scope.form1.telefonofijo,
                    'celular': $scope.form1.celular,
                    'direccion': $scope.form1.direccion,
                    'email': $scope.form1.email,
                    'telefonolaboral': $scope.form1.telefonolaboral,
                    'producto': $scope.form.producto,
                    'jsonrespuestaform': $scope.form.jsonrespuestaform,
                    'tipo_poliza': $scope.form.tipo_poliza
                };
                console.log($scope.data_form);
                if (this.validate() !== false) {
                    $state.go('nuevoReclamo33', $scope.data_form);
                }                   
            };

            $scope.validate = function () {
                if ($scope.form.producto === '' ||
                    $scope.form.jsonrespuestaform === '' ||
                    $scope.form.tipo_poliza === '' ) {

                    alert('Verifica los datos');
                    return false;
                }
            };

            $scope.cancelar = function () {
                $state.go('menu.misReclamos');
            };

            $ionicPlatform.registerBackButtonAction(function () {
                alert('no puedes ir atras');
            }, 100);

        }])

    .controller('nuevoReclamo33Ctrl', ['$scope', '$stateParams', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicLoading) {

            $scope.form1 = $stateParams;

            $scope.data_form = {
                'reclamoid': $scope.form1.reclamoid,
                'cedula': $scope.form1.cedula,
                'nombreasegurado': $scope.form1.nombreasegurado,
                'apellidoasegurado': $scope.form1.apellidoasegurado,
                'fechanacimientoasse': $scope.form1.fechanacimientoasse,
                'ciudadrecidencia': $scope.form1.ciudadrecidencia,
                'telefonofijo': $scope.form1.telefonofijo,
                'celular': $scope.form1.celular,
                'direccion': $scope.form1.direccion,
                'email': $scope.form1.email,
                'telefonolaboral': $scope.form1.telefonolaboral,
                'producto': $scope.form1.producto,
                'jsonrespuestaform': $scope.form1.jsonrespuestaform,
                'fechasiniestro': "",
                'horasiniestro': "",
                'descripcionsiniestro': "",
                'textobackend': "SIN TEXTO",
                'observaciones': "SIN OBSERVACIONES",
                'motivobaja': "NO BAJA",
                'cliente': localStorage.getItem("CRAWFORD_cliente"),
                'estados_poliza': "3",
                'ciudadsiniestro': ""
            };

            //traer todos las ciudades
            $http({
                url: host + '/ciudades/all',
                method: "GET"
            }).then(function (result) {
                console.log(result);
                $scope.ciudades = result.data.body;
            }, function (err) {
                console.log(err);
            });

            //enviar datos post a laravel create reclamo
            $scope.generar_caso = function () {
                // Setup the loader
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                console.log($scope.data_form);
                if (this.validate() !== false) {
                    $http({
                        url: host + '/reclamos/create',
                        method: "POST",
                        contentType: "text/xml",
                        dataType: "text",
                        data: $scope.data_form
                    }).then(function (result) {
                        console.log(result);
                        if (result.data.Status == 'false') {
                            alert(result.data.Message);
                            $ionicLoading.hide();
                        }
                        else {
                            alert("Caso generado # " + result.data.body.reclamoid);
                            $ionicLoading.hide();
                            $state.go('menu.misReclamos', {
                                'CRAWFORD_cliente': localStorage.getItem('CRAWFORD_cliente')
                            });/*
                            $state.go('checklist', {
                                "id_reclamo": result.data.body.id,
                                "tipo_poliza": $scope.form1.tipo_poliza
                            });*/
                        }
                    }, function (err) {
                        console.log(err);
                        $ionicLoading.hide();
                    });  
                } 
            };

            $scope.validate = function () {
                if ($scope.data_form.fechasiniestro === '' ||
                    $scope.data_form.horasiniestro === '' ||
                    $scope.data_form.descripcionsiniestro === '' ||
                    $scope.data_form.ciudadsiniestro === '' ) {

                    alert('Verifica los datos');
                    $ionicLoading.hide();
                    return false;
                }
            };

            $scope.cancelar = function () {
                $state.go('menu.misReclamos');
            };
        }

    ])

    .controller('checklistCtrl', ['$scope', '$stateParams', '$cordovaDialogs', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $cordovaDialogs, $http, $state, $ionicLoading) {

            $scope.caso = $stateParams;
            $scope.contador = {
                'list' : 0,
                'doc' : 0
            };

            //intervalos de 3 segundos y refresca los Datos
            this.task = setInterval(() => {
                $scope.refreshData();
              }, 2000);

            $scope.refreshData = function(){
                console.log('este es un dato');
                //traer los checklist
                    $http({
                        url: host + '/listchekings/search/' + $scope.caso.tipo_poliza,
                        method: "GET"
                    }).then(function (result) {
                        console.log(result);
                        $scope.listas = result.data.body;
                    }, function (err) {
                        console.log(err);
                    });

                    //buscar toda la informacion de los documentos y la cantidad
                    $http({
                        url: host + '/documentsmodel/verificarcompletos',
                        method: "POST",
                        contentType: "text/xml",
                        dataType: "text",
                        data: {
                            'reclamo' : $scope.caso.id_reclamo
                        }
                    }).then(function (result) {
                        console.log('resultado....');
                        console.log(result.data);
                        $scope.documents = result.data.body;
                    }, function (err) {
                        console.log(err);
                    });
            };

            console.log($scope.caso);

            //traer los checklist
            $http({
                url: host + '/listchekings/search/' + $scope.caso.tipo_poliza,
                method: "GET"
            }).then(function (result) {
                console.log(result);
                $scope.listas = result.data.body;
            }, function (err) {
                console.log(err);
            });

            //buscar toda la informacion de los documentos y la cantidad
            $http({
                url: host + '/documentsmodel/verificarcompletos',
                method: "POST",
                contentType: "text/xml",
                dataType: "text",
                data: {
                    'reclamo' : $scope.caso.id_reclamo
                }
            }).then(function (result) {
                console.log('resultado....');
                console.log(result.data);
                $scope.documents = result.data.body;
            }, function (err) {
                console.log(err);
            });

            $scope.aviso = function (id_reclamo, tipo_poliza, ayuda) {
                alert(ayuda);
                ///$state.go('menu.caso1402', {
                ///    'id_reclamo': id_reclamo,
                ///    'tipo_poliza': tipo_poliza,
                ///    'ayuda': ayuda
               /// });
            }

            $scope.reclamar = function(){
                // Setup the loader
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                $http({
                    url: host + '/reclamos/updateToEnEstudio',
                    method: "POST",
                    contentType: "text/xml",
                    dataType: "text",
                    data: {
                        'reclamo' : $scope.caso.id_reclamo
                    }
                }).then(function (result) {
                    console.log('resultado....');
                    console.log(result.data);
                    $scope.documents = result.data.body;
                    $ionicLoading.hide();
                    $state.go('menu.misReclamos', {
                        CRAWFORD_cliente: localStorage.getItem('CRAWFORD_cliente')
                    });
                }, function (err) {
                    console.log(err);
                    $ionicLoading.hide();
                });
            };

            $scope.go_scanner = function (id_reclamo, id_checklist, tipo_poliza, ayuda) {
                alert(ayuda);
                $state.go('escanear', {
                    'id_reclamo': id_reclamo,
                    'id_checklist': id_checklist,
                    'tipo_poliza': tipo_poliza
                });
            };

            $scope.go_record = function (id_reclamo, id_checklist, tipo_poliza, ayuda) {
                alert(ayuda);
                $state.go('grabarAudio', {
                    'id_reclamo': id_reclamo,
                    'id_checklist': id_checklist,
                    'tipo_poliza': tipo_poliza
                });
            };

        }


    ])

    .controller('escanearCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$cordovaActionSheet', '$http', '$state', '$ionicPlatform', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

        function ($scope, $stateParams, $cordovaCamera, $cordovaActionSheet, $http, $state, $ionicPlatform, $ionicLoading) {

            $scope.reclamo = $stateParams;
            $scope.file = {
                'file': '',
                'host': host
            };
            console.log($scope.reclamo);
            $scope.respuesta = {
                'ms': 'Respuesta',
                'foto': ""
            }

            //buscar toda la informacion del reclamo
            $http({
                url: host + '/documentsmodel/reclamo/' + $scope.reclamo.id_reclamo + '?listcheking=' + $scope.reclamo.id_checklist ,
                method: "GET"
            }).then(function (result) {
                console.log('resultado');
                console.log(result.data.body);
                $scope.documents = result.data.body;
            }, function (err) {
                console.log(err);
            });

            $scope.delete = function (document) {
                var r = confirm("Se eliminara esta foto. Esta de acuerdo?");
                if (r == true) {
                    // Setup the loader
                    $ionicLoading.show({
                        content: 'Loading',
                        animation: 'fade-in',
                        showBackdrop: true,
                        maxWidth: 200,
                        showDelay: 0
                    });
                    $http({
                        url: host + '/documentsmodel/delete/' + document,
                        method: "GET"
                    }).then(function (result) {
                        console.log(result);
                        alert(result.data.Message);
                        //$state.go('escanear', $scope.reclamo);
                        $ionicLoading.hide();
                        $state.transitionTo('escanear', $scope.reclamo, {reload: true, notify:true});
                    }, function (err) {
                        console.log(err);
                        $ionicLoading.hide();
                    });
                }                
            };

            $scope.folderFile = function(){
                var cameraOptions = {
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    destinationType: Camera.DestinationType.DATA_URL,      
                    quality: 75,
                    targetWidth: 300,
                    targetHeight: 300,
                    encodingType: Camera.EncodingType.JPEG,      
                    correctOrientation: true
                }; 
                $cordovaCamera.getPicture(cameraOptions).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    $scope.respuesta.foto = "data:image/jpeg;base64," + imageData;
                    var r = confirm("Se enviará esta foto. Esta de acuerdo?");
                    if (r == true) {
                        $scope.saveimage();
                    }  
                }, function (err) {
                    console.log(err);
                });
            };

            $scope.takePicture = function () {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: false,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false

                };


                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    //$scope.saveimage($scope.imgURI);
                    $scope.respuesta.foto = "data:image/jpeg;base64," + imageData;
                    var r = confirm("Se enviará esta foto. Esta de acuerdo?");
                    if (r == true) {
                        $scope.saveimage();
                    }  
                }, function (err) {
                    console.log(err);
                });

            };

            $scope.data = {
                'file': ''
            };

            $scope.send = function (scope, element, attributes) {
                // element.bind("change", function (changeEvent) {
                //     var reader = new FileReader();
                //     reader.onload = function (loadEvent) {
                //         scope.$apply(function () {
                //             scope.fileread = loadEvent.target.result;
                //         });
                //     }
                //     reader.readAsDataURL(changeEvent.target.files[0]);
                // });
                var r = confirm("Se enviará esta foto. Esta de acuerdo?");
                if (r == true) {
                    $scope.saveimage();
                }                
            };

            $scope.saveimage = function () {
                //var file = document.getElementById('sortpicture').value;
                //var file_data = file.prop('files')[0];
                //$scope.respuesta.ms = file_data;
                //var file_data = file;
                /*var form_data = new FormData();
                form_data.append('file', file_data);
                form_data.append('reclamo', $scope.reclamo.id_reclamo);
                form_data.append('cliente', localStorage.getItem("CRAWFORD_cliente"));
                form_data.append('listcheking', $scope.reclamo.listcheking);
                form_data.append('FileType', 'camara');
                form_data.append('redirect', 'crawford');*/

                //
                // var data = {
                //     'file': $scope.data.file,
                //     'reclamo': $scope.reclamo.id_reclamo,
                //     'cliente': localStorage.getItem("CRAWFORD_cliente"),
                //     'listcheking': $scope.reclamo.listcheking,
                //     'FileType': 'camara',
                //     'redirect': 'crawford'
                // };
                var data = {
                    'FileType': 'camara',
                    'image_content': $scope.respuesta.foto,
                    'reclamo': $scope.reclamo.id_reclamo,
                    'cliente': localStorage.getItem("CRAWFORD_cliente"),
                    'listcheking': $scope.reclamo.id_checklist
                };

                // Setup the loader
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });

                $http({
                    url: host + '/documentsmodel/uploadSubmitAPP',
                    method: "POST",
                    data: data
                }).then(function (result) {
                    if (result.data.Status == 'false') {
                        $ionicLoading.hide();
                        alert(result.data.Message);
                    }
                    else {
                        console.log(result);
                        $scope.respuesta.ms = result;
                        $scope.respuesta.foto = data;
                        $ionicLoading.hide();
                        $state.transitionTo('escanear', $scope.reclamo, {reload: true, notify:true});
                    }
                }, function (err) {
                    console.log(err);
                    $ionicLoading.hide();
                });

            };

            $scope.go_checklist = function () {
                $state.transitionTo('checklist', {
                        "id_reclamo": $stateParams.id_reclamo,
                        "tipo_poliza": $stateParams.tipo_poliza
                    }, {reload: true, notify:true});
               /* $state.go('checklist', {
                    "id_reclamo": $stateParams.id_reclamo,
                    "tipo_poliza": $stateParams.tipo_poliza
                });*/
            };

            $scope.borrar = function () {
                var options = {
                    title: '¿Quieres borrar esta imagen?',
                    buttonLabels: ['Repetir'],
                    addCancelButtonWithLabel: 'Cancelar',
                    androidEnableCancelButton: true,
                    winphoneEnableCancelButton: true,
                    addDestructiveButtonWithLabel: 'Borrarla'

                };

                $cordovaActionSheet.show(options).then(function (btnIndex) {
                    var index = btnIndex;

                }, false);

            };

            $ionicPlatform.registerBackButtonAction(function () {
                console.log('no se puede ir atras');
            }, 100);

        }

    ])

    .controller('grabarAudioCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$cordovaActionSheet', '$http', '$state', '$ionicPlatform', '$ionicLoading', '$cordovaMedia',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $cordovaCamera, $cordovaActionSheet, $http, $state, $ionicPlatform, $ionicLoading, $cordovaMedia) {

        }])

    .controller('caso1402Ctrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPlatform', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicPlatform) {

        }])

    .controller('preguntasFrecuentesCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

        }])

    .controller('enviarMensajeCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicLoading) {

        }])

    .controller('quieroQuEmeLlamenCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicLoading) {

        }])

    .controller('chatCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            $scope.message = {
                'message': '',
                'state': 'ENVIADO',
                'sender': localStorage.getItem("CRAWFORD_cliente"),
                'receptor': '1' //id administrador
            };

            //buscar toda la informacion del chaat
            setInterval(function () {
                $http({
                    url: host + '/chats/historial/' + $scope.message.sender + '/1',
                    method: "GET"
                }).then(function (result) {
                    console.log(result);
                    $scope.historiales = result.data.body;
                }, function (err) {
                    console.log(err);
                });
            }, 1000);

            $scope.addmessage = function () {
                console.log($scope.message);
                if (this.validate() !== false) {
                    $http({
                        url: host + '/chats/create',
                        method: "POST",
                        contentType: "text/xml",
                        dataType: "text",
                        data: $scope.message,
                    }).then(function (result) {
                        console.log(result);
                        if (result.data.Status == 'false') {
                            alert(result.data.Message);
                        }
                        else {
                            $scope.message.message = '';
                            $state.go('menu.chat');
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            };

            $scope.validate = function () {
                if ($scope.message.message === '') {
                    console.log('Mensaje no enviado, se encuentra vacio');
                    return false;
                }
            };


        }])

    .controller('misPolizasCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

        }])

    .controller('pLizaPantallaProtegidaCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

        }])

    .controller('pAGOPAYUCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

        }])
    .controller('recordCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$cordovaActionSheet', '$http', '$state', '$ionicPlatform', '$ionicLoading', '$cordovaMedia',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $cordovaCamera, $cordovaActionSheet, $http, $state, $ionicPlatform, $ionicLoading, $cordovaMedia) {
            
        }])

