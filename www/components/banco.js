$(document).on('click','#cadastro',function(){
  if($('#marca').val() == "" || $('#modelo').val() == "" || $('#ano').val() == "" || $('#cor').val() == "" || $('#valor').val() == ""){
    alert("Existem campos ainda nao preenchidos, preencha-os!");
  }
  else{
    var parametros = {
    "marca": $("#marca").val(),
    "modelo": $("#modelo").val(),
    "ano": $("#ano").val(),
    "cor": $("#cor").val(),
    "valor": $("#valor").val()
  }
    $.ajax({
    type:"post",
    url:"https://cadastro-de-carros-slackbot115.c9users.io/conexao.php",
    data:parametros,
    success:function(data){
      $("#marca").val("");
      $("#modelo").val("");
      $("#ano").val("");
      $("#cor").val("");
      $("#valor").val("");
      navigator.notification.alert(data);
    },
    error:function(data){
      navigator.notification.alert(data);
    }
  });
  }
});