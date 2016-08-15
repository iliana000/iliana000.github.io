document.querySelectorAll('.select').forEach(function(item, i, arr) {

    var select = item;

    var styledSelect = select.querySelector('div.select-styled');
console.dir(styledSelect);

    var list = select.querySelector('.select ul');

    var listItems = list.childNodes;
  
    // toggling option list  
    styledSelect.addEventListener( "click" , function(e) {
        // closing all other selects
        document.querySelectorAll('.select-styled').forEach(function(item, i, arr) {

            if (item != styledSelect) {
                item.classList.remove('active');
            }

        });

        styledSelect.classList.toggle('active');
        e.stopPropagation();
    });

    // chosing option and closing list
    list.addEventListener( "click" , function(e) {

        if (e.target.tagName != 'LI') return;

        e.stopPropagation();

        styledSelect.firstChild.textContent = e.target.textContent;

        styledSelect.classList.remove('active');
        select.value = e.target.getAttribute('rel');
    });
  
    // closing list when click elsewhere
    document.documentElement.addEventListener( "click" , function() {
        styledSelect.classList.remove('active');
    });
});
