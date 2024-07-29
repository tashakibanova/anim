const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
collapsibleBtns.forEach(btn => {
  btn.classList.add('active');
  
  btn.addEventListener('click', function() {
    const collapsibleContent = this.nextElementSibling;
    collapsibleContent.style.display = collapsibleContent.style.display === 'none' ? 'block' : 'none';
  });
});

