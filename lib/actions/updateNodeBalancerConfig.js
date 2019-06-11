/**
 * Auto-generated action file for "Linode" API.
 *
 * Generated at: 2019-06-06T13:12:27.553Z
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
 * Operation: 'updateNodeBalancerConfig'
 * Endpoint Path: '/nodebalancers/{nodeBalancerId}/configs/{configId}'
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
    "nodeBalancerId",
    "configId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "nodeBalancerId": "nodeBalancerId",
    "configId": "configId",
    "algorithm": "algorithm",
    "check": "check",
    "check_attempts": "check_attempts",
    "check_body": "check_body",
    "check_interval": "check_interval",
    "check_passive": "check_passive",
    "check_path": "check_path",
    "check_timeout": "check_timeout",
    "cipher_suite": "cipher_suite",
    "id": "id",
    "nodebalancer_id": "nodebalancer_id",
    "down": "down",
    "up": "up",
    "nodes_status": "nodes_status",
    "port": "port",
    "protocol": "protocol",
    "ssl_cert": "ssl_cert",
    "ssl_commonname": "ssl_commonname",
    "ssl_fingerprint": "ssl_fingerprint",
    "ssl_key": "ssl_key",
    "stickiness": "stickiness",
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
        operationId: 'updateNodeBalancerConfig',
        pathName: '/nodebalancers/{nodeBalancerId}/configs/{configId}',
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