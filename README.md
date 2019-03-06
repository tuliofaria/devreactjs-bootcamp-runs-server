# DevReactJS Sample Project 01 API


This API was written in NodeJS (ExpressJS + JWT + SQLite3). The idea is to provide an API to handle data in a Runner app (like NikeRun). So basically, we need to handle two entities/endpoints: `users` and `runs`.

>**Remember**: this project is being built to handle international users (with different timezones and measure units). Keep this in mind!

## Authentication:

All the authentication happens using JWT. For protected endpoints you need to send the token using the Header Authorization, like this:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlR1bGlvIEZhcmlhIiwiZW1haWwiOiJ0dWxpb2ZhcmlhQGRldnBsZW5vLmNvbSIsInJvbGUiOiJhZG1pbiIsInVuaXQiOiJtZXRyaWMiLCJ0aW1lem9uZSI6IkFtZXJpY2EvU2FvX1BhdWxvIiwiaWF0IjoxNTIwNDY5MzUwfQ.kr678zxP5TdRAZrww4bcuKCpE7JX0m_mObjwVXKwP8U
```

# Endpoints

## Users:

### Authenticate/login:

Gets a new Token/JWT for the required user.

`POST /users/login` (public): generates a new token for the required user.

#### Body example:

```
{
	"email": "tuliofaria@devpleno.com",
	"passwd": "123456"
}
```

### Create a new user:

This endpoint can be used to sign-up and for admin. If a new user is trying to create his own account token is not needed.

`POST /users` (authentication optional): creates a new user.

#### Body example:

```
{
	"name": "Tulio Faria",
	"email": "tuliofaria@devpleno.com",
	"passwd": "abc123",
	"role": "admin",
	"unit": "metric",
	"timezone": "America/Sao_Paulo"
}
```

### Remove a user:

`DELETE /users/:userId` (authentication required): removes a user.


### Get users:

`GET /users` (authentication required): gets all users.

### Get your own information:

`GET /users/me` (authentication required): gets information from the logged user/token.


### Get user by id:

`GET /users/:userId` (authentication required): gets information from specific user. Admin can get information from any user.


### Update user by id:

`PATCH /users/:userId` (authentication required): update data for a specific user. Admin can update information from any user.

## Runs:

### Create a new run:

`POST /runs` (authentication required): creates a new run to logged user.

#### Body example:

```
{
	"friendly_name": "Weekend Run",
	"duration": 370,
	"distance": 110,
	"created": "2018-03-08 15:00:03"
}
```

### Remove a run:

`DELETE /runs/:runId` (authentication required): removes a run.


### Get runs:

`GET /runs` (authentication required): gets all runs.

### Get run by id:

`GET /runs/:runId` (authentication required): gets information from specific run. Admin can get information from any user run.


### Update run by id:

`PATCH /runs/:userId` (authentication required): update data for a specific run. Admin can update information from any run.

