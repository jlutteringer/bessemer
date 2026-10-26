-- CreateTable
CREATE TABLE "characters" (
    "id" UUID NOT NULL DEFAULT uuidv7(),
    "owner_id" UUID NOT NULL,
    "campaign_id" UUID,
    "name" VARCHAR NOT NULL,
    "level" INTEGER NOT NULL,
    "ruleset_id" VARCHAR NOT NULL,
    "ruleset_extension_ids" VARCHAR[] NOT NULL DEFAULT ARRAY[]::VARCHAR[],
    "record" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" UUID NOT NULL DEFAULT uuidv7(),
    "owner_id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "ruleset_id" VARCHAR NOT NULL,
    "ruleset_extension_ids" VARCHAR[] NOT NULL DEFAULT ARRAY[]::VARCHAR[],
    "invite_code" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_members" (
    "id" UUID NOT NULL DEFAULT uuidv7(),
    "campaign_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campaign_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_characters_owner_id" ON "characters"("owner_id");

-- CreateIndex
CREATE INDEX "idx_characters_campaign_id" ON "characters"("campaign_id");

-- CreateIndex
CREATE UNIQUE INDEX "campaigns_invite_code_key" ON "campaigns"("invite_code");

-- CreateIndex
CREATE INDEX "idx_campaigns_owner_id" ON "campaigns"("owner_id");

-- CreateIndex
CREATE INDEX "idx_campaign_members_user_id" ON "campaign_members"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "campaign_members_campaign_id_user_id_key" ON "campaign_members"("campaign_id", "user_id");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_members" ADD CONSTRAINT "campaign_members_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_members" ADD CONSTRAINT "campaign_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
