var require = {
    'baseUrl': './scripts/',

    'paths': {
        'jquery': '../bower_components/jquery/jquery',
        'angular': '../bower_components/angular/angular',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize'
    },

    'shim': {
        'angular': {'exports': 'angular'},
        'angular-cookies': {
            'deps': ['angular']
        },
        'angular-resource': {
            'deps': ['angular']
        },
        'angular-sanitize': {
            'deps': ['angular']
        }
    },
    'priority': [
        'angular'
    ]
};