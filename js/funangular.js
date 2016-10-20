angular.module('telefonicaMexico', []);
  angular.module('telefonicaMexico').controller('CreateOperationController', 
    function($scope, $http){
      $scope.prova = function(){
        $("#Searching_Modal").modal('show');
      };
      
      $scope.user = {
          opClass : 380,
          domainId: 31,
          operationType: "EMAIL"
      };
    
    var files = [];
    $scope.uploadedFile = function(file){
      console.log(file.files[0]);
      files.splice(0, 1, file.files[0]);
    };

    $scope.creatOperation = function (user) {
      console.log(user);
      //var url = 'http://104.155.70.22:8080/ESign/esignservices/esign/newoperationwithfiles2';
      var url = 'https://cmcmexico.galeonsoftware.com/ESign/esignservices/esign/newoperationwithfiles2';
      var fd = new FormData();
      angular.forEach(files,function(file, index){
        fd.append('file', file);
      });

user.mandatories = [1];

      fd.append("datos", JSON.stringify(user));
      $("#Searching_Modal").modal('show');
      $.ajax({
        url: url,
        data: fd,
        processData: false,
        contentType: false,
        timeout:300000,
        type: 'POST',
        success: function(data){
          alert("Operacion exitosa");
          $("#Searching_Modal").modal('hide');
          
        },
        error: function (err){
          console.log(JSON.stringify(err));
          if( err.status = 200){
            alert("Operacion exitosa");  
          }
          else{
            console.log(err.status);
            alert("Operacion fallida");
          }          
          $("#Searching_Modal").modal('hide');
          
        }
      });
    };
  });

