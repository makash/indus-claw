-- IndusClaw D1 Schema
-- Run: wrangler d1 execute indusclaw-db --file=./db/schema.sql

CREATE TABLE IF NOT EXISTS signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT '/',
  locale TEXT DEFAULT 'en',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  ip_country TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_signups_email ON signups(email);
CREATE INDEX IF NOT EXISTS idx_signups_created_at ON signups(created_at);
