function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  const inputBox = document.querySelector('#menuBox');
  const prizBox = document.querySelector('#price');
     
     function show(item){
      var hh = item.split('*');
      var itm = hh[0];
      var priz = hh[1];
      inputBox.value = itm;
      prizBox.value =priz;
     }

     function getTotal(){
      var prz = document.getElementById("price").value;
      var quant = document.getElementById("qty").value;
      var total = parseInt(prz) * parseInt(quant);
      document.getElementById("newBox").value=total;
     }

     function refreshTable(){
      document.getElementById("menuBox").value="";
      document.getElementById("price").value=""; 
      document.getElementById("qty").value="";
      document.getElementById("newBox").value="";
    }
  
     