/*
*  Tomas Albertsen, 2013
*  https://github.com/tomfa/focus
* 
*  Sets focus on the element marked with id=focuselement, or an appropriate
*  element within it.
*
*  Dependencies: jQuery (v2.0.3)
*
*/

$( document ).ready(function() {
    // Defines
    var focuselement = $('#focuselement');

    // Type of elements we do not wish to focus .
    // If the element is of any of these types, we use the search function
    // to find an appropriate element within this one.
    var wrongTypes = ["TD", "TH", "TABLE", "DIV", "P", "FORM", "UL", "LI"];

    // If no focus element is found, we don't do anything
    if (!(focuselement.length))
        return;
    
    // If the focus element is of the wrong type, we exchange it with an 
    // appropriate one
    var type = getElementType(focuselement);
    if (wrongTypes.indexOf(type) != -1)
        focuselement = findInnerFocusElement(focuselement);

    var x = window.scrollX, y = window.scrollY;
    focuselement.focus();
    window.scrollTo(x, y);
    

    function getElementType(element) {
        // Returns the type of the element
        var type = element.type;
        if (type === undefined)
            type = element.prop('tagName');
        return type;
    }

    function findInnerFocusElement (outer_element) {
        // Returns an appropriate focus element within the given element
        return $(outer_element).find('a,input[type=text],textarea,select'
            ).filter(':visible').first();
    }

});
