<script>
    export let image;
    export let title;
    export let url;
    export let campaignID;
    export let location;
</script>

<div class="card deal">
        
          <img class="card-img-top" src={image} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{location}</p>
          </div>
          <div class="card-footer">
            <a href={url}><button class="btn btn-primary">Bekijk aanbieding</button></a>
          </div>
        
    </div>
    
<style>
    .card {
        margin: 2px;
    }
    .deal button {
        box-shadow: 0 0 3px #7b7b7b;
        background-color: #f46500;
        border: 2px solid #fff;
        border-radius: 3px;
        font-weight: bold;
        min-width: 123px;
        margin: 10px 0px;
    }
    .card-body {
        background-image: url(https://wellnesscentrumnederland.nl/wp-content/uploads/2020/02/vakantieveilingen-logo2.jpg);
        background-repeat: no-repeat;
        background-position: left bottom;
        filter: grayscale(100%);
        background-size: auto 40px;
    }
</style>