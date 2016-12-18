# easycom webui [![Build Status](https://travis-ci.org/cha87de/easycom-webui.svg?branch=build-test)](https://travis-ci.org/cha87de/easycom-webui)
This is the web user interface of easycom, built with Sencha ExtJS 6.2 GPL.
For more information about easycom, please check the higher 
level [easycom repository](https://github.com/cha87de/easycom).

## Developers Guide
1. Get a copy of [Sencha's ExtJS version 6.2 GPL](https://www.sencha.com/legal/gpl/)
2. Get and install [Sencha Cmd](https://www.sencha.com/products/extjs/cmd-download/) on your developer system
3. Create a new sencha workspace with `sencha generate workspace ./path/to/workspace`
4. Modify the file `./path/to/workspace/workspace.json` and add the path to your
extracted copy of ExtJS from step 1, like follows:
``` ...
    "frameworks": {
        "ext": {
            "path":"/path/to/sencha/ext",
            "version":"6.2.0.981" // change to the version you got
        }
    }
}
```
5. Clone this repository inside your workspace folder `./path/to/workspace`
6. Initialize your copy of the easycom-webui sencha app via `sencha app install` in the
folder you checked out, most likely `./path/to/workspace/easycom-webui/`

You are now ready to develop and build the easycom-webui app. 
Please see the [Sencha Cmd Guide](http://docs.sencha.com/cmd/index.html) for more details.

## Operators Guide
Please check the [easycom-webui releases](https://github.com/cha87de/easycom-webui/releases) for a production ready build. 
E.g. take the attached easycom-webui.tgz of the [latest release](https://github.com/cha87de/easycom-webui/releases/latest).
