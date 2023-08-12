$(document).on("click", ".popupBTN", function () {
    var cId = $(this).data('id');
    var cVal = $(this).data('val');

    $(".modal-body #catID").val(cId);
    $(".modal-body #newName").val(cVal);

});

$(document).on("click", ".offerBtn", function () {
    var cId = $(this).data('id');
    $("#offerCategoryId").val(cId);

});

$('.modalBTN').click( function () {
    var catId = $(this).data('id');
    var routeURL = '/admin/category/status/'+catId
    $(".modal-footer #confirmBTN").attr('href', routeURL);
});