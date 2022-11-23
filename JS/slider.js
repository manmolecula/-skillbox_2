const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,  
    },
  });

  document.querySelectorAll('.work__step').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      tabsBtn.classList.add('work__step-colored')
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })