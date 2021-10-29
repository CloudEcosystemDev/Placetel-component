/**
 * Auto-generated action file for "Placetel API" API.
 *
 * Generated at: 2021-10-29T08:12:28.125Z
 * Mass generator version: 1.0.0
 *
 * : placetel
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'postRoutings'
 * Endpoint Path: '/routings'
 * Method: 'post'
 *
 */



 // how to pass the transformation function... no need
 // pass the meta data 
 // create a new Object 
 // emit the message with the new emit function 

 // securities and auth methods   
 // check how to make the new ferryman and its transform functions functional // no need

const Swagger = require('swagger-client');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports = {process: processAction};

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "name": "name",
    "behaviour": "behaviour",
    "prompt_id": "prompt_id",
    "destinations": "destinations",
    "forward": "forward",
    "music_on_hold": "music_on_hold",
    "notify_external_api": "notify_external_api",
    "id": "id",
    "group_ringing_time": "group_ringing_time",
    "backup_behaviour": "backup_behaviour",
    "backup_routing_object_id": "backup_routing_object_id",
    "group": "group",
    "item_1_id": "item_1_id",
    "item_2_id": "item_2_id",
    "item_3_id": "item_3_id",
    "item_4_id": "item_4_id",
    "item_5_id": "item_5_id",
    "item_6_id": "item_6_id",
    "item_7_id": "item_7_id",
    "item_8_id": "item_8_id",
    "item_9_id": "item_9_id",
    "catchall_routing_object_id": "catchall_routing_object_id",
    "ivr": "ivr",
    "queue": "queue",
    "max_retries": "max_retries",
    "backup_routing_plan_id": "backup_routing_plan_id",
    "api": "api",
    "active": "active",
    "greeting_id": "greeting_id",
    "mp3": "mp3",
    "mailbox": "mailbox",
    "salutation": "salutation",
    "email": "email",
    "type": "type",
    "receiver": "receiver",
    "notification": "notification",
    "enabled": "enabled",
    "mon": "mon",
    "tue": "tue",
    "wed": "wed",
    "thu": "thu",
    "fri": "fri",
    "sat": "sat",
    "sun": "sun",
    "extended_time_settings": "extended_time_settings",
    "time_from": "time_from",
    "time_to": "time_to",
    "additional_dates": "additional_dates",
    "time_ranges": "time_ranges",
    "time_settings": "time_settings",
    "callerid_enabled": "callerid_enabled",
    "callerid_name": "callerid_name",
    "callerid_number": "callerid_number",
    "custom_callerid": "custom_callerid",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    console.log("msg:",msg);
    console.log("cfg:",cfg)

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.data;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
    ? msg.metadata.oihUid
    : 'oihUid not set yet';
  const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
    ? msg.metadata.recordUid
    : undefined;
  const applicationUid = msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
    ? msg.metadata.applicationUid
    : undefined;

    const newElement = {};
    const oihMeta = {
      applicationUid,
      oihUid,
      recordUid,
    };
    
    // credentials for this operation
    let securities = {};
    securities['Bearer'] = cfg['auth_Bearer'];

    if(cfg.otherServer){
        if(!spec.servers){
            spec.servers = [];
        }
        spec.servers.push({"url":cfg.otherServer})
    }
    
    
    let callParams = {
        spec: spec,
        operationId: 'postRoutings',
        pathName: '/routings',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };
        if(callParams.method === 'get'){
            delete callParams.requestBody;
        }
    

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        // console.log("swagger data:",data);
        delete data.uid;
        newElement.metadata = oihMeta;
        newElement.data = data.data
        this.emit("data",newElement);

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
        obj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));

    }

 }