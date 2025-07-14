<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $pwd = null;

    #[ORM\Column]
    private ?int $type_user = null;

    #[ORM\OneToOne(inversedBy: 'user_full', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?InfoUser $id_info_user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPwd(): ?string
    {
        return $this->pwd;
    }

    public function setPwd(string $pwd): static
    {
        $this->pwd = $pwd;

        return $this;
    }

    public function getTypeUser(): ?int
    {
        return $this->type_user;
    }

    public function setTypeUser(int $type_user): static
    {
        $this->type_user = $type_user;

        return $this;
    }

    public function getIdInfoUser(): ?InfoUser
    {
        return $this->id_info_user;
    }

    public function setIdInfoUser(InfoUser $id_info_user): static
    {
        $this->id_info_user = $id_info_user;

        return $this;
    }

}
