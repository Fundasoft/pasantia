<script>
  let article = [
    {title:'ARTICLE ONE', cover: '/img/pic01.jpg', info:'This is a preview of what article one contains', bgColor: '#f2849e'},
    {title:'ARTICLE TWO', cover: '/img/pic02.jpg', info:'This is a preview of what article one contains', bgColor: '#7ecaf6'},
    {title:'ARTICLE THREE', cover: '/img/pic03.jpg', info:'This is a preview of what article one contains', bgColor: '#7bd0c1'}
  ]
  // const box = document.getElementsByClassName('box')
  // console.log(box)
  // const boxInfo = document.getElementsByClassName('boxInfo')
  // console.log(boxInfo);
  // box.addEventListener('onmouseover',()=>{console.log('hello')})
  
 

</script>



<main class="container ">
  <header class="mainHeader mt-5">
    <div>
      <a class="logoHome typoMain" href="/index.html">
        <span class="logo">
          <img class="logoImg" src="/img/logo.svg" alt="logo" />
        </span>
        <span class="logoTitle ml-3">PHANTOM</span>
      </a>
      <nav class="navbar d-none">
        <ul>
          <li>
            <a href="#menu">Elements</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="">
      <header class="heroHeader mt-5">
        <h1 class="typoMain">
          This is Phantom, a free, fully responsive site
          <br>
           template designed by
          HTML5 UP.
        </h1>
        <p class="mt-5 ">
          Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
          amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
          venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
          ipsum dolor sit amet nullam dolore.
        </p>
      </header>
    </div>
  </header>
  <div class="row row-cols-3 gy-4 mt-3 mb-3 ">
    {#each article as item}
    <section class="wrapper  col-12 col-sm-6 col-md-4 ">
      <article class="box card position-relative  ">
        <div class="bgColor rounded " style="background-color:{item.bgColor};">
        </div>
        <img class="bgImg rounded" src="{item.cover}" alt="img1" />
        <div class="boxText position-absolute top-50 start-50 translate-middle">
          <a class="link text-center text-dark" href="artOne.html">
            <h2 class="boxTitle">{item.title}</h2>
            <div class="boxInfo">
              <p class="boxP">{item.info}</p>
            </div>
          </a>
        </div>
      </article>
     
    </section>
    {/each}
  </div>
  <footer>
    <div>
      <section class="follow">
        <h2 class="typoMain">FOLLOW</h2>
        <ul class="icons d-flex">
          <li><a href="#menu">link</a></li>
        </ul>
      </section>
      <section class="form">
        <h2 class="typoMain">GET IN TOUCH</h2>
        <form method="post" action="#">
          <div class="fields">
            <div class="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div class="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div class="field">
              <div class="textarea-wrapper">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="1"
                  style="overflow: hidden; resize: none; height: 59px;"
                />
              </div>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Send" class="primary" /></li>
          </ul>
        </form>
      </section>
      <section class="copy">
        <ul class="copyright">
          <li>© Untitled. All rights reserved</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          <li>Demo Images: <a href="http://unsplash.com">Unsplash</a></li>
        </ul>
      </section>
    </div>
  </footer>
</main>


<style>
  .bgColor::after{
    content: '';
    position: absolute;
    width: 136%;
    height: 1px;
    background-color:aliceblue;
    transform: rotate(42.7deg);
    transform-origin: 0;
  }
  .bgColor::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 147%;
    background-color: aliceblue;
    transform: rotate(47.3deg);
    transform-origin: bottom left;
  }
  
  .typoMain {
    color: #585858;
    font-family: "Raleway", sans-serif;
  }
  .boxTitle{
    color: aliceblue;
    font-size: 1em;
    font-family: "Raleway", sans-serif;
  }

  .boxP{
    font-size: .75em;
    color: aliceblue;
  }



  a{
    text-decoration: none;
  }

  .logoImg {
    width: 2em;
  }
  .logoTitle {
    font-size: .75em;
    letter-spacing: 0.35em;
    margin-left: 1em;
  }



  .box {
    border: none;
    transition: scale ease-in-out 100ms;
    
  }
  /* .box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: indianred;
    opacity: 0.5;
    transition: opacity ease-in-out 100ms;
  } */
  .bgColor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transition: opacity ease-in-out 300ms;
  }

  .box:hover {
    scale: 1.1;
  }

  /* .box:hover::before {
    opacity: 0;
  } */
  .box:hover .bgColor {
    opacity: 0;
  }

  .boxText {
    width: 100%;
  }

  .boxInfo {
    
    display: none;
    transition: opacity ease-in-out 500ms;
    animation: reveal ease-in-out 500ms;
  }

  @keyframes reveal{
    from{
      transform: translateY(2em);
      opacity: 0;
    }
    to{
      transform: translateY(0);
      opacity: 1;
    }
  }

  .box:hover .boxInfo {
    
    transform: translateX(0);
    display: block;
  }

  .link {
    padding: 50px;
    width: 100%;
    display: inline-block;
  }
</style>
