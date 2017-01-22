/**
 * Created by xiye on 1/21/17.
 */

//here is an immediately invoked function expression
(function(){
    var pathMappings = {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    };

    var packages = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        'rxjs',
        'built'
    ];

    var packagesConfig = {};

    packages.forEach(function(packageName) {
        packagesConfig[packageName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    });

    System.config({
        map: pathMappings,
        packages: packagesConfig
    });
})();
