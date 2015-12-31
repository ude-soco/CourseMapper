app.directive('facebookButton',
    function () {
        return {
            restrict: 'E',
            scope: {
                loginUrl: '@'
            },
            template: '<div class="control-group">' +
            '<a href="{{loginUrl}}">' +
            '<img src="/admin-lte/images/fb.png">' +
            '</a>' +
            '</div>',
            compile: function (element, attrs) {
                if (!attrs.loginUrl) {
                    attrs.$set('loginUrl', '/api/accounts/login/facebook');
                }
            }
        };
    });