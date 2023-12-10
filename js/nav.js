document.addEventListener('DOMContentLoaded', function() {
  // Get button and navigation list elements
  const toggleBtn = document.querySelector('.nav__bar__horizontal_list--close_btn');
  const List = document.querySelector('.nav__bar__horizontal_list--nav_list');
  const horizontalList = document.querySelector('.nav__bar__horizontal_list');

  // Toggle the display of the navigation list on button click using mousedown event
  toggleBtn.addEventListener('mousedown', function(event) {

    // Toggle the 'open-2' class on close_btn
    toggleBtn.classList.toggle('open-2');

    // Toggle the 'open' class on the navigation list
    List.classList.toggle('open');

    // Toggle the 'dropdown' class on the horizontal list
    horizontalList.classList.toggle('dropdown', List.classList.contains('open'));
  }, { passive: true });
});
