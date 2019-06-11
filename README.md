# ![LOGO](logo.png) Linode **flow**ground Connector

## Description

A generated **flow**ground connector for the Linode API (version 4.0.15).

Generated from: https://api.apis.guru/v2/specs/linode.com/4.0.15/openapi.json<br/>
Generated at: 2019-06-06T16:12:27+03:00

## API Description

# Introduction
The Linode API provides the ability to programmatically manage the full
range of Linode products and services.

This reference is designed to assist application developers and system
administrators.  Each endpoint includes descriptions, request syntax, and
examples using standard HTTP requests. Response data is returned in JSON
format.


This document was generated from our OpenAPI Specification.  See the
[OpenAPI website](https://www.openapis.org) for more information.

[Download the Linode OpenAPI Specification](/api/v4/openapi.yaml)


# Changelog

[View our Changelog](/changelog) to see release
notes on all changes made to our API.

# Access and Authentication

Some endpoints are publicly accessible without requiring authentication.
All endpoints affecting your Account, however, require either a Personal
Access Token or OAuth authentication (when using third-party
applications).

## Personal Access Token

The easiest way to access the API is with a Personal Access Token (PAT)
generated from the
[Linode Cloud Manager](https://cloud.linode.com/profile/tokens).

All scopes for the OAuth security model (defined below) apply to this
security model as well.

### Authentication

| Security Scheme Type: | HTTP |
|-----------------------|------|
| **HTTP Authorization Scheme** | bearer |

## OAuth

The OAuth workflow is a three-step process to authenticate a User before an
application can start making API calls on the User's behalf. If all you need
is a Personal Access Token, feel free to skip ahead to the next section.

First, the User visits the application's website and is directed to log with
Linode. The User is then redirected to Linode's authentication server and
presented the scope levels the application is requesting. Once the User
accepts the request for access, we redirect them back to the application's
specified redirect URI with an access code.

Once the User has logged in to Linode and you have received an exchange code,
you will need to exchange that access code for an Authorization token. You
do this by making an HTTP POST request to the following address:

```
https://login.linode.com/oauth/token
```

Make this request as `application/x-www-form-urlencoded` or as
`multipart/form-data` and include the following parameters in the POST body:

| PARAMETER | DESCRIPTION |
|-----------|-------------|
| client_id | Your app's client ID |
| client_secret | Your app's client secret |
| code | The code you just received from the redirect |

You'll get a reponse like this:

```json
{
  "scope": "linodes:read_write",
  "access_token": "03d084436a6c91fbafd5c4b20c82e5056a2e9ce1635920c30dc8d81dc7a6665c"
  "token_type": "bearer",
  "expires_in": 7200,
}
```

Included in the reponse is `access_token`. With this token, you can proceed to make
authenticated HTTP requests to the API by adding this header to each request:

```
Authorization: Bearer 03d084436a6c91fbafd5c4b20c82e5056a2e9ce1635920c30dc8d81dc7a6665c
```

### Authentication

| Security Scheme Type: | Oauth2 |
|-----------------------|--------|
| **AuthorizationCode Oauth Flow** |  **Authorization URL:** https://login.linode.com/oauth/authorize<br />**Token URL:** https://login.linode.com/oauth/token<br />**Scopes:**<br /><ul><li>`account:read_only` - Allows access to GET information about your Account.</li><li>`account:read_write` - Allows access to all endpoints related to your Account.</li><li>`domains:read_only` - Allows access to GET Domains on your Account.</li><li>`domains:read_write` - Allows access to all Domain endpoints.</li><li>`events:read_only` - Allows access to GET your Events.</li><li>`events:read_write` - Allows access to all endpoints related to your Events.</li><li>`images:read_only` - Allows access to GET your Images.</li><li>`images:read_write` - Allows access to all endpoints related to your Images.</li><li>`ips:read_only` - Allows access to GET your ips.</li><li>`ips:read_write` - Allows access to all endpoints related to your ips.</li><li>`linodes:read_only` - Allows access to GET Linodes on your Account.</li><li>`linodes:read_write` - Allow access to all endpoints related to your Linodes.</li><li>`longview:read_only` - Allows access to GET your Longview Clients.</li><li>`longview:read_write` - Allows access to all endpoints related to your Longview Clients.</li><li>`nodebalancers:read_only` - Allows access to GET NodeBalancers on your Account.</li><li>`nodebalancers:read_write` - Allows access to all NodeBalancer endpoints.</li><li>`stackscripts:read_only` - Allows access to GET your StackScripts.</li><li>`stackscripts:read_write` - Allows access to all endpoints related to your StackScripts.</li><li>`volumes:read_only` - Allows access to GET your Volumes.</li><li>`volumes:read_write` - Allows access to all endpoints related to your Volumes.</li></ul><br />|

# Requests

Requests must be made over HTTPS to ensure transactions are encrypted. The
following Request methods are supported:

| METHOD | USAGE |
|--------|-------|
| GET    | Retrieves data about collections and individual resources. |
| POST   | For collections, creates a new resource of that type. Also used to perform actions on action endpoints. |
| PUT    | Updates an existing resource. |
| DELETE | Deletes a resource. This is a destructive action. |


# Responses

Actions will return one following HTTP response status codes:

| STATUS  | DESCRIPTION |
|---------|-------------|
| 200 OK  | The request was successful. |
| 204 No Content | The server successfully fulfilled the request and there is no additional content to send. |
| 400 Bad Request | You submitted an invalid request (missing parameters, etc.). |
| 401 Unauthorized | You failed to authenticate for this resource. |
| 403 Forbidden | You are authenticated, but don't have permission to do this. |
| 404 Not Found | The resource you're requesting does not exist. |
| 429 Too Many Requests | You've hit a rate limit. |
| 500 Internal Server Error | Please [open a Support Ticket](#operation/createTicket). |

# Errors

Success is indicated via [Standard HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
`2xx` codes indicate success, `4xx` codes indicate a request error, and
`5xx` errors indicate a server error. A
request error might be an invalid input, a required parameter being omitted,
or a malformed request. A server error means something went wrong processing
your request. If this occurs, please
[open a Support Ticket](#operation/createTicket)
and let us know. Though errors are logged and we work quickly to resolve issues,
opening a ticket and providing us with reproducable steps and data is always helpful.

The `errors` field is an array of the things that went wrong with your request.
We will try to include as many of the problems in the response as possible,
but it's conceivable that fixing these errors and resubmitting may result in
new errors coming back once we are able to get further along in the process
of handling your request.


Within each error object, the `field` parameter will be included if the error
pertains to a specific field in the JSON you've submitted. This will be
omitted if there is no relevant field. The `reason` is a human-readable
explanation of the error, and will always be included.

# Pagination

Resource lists are always paginated. The response will look similar to this:

```json
{
    "data": [ ... ],
    "page": 1,
    "pages": 3,
    "results": 300
}
```

Pages start at 1. You may retrieve a specific page of results by adding
`?page=x` to your URL (for example, `?page=4`). Page sizes default to 100,
and can be set to return between 25 and 100. Page size can be set using
`?page_size=x`.

# Filtering and Sorting

Collections are searchable by fields they include, marked in the spec as
`x-linode-filterable: true`. Filters are passed
in the `X-Filter` header and are formatted as JSON objects. Here is a request
call for Linode Types in our "standard" class:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: { \
    "class": "standard"
  }'
```

The filter object's keys are the keys of the object you're filtering,
and the values are accepted values. You can add multiple filters by
including more than one key. For example, filtering for "standard" Linode
Types that offer one vcpu:

```Shell
 curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: { \
    "class": "standard",
    "vcpus": 1
  }'
```

In the above example, both filters are combined with an "and" operation.
However, if you wanted either Types with one vcpu or Types in our "standard"
class, you can add an operator:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: {
    "+or": [
      { "vcpus": 1 },
      { "class": "standard" }
    ]
  }'
```

Each filter in the `+or` array is its own filter object, and all conditions
in it are combined with an "and" operation as they were in the previous example.

Other operators are also available. Operators are keys of a Filter JSON
object. Their value must be of the appropriate type, and they are evaluated
as described below:

| OPERATOR | TYPE   | DESCRIPTION                       |
|----------|--------|-----------------------------------|
| +and     | array  | All conditions must be true.       |
| +or      | array  | One condition must be true.        |
| +gt      | number | Value must be greater than number. |
| +gte     | number | Value must be greater than or equal to number. |
| +lt      | number | Value must be less than number. |
| +lte     | number | Value must be less than or equal to number. |
| +contains | string | Given string must be in the value. |
| +neq      | string | Does not equal the value.          |
| +order_by | string | Attribute to order the results by - must be filterable. |
| +order    | string | Either "asc" or "desc". Defaults to "asc". Requires `+order_by`. |

For example, filtering for [Linode Types](#operation/getLinodeTypes)
that offer memory equal to or higher than 61440:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: {
    "memory": {
      "+gte": 61440
    }
  }'
```

You can combine and nest operators to construct arbitrarily-complex queries.
For example, give me all [Linode Types](#operation/getLinodeTypes)
which are either `standard` or `highmem` class, and
have between 12 and 20 vcpus:

```Shell
curl "https://api.linode.com/v4/linode/types" \
  -H 'X-Filter: {
    "+or": [
      {
        "+or": [
          {
            "class": "standard"
          },
          {
            "class": "highmem"
          }
        ]
      },
      {
        "+and": [
          {
            "vcpus": {
              "+gte": 12
            }
          },
          {
            "vcpus": {
              "+lte": 20
            }
          }
        ]
      }
    ]
  }'
```

# CLI (Command Line Interface)

The [Linode CLI](https://github.com/linode/linode-cli) allows you to easily
work with the API using intuitive and simple syntax. It requires a
[Personal Access Token](#section/Personal-Access-Token)
for authentication, and gives you access to all of the features and functionality
of the Linode API that are documented here with CLI examples.

Endpoints that do not have CLI examples are currently unavailable through the CLI, but
can be accessed via other methods such as Shell commands and other third-party applications.


## Authorization

Supported authorization schemes:
- OAuth2
- Bearer Token

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### View Account

> Returns the contact and billing information related to your Account.

*Tags:* `Account`

### Update Account

> Updates contact and billing information related to your Account.

*Tags:* `Account`

### x_linode_cli_command_account

### Add/Edit Credit Card

> Adds/edit credit card information to your Account.<br/>
> Only one credit card can be associated with your Account, so using this endpoint will overwrite your currently active card information with the new credit card.

*Tags:* `Account`

### x_linode_cli_command_account_credit_card

### List Events

> Returns a collection of Event objects representing actions taken on your Account. The Events returned depends on your grants.

*Tags:* `Account`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_account_events

### View Event

> Returns a single Event object.

*Tags:* `Account`

#### Input Parameters
* `eventId` - _required_ - The ID of the Event.

### x_linode_cli_command_account_events__eventId_

#### Input Parameters
* `eventId` - _required_ - The ID of the Event.

### Mark Event as Read

> Marks a single Event as read.

*Tags:* `Account`

#### Input Parameters
* `eventId` - _required_ - The ID of the Event to designate as read.

### x_linode_cli_command_account_events__eventId__read

#### Input Parameters
* `eventId` - _required_ - The ID of the Event to designate as read.

### Mark Event as Seen

> Marks all Events up to and including this Event by ID as seen.

*Tags:* `Account`

#### Input Parameters
* `eventId` - _required_ - The ID of the Event to designate as seen.

### x_linode_cli_command_account_events__eventId__seen

#### Input Parameters
* `eventId` - _required_ - The ID of the Event to designate as seen.

### List Invoices

> Returns a paginated list of Invoices against your Account.

*Tags:* `Account`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_account_invoices

### View Invoice

> Returns a single Invoice object.

*Tags:* `Account`

#### Input Parameters
* `invoiceId` - _required_ - The ID of the Invoice.

### x_linode_cli_command_account_invoices__invoiceId_

#### Input Parameters
* `invoiceId` - _required_ - The ID of the Invoice.

### List Invoice Items

> Returns a paginated list of Invoice items.

*Tags:* `Account`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_account_invoices__invoiceId__items

#### Input Parameters
* `invoiceId` - _required_ - The ID of the Invoice.

### List Notifications

> Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.<br/>
> You cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.

*Tags:* `Account`

### x_linode_cli_command_account_notifications

### List OAuth Clients

> Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.

*Tags:* `Account`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create OAuth Client

> Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.

*Tags:* `Account`

### x_linode_cli_command_account_oauth_clients

### Delete OAuth Client

> Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by https://login.linode.com, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).

*Tags:* `Account`

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### View OAuth Client

> Returns information about a single OAuth client.

*Tags:* `Account`

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### Update OAuth Client

> Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.

*Tags:* `Account`

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### x_linode_cli_command_account_oauth_clients__clientId_

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### Reset OAuth Client Secret

> Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.

*Tags:* `Account`

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### x_linode_cli_command_account_oauth_clients__clientId__reset_secret

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### View OAuth Client Thumbnail

> Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.

*Tags:* `Account`

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### Update OAuth Client Thumbnail

> Upload a thumbnail for a client you own.  You must upload an image file that will be returned when the thumbnail is retrieved.  This image will be publicly-viewable.

*Tags:* `Account`

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### x_linode_cli_command_account_oauth_clients__clientId__thumbnail

#### Input Parameters
* `clientId` - _required_ - The OAuth Client ID to look up.

### List Payments

> Returns a paginated list of Payments made on this Account.

*Tags:* `Account`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Make Payment

> Makes a Payment to your Account via credit card. This will charge your credit card the requested amount.

*Tags:* `Account`

### x_linode_cli_command_account_payments

### Stage PayPal Payment

> This begins the process of submitting a Payment via PayPal. After calling this endpoint, you must take the resulting `payment_id` along with the `payer_id` from your PayPal account and [POST /account/payments/paypal-execute](#operation/executePayPalPayment) to complete the Payment.

*Tags:* `Account`

### x_linode_cli_command_account_payments_paypal

### Execute Staged/Approved PayPal Payment

> Given a PaymentID and PayerID - as generated by PayPal during the transaction authorization process - this endpoint executes the Payment to capture the funds and credit your Linode Account.

*Tags:* `Account`

### x_linode_cli_command_account_payments_paypal_execute

### View Payment

> Returns information about a specific Payment.

*Tags:* `Account`

#### Input Parameters
* `paymentId` - _required_ - The ID of the Payment to look up.

### x_linode_cli_command_account_payments__paymentId_

#### Input Parameters
* `paymentId` - _required_ - The ID of the Payment to look up.

### View Account Settings

> Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.

*Tags:* `Account`

### Update Account Settings

> Updates your Account settings.

*Tags:* `Account`

### x_linode_cli_command_account_settings

### View Network Utilization

> Returns a Transfer object showing your network utilization, in GB, for the current month.

*Tags:* `Account`

### x_linode_cli_command_account_transfer

### List Users

> Returns a paginated list of Users on your Account. Users may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.

*Tags:* `Account`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create User

> Creates a User on your Account. Once created, the User will be able to log in and access portions of your Account. Access is determined by whether or not they are restricted, and what grants they have been given.

*Tags:* `Account`

### x_linode_cli_command_account_users

### Delete User

> Deletes a User. The deleted User will be immediately logged out and may no longer log in or perform any actions. All of the User's Grants will be removed.

*Tags:* `Account`

#### Input Parameters
* `username` - _required_ - The username to look up.

### View User

> Returns information about a single User on your Account.

*Tags:* `Account`

#### Input Parameters
* `username` - _required_ - The username to look up.

### Update User

> Update information about a User on your Account. This can be used to change the restricted status of a User. When making a User restricted, no grants will be configured by default and you must then set up grants in order for the User to access anything on the Account.

*Tags:* `Account`

#### Input Parameters
* `username` - _required_ - The username to look up.

### x_linode_cli_command_account_users__username_

#### Input Parameters
* `username` - _required_ - The username to look up.

### View User's grants

> Returns the full grants structure for this User. This includes all entities on the Account alongside what level of access this User has to each of them. Individual users may view their own grants at the [/profile/grants](#operation/getProfileGrants) endpoint, but will not see entities that they have no access to.

*Tags:* `Account`

#### Input Parameters
* `username` - _required_ - The username to look up.

### Update User's grants

> Update the grants a User has. This can be used to give a User access to new entities or actions, or take access away.  You do not need to include the grant for every entity on the Account in this request; any that are not included will remain unchanged.

*Tags:* `Account`

#### Input Parameters
* `username` - _required_ - The username to look up.

### x_linode_cli_command_account_users__username__grants

#### Input Parameters
* `username` - _required_ - The username to look up.

### List Domains

> This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.

*Tags:* `Domains`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Domain

> Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.

*Tags:* `Domains`

### x_linode_cli_command_domains

### Import a Domain Zone

> Imports a domain zone from a remote nameserver.<br/>
> Your nameserver must allow zone transfers (AXFR) from the following IPs:<br/>
>   - 96.126.114.97<br/>
>   - 96.126.114.98<br/>
>   - 2600:3c00::5e<br/>
>   - 2600:3c00::5f

*Tags:* `Domains`

### Delete Domain

> Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.

*Tags:* `Domains`

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain to access.

### View Domain

> This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.

*Tags:* `Domains`

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain to access.

### Update Domain

> Update information about a Domain in Linode's DNS Manager.

*Tags:* `Domains`

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain to access.

### x_linode_cli_command_domains__domainId_

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain to access.

### List Domain Records

> Returns a paginated list of Records configured on a Domain in Linode's<br/>
> DNS Manager.

*Tags:* `Domains`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Domain Record

> Adds a new Domain Record to the zonefile this Domain represents.

*Tags:* `Domains`

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain we are accessing Records for.

### x_linode_cli_command_domains__domainId__records

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain we are accessing Records for.

### Delete Domain Record

> Deletes a Record on this Domain.

*Tags:* `Domains`

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain whose Record you are accessing.
* `recordId` - _required_ - The ID of the Record you are accessing.

### View Domain Record

> View a single Record on this Domain.

*Tags:* `Domains`

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain whose Record you are accessing.
* `recordId` - _required_ - The ID of the Record you are accessing.

### Update Domain Record

> Updates a single Record on this Domain.

*Tags:* `Domains`

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain whose Record you are accessing.
* `recordId` - _required_ - The ID of the Record you are accessing.

### x_linode_cli_command_domains__domainId__records__recordId_

#### Input Parameters
* `domainId` - _required_ - The ID of the Domain whose Record you are accessing.
* `recordId` - _required_ - The ID of the Record you are accessing.

### List Images

> Returns a paginated list of Images.<br/>
> <br/>
> * Calling this endpoint without authentication returns all public Images.<br/>
> * Authentication is required to return a combined paginated list of all public and<br/>
>   your private Images.

*Tags:* `Images`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Image

> Creates a private gold-master Image from a Linode Disk. There is no additional charge to store Images for Linode users.<br/>
> Images are limited to three per Account.

*Tags:* `Images`

### x_linode_cli_command_images

### Delete Image

> Deletes a private Image you have permission to `read_write`.<br/>
> <br/>
> <br/>
> **Deleting an Image is a destructive action and cannot be undone.**

*Tags:* `Images`

#### Input Parameters
* `imageId` - _required_ - ID of the Image to look up.

### View Image

> Get information about a single Image.

*Tags:* `Images`

#### Input Parameters
* `imageId` - _required_ - ID of the Image to look up.

### Update Image

> Updates a private Image that you have permission to `read_write`.

*Tags:* `Images`

#### Input Parameters
* `imageId` - _required_ - ID of the Image to look up.

### x_linode_cli_command_images__imageId_

#### Input Parameters
* `imageId` - _required_ - ID of the Image to look up.

### List Linodes

> Returns a paginated list of Linodes you have permission to view.

*Tags:* `Linode Instances`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Linode

> Creates a Linode Instance on your Account. In order for this<br/>
> request to complete successfully, your User must have the `add_linodes` grant. Creating a<br/>
> new Linode will incur a charge on your Account.<br/>
> <br/>
> Linodes can be created using one of the available Types. See<br/>
> [GET /linode/types](#operation/getLinodeTypes) to get more<br/>
> information about each Type's specs and cost.<br/>
> <br/>
> Linodes can be created in any one of our available<br/>
> [Regions](#operation/getRegions) for a list<br/>
> of available Regions you can deploy your Linode in.<br/>
> <br/>
> Linodes can be created in a number of ways:<br/>
> <br/>
> * Using a Linode Linux Distribution image or an Image you created based on another Linode.<br/>
>   * The Linode will be `running` after it completes `provisioning`.<br/>
>   * A default config with two Disks, one being a 512 swap disk, is created.<br/>
>     * `swap_size` can be used to customize the swap disk size.<br/>
>   * Requires a `root_pass` be supplied to use for the root User's Account.<br/>
>   * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br/>
>   * You may also supply a list of usernames via the `authorized_users` field.<br/>
>     * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](#operation/addSSHKey) for more information.<br/>
> <br/>
> * Using a StackScript.<br/>
>   * See [/linode/stackscripts](#operation/getStackScripts) for<br/>
>     a list of available StackScripts.<br/>
>   * The Linode will be `running` after it completes `provisioning`.<br/>
>   * Requires a compatible Image to be supplied.<br/>
>     * See [/linode/stackscript/{stackscriptId}](#operation/getStackScript) for compatible Images.<br/>
>   * Requires a `root_pass` be supplied to use for the root User's Account.<br/>
>   * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.<br/>
>   * You may also supply a list of usernames via the `authorized_users` field.<br/>
>     * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](#operation/addSSHKey) for more information.<br/>
> <br/>
> * Using one of your other Linode's backups.<br/>
>   * You must create a Linode large enough to accommodate the Backup's size.<br/>
>   * The Disks and Config will match that of the Linode that was backed up.<br/>
>   * The `root_pass` will match that of the Linode that was backed up.<br/>
> <br/>
> * Create an empty Linode.<br/>
>   * The Linode will remain `offline` and must be manually started.<br/>
>     * See [POST /linode/instances/{linodeId}/boot](#operation/bootLinodeInstance).<br/>
>   * Disks and Configs must be created manually.<br/>
>   * This is only recommended for advanced use cases.<br/>
> <br/>
> <br/>
> **Important**: You must be an unrestricted User in order to add or modify<br/>
> tags on Linodes.

*Tags:* `Linode Instances`

### x_linode_cli_command_linode_instances

### Delete Linode

> Deletes a Linode you have permission to `read_write`.<br/>
> <br/>
> **Deleting a Linode is a destructive action and cannot be undone.**<br/>
> <br/>
> Additionally, deleting a Linode:<br/>
> <br/>
>   * Gives up any IP addresses the Linode was assigned.<br/>
>   * Deletes all Disks, Backups, Configs, etc.<br/>
>   * Stops billing for the Linode and its associated services. You will be billed for time used<br/>
>     within the billing period the Linode was active.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up

### View Linode

> Get a specific Linode by ID.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up

### Update Linode

> Updates a Linode that you have permission to `read_write`.<br/>
> <br/>
> **Important**: You must be an unrestricted User in order to add or modify tags on Linodes.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up

### x_linode_cli_command_linode_instances__linodeId_

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up

### List Backups

> Returns information about this Linode's available backups.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode the backups belong to.

### Create Snapshot

> Creates a snapshot Backup of a Linode.<br/>
> ** If you already have a snapshot of this Linode, this is a destructive action. The previous snapshot will be deleted.**

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode the backups belong to.

### x_linode_cli_command_linode_instances__linodeId__backups

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode the backups belong to.

### Cancel Backups

> Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to cancel backup service for.

### x_linode_cli_command_linode_instances__linodeId__backups_cancel

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to cancel backup service for.

### Enable Backups

> Enables backups for the specified Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to enable backup service for.

### x_linode_cli_command_linode_instances__linodeId__backups_enable

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to enable backup service for.

### View Backup

> Returns information about a Backup.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode the Backup belongs to.
* `backupId` - _required_ - The ID of the Backup to look up.

### x_linode_cli_command_linode_instances__linodeId__backups__backupId_

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode the Backup belongs to.
* `backupId` - _required_ - The ID of the Backup to look up.

### Restore Backup

> Restores a Linode's Backup to the specified Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode that the Backup belongs to.
* `backupId` - _required_ - The ID of the Backup to restore.

### x_linode_cli_command_linode_instances__linodeId__backups__backupId__restore

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode that the Backup belongs to.
* `backupId` - _required_ - The ID of the Backup to restore.

### Boot Linode

> Boots a Linode you have permission to modify. If no parameters are given, a Config profile<br/>
> will be chosen for this boot based on the following criteria:<br/>
> <br/>
> * If there is only one Config profile for this Linode, it will be used.<br/>
> * If there is more than one Config profile, the last booted config will be used.<br/>
> * If there is more than one Config profile and none were the last to be booted (because the<br/>
>   Linode was never booted or the last booted config was deleted) an error will be returned.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to boot.

### x_linode_cli_command_linode_instances__linodeId__boot

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to boot.

### Clone Linode

> You can clone your Linode's existing Disks or Configuration profiles to another Linode on your Account. In order for this request to complete successfully, your User must have the `add_linodes` grant. Cloning to a new Linode will incur a charge on your Account.<br/>
> If cloning to an existing Linode, any actions currently running or queued must be completed first before you can clone to it.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to clone.

### x_linode_cli_command_linode_instances__linodeId__clone

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to clone.

### List Configuration Profiles

> Lists Configuration profiles associated with a Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Configuration Profile

> Adds a new Configuration profile to a Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up Configuration profiles for.

### x_linode_cli_command_linode_instances__linodeId__configs

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up Configuration profiles for.

### Delete Configuration Profile

> Deletes the specified Configuration profile from the specified Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode whose Configuration profile to look up.
* `configId` - _required_ - The ID of the Configuration profile to look up.

### View Configuration Profile

> Returns information about a specific Configuration profile.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode whose Configuration profile to look up.
* `configId` - _required_ - The ID of the Configuration profile to look up.

### Update Configuration Profile

> Updates a Configuration profile.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode whose Configuration profile to look up.
* `configId` - _required_ - The ID of the Configuration profile to look up.

### x_linode_cli_command_linode_instances__linodeId__configs__configId_

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode whose Configuration profile to look up.
* `configId` - _required_ - The ID of the Configuration profile to look up.

### List Disks

> View Disk information for Disks associated with this Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Disk

> Adds a new Disk to a Linode. You can optionally create a Disk from an Image (see [/images](#operation/getImages) for a list of available public images, or use one of your own), and optionally provide a StackScript to deploy with this Disk.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### x_linode_cli_command_linode_instances__linodeId__disks

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### Delete Disk

> Deletes a Disk you have permission to `read_write`.<br/>
> <br/>
> **Deleting a Disk is a destructive action and cannot be undone.**

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### View Disk

> View Disk information for a Disk associated with this Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### Update Disk

> Updates a Disk that you have permission to `read_write`.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### x_linode_cli_command_linode_instances__linodeId__disks__diskId_

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### Clone Disk

> Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to clone.

### x_linode_cli_command_linode_instances__linodeId__disks__diskId__clone

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to clone.

### Reset Disk Root Password

> Resets the password of a Disk you have permission to `read_write`.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### x_linode_cli_command_linode_instances__linodeId__disks__diskId__password

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### Resize Disk

> Resizes a Disk you have permission to `read_write`.<br/>
> The Linode this Disk is attached to must be shut down for resizing to take effect.<br/>
> If you are resizing the Disk to a smaller size, it cannot be made smaller than what is required by the total size of the files current on the Disk. The Disk must not be in use. If the Disk is in use, the request will succeed but the resize will ultimately fail.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### x_linode_cli_command_linode_instances__linodeId__disks__diskId__resize

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `diskId` - _required_ - ID of the Disk to look up.

### List Networking Information

> Returns networking information for a single Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### Allocate IPv4 Address

> Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](#operation/createTicket). You may not add more than one private IPv4 address to a single Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### x_linode_cli_command_linode_instances__linodeId__ips

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### Delete IPv4 Address

> Deletes a public IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address. Private IPv4 addresses cannot be removed via this endpoint.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to look up.
* `address` - _required_ - The IP address to look up.

### View IP Address

> View information about the specified IP address associated with the specified Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to look up.
* `address` - _required_ - The IP address to look up.

### Update IP Address

> Updates a particular IP Address associated with this Linode. Only allows setting/resetting reverse DNS.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to look up.
* `address` - _required_ - The IP address to look up.

### x_linode_cli_command_linode_instances__linodeId__ips__address_

#### Input Parameters
* `linodeId` - _required_ - The ID of the Linode to look up.
* `address` - _required_ - The IP address to look up.

### Initiate Pending Migration

> In some circumstances, a Linode may have pending migrations scheduled that that you can initiate when convenient.  In these cases, a Notification will be returned from [GET /account/notifications](#getNotifications). This endpoint initiates the scheduled migration, which will shut the Linode down, migrate it, and then bring it back to its original state.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to migrate.

### x_linode_cli_command_linode_instances__linodeId__migrate

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to migrate.

### Upgrade Linode

> Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.<br/>
> If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to mutate.

### x_linode_cli_command_linode_instances__linodeId__mutate

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to mutate.

### Reboot Linode

> Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the linode to reboot.

### x_linode_cli_command_linode_instances__linodeId__reboot

#### Input Parameters
* `linodeId` - _required_ - ID of the linode to reboot.

### Rebuild Linode

> Rebuilds a Linode you have the `read_write` permission to modify.<br/>
> A rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:<br/>
> <br/>
>   * Requires an `image` be supplied.<br/>
>   * Requires a `root_pass` be supplied to use for the root User's Account.<br/>
>   * It is recommended to supply SSH keys for the root User using the<br/>
>     `authorized_keys` field.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to rebuild.

### x_linode_cli_command_linode_instances__linodeId__rebuild

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to rebuild.

### Boot Linode into Rescue Mode

> Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.<br/>
> * Note that "sdh" is reserved and unavailable during rescue.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to rescue.

### x_linode_cli_command_linode_instances__linodeId__rescue

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to rescue.

### Resize Linode

> Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:<br/>
> <br/>
>   * The Linode must not have a pending migration.<br/>
>   * Your Account cannot have an outstanding balance.<br/>
>   * The Linode must not have more disk allocation than the new Type allows.<br/>
>     * In that situation, you must first delete or resize the disk to be smaller.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to resize.

### x_linode_cli_command_linode_instances__linodeId__resize

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to resize.

### Shut Down Linode

> Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to shutdown.

### x_linode_cli_command_linode_instances__linodeId__shutdown

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to shutdown.

### View Linode Statistics

> Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### x_linode_cli_command_linode_instances__linodeId__stats

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### View Statistics (year/month)

> Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.

*Tags:* `Linode Instances`

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `year` - _required_ - Numeric value representing the year to look up.
* `month` - _required_ - Numeric value representing the month to look up.

### x_linode_cli_command_linode_instances__linodeId__stats__year___month_

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.
* `year` - _required_ - Numeric value representing the year to look up.
* `month` - _required_ - Numeric value representing the month to look up.

### List Linode's Volumes

> View Block Storage Volumes attached to this Linode.

*Tags:* `Linode Instances`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_linode_instances__linodeId__volumes

#### Input Parameters
* `linodeId` - _required_ - ID of the Linode to look up.

### List Kernels

> Lists available Kernels.

*Tags:* `Linode Instances`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_linode_kernels

### View Kernel

> Returns information about a single Kernel.

*Tags:* `Linode Instances`

#### Input Parameters
* `kernelId` - _required_ - ID of the Kernel to look up.

### x_linode_cli_command_linode_kernels__kernelId_

#### Input Parameters
* `kernelId` - _required_ - ID of the Kernel to look up.

### List StackScripts

> If the request is not authenticated, only public StackScripts are returned.<br/>
> <br/>
> For more information on StackScripts, please read our guide: [Automate Deployment with StackScripts](https://linode.com/docs/platform/stackscripts/).

*Tags:* `StackScripts`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create StackScript

> Creates a StackScript in your Account.

*Tags:* `StackScripts`

### x_linode_cli_command_linode_stackscripts

### Delete StackScript

> Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.

*Tags:* `StackScripts`

#### Input Parameters
* `stackscriptId` - _required_ - The ID of the StackScript to look up.

### View StackScript

> Returns all of the information about a specified StackScript, including the contents of the script.

*Tags:* `StackScripts`

#### Input Parameters
* `stackscriptId` - _required_ - The ID of the StackScript to look up.

### Update StackScript

> Updates a StackScript.<br/>
> <br/>
> **Once a StackScript is made public, it cannot be made private.**

*Tags:* `StackScripts`

#### Input Parameters
* `stackscriptId` - _required_ - The ID of the StackScript to look up.

### x_linode_cli_command_linode_stackscripts__stackscriptId_

#### Input Parameters
* `stackscriptId` - _required_ - The ID of the StackScript to look up.

### List Types

> Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](#operation/createLinodeInstance) or [resizing](#operation/resizeLinodeInstance) Linodes.

*Tags:* `Linode Types`

### x_linode_cli_command_linode_types

### View Type

> Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](#operation/createLinodeInstance) or [resizing](#operation/resizeLinodeInstance) Linodes.

*Tags:* `Linode Types`

#### Input Parameters
* `typeId` - _required_ - The ID of the Linode Type to look up.

### x_linode_cli_command_linode_types__typeId_

#### Input Parameters
* `typeId` - _required_ - The ID of the Linode Type to look up.

### List Longview Clients

> Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.

*Tags:* `Longview`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Longview Client

> Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.

*Tags:* `Longview`

### x_linode_cli_command_longview_clients

### Delete Longview Client

> Deletes a Longview Client from your Account.<br/>
> <br/>
> **All information stored for this client will be lost.**<br/>
> <br/>
> This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.

*Tags:* `Longview`

#### Input Parameters
* `clientId` - _required_ - The Longview Client ID to access.

### View Longview Client

> Returns a single Longview Client you can access.

*Tags:* `Longview`

#### Input Parameters
* `clientId` - _required_ - The Longview Client ID to access.

### Update Longview Client

> Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.

*Tags:* `Longview`

#### Input Parameters
* `clientId` - _required_ - The Longview Client ID to access.

### x_linode_cli_command_longview_clients__clientId_

#### Input Parameters
* `clientId` - _required_ - The Longview Client ID to access.

### List Longview Subscriptions

> Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.

*Tags:* `Longview`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_longview_subscriptions

### View Longview Subscription

> Returns a single LongviewSubscription object.  This is a public endpoint and requires no authentication.

*Tags:* `Longview`

#### Input Parameters
* `subscriptionId` - _required_ - The Longview Subscription to look up.

### x_linode_cli_command_longview_subscriptions__subscriptionId_

#### Input Parameters
* `subscriptionId` - _required_ - The Longview Subscription to look up.

### List Managed Contacts

> Returns a paginated list of Managed Contacts on your Account.

*Tags:* `Managed`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Managed Contact

> Creates a Managed Contact.  A Managed Contact is someone Linode special forces can contact in the course of attempting to resolve an issue with a Managed Service.

*Tags:* `Managed`

### x_linode_cli_command_managed_contacts

### Delete Managed Contact

> Deletes a Managed Contact.

*Tags:* `Managed`

#### Input Parameters
* `contactId` - _required_ - The ID of the contact to access.

### View Managed Contact

> Returns a single Managed Contact.

*Tags:* `Managed`

#### Input Parameters
* `contactId` - _required_ - The ID of the contact to access.

### Update Managed Contact

> Updates information about a Managed Contact.

*Tags:* `Managed`

#### Input Parameters
* `contactId` - _required_ - The ID of the contact to access.

### x_linode_cli_command_managed_contacts__contactId_

#### Input Parameters
* `contactId` - _required_ - The ID of the contact to access.

### List Managed Credentials

> Returns a paginated list of Managed Credentials on your Account.

*Tags:* `Managed`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Managed Credential

> Creates a Managed Credential. A Managed Credential is stored securely to allow Linode special forces to access your Managed Services and resolve issues.

*Tags:* `Managed`

### x_linode_cli_command_managed_credentials

### View Managed Credential

> Returns a single Managed Credential.

*Tags:* `Managed`

#### Input Parameters
* `credentialId` - _required_ - The ID of the Credential to access.

### Update Managed Credential

> Updates information about a Managed Credential.

*Tags:* `Managed`

#### Input Parameters
* `credentialId` - _required_ - The ID of the Credential to access.

### x_linode_cli_command_managed_credentials__credentialId_

#### Input Parameters
* `credentialId` - _required_ - The ID of the Credential to access.

### Delete Managed Credential

> Deletes a Managed Credential.  Linode special forces will no longer have access to this Credential when attempting to resolve issues.

*Tags:* `Managed`

#### Input Parameters
* `credentialId` - _required_ - The ID of the Credential to access.

### x_linode_cli_command_managed_credentials__credentialId__revoke

#### Input Parameters
* `credentialId` - _required_ - The ID of the Credential to access.

### List Managed Issues

> Returns a paginated list of recent and ongoing issues detected on your Managed Services.

*Tags:* `Managed`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_managed_issues

### View Managed Issue

> Returns a single Issue that is impacting or did impact one of your Managed Services.

*Tags:* `Managed`

#### Input Parameters
* `issueId` - _required_ - The Issue to look up.

### x_linode_cli_command_managed_issues__issueId_

#### Input Parameters
* `issueId` - _required_ - The Issue to look up.

### List Managed Linode Settings

> Returns a paginated list of Managed Settings for your Linodes. There will be one entry per Linode on your Account.

*Tags:* `Managed`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_managed_linode_settings

### View Linode's Managed Settings

> Returns a single Linode's Managed settings.

*Tags:* `Managed`

#### Input Parameters
* `linodeId` - _required_ - The Linode ID whose settings we are accessing.

### Update Linode's Managed Settings

> Updates a single Linode's Managed settings.

*Tags:* `Managed`

#### Input Parameters
* `linodeId` - _required_ - The Linode ID whose settings we are accessing.

### x_linode_cli_command_managed_linode_settings__linodeId_

#### Input Parameters
* `linodeId` - _required_ - The Linode ID whose settings we are accessing.

### List Managed Services

> Returns a paginated list of Managed Services on your Account. These are the services Linode Managed is monitoring and will report and attempt to resolve issues with.

*Tags:* `Managed`

### Create Managed Service

> Creates a Managed Service. Linode Managed will being monitoring this service and reporting and attempting to resolve any Issues.

*Tags:* `Managed`

### x_linode_cli_command_managed_services

### Delete Managed Service

> Deletes a Managed Service.  This service will no longer be monitored by Linode Managed.

*Tags:* `Managed`

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to access.

### View Managed Service

> Returns information about a single Managed Service on your Account.

*Tags:* `Managed`

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to access.

### Update Managed Service

> Updates information about a Managed Service.

*Tags:* `Managed`

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to access.

### x_linode_cli_command_managed_services__serviceId_

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to access.

### Disable Managed Service

> Temporarily disables monitoring of a Managed Service.

*Tags:* `Managed`

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to disable.

### x_linode_cli_command_managed_services__serviceId__disable

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to disable.

### Enable Managed Service

> Enables monitoring of a Managed Service.

*Tags:* `Managed`

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to enable.

### x_linode_cli_command_managed_services__serviceId__enable

#### Input Parameters
* `serviceId` - _required_ - The ID of the Managed Service to enable.

### description_networking_ips

### List IP Addresses

> Returns a paginated list of IP Addresses on your Account, excluding private addresses.

*Tags:* `Networking`

### Allocate IP Address

> Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](#operation/createTicket) requesting additional addresses before attempting allocation.

*Tags:* `Networking`

### x_linode_cli_command_networking_ips

### View IP Address

> Returns information about a single IP Address on your Account.

*Tags:* `Networking`

#### Input Parameters
* `address` - _required_ - The address to operate on.

### Update IP Address RDNS

> Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _members.linode.com_ RDNS value.

*Tags:* `Networking`

#### Input Parameters
* `address` - _required_ - The address to operate on.

### x_linode_cli_command_networking_ips__address_

#### Input Parameters
* `address` - _required_ - The address to operate on.

### description_networking_ipv4_assign

### Assign IPs to Linodes

> Assign multiple IPs to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPv4 Addresses to your Linodes.  When the assignment is finished, all Linodes must end up with at least one public IPv4 and no more than one private IPv4.

*Tags:* `Networking`

### x_linode_cli_command_networking_ipv4_assign

### description_networking_ipv4_share

### Configure IP Sharing

> Configure shared IPs.  A shared IP may be brought up on a Linode other than the one it lists in its response.  This can be used to allow one Linode to begin serving requests should another become unresponsive.

*Tags:* `Networking`

### x_linode_cli_command_networking_ipv4_share

### List IPv6 Pools

> Displays the IPv6 pools on your Account.

*Tags:* `Networking`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_networking_ipv6_pools

### List IPv6 Ranges

> Displays the IPv6 ranges on your Account.

*Tags:* `Networking`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_networking_ipv6_ranges

### List NodeBalancers

> Returns a paginated list of NodeBalancers you have access to.

*Tags:* `NodeBalancers`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create NodeBalancer

> Creates a NodeBalancer in the requested Region. This NodeBalancer will not start serving requests until it is configured.

*Tags:* `NodeBalancers`

### x_linode_cli_command_nodebalancers

### Delete NodeBalancer

> Deletes a NodeBalancer.<br/>
> <br/>
> **This is a destructive action and cannot be undone.**<br/>
> <br/>
> Deleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### View NodeBalancer

> Returns a single NodeBalancer you can access.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### Update NodeBalancer

> Updates information about a NodeBalancer you can access.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### x_linode_cli_command_nodebalancers__nodeBalancerId_

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### List Configs

> Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.<br/>
> <br/>
> For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.

*Tags:* `NodeBalancers`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Config

> Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### x_linode_cli_command_nodebalancers__nodeBalancerId__configs

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### Delete Config

> Deletes the Config for a port of this NodeBalancer.<br/>
> <br/>
> **This cannot be undone.**<br/>
> <br/>
> Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the config to access.

### View Config

> Returns configuration information for a single port of this NodeBalancer.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the config to access.

### Update Config

> Updates the configuration for a single port on a NodeBalancer.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the config to access.

### x_linode_cli_command_nodebalancers__nodeBalancerId__configs__configId_

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the config to access.

### List Nodes

> Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.

*Tags:* `NodeBalancers`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Node

> Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the NodeBalancer config to access.

### x_linode_cli_command_nodebalancers__nodeBalancerId__configs__configId__nodes

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the NodeBalancer config to access.

### Delete Node

> Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.<br/>
> <br/>
> This does not change or remove the Linode whose address was used in the creation of this Node.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the Config to access
* `nodeId` - _required_ - The ID of the Node to access

### View Node

> Returns information about a single Node, a backend for this NodeBalancer's configured port.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the Config to access
* `nodeId` - _required_ - The ID of the Node to access

### Update Node

> Updates information about a Node, a backend for this NodeBalancer's configured port.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the Config to access
* `nodeId` - _required_ - The ID of the Node to access

### x_linode_cli_command_nodebalancers__nodeBalancerId__configs__configId__nodes__nodeId_

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the Config to access
* `nodeId` - _required_ - The ID of the Node to access

### Rebuild Config

> Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the Config to access.

### x_linode_cli_command_nodebalancers__nodeBalancerId__configs__configId__rebuild

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.
* `configId` - _required_ - The ID of the Config to access.

### View NodeBalancer Statistics

> Returns detailed statistics about the requested NodeBalancer.

*Tags:* `NodeBalancers`

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### x_linode_cli_command_nodebalancers__nodeBalancerId__stats

#### Input Parameters
* `nodeBalancerId` - _required_ - The ID of the NodeBalancer to access.

### View Profile

> Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.<br/>
> <br/>
> This endpoint is always accessible, no matter what OAuth scopes the acting token has.

*Tags:* `Profile`

### Update Profile

> Update information in your Profile.  This endpoint requires the "account:read_write" OAuth Scope.

*Tags:* `Profile`

### x_linode_cli_command_profile

### description_profile_apps

### List Authorized Apps

> This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.

*Tags:* `Profile`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_profile_apps

### Revoke App Access

> Expires this app token. This token may no longer be used to access your Account.

*Tags:* `Profile`

#### Input Parameters
* `appId` - _required_ - The authorized app ID to manage.

### View Authorized App

> Returns information about a single app you've authorized to access your Account.

*Tags:* `Profile`

#### Input Parameters
* `appId` - _required_ - The authorized app ID to manage.

### x_linode_cli_command_profile_apps__appId_

#### Input Parameters
* `appId` - _required_ - The authorized app ID to manage.

### description_profile_devices

### List Trusted Devices

> Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.

*Tags:* `Profile`

### x_linode_cli_command_profile_devices

### Revoke Trusted Device

> Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.

*Tags:* `Profile`

#### Input Parameters
* `deviceId` - _required_ - The ID of the TrustedDevice

### description_profile_devices__deviceId_

#### Input Parameters
* `deviceId` - _required_ - The ID of the TrustedDevice

### View Trusted Device

> Returns a single active TrustedDevice for your User.

*Tags:* `Profile`

#### Input Parameters
* `deviceId` - _required_ - The ID of the TrustedDevice

### x_linode_cli_command_profile_devices__deviceId_

#### Input Parameters
* `deviceId` - _required_ - The ID of the TrustedDevice

### List Grants

> This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.<br/>
> <br/>
> For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.<br/>
> <br/>
> Any client may access this endpoint; no OAuth scopes are required.

*Tags:* `Profile`

### x_linode_cli_command_profile_grants

### description_profile_sshkeys

### List SSH Keys

> Returns a collection of SSH Keys you've added to your Profile.

*Tags:* `Profile`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Add SSH Key

> Adds an SSH Key to your Account profile.

*Tags:* `Profile`

### x_linode_cli_command_profile_sshkeys

### Delete SSH Key

> Deletes an SSH Key you have access to.<br/>
> <br/>
> **Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.

*Tags:* `Profile`

#### Input Parameters
* `sshKeyId` - _required_ - The ID of the SSHKey

### View SSH Key

> Returns a single SSH Key object identified by `id` that you have access to view.

*Tags:* `Profile`

#### Input Parameters
* `sshKeyId` - _required_ - The ID of the SSHKey

### Update SSH Key

> Updates an SSH Key that you have permission to `read_write`.

*Tags:* `Profile`

#### Input Parameters
* `sshKeyId` - _required_ - The ID of the SSHKey

### x_linode_cli_command_profile_sshkeys__sshKeyId_

#### Input Parameters
* `sshKeyId` - _required_ - The ID of the SSHKey

### Disable Two Factor Authentication

> Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.

*Tags:* `Profile`

### x_linode_cli_command_profile_tfa_disable

### Create Two Factor Secret

> Generates a Two Factor secret for your User. TFA will not be enabled until you have successfully confirmed the code you were given with [tfa-enable-confirm](#operation/tfaConfirm) (see below). Once enabled, logins from untrusted computers will be required to provide a TFA code before they are successful.

*Tags:* `Profile`

### x_linode_cli_command_profile_tfa_enable

### Confirm/Enable Two Factor Authentication

> Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.

*Tags:* `Profile`

### x_linode_cli_command_profile_tfa_enable_confirm

### description_profile_tokens

### List Personal Access Tokens

> Returns a paginated list of Personal Access Tokens currently active for your User.

*Tags:* `Profile`

### Create Personal Access Token

> Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.

*Tags:* `Profile`

### x_linode_cli_command_profile_tokens

### Revoke Personal Access Token

> Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.

*Tags:* `Profile`

#### Input Parameters
* `tokenId` - _required_ - The ID of the token to access.

### description_profile_tokens__tokenId_

#### Input Parameters
* `tokenId` - _required_ - The ID of the token to access.

### View Personal Access Token

> Returns a single Personal Access Token.

*Tags:* `Profile`

#### Input Parameters
* `tokenId` - _required_ - The ID of the token to access.

### Update Personal Access Token

> Updates a Personal Access Token.

*Tags:* `Profile`

#### Input Parameters
* `tokenId` - _required_ - The ID of the token to access.

### x_linode_cli_command_profile_tokens__tokenId_

#### Input Parameters
* `tokenId` - _required_ - The ID of the token to access.

### List Regions

> Lists the Regions available for Linode services. Not all services are guaranteed to be<br/>
> available in all Regions.

*Tags:* `Regions`

### x_linode_cli_command_regions

### View Region

> Returns a single Region.

*Tags:* `Regions`

#### Input Parameters
* `regionId` - _required_ - ID of the Region to look up.

### x_linode_cli_command_regions__regionId_

#### Input Parameters
* `regionId` - _required_ - ID of the Region to look up.

### List Support Tickets

> Returns a collection of Support Tickets on your Account. Support Tickets can be both tickets you open with Linode for support, as well as tickets generated by Linode regarding your Account.<br/>
> This collection includes all Support Tickets generated on your Account, with open tickets returned first.

*Tags:* `Support`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Open Support Ticket

> Open a Support Ticket.<br/>
> Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.

*Tags:* `Support`

### x_linode_cli_command_support_tickets

### View Support Ticket

> Returns a Support Ticket under your Account.

*Tags:* `Support`

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### x_linode_cli_command_support_tickets__ticketId_

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### Create Ticket Attachment

> Adds a file attachment to an existing Support Ticket on your Account. File attachments are used to assist our Support team in resolving your Ticket. Examples of attachments are screen shots and text files that provide additional information.<br/>
> Note: Accepted file extensions include: .gif, .jpg, .jpeg, .pjpg, .pjpeg, .tif, .tiff, .png, .pdf, or .txt.

*Tags:* `Support`

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### x_linode_cli_command_support_tickets__ticketId__attachments

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### Close Support Ticket

> Closes a Support Ticket you have access to modify.

*Tags:* `Support`

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### x_linode_cli_command_support_tickets__ticketId__close

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### List Replies

> Returns a collection of replies to a Support Ticket on your Account.

*Tags:* `Support`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Reply

> Adds a reply to an existing Support Ticket.

*Tags:* `Support`

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### x_linode_cli_command_support_tickets__ticketId__replies

#### Input Parameters
* `ticketId` - _required_ - The ID of the Support Ticket.

### List Tags

> Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.<br/>
> <br/>
> This endpoint returns a paginated list of Tags on your account.

*Tags:* `Tags`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create New Tag

> Creates a new Tag and optionally tags requested objects with it immediately.<br/>
> <br/>
> **Important**: You must be an unrestricted User in order to add or modify Tags.

*Tags:* `Tags`

### x_linode_cli_command_tags

### Delete a Tag

> Remove a Tag from all objects and delete it.<br/>
> <br/>
> **Important**: You must be an unrestricted User in order to add or modify Tags.

*Tags:* `Tags`

#### Input Parameters
* `label` - _required_

### List Tagged Objects

> Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.

*Tags:* `Tags`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### x_linode_cli_command_tags__label_

#### Input Parameters
* `label` - _required_

### List Volumes

> Returns a paginated list of Volumes you have permission to view.

*Tags:* `Volumes`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Create Volume

> Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.

*Tags:* `Volumes`

### x_linode_cli_command_volumes

### Delete Volume

> Deletes a Volume you have permission to `read_write`.<br/>
> <br/>
> **Deleting a Volume is a destructive action and cannot be undone.**<br/>
> <br/>
> Deleting stops billing for the Volume. You will be billed for time used within<br/>
> the billing period the Volume was active.

*Tags:* `Volumes`

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to look up.

### View Volume

> Get information about a single Volume.

*Tags:* `Volumes`

#### Input Parameters
* `page` - _optional_ - The page of a collection to return.
* `page_size` - _optional_ - The number of items to return per page.

### Update Volume

> Updates a Volume that you have permission to `read_write`.

*Tags:* `Volumes`

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to look up.

### x_linode_cli_command_volumes__volumeId_

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to look up.

### Attach Volume

> Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.

*Tags:* `Volumes`

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to attach.

### x_linode_cli_command_volumes__volumeId__attach

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to attach.

### Clone Volume

> Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.

*Tags:* `Volumes`

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to clone.

### x_linode_cli_command_volumes__volumeId__clone

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to clone.

### Detach Volume

> Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.

*Tags:* `Volumes`

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to detach.

### x_linode_cli_command_volumes__volumeId__detach

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to detach.

### Resize Volume

> Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.<br/>
> * Volumes can only be resized up.

*Tags:* `Volumes`

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to resize.

### x_linode_cli_command_volumes__volumeId__resize

#### Input Parameters
* `volumeId` - _required_ - ID of the Volume to resize.

## License

**flow**ground :- Telekom iPaaS / linode-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
