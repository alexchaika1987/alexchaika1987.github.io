// Routes

$api->get('projects', 'App\Api\V1\Controllers\ProjectController@index');
$api->post('projects', 'App\Api\V1\Controllers\ProjectController@store');

// Controller

<?php

namespace App\Api\V1\Controllers;
use App\Api\V1\Models\Project;
use App\Api\V1\Controllers\BaseController;
use Dingo\Api\Http\Request;

class ProjectController extends BaseController
{
    public function index(Request $request)
    {
         echo 'index';
    }

    
    public function show($id)
    {
        $project = Project::findOrFail($id);
        return $this->response->array($project->toArray());
    }

    public function store(Request $request)
    {
       echo 'stored';
    }
}
   


$recepient = "alexchaika1987@gmail.com";
$siteName = "bestproperty.ml";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

