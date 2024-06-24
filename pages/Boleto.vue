<template>
    <main class="main__boleto">
        <span class="boleto-title">
            Aponte a câmera do seu celular para o código de barras ou copie o código
        </span>
        <img src="https://st4.depositphotos.com/20888684/25186/v/450/depositphotos_251869691-stock-illustration-realistic-barcode-barcode-icon-vector.jpg">
        <span class="boleto-code">
            67846867856875687568768756856787
        </span>
    </main>
</template>

<style scoped lang="scss">
    .main__boleto {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boleto-title {
        font-size: 32px;
        font-weight: 500;
        color: #00020c;
        margin-bottom: 40px;
        text-align: center;
        padding: 0 5%;
    }

    .boleto-code {
        font-size: 16px;
        font-weight: 400;
        color: #00020c;
        margin-top: 40px;
        text-align: center;
    }
</style>
