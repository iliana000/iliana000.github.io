    var select = document.querySelector('.select');

    var styledSelect = document.querySelector('div.select-styled');

    var list = document.querySelector('.select ul');

    var listItems = list.childNodes;
  
    styledSelect.onclick = function(e) {
        styledSelect.classList.toggle('active');
        e.stopPropagation();
    };


    list.onclick = function(e) {

        if (e.target.tagName != 'LI') return;

        e.stopPropagation();

        styledSelect.firstChild.textContent = e.target.textContent;

        styledSelect.classList.toggle('active');
        select.value = e.target.getAttribute('rel');
    };
  
    document.documentElement.onclick = function() {
        styledSelect.classList.remove('active');
    };