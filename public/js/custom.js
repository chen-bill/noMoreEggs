console.log("js working")
$('table tr td input[type="checkbox"]').each(function(){
    console.log("working1")
    if($(this).prop('disabled')){
    	console.log("working2")
       $(this).parents('tr').css('text-decoration','line-through');
    }
});