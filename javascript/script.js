document.addEventListener("DOMContentLoaded", function () {
  // Get all h2 elements
  var headers = document.querySelectorAll('h2');

  // Get the sidebar navigation element
  var sidebarNav = document.getElementById('sidebar-nav');

  // Loop through each h2 header and create a link in the sidebar
  headers.forEach(function (header) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');

    // Set the link text to the header text
    link.textContent = header.textContent;

    // Set the link href to the header id
    link.href = '#' + header.id;

    // Append the link to the list item
    listItem.appendChild(link);

    // Append the list item to the sidebar navigation
    sidebarNav.appendChild(listItem);
  });
});

function setVideoSize() {
    const video1 = document.getElementById('dynamicVideo');
    const video2 = document.getElementById('dynamicVideo2');
    const padding = 100;
  
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    const maxWidth = windowWidth - padding * 2;
    const maxHeight = windowHeight - padding * 2;
  
    video1.style.maxWidth = `${maxWidth}px`;
    video1.style.maxHeight = `${maxHeight}px`;
  
    video2.style.maxWidth = `${maxWidth}px`;
    video2.style.maxHeight = `${maxHeight}px`;
  }
  
  setVideoSize();
  window.addEventListener('resize', setVideoSize);