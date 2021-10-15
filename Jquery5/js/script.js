// Função
$(function () {
    $('.btn-lg').click(function () {
        $(this.parentElement.parentElement).siblings().toggle(2000);
    });
});
