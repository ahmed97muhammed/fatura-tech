<html>
<body>
Fatura-tech task
Ahmed Muhammed Ahmed 
Email:a7med97mu@gmail.com,
mobile:01154022640<br>
• The project was built using Laravel framework.<br>
• Service is responsible for authenticate and login users.<br>
• Service is responsible for validating whether logged <br>
user is permitted to do specific action or not.<br>
• Service is resbonsible for loggin users out from the 
system.<br>
• secure user's session (session, jwt):<br>
-Using JWT auth :- follow path <br>
app/http/controllers/AuthController.php<br>
• Test APIs in Postman:-<br>
• Follow Path routes/api.php<br>
• Test apis in postman<br>
<img src="api.jpg"><br>
• This access token will be used to make the user <br>
authenticated<br>
• I used Repository Design Pattern To make code more 
organized.<br>
• Follow Path 
app/Repositories/UserRepositoryInterface.php
• Follow Path app/Repositories/UserRepository.php<br>
• Assign specific user a specific role or permission.<br>
• Follow Path app/Role.php<br>
• Follow Path app/User.php<br>
• getUserRoles() this is relation to get roles of user<br>
• To see migration file of roles table follow path 
database/migrations/roles.php<br>
• Jwt documentation =><a href="https://jwt-auth.readthedocs.io/en/develop/laravel-installation/">JWT Documentation</a> <br>
• Laravel documentation =><a href="https://laravel.com ">Laravel Documentation</a> <br>
</body>
</html>