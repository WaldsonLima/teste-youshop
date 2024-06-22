<template>
    <v-form
        v-model="validCep"
        ref="paymentForm"
        @submit.prevent="confirmPayment"
    >
        <v-container class="form__container">
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="cep"
                        label="CEP *"
                        required
                        :rules="cepRules"
                        append-inner-icon="mdi-magnify"
                        @click:append-inner="getAdress"
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        label="Rua"
                        v-model="endereco.logradouro"
                        hide-details
                        disabled
                        :key="logradouroKey"
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        label="Bairro"
                        v-model="endereco.bairro"
                        hide-details
                        disabled
                        :key="bairroKey"
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        label="Cidade"
                        v-model="endereco.localidade"
                        hide-details
                        disabled
                        :key="localidadeKey"
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        label="Estado"
                        v-model="endereco.uf"
                        hide-details
                        disabled
                        :key="ufKey"
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="complemento"
                        label="Complemento"
                        hide-details
                        required
                    />
                </v-col>
            </v-row>
            <v-btn
                v-if="!isFormPayment"
                class="form__container__continue-button"
                color="#e2e2e2"
                @click="showPaymentPage"
            >
                Confirmar pagamento
            </v-btn>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-select
                        v-if="isFormPayment"
                        v-model="methodPayment"
                        class="form__container__continue-button"
                        label="Método de pagamento"
                        :items="['Boleto', 'Cartão de crédito', 'Pix']"
                    />
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-text-field
                        v-if="isFormPayment"
                        v-model="cpf"
                        label="Digite seu CPF"
                        :rules="cpfRules"
                        required
                        class="form__container__cpf-input"
                    />
                </v-col>
            </v-row>
            <v-btn
                v-if="isFormPayment"
                class="form__container__continue-button"
                type="submit"
                color="#e2e2e2"
            >
                Finalizar pedido
            </v-btn>
        </v-container>
    </v-form>
</template>

<script setup lang="ts" >
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const store = useStore()
    const isFormPayment = ref(false)
    const validCep = ref(false)
    const cep = ref()
    const complemento = ref()
    const logradouroKey = ref(0)
    const bairroKey = ref(0)
    const localidadeKey = ref(0)
    const ufKey = ref(0)
    const cpf = ref()
    const methodPayment = ref()
    const endereco = {
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: ""
    }
    const paymentForm = ref()

    const cepRules = [(value: string) => !!value || 'Você precisa inserir seu CEP'];
    const cpfRules = [(value: string) => !!value || 'Você precisa inserir seu CPF'];
    

    async function getAdress() { 
        const data = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`).then((r) => r.json())

        if(data !== "") {
            endereco.logradouro = data.logradouro;
            logradouroKey.value += 1
            endereco.bairro = data.bairro;
            bairroKey.value += 1
            endereco.localidade = data.localidade;
            localidadeKey.value += 1
            endereco.uf = data.uf;
            ufKey.value += 1
        }

        store.state.cep = cep
        store.state.complemento = complemento
        store.state.logradouro = data.logradouro;
        store.state.bairro = data.bairro;
        store.state.localidade = data.localidade;
        store.state.uf = data.uf;
    }

    async function showPaymentPage() {
        await paymentForm.value.validate()
        if(cep.value && endereco) {
            isFormPayment.value = true
        }
    }

    function confirmPayment() {
        if(cpf.value) {
            store.state.cpf = cpf.value;
            store.state.methodPayment = methodPayment.value;
            
            if(methodPayment.value === 'Cartão de crédito') {
                setTimeout(() => {router.push({ path: '/creditcard' })}, 200);
            }
            
            if(methodPayment.value === 'Pix') {
                setTimeout(() => {router.push({ path: '/pix' })}, 200);
            }
            
            if(methodPayment.value === 'Boleto') {
                setTimeout(() => {router.push({ path: '/boleto' })}, 200);
            }
        }
    }
</script>

<style scoped lang="scss" >
    .form__container {
        text-align: center;

        &__continue-button {
            margin-top: 20px;
        }

        &__cpf-input {
            margin-top: 20px;
        }
    }
</style>
