/*global define, module, require, global, console */

'use strict';

require.config({
    paths: {
        'esprima': '../thirdparty/esprima/esprima',
        'escodegen': '../thirdparty/escodegen/escodegen.browser'
    }
});

/**
 * PumaScript development wrapper
 */
define('pumascript', ['../src/runtime'], function (PumaScript) {

    return PumaScript;
});
