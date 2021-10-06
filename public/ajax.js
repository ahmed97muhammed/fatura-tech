$(document).ready(function(){

$.ajaxSetup({
headers: {
'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
}
});

function success_alert()
{
Swal.fire({
icon:"success",
text:alert_success, 
confirmButtonColor: '#3085d6',
confirmButtonText:tmm,
});
}

function error_alert(code)
{
if(code==501){
// $(".alert-error").show().text(emailused).hide(8000);
//alert error
Swal.fire({
icon:"warning",
text:emailused, 
confirmButtonColor: '#3085d6',
confirmButtonText:tmm,
});
//End alert error
}
else if(code==500){
// $(".alert-error").show().text(errorinvalidinputs).hide(8000);
//alert error
Swal.fire({
icon:"warning",
text:errorinvalidinputs, 
confirmButtonColor: '#3085d6',
confirmButtonText:tmm,
});
//End alert error
}
else{
//alert error
Swal.fire({
icon:"warning",
text:tryagainerror, 
confirmButtonColor: '#3085d6',
confirmButtonText:tmm,
});
//End alert error
}

}

system_user_route=$('.system_user_route').val();

system_user_table= $('#system_user_table').DataTable({
processing: true,
dom: 'lBfrtip',
ordering: false,
searching: false, paging: false, info: false,
buttons: [

],

serverSide: false,
ajax:system_user_route,
columns: [
{ data: 'id', name: 'id' },
{ data: 'name', name: 'name' },
{ data: 'email', name: 'email' },

{ data: 'can_add_button', name: 'can_add_button' },
{ data: 'can_edit_button', name: 'can_edit_button' },
{ data: 'can_delete_button', name: 'can_delete_button' },
{ data: 'can_print_button', name: 'can_print_button' },

{ data: 'action', name: 'action' },
],
"language": {
"sEmptyTable":     "ليست هناك بيانات متاحة في الجدول",
"sLoadingRecords": "جارٍ التحميل...",
"sProcessing":   "جارٍ التحميل...",
"sLengthMenu":   "أظهر _MENU_ مدخلات",
"sZeroRecords":  "لم يعثر على أية سجلات",
"sInfo":         "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
"sInfoEmpty":    "يعرض 0 إلى 0 من أصل 0 سجل",
"sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
"sInfoPostFix":  "",
"sSearch":       "ابحث بالاسم او بالبريد الالكترونى",
"sUrl":          "",
"oPaginate": {
"sFirst":    "الأول",
"sPrevious": "السابق",
"sNext":     "التالي",
"sLast":     "الأخير"
},
"oAria": {
"sSortAscending":  ": تفعيل لترتيب العمود تصاعدياً",
"sSortDescending": ": تفعيل لترتيب العمود تنازلياً"
}
}
});

///////////////////////////////////////////

system_user_table.on('order.dt search.dt', function () {
system_user_table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
cell.innerHTML = i+1;
system_user_table.cell(cell).invalidate('dom');
});
}).draw();

//////////////////////////////////////////
//add usercontrol

$(document).on('submit','#add_usercontrol_form', function(event){


event.preventDefault();


$.ajax({
url:"add_usercontrol_formajax_url",
method:"post",
data:new FormData(this),

contentType: false,
cache: false,
processData: false,

success:function(data)
{

system_user_table.ajax.reload();


$('#add_usercontrol_form')[0].reset();

$('#addusercontrol_modal').modal('hide'); 


//Start alert success
success_alert();
//End alert success
// $('#additem_modal').modal("hide");


},

error: function(xhr, status, error) {  


error_alert(xhr.status);

}

})

});

//add usercontrol   
$(document).on('hover','.show-pass4', function(event){
$('#cpassword').attr('type', 'text');
}, function () {
$('#cpassword').attr('type', 'password');
}); 

//Delete user

$(document).on('click','.deleteuserbtn', function(){

var id=$(this).attr('id');

Swal.fire({
title:contitle,
text:contitext,
showCancelButton: true,
cancelButtonText:Canclebt,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText:conbtn,
}).then((result) => {
if (result.value) {

$.ajax({
url:'deleteuser_ajax_url',
method:'post',
data:{id:id},
success:function(data){

system_user_table.ajax.reload();


},
error: function(xhr, status, error) {  

error_alert(xhr.status);

}

});
}
})

});

//End Delete user




$(document).on('click','.update_user_perm_btn', function(){

var user_id=$(this).attr('id');
var user_perm=$(this).attr('name');

Swal.fire({
title:permtitle,
text:permtext,
showCancelButton: true,
cancelButtonText:Canclebt,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText:yesok,
}).then((result) => {
if (result.value) {

$.ajax({
url:'update_permision_ajax',
method:'post',
data:{user_id:user_id,user_perm:user_perm},
success:function(data){

system_user_table.ajax.reload();


},
error: function(xhr, status, error) {  

error_alert(xhr.status);

}

});
}
})

});







});    