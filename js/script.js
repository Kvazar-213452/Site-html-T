$(document).ready(function() {
    if (code === 0) {
        $('.footer').html(footer);
        $('#menu_main').html(menu);
    }
    if (code === 1) {
        $('.footer').html(footer_1);
        $('#menu_main').html(menu_1);
    }
});

let footer = `
    <div class="container">
     <div class="row">
       <div class="footer-col">
         <h4>company</h4>
         <ul>
           <li><a href="#">about us</a></li>
           <li><a href="#">our services</a></li>
           <li><a href="#">privacy policy</a></li>
           <li><a href="#">affiliate program</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>get help</h4>
         <ul>
           <li><a href="#">FAQ</a></li>
           <li><a href="#">shipping</a></li>
           <li><a href="#">returns</a></li>
           <li><a href="#">order status</a></li>
           <li><a href="#">payment options</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>online shop</h4>
         <ul>
           <li><a href="#">watch</a></li>
           <li><a href="#">bag</a></li>
           <li><a href="#">shoes</a></li>
           <li><a href="#">dress</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>follow us</h4>
         <div class="social-links">
           <img class="img_fg" src="images/facebook.png" alt="img">
           <img class="img_fg" src="images/youtube.png" alt="img">
           <img class="img_fg" src="images/instagram.png" alt="img">
           <img class="img_fg" src="images/gmail.png" alt="img">
         </div>
       </div>
     </div>
    </div>
`;

let menu = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
    <img class="img_jkl" src="favicon.ico">
      <a class="navbar-brand" href="#">Hinduism</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="gallery.html">Gallery</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" href="blog.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacts.html">Contacts us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;





let footer_1 = `
            <div class="container">
     <div class="row">
       <div class="footer-col">
         <h4>company</h4>
         <ul>
           <li><a href="#">about us</a></li>
           <li><a href="#">our services</a></li>
           <li><a href="#">privacy policy</a></li>
           <li><a href="#">affiliate program</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>get help</h4>
         <ul>
           <li><a href="#">FAQ</a></li>
           <li><a href="#">shipping</a></li>
           <li><a href="#">returns</a></li>
           <li><a href="#">order status</a></li>
           <li><a href="#">payment options</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>online shop</h4>
         <ul>
           <li><a href="#">watch</a></li>
           <li><a href="#">bag</a></li>
           <li><a href="#">shoes</a></li>
           <li><a href="#">dress</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>follow us</h4>
         <div class="social-links">
           <img class="img_fg" src="images/facebook.png" alt="img">
           <img class="img_fg" src="images/youtube.png" alt="img">
           <img class="img_fg" src="images/instagram.png" alt="img">
           <img class="img_fg" src="images/gmail.png" alt="img">
         </div>
       </div>
     </div>
    </div>
`;

let menu_1 = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
        <img class="img_jkl" src="favicon.ico">
      <a class="navbar-brand" href="#">Hinduism</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../about.html">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../gallery.html">Gallery</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" href="../blog.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../contacts.html">Contacts us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;