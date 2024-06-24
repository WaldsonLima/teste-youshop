<template>
    <section class="product-datails">
        <img
            :src="product.image"
            class="product-image"
        >
        <div class="content">
            <h2 class="name">
                {{ product.name }}
            </h2>
            <p class="price">
                {{ product.price }}
            </p>
            <p class="description">
                {{ product.description }}
            </p>
        </div>
    </section>
    <v-form
        v-if="!isFormAdress"
        v-model="validUser"
        ref="userForm"
        @submit.prevent="submitForm"
    >
        <v-container class="form__container">
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="name"
                        label="Nome Completo *"
                        required
                        :rules="nameRules"
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    hide-details
                />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                <v-text-field
                    v-model="phone"
                    label="Telefone"
                    hide-details
                />
                </v-col>
            </v-row>
            <v-btn
                class="form__container__continue-button"
                type="submit"
                color="#e2e2e2"
            >
                Continuar para endereço
            </v-btn>
        </v-container>
    </v-form>
    <div class="back-icon">
        <v-icon
            v-if="isFormAdress"
            icon="mdi-arrow-left-circle-outline"
            @click="isFormAdress = false"
        />
    </div>
    <FormPayment v-if="isFormAdress"/>
</template>

<script setup lang="ts" >
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';

    const offer_code = useRoute().path;
    const response = await fetch(`https://api.deepspacestore.com/offers${offer_code}`)
	const product = await response.json()
    const store = useStore()
    const validUser = ref(false)
    const name = ref()
    const email = ref()
    const phone = ref()
    const userForm = ref()
    const isFormAdress = ref(false)
    const nameRules = [(value: string) => !!value || 'Você precisa inserir o seu nome']

    const submitForm = async () => {
        await userForm.value.validate()

        if(name.value) {
            store.state.name = name
            store.state.email = email
            store.state.phone = phone

            return isFormAdress.value = true
        }
    }
</script>

<style scoped lang="scss" >
    .form__container {
        text-align: center;

        &__continue-button {
            margin-top: 20px;
        }
    }

    .back-icon {
        max-width: 1800px;
        text-align: start;
        margin: 0 auto;
        padding-left: 16px;
        padding-right: 16px;
        margin-top: 20px;
    }

    .product-datails {
        width: 90%;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start
    }

    .product-image {
        width: 40%;
    }

    .name {
        font-size: 32px;
        font-weight: 600;
        color: #00020c;
    }

    .price {
        font-size: 42px;
        font-weight: 500;
        color: #059b00;
    }

    .description {
        font-size: 16px;
        font-weight: 400;
        color: #353535;
    }

    @media (max-width: 820px) {
        .content {
            width: 100%;
        }

        .product-image {
            width: 100%;
        }
    }
</style>
