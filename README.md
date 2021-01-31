# Test-Affluences

## DOCUMENTATION - BUILD

Install docker & docker-compose then run :

```
docker-compose build

docker-compose up -d
```

## DOCUMENTATION - ROUTE

### Reservations

This route returns if the place is available for the reservation

**URI** : /api/reservations

**Method** : GET

**Parameters**

| name | type | required |
| ------ | ------ | ------|
| date | date in format YYYY-MM-DDTHH:mm:ss.sssZ | yes |
| id | int | yes |

**Example**

GET http://ip:81/api/reservations?date=2021-01-31T17:00:00Z&id=1337

Response

```json
{
  "isAvailable":true
}

OR

{
  "isAvailable":false
}
```
