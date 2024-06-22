import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            name: "",
            email: "",
            phone: "",
            cep: "",
            complemento: "",
            logradouro: "",
            bairro: "",
            localidade: "",
            uf: "",
            cpf: "",
            methodPayment: ""
        }
    },
    mutations: {
        
    }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
