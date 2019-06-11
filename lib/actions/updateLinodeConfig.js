/**
 * Auto-generated action file for "Linode" API.
 *
 * Generated at: 2019-06-06T13:12:27.516Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / linode-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'updateLinodeConfig'
 * Endpoint Path: '/linode/instances/{linodeId}/configs/{configId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "linodeId",
    "configId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "linodeId": "linodeId",
    "configId": "configId",
    "comments": "comments",
    "disk_id": "disk_id",
    "volume_id": "volume_id",
    "sda": "sda",
    "sdb": "sdb",
    "sdc": "sdc",
    "sdd": "sdd",
    "sde": "sde",
    "sdf": "sdf",
    "sdg": "sdg",
    "sdh": "sdh",
    "devices": "devices",
    "devtmpfs_automount": "devtmpfs_automount",
    "distro": "distro",
    "modules_dep": "modules_dep",
    "network": "network",
    "updatedb_disabled": "updatedb_disabled",
    "helpers": "helpers",
    "id": "id",
    "kernel": "kernel",
    "label": "label",
    "memory_limit": "memory_limit",
    "root_device": "root_device",
    "run_level": "run_level",
    "virt_mode": "virt_mode",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['personalAccessToken'] = cfg['auth_personalAccessToken'];
    securities['oauth'] = {token: cfg['auth_oauth']};

    let callParams = {
        spec: spec,
        operationId: 'updateLinodeConfig',
        pathName: '/linode/instances/{linodeId}/configs/{configId}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}