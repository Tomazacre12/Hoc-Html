var headerElement = 
document.querySelector('.header');
var mobileMenu =
document.querySelector('.menu-mobile-btn');
var headerHeight = headerElement.clientHeight
mobileMenu.onclick=function(){
    var isClose = headerElement.clientHeight === headerHeight
    if (isClose){
        headerElement.style.height = 'auto'
    } else {
        headerElement.style.height = '46px'
    }
}
var menuItems =
 document.querySelectorAll('.nav li a[href*="#"]')
    for (var i = 0; i < menuItems.length; i++){
        var menuItem = menuItems[i]
        menuItem.onclick = function(event){
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (!isParentMenu){
                headerElement.style.height = null
            }else{
                event.preventDefault()
            }
        }
    }
