CREATE TABLE "tickets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"request_type" varchar(255) NOT NULL,
	"priority" varchar(255) NOT NULL,
	"best_time" varchar(255) NOT NULL,
	"access_instructions" varchar(255) NOT NULL,
	"description" varchar(500) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
