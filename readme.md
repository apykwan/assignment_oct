INSTRUCTIONS:

/** INSTLLING */

1. to install both client and server concurrently => "npm run install-all"
    - this command will install packages for both server and client sides

2. to install server package alone => "npm run install-server" or "npm install"

3. to install client package alone => "npm run install-client" or under client directory => "npm install"

/** RUNNING */

1. to run in development mode => "npm run dev"
    - client will be run on http://localhost:3000 
    - server will be run on http://localhost:8888

**** IMPORTANT NOTE****
    - If you are running on macOS you will have to change the build command on package.json under client folder as follow:
        "scripts": {
            ...,
            "build": "BUILD_PATH=../server/public react-scripts build"
        }
        
    - If you are running on Windows the build command is
        "scripts": {
            ...,
            "build": "set BUILD_PATH=../public&& react-scripts build",
        }

2. to run in production mode => "npm run prod"
    - react will be built into static files in the public folder
    - the application will be run on http://localhost:8888

