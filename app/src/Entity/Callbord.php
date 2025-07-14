<?php

namespace App\Entity;

use App\Repository\CallbordRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CallbordRepository::class)]
class Callbord
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $url = null;


    #[ORM\Column]
    private ?int $type_conten = null;

    #[ORM\Column]
    private ?int $type_status = null;

    #[ORM\OneToOne(inversedBy: 'callbord', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Residence $id_residence = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): static
    {
        $this->url = $url;

        return $this;
    }

    public function getTypeConten(): ?int
    {
        return $this->type_conten;
    }

    public function setTypeConten(int $type_conten): static
    {
        $this->type_conten = $type_conten;

        return $this;
    }

    public function getTypeStatus(): ?int
    {
        return $this->type_status;
    }

    public function setTypeStatus(int $type_status): static
    {
        $this->type_status = $type_status;

        return $this;
    }

    public function getIdResidence(): ?Residence
    {
        return $this->id_residence;
    }

    public function setIdResidence(Residence $id_residence): static
    {
        $this->id_residence = $id_residence;

        return $this;
    }
}
