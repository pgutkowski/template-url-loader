# template-url-loader for webpack

Replaces every "templateUrl: 'url'," in code with "template: require(./url)". It's allows You to bundle external directives and components which are not webpack ready (like [AngularStrap](http://mgcrea.github.io/angular-strap/))


## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## Examples

To use template-url-loader You can either declare it in webpack.config.js:

````js
loaders: [
        { test: /\.js$/, loader: "template-url-loader" },
    ]},
````
or in import statement:
````js
import package from 'template-url-loader!path/package.js';
//package contains Angular module declaring templateUrl.
````

###Passing path prefix

Paths declared as templateUrl may differ from relative path from declaring module to template file. To create proper require statement, You can pass path prefix as argument, as follows:

````js
require("template-url-loader?../prefix/path!path/package.js");
//string between '?' and '!' ('../prefix/path') is prefix added to every replaced templateUrl in file.
````

You can find working example [here](https://github.com/PawelGutkowski/openmrs-contrib-uicommons/blob/master/angular/openmrs-conceptAutocomplete/openmrs-conceptAutocomplete.component.js)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
