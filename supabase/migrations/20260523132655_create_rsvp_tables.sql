/*
  # Create RSVP and Guest tables for Wedding Invitation

  1. New Tables
    - `rsvp_responses`
      - `id` (uuid, primary key)
      - `guest_name` (text, name of the guest)
      - `number_of_guests` (integer, how many people attending)
      - `attendance` (text, "hadir" or "tidak_hadir")
      - `message` (text, optional wedding wishes)
      - `created_at` (timestamptz)
    - `guest_list`
      - `id` (uuid, primary key)
      - `name` (text, guest name)
      - `slug` (text, URL-friendly identifier for personalized invitation)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public can insert RSVP responses (wedding guests)
    - Public can read guest list slugs (for personalized URLs)
    - No update/delete from public
*/

CREATE TABLE IF NOT EXISTS rsvp_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  number_of_guests integer DEFAULT 1,
  attendance text NOT NULL DEFAULT 'hadir',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RSVP"
  ON rsvp_responses FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view RSVP responses"
  ON rsvp_responses FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS guest_list (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guest_list ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view guest list"
  ON guest_list FOR SELECT
  TO anon, authenticated
  USING (true);
