// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ionic.native', 'ngCordova', 'luegg.directives'])

    .config(function ($ionicConfigProvider, $sceDelegateProvider) {
        $ionicConfigProvider.backButton.text('').previousTitleText(false);

        $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            var notificationOpenedCallback = function(jsonData) {
                // alert("Notification opened:\n" + JSON.stringify(jsonData));
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };

            // TODO: Update with your OneSignal AppId before running.
            window.plugins.OneSignal
                .startInit("d83f7a35-792a-4254-b6c5-1a7c3b0a1d9b")
                .handleNotificationOpened(notificationOpenedCallback)
                .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
                .endInit();

            window.plugins.OneSignal.getIds(function(ids) {
                var playerId  = ids.userId;
                localStorage.setItem("device_token", playerId);
            });
        });
    })

    /*
      This directive is used to disable the "drag to open" functionality of the Side-Menu
      when you are dragging a Slider component.
    */
    .directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function ($ionicSideMenuDelegate, $rootScope) {
        return {
            restrict: "A",
            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

                function stopDrag() {
                    $ionicSideMenuDelegate.canDragContent(false);
                }

                function allowDrag() {
                    $ionicSideMenuDelegate.canDragContent(true);
                }

                $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
                $element.on('touchstart', stopDrag);
                $element.on('touchend', allowDrag);
                $element.on('mousedown', stopDrag);
                $element.on('mouseup', allowDrag);

            }]
        };
    }])

    /*
      This directive is used to open regular and dynamic href links inside of inappbrowser.
    */
    .directive('hrefInappbrowser', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, element, attrs) {
                var href = attrs['hrefInappbrowser'];

                attrs.$observe('hrefInappbrowser', function (val) {
                    href = val;
                });

                element.bind('click', function (event) {

                    window.open(href, '_system', 'location=yes');

                    event.preventDefault();
                    event.stopPropagation();

                });
            }
        };
    });
