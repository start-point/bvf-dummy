$(document).ready(function() {
  var selectedBrand = ".tablerow";
  $(selectedBrand).addClass("active");
});

$('#SELECT-BRAND').change(function(){
    $('#SELECT-BRAND option:selected').each(function(){
        selectedBrand = $(this).val();
        $(".tablerow").removeClass("active");
        $(selectedBrand).addClass("active");        
    });
});

$('#SELECT-FILE').change(function(){
    $('#SELECT-BRAND option:selected').each(function(){
        selectedBrand = $(this).val();
        $(".tablerow").removeClass("active");
        $(selectedBrand).addClass("active");        
    });
});
