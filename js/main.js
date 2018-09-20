$(function(){
    $('.pagination a').on('click', function () {
        $slideid = $(this).attr('id'),
        $('#slide-'+$slideid).siblings().removeClass('active');
        $('#slide-'+$slideid).addClass('active');
        $('.pagination a#'+$slideid).siblings().removeClass('active');
        $('.pagination a#'+$slideid).addClass('active');
    });
});
