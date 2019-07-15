# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, uique: true|
|Email|string|null: false|
|password|string|null: false|
### Association
- has_many:groups, through: :members
- has_many:messages
- has_many:members

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
- has_many:groups, through:：members
- has_many:messages
- has_many:members

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

##  messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|references||null: false, foreign_key: true|
|group_id|references||null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
