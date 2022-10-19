-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_delivery_man_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "id_delivery_man" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL,
ALTER COLUMN "end_at" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_delivery_man_fkey" FOREIGN KEY ("id_delivery_man") REFERENCES "delivery_man"("id") ON DELETE SET NULL ON UPDATE CASCADE;
