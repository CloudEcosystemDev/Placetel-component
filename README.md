# <p align="center" width="100%"> <img src="./logo.png" width="250" height="250"> </p> 
# <p align="center" width="100%"> Placetel API OIH Connector </p>

## Description

A generated OIH connector for the Placetel API API (version 2.0.0).

Generated from: https://api.placetel.de/v2<br/>
Generated at: 2021-10-29T10:12:28+02:00

## API Description

<br/>

## Authorization

Supported authorization schemes:
- API Key
 - The API key can be obtained from [here](https://web.placetel.de/settings/api#api_token)

## Actions

### Delete a profile for a number
> Removes the profile for a number<br/>

*Tags:* `Numbers`

#### Input Parameters
* `number_id` - _required_ - Number ID<br/>
* `id` - _required_ - Profile ID<br/>

### Activates a profile for a number
> Change the active profile for a number<br/>

*Tags:* `Numbers`

#### Input Parameters
* `number_id` - _required_ - Number ID<br/>

### Creates a new profile for a number
> Shows the active profile for a number<br/>

*Tags:* `Numbers`

#### Input Parameters
* `number_id` - _required_ - Number ID<br/>

### Retrieve a number
> Fetches a number by its ID<br/>

*Tags:* `Numbers`

#### Input Parameters
* `id` - _required_ - Number ID<br/>

### Deletes a contact
> Deletes a contact by its ID<br/>

*Tags:* `Contacts`

#### Input Parameters
* `id` - _required_ - Contact ID<br/>

### Update a contact
> Updates a contact for a given ID<br/>

*Tags:* `Contacts`

#### Input Parameters
* `id` - _required_ - Contact ID<br/>

### Retrieve a contact
> Fetches a contact by its ID<br/>

*Tags:* `Contacts`

#### Input Parameters
* `id` - _required_ - ID of a contact<br/>

### Create a contact
> Creates a contact<br/>

*Tags:* `Contacts`

### Set config params

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Get config params

*Tags:* `CTI`

#### Input Parameters
* `params` - _required_
* `mac` - _required_

### Send DTMF Digits
> This method allows to sendDTMFDigits on a current active call.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Start transfer
> This method allows to initiate the tranfser on the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Start conference
> This method allows to initiate conference on the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Resume
> This method allows device to resume the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Hold
> This method allows device to hold the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Hangup
> This method allows device to end the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Dial digit
> This method initiates a new call.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Dial
> This method initiates a new call.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Decline
> This method allows device to Decline the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Complete transfer
> This method allows to initiate the tranfser on the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Complete conference
> This method allows to complete conference on the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Blind transfer
> This method allows to do a blind tranfser on the call specified by the call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Answer
> This method allows device to answer a ringing call with given call_id.<br/>

*Tags:* `CTI`

#### Input Parameters
* `mac` - _required_

### Delete a fax
> Delete a fax by its ID<br/>

*Tags:* `Faxes`

#### Input Parameters
* `id` - _required_ - Fax ID<br/>

### Fetch specific fax
> Fetch in- or outbound fax<br/>

*Tags:* `Faxes`

#### Input Parameters
* `id` - _required_ - Fax ID<br/>

### Create outbound fax
> Sends faxes via API call<br/>

*Tags:* `Faxes`

### Delete a prompt
> Delete a prompt by its ID<br/>

*Tags:* `Prompts`

#### Input Parameters
* `id` - _required_ - Prompt ID<br/>

### Update a prompt
> Update a prompt by its ID<br/>

*Tags:* `Prompts`

#### Input Parameters
* `id` - _required_ - Prompt ID<br/>

### Retrieve a prompt
> Fetches a prompt by its ID<br/>

*Tags:* `Prompts`

#### Input Parameters
* `id` - _required_ - Prompt ID<br/>

### Create a prompt
> Creates a new prompt<br/>

*Tags:* `Prompts`

### Delete short code
> Delete sip user short code<br/>

*Tags:* `Sip Users`

#### Input Parameters
* `id` - _required_ - Sip user ID<br/>
* `code_id` - _required_ - Short code ID<br/>

### Create short code
> Create sip user short code<br/>

*Tags:* `Sip Users`

#### Input Parameters
* `id` - _required_ - Sip user ID<br/>

### Delete a sip user
> Delete a sip user by its ID<br/>

*Tags:* `Sip Users`

#### Input Parameters
* `id` - _required_ - Sip user ID<br/>

### Update a sip user
> Update a sip user by its ID<br/>

*Tags:* `Sip Users`

#### Input Parameters
* `id` - _required_ - Sip user ID<br/>

### Fetch a sip user
> Fetch a sip users by its ID<br/>

*Tags:* `Sip Users`

#### Input Parameters
* `id` - _required_ - Sip user ID<br/>

### Create a sip user
> Create a new sip user<br/>

*Tags:* `Sip Users`

### Delete a subscription

*Tags:* `Subscriptions`

#### Input Parameters
* `id` - _required_

### Add a subscription

*Tags:* `Subscriptions`

### Delete a subuser
> Delete a subuser by its ID<br/>

*Tags:* `Users`

#### Input Parameters
* `id` - _required_ - Subuser ID<br/>

### Update a subuser
> Update an existing subuser for your account<br/>

*Tags:* `Users`

#### Input Parameters
* `id` - _required_ - User ID<br/>

### Fetch user by ID
> Fetch a single user from your account by its ID<br/>

*Tags:* `Users`

#### Input Parameters
* `id` - _required_ - User ID<br/>

### Reset password for account

*Tags:* `Users`

#### Input Parameters
* `id` - _required_ - User ID<br/>

### Delete a group
> Delete a group by its ID<br/>

*Tags:* `Groups`

#### Input Parameters
* `id` - _required_ - Group ID<br/>

### Update a group
> Update a group by its ID<br/>

*Tags:* `Groups`

#### Input Parameters
* `id` - _required_ - Group ID<br/>

### Fetch a group
> Fetch a groups by its ID<br/>

*Tags:* `Groups`

#### Input Parameters
* `id` - _required_ - Group ID<br/>

### Create a group
> Create a new group<br/>

*Tags:* `Groups`

### Delete a routing object

*Tags:* `Routings`

#### Input Parameters
* `number_or_id` - _required_ - A number or an ID<br/>

### Update routing
> Updates the routing object. Routing can be set to: `forward`, `group`, `plan`, `ivr`, `queue` or `api`<br/>

*Tags:* `Routings`

#### Input Parameters
* `number_or_id` - _required_ - A number or an ID<br/>

### Retrieve routing
> Fetches a routing<br/>

*Tags:* `Routings`

#### Input Parameters
* `number_or_id` - _required_ - A number or an ID<br/>

### Create a routing object
> Create a routing object. Routing can be created as: `forward`, `group`, `ivr`, `queue` or `api`<br/>

*Tags:* `Routings`

### Delete a routing plan

*Tags:* `Routing plans`

#### Input Parameters
* `id` - _required_

### Update a routing plan

*Tags:* `Routing plans`

#### Input Parameters
* `id` - _required_

### Get a routing plan
> Get a routing plans<br/>

*Tags:* `Routing plans`

#### Input Parameters
* `id` - _required_ - ID of a routing plan<br/>

### Create a routing plan

*Tags:* `Routing plans`

### Initate a call
> Initates a call<br/>

*Tags:* `Calls`

### Delete a call
> Delete a call by its ID<br/>

*Tags:* `Calls`

#### Input Parameters
* `id` - _required_ - Call ID<br/>

### Retrieve a call
> Fetches a call by its ID<br/>

*Tags:* `Calls`

#### Input Parameters
* `id` - _required_ - Call ID<br/>

### Update an agent
> Update an agent by its ID<br/>

*Tags:* `Call Center`

#### Input Parameters
* `id` - _required_ - Sip user ID<br/>

### Create an agent
> Create a new agent<br/>

*Tags:* `Call Center`

### Update a queue

*Tags:* `Call Center`

#### Input Parameters
* `id` - _required_ - Queue ID<br/>

### Create a queue

*Tags:* `Call Center`

### Send SMS
> Sends an SMS<br/>

*Tags:* `SMS`

### Delete a phone provisionings
> Delete a phone provisioning<br/>

*Tags:* `Provisionings`

#### Input Parameters
* `id` - _required_ - ID<br/>

### Update a phone provisionings
> Updates a phone provisioning<br/>

*Tags:* `Provisionings`

#### Input Parameters
* `id` - _required_ - ID<br/>

### Retrieve a phone provisionings
> Fetches a phone provisioning by its ID<br/>

*Tags:* `Provisionings`

#### Input Parameters
* `id` - _required_ - ID<br/>

### Trigger reconfiguration of a phone
> This sends a SIP command to the user on line 1 to fetch configuration changes.<br/>

*Tags:* `Provisionings`

#### Input Parameters
* `id` - _required_ - ID<br/>

### Creates a phone provisionings
> Creates a phone provisioning<br/>

*Tags:* `Provisionings`

### Delete a recording
> Delete a recording by its ID<br/>

*Tags:* `Recordings`

#### Input Parameters
* `id` - _required_ - Recording ID<br/>

### Fetch specific recording
> Fetch recording<br/>

*Tags:* `Recordings`

#### Input Parameters
* `id` - _required_ - Recording ID<br/>

## License

: placetel<br/>
                    <br/>

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
