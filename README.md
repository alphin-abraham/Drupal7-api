# Drupal7-api


This document describes how to read/write entities to/from Drupal using the Services module. It also covers how to handle session authentication. Let's get started...

# Installation and Setup

- Download the Services Module
- Enable It

Now to create a service, we'll start with the basics... go to **Structure -> Services -> Add**, and configure api end point:

|        Field        |          Value                |
|----------------|-------------------------------|
|Name|`apis`            |
|End point tile          |`API`            |
|Server          |`REST`|
|Path to endpoint          |`api`|

Click `Save` buttom

Pass CSRF token `X-CSRF-Token` with all POST,PUT, and DELETE Requests.

## Content-Type

`application/json`

## CSRF token

````
GET: http://localhost/drupal-7/services/session/token
````


## Session Authentication

````
GET: http://localhost/drupal-7/services/session/token

POST: http://localhost/drupal-7/api/system/connect.json

POST: http://localhost/drupal-7/api/user/login.json
username=your_username&password=your_password
    
POST: http://localhost/drupal-7/api/user/logout.json

POST: http://localhost/drupal-7/api/user/register.json
{"name":"yFzqH7dNEv","mail":"kT3miidPAx@example.com","pass":"MSQ4JvRhZh","pass2":"MSQ4JvRhZh"}
````


## User

````
POST: http://localhost/drupal-7/api/user.json
{"name":"LSAwug2XxL","mail":"soRkkjZisJ@example.com","pass":"iPpNcwnEqW","pass2":"iPpNcwnEqW"}

GET: http://localhost/drupal-7/api/user/52.json

PUT: http://localhost/drupal-7/api/user/52.json
{"uid":"52","mail":"8dGyPlGSrB@example.com","current_pass":"iPpNcwnEqW"}

DELETE: http://localhost/drupal-7/api/user/52.json

GET: http://localhost/drupal-7/api/user.json
````

## Node

````
POST: http://localhost/drupal-7/api/node.json
{"type":"article","title":"BEVVtDcZmL","language":"und"}

GET: http://localhost/drupal-7/api/node/125.json

PUT: http://localhost/drupal-7/api/node/125.json
{"node":{"nid":"125","title":"KHrkDnudKR","language":"und"}}

DELETE: http://localhost/drupal-7/api/node/125.json

GET: http://localhost/drupal-7/api/node.json
````

## Comment

````
POST: http://localhost/drupal-7/api/comment.json
{"subject":"S5KeJTVFED","comment_body":{"und":[{"value":"gSXNfHPxgf"}]},"nid":"126"}

GET: http://localhost/drupal-7/api/comment/30.json

PUT: http://localhost/drupal-7/api/comment/30.json
{"subject":"wULr64gdpj","comment_body":{"und":[{"value":"YhmemEQ4Cy"}]},"cid":"30"}

DELETE: http://localhost/drupal-7/api/comment/30.json

GET: http://localhost/drupal-7/api/comment.json&parameters[cid]=30
````
## Taxonomy Vocabulary

````
POST: http://localhost/drupal-7/api/taxonomy_vocabulary.json
{"name":"WkSTeYfABe","description":"RQoHVs22yZ","machine_name":"wksteyfabe"}

GET: http://localhost/drupal-7/api/taxonomy_vocabulary/16.json

PUT: http://localhost/drupal-7/api/taxonomy_vocabulary/16.json
{"vid":"16","name":"gSXktVuVty","machine_name":"wksteyfabe"}

DELETE: http://localhost/drupal-7/api/taxonomy_vocabulary/16.json

GET: http://localhost/drupal-7/api/taxonomy_vocabulary.json&parameters[name]=WkSTeYfABe
````

## Taxonomy Term

````
POST: http://localhost/drupal-7/api/taxonomy_term.json
{"vid":"17","name":"V8m22sqRBO"}

GET: http://localhost/drupal-7/api/taxonomy_term/13.json

PUT: http://localhost/drupal-7/api/taxonomy_term/13.json
{"vid":"17","tid":"13","name":"C5Kjy2WOxK"}

DELETE: http://localhost/drupal-7/api/taxonomy_term/13.json

GET: http://localhost/drupal-7/api/taxonomy_term.json&parameters[vid]=17&parameters[name]=V8m22sqRBO
````

