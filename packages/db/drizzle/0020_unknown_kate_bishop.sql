ALTER TABLE "events" ADD COLUMN "location" varchar(255) DEFAULT 'TBD';--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "points" integer DEFAULT 0 NOT NULL;