<script>

     export let cardsDatos;

    // var cardsDatos = [
    //     {
    //         cardTitle: 'Primary card title',
    //         textColor: 'text-white',
    //         bgColor: 'bg-primary',
    //     },
    //     {
    //         cardTitle: 'Secondary card title',
    //         textColor: 'text-white',
    //         bgColor: 'bg-secondary',
    //     },
    //     {
    //         cardTitle: 'Success card title',
    //         textColor: 'text-white',
    //         bgColor: 'bg-success',
    //     },
    //     {
    //         cardTitle: 'Danger card title',
    //         textColor: 'text-white',
    //         bgColor: 'bg-danger',
    //     },
    //     {
    //         cardTitle: 'Warning card title',
    //         textColor: 'text-dark',
    //         bgColor: 'bg-warning',
    //     },
    //     {
    //         cardTitle: 'Info card title',
    //         textColor: 'text-dark',
    //         bgColor: 'bg-info',
    //     },
    //     {
    //         cardTitle: 'Light card title',
    //         textColor: 'text-dark',
    //         bgColor: ' bg-light',
    //     },
    //     {
    //         cardTitle: 'Dark card title',
    //         textColor: 'text-white',
    //         bgColor: 'bg-dark',
    //     },
    // ]
</script>

<div class="container mt-5">
  <div class="row">
    {#each cardsDatos as item}
    <div class="col-12 col-md-6 col-lg-4 p-1">
        <div class="card {item.textColor} {item.bgColor} mb-3 mx-auto p-2" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">{item.cardTitle}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
    </div>
    {/each}

    
    
  </div>
</div>
