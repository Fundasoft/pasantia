<script>
    export let datos;
</script>

<div
    class="home__section container-fluid d-flex justify-content-center align-items-center"
>
    <div class="content">
        <div class="logo d-flex justify-content-center align-items-center">
            <div class="logo-container">
                {#if datos.imagen}
                    <img src={datos.imagen} class="img-fluid" alt="logo" />
                {:else}
                    <i class="fa-regular fa-gem text-white" />
                {/if}
            </div>
        </div>
        <div class="top__section" />
        <div class="mid__section">
            <h1 class="text-white text-uppercase text-center">
                {datos.titulo ? datos.titulo : "dimension"}
            </h1>
            <p class="">
                {datos.texto
                    ? datos.texto
                    : "A FULLY RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED FOR FREE UNDER THE CREATIVE COMMONS LICENSE."}
            </p>
        </div>
        <div
            class="bot__section d-flex flex-column justify-content-center align-items-center"
        >
            <div class="bot__section-buttons">
                <ul class="">
                    {#each datos.links as link}
                        <li>
                            <a href={link.url}>{link.name}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap");

    .home__section {
        position: relative;
        height: 100vh;
    }
    .home__section::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(../images/mountain.jpg) no-repeat center;
        filter: brightness(70%);
        animation: brightness 4s ease 0s 1 normal forwards;
    }
    .content {
        position: relative;
        width: 45%;
    }
    .top__section {
        border-bottom: 1px solid white;
        position: relative;
        padding-bottom: 60px;
        animation: top 2s ease 0s 1 normal forwards;
    }
    .top__section::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        background-color: white;
        height: 100%;
        width: 1px;
    }
    .mid__section {
        padding: 3rem 2rem;
        max-height: 40rem;
        animation: opacity 3s ease-in 0s 1 normal forwards;
    }
    .mid__section h1 {
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 0.3em;
        margin-bottom: 16px;
        line-height: 1.3;
    }
    .mid__section p {
        color: lightgray;
        text-align: center;
        font-size: 0.6em;
        letter-spacing: 0.2rem;
        line-height: 2;
        margin: 0;
    }
    .bot__section {
        border-top: 1px solid white;
        position: relative;
        animation: bot 2s ease 0s 0.5 normal forwards;
    }
    .bot__section::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        background-color: white;
        height: 100%;
        width: 1px;
    }
    .bot__section-buttons {
        border: 1px solid white;
        margin-top: 60px;
        border-radius: 5px;
    }
    .bot__section-buttons ul {
        margin: 0;
        padding: 0;
        display: flex;
        cursor: pointer;
    }
    .bot__section-buttons li {
        display: block;
        min-width: 7.5rem;
        height: 2.75rem;
        line-height: 2.75rem;
        padding: 0 1.25rem 0 1.45rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        font-size: 0.8rem;
        border-bottom: 0;
        text-align: center;
    }
    .bot__section-buttons li:not(:nth-child(2), :last-child) {
        border-right: 1px solid white;
    }
    .bot__section-buttons li a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 4px;
    }
    .bot__section-buttons li:hover {
        background-color: rgba(255, 255, 255, 0.075);
    }
    .logo-container {
        width: 65px;
        height: 65px;
        border: 1px solid white;
        border-radius: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: top 2s ease 0s 1 normal forwards;
    }
    .logo-container i {
        font-size: 2rem;
    }

    h1,
    p,
    a {
        font-family: "Source Sans Pro", sans-serif;
    }

    @media screen and (max-width: 1000px) {
        .content {
            width: 70%;
        }
    }
    @media screen and (max-width: 700px) {
        .home__section {
            position: relative;
            padding: 20px;
        }
        .content {
            width: 100%;
        }
        .bot__section-buttons ul {
            flex-direction: column;
        }
        .bot__section-buttons ul li:not(:last-child) {
            border-bottom: 1px solid white;
        }
        .bot__section::after {
            height: 27%;
            width: 1px;
        }
    }

    @keyframes bot {
        0% {
            transform: translateY(-100px);
            opacity: 1;
        }
        100% {
            transform: translateY(0px);
        }
    }
    @keyframes top {
        0% {
            transform: translateY(100px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    @keyframes brightness {
        0% {
            filter: brightness(0%);
        }
        50% {
            filter: brightness(40%);
        }
        100% {
            filter: brightness(70%);
        }
    }
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
