<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Role extends Model
{
 protected $fillable=['can_add','can_edit','can_delete','can_print','related_user_id'];


 
}
