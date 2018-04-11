$(document).ready(function()
    {

      $("#MZ").click(function(){
        $("#SEARCH").val("MZ");
        listObj.search('MZ', ['name']);
      });

        $("#myTable").tablesorter();

        var options = {
  valueNames: [ 'name', 'born' ]
};

var userList = new List('users', options);
    }
);
