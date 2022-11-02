<script>

     export let cardsDatos;

</script>

<div class="container-fluid mt-5">
  <div class="row bg-light">
    <div class="allContent">
      <img src="images/logo/womanWorking.png" alt="" style="width: 400px;">
    
      <div class="cardContent">
    {#each cardsDatos as item}
    <div class="vstack pt-4 d-flex">
        <div class="icon">
          <i class="{item.iconCard}"></i>
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
</div>
