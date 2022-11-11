<script>
     export let cardsDatos;
</script>
<style>
  .aboutUs{
    font-family: 'Montserrat', sans-serif;
  }
  .tittle{
    font-size: 35px;
  }

  .description{
    font-size: 17px;
  }

  .img{
    width: 100%;
  }     

</style>

<section class="bg-light aboutUs">
<div class="container">
  <div class="row d-flex no-gutters">
    <div class="col-lg-6 d-flex">
      <img src="images/logo/womanWorking.png" class="img" alt="">
    </div>
    <div class="col-lg-6 py-5 ps-5">
      <div class="subtitle">WELCOME TO ACCOUNTING</div>
      <div class="title fw-bold">We Are the Best Accounting Agency</div>
    {#each cardsDatos as item}
      <div class="pt-4 d-flex align-items-center">
          <div class="icon col-6 d-flex align-items-center">
            <i class="{item.iconCard}" id="cardIcon"></i>
          </div>
          <div class="cardContent ms-5">
            <div class="tittle">{item.cardTitle}</div>
            <div class="description">{item.cardSubTitle}</div>
          </div>
    </div>
    {/each}
  </div>
  </div>
</div>
</section>


