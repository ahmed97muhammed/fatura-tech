<?php 
namespace App\Repositories;
use App\User;
use Validator;
use App\Role;
class UserRepository implements UserRepositoryInterface
{

public function getUsers(){
return User::with('getUserRoles')->get();
}

public function getRole($user_id){
return Role::where("related_user_id",$user_id)->get();
}

public function createRole($user_id){
 $user=User::findOrFail($user_id);   
 if($user->account_type=="manager"){
 return Role::create(["can_add"=>"1","can_edit"=>"1","can_delete"=>"1","can_print"=>"1","related_user_id"=>$user_id]);
 }else{
    return Role::create(["related_user_id"=>$user_id]);
    }

}

public function UpdateRole($role,$user_id){
$user_roles=$this->getRole($user_id);
$set_role="";
if($user_roles[0]->$role=="0")
{
$set_role="1";
}else{
    $set_role="0";
    }
return Role::where("related_user_id",$user_id)->update([$role=>$set_role]);
}

public function getUser($id){
return User::findOrFail($id);
}

public function checkEmailExist($email){
return User::where("email",$email)->get();
}



public function createUser($user)
{

$validation = Validator::make($user, [
'name' => ['required', 'string', 'max:255'],
'mobile' => ['required','max:11','regex:/(01)[0-9]{9}/'],
'email' => ['required', 'string', 'email', 'max:255'],
'password' => ['required', 'string', 'max:255'],
'lang'=>['required'],

]);

if($validation->passes())
{

return User::create($user);

}else{
    return response()->json('error',500);
    }

}


public function updateUser($user,$id)
{

$validation = Validator::make($user, [
'name' => ['required', 'string', 'max:255'],
'mobile' =>  ['required','numeric', 'max:11','regex:/(01)[0-9]{9}/'],
'email' => ['required', 'string', 'email', 'max:255'],
'password' => ['required', 'string', 'max:255'],
'lang'=>['required'],
]);

if($validation->passes())
{

if(User::findOrFail($id))
{
return User::whereId($id)->update($user);
}

}else{
    return response()->json('error',500);
    }

}



public function deleteUser($id){
return User::findOrFail($id)->delete();
}


}