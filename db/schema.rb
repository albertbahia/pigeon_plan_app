# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141026175056) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: true do |t|
    t.string   "name"
    t.string   "creator"
    t.integer  "number_in_attendance"
    t.integer  "price"
    t.string   "venue_name"
    t.integer  "duration"
    t.string   "calendar_date"
    t.string   "host_name"
    t.integer  "number_males_attending"
    t.integer  "number_females_attending"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "street_address"
    t.string   "city"
    t.string   "state"
    t.string   "zip_code"
    t.string   "event_type"
    t.integer  "creator_id"
    t.boolean  "public_view"
    t.boolean  "private_view"
    t.integer  "latitude"
    t.integer  "longitude"
  end

  create_table "events_schedules", force: true do |t|
    t.integer "event_id"
    t.integer "schedule_id"
  end

  add_index "events_schedules", ["event_id"], name: "index_events_schedules_on_event_id", using: :btree
  add_index "events_schedules", ["schedule_id"], name: "index_events_schedules_on_schedule_id", using: :btree

  create_table "schedules", force: true do |t|
    t.string  "name"
    t.string  "creator"
    t.boolean "public_view"
    t.boolean "private_view"
  end

  create_table "users", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "gender"
    t.integer  "age"
    t.integer  "zip_code"
    t.string   "street_address"
    t.string   "city"
    t.string   "state"
    t.string   "interest"
    t.string   "username"
    t.string   "email"
    t.string   "profile_type"
    t.integer  "telephone_number"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
