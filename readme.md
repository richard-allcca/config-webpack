# instalación de modulos 
    `npm install`

# instalación de inicio de webpack
    `npm i -D webpack webpack-cli`

# version de node de este curso 
    14.3.0

# primeros pasos webpack CONFIGUARCION
1. crea la carpeta src con el archivo index.js
2. crea script para desarrollo y produción con los modos
   1. "dev": --mode desarrollo
   2. "build": --mode developement

# Diferentes puntos de entrada y salida en el script 
    "dev-foo": "webpack --mode development --entry ./foo/src/index.js --output-path ./foo/dist",
    "build-foo": "webpack --mode production --entry ./foo/src/index.js --output-path ./foo/dist",

# instalación de babel y sus paquetes 
    `npm i -D babel-loader @babel/core @babel/preset-env`
    `npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react`
- luego de instalar necesitas crear un archivo en la raíz  ".babelrc" 
- dentro debe decir en json que preset de babel vamos a usar "@babel/preset-env

## crear un archivo en la raíz del proyecto para configurar el loader 
    `webpack.config.js`

# instalacion de laoder para html y plugins
    `npm i -D html-loader html-webpack-plugin`

# instalacion de laoder para css y plugins
    `npm i -D mini-css-extract-plugin css-loader ` jonmircha
    `npm i -D sass sass-loader style-loader css-loader ` opcional config-master

# instalacion de servidor para desarrollo 
    `npm i -D webpack-dev-server`
- hay una forma de configurarlo desde el webpack.config pero mejor y mas simple
- es desde el package.json con el comando start

# instalacion de laoder para imagenes
    `npm i -D file-loader`

# instalacion de loader para comprimir imagenes
    `npm i -D image-webpack-loader`

# instalacion de plugins para limpiar la carpeta de distribución
    `npm i -D clean-webpack-plugin`

# instalacion de loader para typeScript
    `npm i -D typescript ts-loader -D`

# instalacion de loader para react
    `npm i react react-dom`

# NOTA EN CASO DE FALLO
- Si cuando instalan tienen errores pueden usar "npm cache clean --force" para limpiar todo ese cache que tenga npm y para verificar si existe usen "npm cache verify"

Edit: Si llegan a tener un problema a la hora de usar el Hola Mundo con TypeScript, instalen cómo "--save-dev" la dependencia "@types/html-webpack-plugin", porque al parecer sin esta dependencia el ts-loader no puede trabajar bien.

-problema con vulnerabilidades en el loader de "image-webpack-loader"
    run `npm audit fix` to fix them, or `npm audit` for details
  https://styde.net/como-actualizar-npm-en-windows-con-npm-windows-upgrade/


  test: /\.(jpe?g|png|gif|svg|webp)$/i,
        // toma el name y la extensión de forma dinamica en los []
        use: [
          "file-loader?name=assets/[name].[ext]",
          "image-webpack-loader"
        ]1