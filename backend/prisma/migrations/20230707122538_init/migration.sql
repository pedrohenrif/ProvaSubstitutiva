-- CreateTable
CREATE TABLE `Cadastro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dono` VARCHAR(191) NOT NULL,
    `placamae` VARCHAR(191) NOT NULL,
    `processador` VARCHAR(191) NOT NULL,
    `memoria` INTEGER NOT NULL,
    `armazenamento` VARCHAR(191) NOT NULL,
    `fonte` VARCHAR(191) NOT NULL,
    `criadoem` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
