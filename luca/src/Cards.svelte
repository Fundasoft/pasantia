<script>

     export let cardsDatos;
     
</script> 

  <div>
   <div class="fixed-top">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <div class="container">
          <span class="navbar-brand mb-0 h1">Navbar</span>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <span class="badge bg-primary">Primary</span>
            <span class="badge bg-info text-dark">Info</span>
          </div>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-danger">Danger</button>
        </div>
      </div>     
    </nav>
  </div>
    <div class="row g-0">
      {#each cardsDatos as item}
      <div class=" col-6 col-xxl-3 col-md-4">
        <div class="container contenedor h-100" data-bs-toggle="modal" data-bs-target="#{item.id}">
          <div class="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <img src={item.url} class="img-fluid" style="height:400px" alt="...">
                <p class="text-uppercase imagenes">{item.title}</p>
              </div>
            </div>
          </div>
          <img src={item.url} class="img-fluid" style="height:400px" alt="...">
          <p class="text-uppercase imagenes">{item.title}</p>
        </div>
      </div >
      {/each} 
    </div>
  </div>

<style>
  .contenedor{
    position: relative;
    cursor: pointer;
  }
  .container{
    display: flex;
    align-items: center;
  }
  .navbar{
    height: 60px;
  }
  .imagenes{
    position: absolute;
    top: 360px;
    left: 20px;
    color: white;
    font-family: 'Lucida Grande', sans-serif;
    cursor: pointer;
  }
</style>