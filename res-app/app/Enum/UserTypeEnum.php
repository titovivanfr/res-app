<?php

namespace App\Enum;

enum UserTypeEnum: int
{
    case CITIZEN = 10;
    case SYNDICAT = 20;
    case SUPERVISOR = 30;
}