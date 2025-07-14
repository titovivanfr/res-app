<?php

namespace App\Entity;

use App\Repository\ResidenceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResidenceRepository::class)]
class Residence
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $addr = null;

    #[ORM\OneToOne(inversedBy: 'residence', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?ListCitizen $id_list_citizen = null;

    #[ORM\OneToOne(inversedBy: 'residence', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Callbord $id_callbord = null;

    #[ORM\OneToOne(mappedBy: 'id_residence', cascade: ['persist', 'remove'])]
    private ?Callbord $callbord = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddr(): ?string
    {
        return $this->addr;
    }

    public function setAddr(string $addr): static
    {
        $this->addr = $addr;

        return $this;
    }

    public function getIdListCitizen(): ?ListCitizen
    {
        return $this->id_list_citizen;
    }

    public function setIdListCitizen(ListCitizen $id_list_citizen): static
    {
        $this->id_list_citizen = $id_list_citizen;

        return $this;
    }

    public function getIdCallbord(): ?Callbord
    {
        return $this->id_callbord;
    }

    public function setIdCallbord(Callbord $id_callbord): static
    {
        $this->id_callbord = $id_callbord;

        return $this;
    }

    public function getCallbord(): ?Callbord
    {
        return $this->callbord;
    }

    public function setCallbord(Callbord $callbord): static
    {
        // set the owning side of the relation if necessary
        if ($callbord->getIdResidence() !== $this) {
            $callbord->setIdResidence($this);
        }

        $this->callbord = $callbord;

        return $this;
    }
}
