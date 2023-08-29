document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // You can perform further processing, like sending the data to a server for registration
    console.log('Đăng ký tài khoản:', username);
  });
  