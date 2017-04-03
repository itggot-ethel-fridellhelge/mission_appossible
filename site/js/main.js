function reveal(){
  var element = document.getElementById('blog_dropdown')
  element.classList.remove('hidden');
}

function hide(){
  var element = document.getElementById('blog_dropdown')
  element.classList.add('hidden');
}

function makecurrent(element){
  element.classList.add('current');
}

function removecurrent(element){
  element.classList.remove('current');
}

function nav(){
  var element = document.querySelector('nav')
  element.classList.toggle('hidden_mobile');
}
