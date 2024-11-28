$(document).ready(function() {
    $('#botao-nova-tarefa').click(function() {
        $('#form-tarefa').slideToggle(); 
    });
    $('#botao-cancelar').click(function(){
        $('#form-tarefa').slideUp(); 
    });

    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault(); 

        const nomeTarefa = $('#nome-tarefa').val(); 
        const novoItem = $(`<li class="new-item">${nomeTarefa}</li>`); 
        $('#lista-tarefas').append(novoItem); 
        $('#nome-tarefa').val(''); 

        novoItem.click(function() {
            $(this).toggleClass('completed'); 
        });

        setTimeout(() => {
            novoItem.removeClass('new-item');
        }, 3000); 
    });
});