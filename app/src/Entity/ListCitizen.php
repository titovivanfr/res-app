<?php

namespace App\Entity;

use App\Repository\ListCitizenRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ListCitizenRepository::class)]
class ListCitizen
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $id_user = null;

    #[ORM\Column]
    private ?int $id_residence = null;

    #[ORM\OneToOne(mappedBy: 'id_list_citizen', cascade: ['persist', 'remove'])]
    private ?Residence $residence = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdUser(): ?string
    {
        return $this->id_user;
    }

    public function setIdUser(string $id_user): static
    {
        $this->id_user = $id_user;

        return $this;
    }

    public function getIdResidence(): ?int
    {
        return $this->id_residence;
    }

    public function setIdResidence(int $id_residence): static
    {
        $this->id_residence = $id_residence;

        return $this;
    }

    public function getResidence(): ?Residence
    {
        return $this->residence;
    }

    public function setResidence(Residence $residence): static
    {
        // set the owning side of the relation if necessary
        if ($residence->getIdListCitizen() !== $this) {
            $residence->setIdListCitizen($this);
        }

        $this->residence = $residence;

        return $this;
    }
}
