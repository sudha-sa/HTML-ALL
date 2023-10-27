

$(document).ready(function(){
   
    var jsonArrObj =[
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "John", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
       { FullName: "Michale", Designation:"Designer", Experience:"5.6", Salary:"5000"},
       { FullName: "Alan", Designation:"Engineer", Experience:"5.6", Salary:"5000"},
       { FullName: "Tiger", Designation:"Manager", Experience:"5.6", Salary:"5000"},
       { FullName: "Soveil", Designation:"Software Developer", Experience:"5.6", Salary:"5000"},
    ];

    var page_number = 1;
    var records_per_page = 10;
    var total_page = Math.ceil(jsonArrObj.length / records_per_page);
 
   /*display pagination button*/
   $.fn.displayPaginationButtons = function(){
   var buttons_text = '<a href="#" onclick="javascript:$.fn.prevPage();">&laquo;</a>';
   for(var i=0; i<=total_page; i++){
      var active = '';
      if(i==1){
         active = 'active'
      }
      else{
         active = '';
      }
      buttons_text = buttons_text + '<a href="#" id="page_index'+i+'" onclick="javascript:$.fn.changePageIndex('+i+');" class="page_index'+active+'">'+i+'</a>';
   }
   buttons_text = buttons_text + '<a href="#" onclick="javascript:$.fn.nextPage();" class="page_index'+active+'">&raquo;</a>';

   $("pagination-buttons").text('');
   $("pagination-buttons").append(buttons_text);
}

    /* display table row for json data*/
    $.fn.displayTableData = function(){
       var start_index = (page_number - 1) * records_per_page;
       var end_index = start_index + (records_per_page - 1);
       end_index = (end_index >= jsonArrObj.length) ? jsonArrObj.length - 1 : end_index;

       var inner_html = '';
       for(var i=start_index; i<=end_index; i++){
        inner_html = inner_html+'<tr>'+
                                     '<td>'+(i+1)+'</td>'+
                                     '<td>'+jsonArrObj[i].FullName+'</td>'+
                                     '<td>'+jsonArrObj[i].Designation+'</td>'+
                                     '<td>'+jsonArrObj[i].Experience+'</td>'+
                                     '<td>'+jsonArrObj[i].Salary+'</td>'+
                                '<tr>';
       }
       $("table tbody tr").remove();
       $("table tbody").append(inner_html);
      
        addclass = document.getElementsByClassName(addclass);
        removeclass = document.getElementsByClassName(removeclass);
       $.fn(".page_index").removeclass('active');
       $.fn("#page_index"+page_number).addclass('active');
       $("pagination-buttons")
       $(".pagination-details").text('showing '+(start_index)+' to '+(end_index+1)+' of '+jsonArrObj.length+' entries.')
    }

    $.fn.nextPage = function(){
      page_number++;
      $.fn.displayTableData();
    }

    $.fn.prevPage = function(){
      page_number--;
      $.fn.displayTableData();
    }
    $.fn.changePageIndex = function(index){
      page_number = parseInt(index);
      $.fn.displayTableData();
    }
    $("#table-size").change(function(){
         var tab_size = $(this).val();
           page_number =1;
           records_per_page = parseInt(tab_size);
           total_page = Math.ceil(jsonArrObj.length / records_per_page);
           $.fn.displayTableData();
    });
    $.fn.displayTableData();
});