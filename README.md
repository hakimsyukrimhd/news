# news

This repository contain news that use all of my knowledge from belajar-javascript's repository

# IMPORTANTS!

1. create folder kumparan
2. in kumparan folder create file .gitignore and .env
3. in .gitignore file write node_modules and .env in the second line

# ENDPOINTS NEWS

| Routes | Method | Requirement |
| ----------- | ----------- | ----------- |
| /news | GET | -| 
| /news/:slug | GET | params| 
| /news | POST | Body| 
| /news/:slug | PATCH | body & params| 
| /news/:slug | DELETE | params| 

### NEWS Body Requirements

```
{
  "title": "",
  "body": "",
  "imageUrl": 25,
  "userId": ""
  categoryId: 1
}
```

# ENDPOINTS USER/ AUTHOR

| Routes | Method | Requirement |
| ----------- | ----------- | ----------- |
| /users/register | POST | Body |
| /users/login | POST | Body |
| /users/:id | GET | params |
| /users/:id | PATCH | body & params |
| /users/:id | DELETE | params |

### USER/ AUTHOR Body Requirements

```
{
  "username": "",
  "password": ""
}
```

# ENDPOINTS CATEGORY

| Routes | Method | Requirement |
| ----------- | ----------- | ----------- |
| /news/category | GET | - |
| /news/category/:slug | GET | params |
| /news/category | POST | Body |
| /news/category/:id | PATCH | body & params |
| /news/category/:id | DELETE | params |

### USER/ AUTHOR Body Requirements

```
{
  "name": "",
}
```

# ENTITY RELATION

Create Database with name : News

| Tabel Name | Fields | Relation |
| ----------- | ----------- | ----------- |
| users | username, password | user has many news |
| news | title, body, imageUrl, userId, categoryId | news has one category, news belongs to user |
| categories | name | category has many news |