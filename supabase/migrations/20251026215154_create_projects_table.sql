/*
  # Create Projects Table for HKAF

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `location` (text) - Where the project took place
      - `date` (date) - When the project occurred
      - `images` (jsonb) - Array of image URLs
      - `category` (text) - Project category (children, youth, adults, community)
      - `created_at` (timestamptz) - When the record was created
      - `updated_at` (timestamptz) - When the record was last updated

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access (anyone can view projects)
    - Add policy for authenticated insert/update (only authenticated users can manage projects)
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location text DEFAULT '',
  date date DEFAULT CURRENT_DATE,
  images jsonb DEFAULT '[]'::jsonb,
  category text DEFAULT 'general',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);