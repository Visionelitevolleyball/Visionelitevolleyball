CREATE TABLE `contact_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`message` text NOT NULL,
	`submitted_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`ip_address` text,
	`user_agent` text
);
--> statement-breakpoint
CREATE TABLE `newsletter_subscribers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`city` text NOT NULL,
	`subscribed_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`source` text DEFAULT 'popup' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `newsletter_subscribers_email_unique` ON `newsletter_subscribers` (`email`);--> statement-breakpoint
CREATE TABLE `pending_newsletter_emails` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`converted` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `pending_newsletter_emails_email_unique` ON `pending_newsletter_emails` (`email`);