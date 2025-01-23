$(function(){
  // ボタンがクリックされた場合
  $('#change-color').on({
    'click':()=>{
    $('#target').css('color','green');
    },
  });


  $('#change-text').on({
    'click':()=>{
    $('#target').css('color','blue');
    $('#target').text('HELLO!');
    },
  });

  $('#fade-out').on(
    'click',function(){
    $('#target').fadeOut();
  });

  $('#fade-in').on(
    'click',function(){
    $('#target').fadeIn();
  });
});
