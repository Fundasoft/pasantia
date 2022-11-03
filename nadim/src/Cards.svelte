<script>

     export let cardsDatos;

</script>



<div class="container-fluid mt-5">
  <div class="row d-flex bg-light">
    <div class="col-sm-8 d-flex justify-content-center">
      <img src="images/logo/womanWorking.png" alt="" style="width: 70%;">
    </div>
    <div class="col md-0" width="width: 70%;">
      <div class="subtitle">WELCOME TO ACCOUNTING</div>
      <div class="title">We Are the Best Accounting Agency</div>
    {#each cardsDatos as item}
      <div class="col pt-4 md-auto">
          <div class="icon">
            <i class="{item.iconCard}" id="cardIcon"></i>
          </div>
          <div class="cardContent">
            <div class="tittle">{item.cardTitle}</div>
            <div class="description">{item.cardSubTitle}</div>
          </div>
    </div>
    {/each}
  </div>
  </div>
</div>



