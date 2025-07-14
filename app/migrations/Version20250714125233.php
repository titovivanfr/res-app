<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250714125233 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE callbord (id SERIAL NOT NULL, id_residence_id INT NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, url VARCHAR(255) DEFAULT NULL, type_conten INT NOT NULL, type_status INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B00167ADA8E32ACF ON callbord (id_residence_id)');
        $this->addSql('CREATE TABLE info_user (id SERIAL NOT NULL, phone VARCHAR(255) NOT NULL, addr VARCHAR(255) NOT NULL, birthday DATE NOT NULL, civility VARCHAR(6) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, name_using VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE list_citizen (id SERIAL NOT NULL, id_user VARCHAR(255) NOT NULL, id_residence INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE residence (id SERIAL NOT NULL, id_list_citizen_id INT NOT NULL, id_callbord_id INT NOT NULL, addr VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3275823954F8B7A ON residence (id_list_citizen_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3275823F2480BB2 ON residence (id_callbord_id)');
        $this->addSql('CREATE TABLE "user" (id SERIAL NOT NULL, id_info_user_id INT NOT NULL, email VARCHAR(255) NOT NULL, pwd VARCHAR(255) NOT NULL, type_user INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D64966A8F79 ON "user" (id_info_user_id)');
        $this->addSql('ALTER TABLE callbord ADD CONSTRAINT FK_B00167ADA8E32ACF FOREIGN KEY (id_residence_id) REFERENCES residence (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE residence ADD CONSTRAINT FK_3275823954F8B7A FOREIGN KEY (id_list_citizen_id) REFERENCES list_citizen (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE residence ADD CONSTRAINT FK_3275823F2480BB2 FOREIGN KEY (id_callbord_id) REFERENCES callbord (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT FK_8D93D64966A8F79 FOREIGN KEY (id_info_user_id) REFERENCES info_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE callbord DROP CONSTRAINT FK_B00167ADA8E32ACF');
        $this->addSql('ALTER TABLE residence DROP CONSTRAINT FK_3275823954F8B7A');
        $this->addSql('ALTER TABLE residence DROP CONSTRAINT FK_3275823F2480BB2');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT FK_8D93D64966A8F79');
        $this->addSql('DROP TABLE callbord');
        $this->addSql('DROP TABLE info_user');
        $this->addSql('DROP TABLE list_citizen');
        $this->addSql('DROP TABLE residence');
        $this->addSql('DROP TABLE "user"');
    }
}
