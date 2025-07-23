<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\InfoUser;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as Faker;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Faker::create('fr_FR');

        for ($i = 0; $i < 100; $i++) {
            $user = new User();
            $user->setEmail($faker->unique()->email());
            $hashedPassword = $this->passwordHasher->hashPassword($user, 'password123');
            $user->setPassword($hashedPassword);
            $user->setRoles($faker->randomElement(['ROLE_CITIZEN', 'ROLE_SYNDIC']));
            
            $info = new InfoUser();
            $info->setFirstName($faker->firstName());
            $info->setLastName($faker->lastName());
            $info->setBirthday($faker->dateTimeBetween('-60 years', '-18 years'));
            $info->setPhone($faker->phoneNumber());
            $info->setAddr($faker->address());
            $info->setCivility($faker->randomElement(['Mr', 'Ms']));
            $info->setNameUsing($faker->userName());

            $user->setInfoUser($info);
            $manager->persist($user);
        }

        $manager->flush();
    }
}