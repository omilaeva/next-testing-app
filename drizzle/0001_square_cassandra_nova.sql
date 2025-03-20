CREATE TYPE "public"."priority" AS ENUM('emergency', 'urgent', 'standard', 'low');--> statement-breakpoint
ALTER TABLE "tickets" ALTER COLUMN "best_time" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ALTER COLUMN "access_instructions" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "property" varchar(255);--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "unit" varchar(255);--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "assigned_to" varchar(255);--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "status" varchar(255) DEFAULT 'Pending';