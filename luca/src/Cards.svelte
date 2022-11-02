<script>

     export let cardsDatos;

</script>


  <div class="row g-0">
    {#each cardsDatos as item}
    <div class=" col-6 col-xxl-3 col-md-4">
      <div class="container contenedor h-100">
        <img src={item.url} class="img-fluid" style="height:400px" alt="...">
        <p class="text-uppercase imagenes">{item.title}</p>
      </div>
    </div >
    {/each} 
  </div>

<style>
  .contenedor{
    position: relative;
    cursor: pointer;
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