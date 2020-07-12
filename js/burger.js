document.querySelector('.burger_btn').addEventListener('click', () => { 
    document.querySelector('.mobile_menu').classList.add('active'); 
    document.querySelector('.burger_btn').classList.add('clicked');
    document.querySelector('.close_line').classList.add('active'); 
});
  mobile_menu_close= document.querySelector('.close_btn').addEventListener('click', () => { 
    document.querySelector('.mobile_menu').classList.remove('active');
    document.querySelector('.burger_btn').classList.remove('clicked');
    document.querySelector('.close_line').classList.remove('active');  
});