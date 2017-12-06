var host = "http://phomework.com.co/ionic/php/";

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
                $state.go('loginall');
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
                $state.go('loginall');
            };

        }])

    .controller('registroEstudianteCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {
            
            $scope.form = {
                'nickname'  :    'null',
                'edad'      :    '',
                'telefono'  :    '',
                'correo'    :    '',
                'clave'     :    '',
                'claverepeat':   '',
                'token'     :    localStorage.getItem('device_token'),
                'encrypt'   :    '453fe2d118fe6ea58f1e54f279d2b4af' //phomework-wakusoft in md5
            };

            $scope.save = function(){
                $http({
                    url: host + 'registroestudiante.php',
                    method: "POST",
                    data: $scope.form
                }).then(function (result) {
                    console.log(result);
                    if(result.data.result == 'true'){
                        alert('bienvenido '+result.data.body.correo );
                        localStorage.setItem("clave", result.data.body.clave);
                        localStorage.setItem("correo", result.data.body.correo);
                        localStorage.setItem("edad", result.data.body.edad);
                        localStorage.setItem("id", result.data.body.idestudiante);
                        localStorage.setItem("nickname", result.data.body.nickname);
                        localStorage.setItem("telefono", result.data.body.telefono);
                        localStorage.setItem("device", result.data.body.tipo);
                        localStorage.setItem("tipo", 'estudiante');
                        $state.go('menu.estudiante_panel');
                    }
                    else{
                        alert('Vuelve a intentar');
                        console.log(result.data.body);
                    }
                    
                }, function (err) {
                    console.log(err);
                });
            };



            $scope.gologin = function(){
                $state.go('loginall');
            };

        }])

    .controller('registroDocenteCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicLoading) {

            $scope.form = {
                'nombre' : '',
                'apellido' : '',
                'correo' : '',
                'telefono' : '',
                'direccion' : '',
                'idadministrador' : '0',
                'idareasEspecialista' : '',
                'clave' : '',
                'claveRepeat' : '',
                'descripcion' : '',
                'cuenta' : '',
                'tipocuenta' : '',
                'banco' : '',
                'token' : localStorage.getItem('device_token'),
                'encrypt'   :    '453fe2d118fe6ea58f1e54f279d2b4af' //phomework-wakusoft in md5
            };

            //consultar area especialista========
            $http({
                url: host + 'consultas/consultaareasespecialista.php',
                method: "POST",
                data: {
                    'encrypt'   :    '453fe2d118fe6ea58f1e54f279d2b4af' //phomework-wakusoft in md5
                }
            }).then(function (result) {
                console.log(result);
                $scope.areas = result.data.body;
                console.log($scope.areas);                
            }, function (err) {
                console.log(err);
            });
            //FIN consultar area especialista========

            $scope.save = function(){
                $http({
                    url: host + 'registrodocente.php',
                    method: "POST",
                    data: $scope.form
                }).then(function (result) {
                    console.log(result);
                    if(result.data.result == 'true'){
                        alert('bienvenido' + result.data.body.correo);
                        localStorage.setItem("clave", result.data.body.clave);
                        localStorage.setItem("correo", result.data.body.correo);
                        localStorage.setItem("id", result.data.body.idprofesores);
                        localStorage.setItem("nombre", result.data.body.nombre);
                        localStorage.setItem("telefono", result.data.body.telefono);
                        localStorage.setItem("device", result.data.body.tipo);
                        localStorage.setItem("tipo", 'docente');
                        $state.go('menu.docente_panel');
                    }
                    else{
                        alert('Vuelve a intentar');
                        console.log(result.data.body);
                    }
                    
                }, function (err) {
                    console.log(err);
                });
            };

            $scope.gologin = function(){
                $state.go('loginall');
            };
            
        }])

    .controller('loginallCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            $scope.form = {
                'correo': '',
                'clave': '',
                'token' : localStorage.getItem('device_token'),
                'encrypt'   :    '453fe2d118fe6ea58f1e54f279d2b4af' //phomework-wakusoft in md5
            };

            $scope.login = function () {
                $http({
                    url: host + 'login.php',
                    method: "POST",
                    data: $scope.form
                }).then(function (result) {
                    console.log(result);
                    if(result.data.body.error == null){
                        alert('bienvenido '+result.data.body.correo);
                        localStorage.setItem("clave", $scope.form.clave);
                        localStorage.setItem("correo", result.data.body.correo);
                        localStorage.setItem("id", result.data.body.id);
                        localStorage.setItem("device", result.data.body.token);
                        localStorage.setItem("tipo", result.data.body.tipo);
                        if(result.data.body.tipo == 'docente'){
                            $state.go('menu.docente_panel');
                        }
                        else{
                            $state.go('menu.estudiante_panel');
                        }
                        
                    }
                    else{
                        alert(result.data.body.error);
                        console.log(result.data.body.error);
                    }
                    //alert('Bienvenido');
                }, function (err) {
                    console.log(err);
                });
            };


        }])

    .controller('estudiante_panelCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            $scope.go_cerrar = function(){
                var r = confirm("Desea salir?");
                if (r == true) {
                    //cerrar sesion 
                    localStorage.setItem("clave", '');
                    localStorage.setItem("correo", '');
                    localStorage.setItem("id", '');
                    localStorage.setItem("tipo", '');
                    $state.go('menu.inicioDeSesiN');
                } else {
                    $state.go("menu.estudiante_panel");
                }
                
            };
            $scope.go_fqs = function(){
                alert('preguntas frecuentes');
                $state.go('menu.preguntasFrecuentes');
            };
            $scope.go_misnotificaciones = function(){
                alert('notificaciones');
                $state.go();
            };
            $scope.go_miperfil = function(){
                alert('mi perfil');
                $state.go();
            };


            $scope.go_mistareas = function(){
                $state.go('menu.mistareas');
            };
            $scope.go_mistokens = function(){
                $state.go('menu.mistokens');
            };
            $scope.go_subirtarea = function(){
                $state.go('menu.subirtarea');
            };
            $scope.go_chatsoporte = function(){
                $state.go('menu.chat');
            };

        }])

    .controller('mistareasCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state) {

            $scope.go_cerrar = function(){
                var r = confirm("Desea salir?");
                if (r == true) {
                    //cerrar sesion 
                    $state.go('loginall');
                } else {
                    $state.go("menu.estudiante_panel");
                }
                
            };
            $scope.go_fqs = function(){
                alert('preguntas frecuentes');
                $state.go();
            };
            $scope.go_misnotificaciones = function(){
                alert('notificaciones');
                $state.go();
            };
            $scope.go_miperfil = function(){
                alert('mi perfil');
                $state.go();
            };




            $scope.go_tareaid = function(){
                alert('Tarea ID');
                $state.go('menu.tareaid');
            };

        }])

    .controller('tareaidCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPlatform',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicPlatform) {

            $scope.go_cerrar = function(){
                var r = confirm("Desea salir?");
                if (r == true) {
                    //cerrar sesion 
                    $state.go('loginall');
                } else {
                    $state.go("menu.estudiante_panel");
                }
                
            };
            $scope.go_fqs = function(){
                alert('preguntas frecuentes');
                $state.go();
            };
            $scope.go_misnotificaciones = function(){
                alert('notificaciones');
                $state.go();
            };
            $scope.go_miperfil = function(){
                alert('mi perfil');
                $state.go();
            };



            $scope.go_descubre = function(){
                alert('descubre');
                $state.go('menu.descubre');
            };
            

        }])

    .controller('descubreCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $state, $ionicLoading) {

            $scope.go_cerrar = function(){
                var r = confirm("Desea salir?");
                if (r == true) {
                    //cerrar sesion 
                    $state.go('loginall');
                } else {
                    $state.go("menu.estudiante_panel");
                }
                
            };
            $scope.go_fqs = function(){
                alert('preguntas frecuentes');
                $state.go();
            };
            $scope.go_misnotificaciones = function(){
                alert('notificaciones');
                $state.go();
            };
            $scope.go_miperfil = function(){
                alert('mi perfil');
                $state.go();
            };



            $scope.go_chat = function(){
                alert('Chat');
                $state.go('menu.chat');
            };

            
        }

    ])

    .controller('mistokensCtrl', ['$scope', '$stateParams', '$cordovaDialogs', '$http', '$state', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $cordovaDialogs, $http, $state, $ionicLoading) {

            $scope.go_cerrar = function(){
                var r = confirm("Desea salir?");
                if (r == true) {
                    //cerrar sesion 
                    $state.go('loginall');
                } else {
                    $state.go("menu.estudiante_panel");
                }
                
            };
            $scope.go_fqs = function(){
                alert('preguntas frecuentes');
                $state.go();
            };
            $scope.go_misnotificaciones = function(){
                alert('notificaciones');
                $state.go();
            };
            $scope.go_miperfil = function(){
                alert('mi perfil');
                $state.go();
            };



            $scope.go_payu = function(){
                $state.go('payu');
            }

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

    .controller('subirtareaCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$cordovaActionSheet', '$http', '$state', '$ionicPlatform', '$ionicLoading', '$cordovaMedia',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $cordovaCamera, $cordovaActionSheet, $http, $state, $ionicPlatform, $ionicLoading, $cordovaMedia) {

            $scope.guardar = function(){
                $state.go();
            };

            $scope.escanner = function(){
                $state.go('escanear');
            };

            /*DEBE IR CODIGO DE SCANEER PARA TOMAR FOTO Y PODER SUBIRLA*/ 

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
            $scope.form = {
                'comentario':'',
                'id':localStorage.getItem('id'),
                'correo':localStorage.getItem('correo'),
                'token' : localStorage.getItem('device_token'),
                'encrypt'   :    '453fe2d118fe6ea58f1e54f279d2b4af' //phomework-wakusoft in md5
            };
            $scope.save = function(){
                $http({
                    url: host + 'comentario.php',
                    method: "POST",
                    data: $scope.form
                }).then(function (result) {
                    console.log(result);
                    if(result.data.result == 'true'){
                        alert('Mensaje enviado');
                        $scope.form.comentario = '';
                    }
                    else{
                        alert('Vuelve a intentar');
                        console.log(result.data.body);
                    }
                    
                }, function (err) {
                    console.log(err);
                });
            };
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

