# Integrating Babylon JS Native with external Babylon JS Lib
The intention of test project is to import an external Babylon JS utility library and integrate in Babylon Native so that our application can run on web and native.
Currently the imported library is mock and only export minimal code. As we resolve issues one-by-one we will addd more code and functionality.

> **Note:** This project is only tested on Mac OS.
 
## Clone
```
git clone --recurse-submodules -j8 git@github.com:giraphics/BabylonNativeGLFW.git
```
  
## Checkout branch
Go to **BabylonNativeGLFW** directory and checkout the test branch. This branch is only for testing purpose and no intentions to create a pull request.
```
git checkout integratExternalLib
```

##  Using NPM version v16.16.0 and install
```
npm use v16.16.0
npm install
```

##  Building
Create a build folder and executing build commands.

```
mkdir build
cd build
cmake .. -G "Xcode"
```

##  Open Project

```
open BabylonNativeExample.xcodeproj
```

