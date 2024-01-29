function toggleMenu() {
    document.querySelector('.menu-icon').classList.toggle('menu-open');
    document.querySelector('.navbar').classList.toggle('open');
}

function showContent(tabId) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    event.target.classList.add('active');
}




function showTab2(tabId2) {
 
  var contents = document.querySelectorAll('.tent2');
  contents.forEach(function(tent2) {
      tent2.classList.remove('active-tent3');
  });

 
  var tabss = document.querySelectorAll('.tab2');
  tabss.forEach(function(tab2) {
      tab2.classList.remove('ive');
  });

 
  var selectedTabContent = document.getElementById(tabId2);
  selectedTabContent.classList.add('active-tent3');

 
  var selectedTab = document.querySelector('[onclick="showTab2(\'' + tabId2 + '\')"]');
  selectedTab.classList.add('ive');

}




