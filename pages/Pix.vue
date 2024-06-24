<template>
    <main class="main__pix">
        <span class="pix-title">
            Aponte a câmera do seu celular para o QR Code ou copie o código
        </span>
        <img src="https://www.oficinadanet.com.br/media/post/2322/330/qrcode.png">
        <span class="pix-code" >
            3213213213123132131232
        </span>
    </main>
</template>

<style scoped lang="scss">
    .main__pix {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pix-title {
        font-size: 32px;
        font-weight: 500;
        color: #00020c;
        margin-bottom: 40px;
        text-align: center;
        padding: 0 5%;
    }

    .pix-code {
        font-size: 16px;
        font-weight: 400;
        color: #00020c;
        margin-top: 40px;
        text-align: center;
    }
</style>
