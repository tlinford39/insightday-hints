function changePage(page) {
  var pageHome = document.getElementById('page-home');
  var page1 = document.getElementById('page-1');
  var page2 = document.getElementById('page-2');
  var page3 = document.getElementById('page-3');
  var menuHome = document.getElementById('menu-home');
  var menu1 = document.getElementById('menu-1');
  var menu2 = document.getElementById('menu-2');
  var menu3 = document.getElementById('menu-3');

  switch (page) {
    case 'home':
      setActive(pageHome, menuHome);
      setNotActive(page1, menu1);
      setNotActive(page2, menu2);
      setNotActive(page3, menu3);
      break;
    case '1':
      setNotActive(pageHome, menuHome);
      setActive(page1, menu1);
      setNotActive(page2, menu2);
      setNotActive(page3, menu3);
      break;
    case '2':
      setNotActive(pageHome, menuHome);
      setNotActive(page1, menu1);
      setActive(page2, menu2);
      setNotActive(page3, menu3);
      break;
    default:
      setNotActive(pageHome, menuHome);
      setNotActive(page1, menu1);
      setNotActive(page2, menu2);
      setActive(page3, menu3);
      break;
  }
}

function setActive(element, menuItem) {
  element.style.display = 'block';
  menuItem.classList.add('active');
}

function setNotActive(element, menuItem) {
  element.style.display = 'none';
  menuItem.classList.remove('active');
}

window.onload = function() {
  changePage('home');
}