/*function Datos() {

  $("#nombre").val("José Julio").trigger('input'); 
    $("#lastname").val("Martínez García").trigger('input'); 
    $("#email").val("josejulio.martinez@grupocmc.es").trigger('input'); 
    var fecha=new Date();
    var mes=fecha.getMonth()+1; 
  var minutos = fecha.getUTCMinutes();
  if(mes<10){mes='0'+mes}
  if(minutos<10){minutos='0'+minutos}

    $("#operationid").val(fecha.getFullYear()+""+mes+""+fecha.getDate()+""+fecha.getHours()+""+minutos).trigger('input');
    $("#ines").val("MAGJ19640705HNERRL09").trigger('input');   
}
*/
$( document ).ready(function() {
  var fecha=new Date();
  var mes=fecha.getMonth()+1; 
  var minutos = fecha.getUTCMinutes();
  var dia= fecha.getDate();

  if(mes<10){mes='0'+mes}
  if(dia<10){dia='0'+dia}  

  if(minutos<10){minutos='0'+minutos}




    $("#operationid").val(fecha.getFullYear()+""+mes+""+dia+""+fecha.getHours()+""+minutos).trigger('input');  
});

//funcion para el input file "cargar archivo"
$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
        
    });
});
