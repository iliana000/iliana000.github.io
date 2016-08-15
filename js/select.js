    // var select = document.querySelector('.select');

    // var styledSelect = document.querySelector('div.select-styled');

    // var list = document.querySelector('.select ul');

    // var listItems = list.childNodes;
  
    // styledSelect.onclick = function(e) {
    //     styledSelect.classList.toggle('active');
    //     e.stopPropagation();
    // };


    // list.onclick = function(e) {

    //     if (e.target.tagName != 'LI') return;

    //     e.stopPropagation();

    //     styledSelect.firstChild.textContent = e.target.textContent;

    //     styledSelect.classList.toggle('active');
    //     select.value = e.target.getAttribute('rel');
    // };
  
    // document.documentElement.onclick = function() {
    //     styledSelect.classList.remove('active');
    // };
    

document.onclick = function(e) {
    console.log("1 select.querySelector('div.select-styled').classList", document.querySelector('div.select-styled').classList);
    var select = e.target;
      while (select != document) {
        if (select.classList.contains("select") ) {
          break;
        }
        if (select == document.documentElement)  {
          return;
        }
        select = select.parentNode;
      }

    var styledSelect = select.querySelector('div.select-styled');
    console.log("1 styledSelect.classList", styledSelect.classList);

    var list = select.querySelector('.select ul');

    var listItems = list.childNodes;
  

    var target = e.target;

      while (target != document) {

        if (target == styledSelect) {
            console.log("1 styledSelect.classList.contains('active')", styledSelect.classList.contains('active'))
            styledSelect.classList.toggle('active');
            console.log("2 styledSelect.classList.contains('active')", styledSelect.classList.contains('active'))
            e.stopPropagation();
        };

        if (target == list) {

            if (e.target.tagName != 'LI') return;

            e.stopPropagation();

            styledSelect.firstChild.textContent = e.target.textContent;

            styledSelect.classList.remove('active');
            select.value = e.target.getAttribute('rel');
        };
        
        target = target.parentNode;
      }

  
    document.documentElement.onclick = function() {
        styledSelect.classList.remove('active');
    };
}