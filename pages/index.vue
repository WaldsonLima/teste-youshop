<template>
    <main class="product__container">
		<v-row>
			<v-col
				cols="12"
                md="4"
				v-for="product in products"
				:key="product.offerCode"
			>
				<v-card
					color="#212121"
					variant="elevated"
					class="mx-auto product__card"
					elevation="8"
				>
					<v-card-item>
					<div>
						<div class="text-h6 mb-1">
							{{ product.title }}
						</div>
						<div class="text-caption">
							{{ product.price }}
						</div>
					</div>
					</v-card-item>

					<v-card-actions>
						<v-btn
							text="Comprar"
							variant="outlined"
							block
							@click="showFormPage(product.offerCode)"
						/>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</main>
</template>

<script setup lang="ts" >
	const products = [
		{
			title: "Monitoria de design",
			price: "R$ 350,00",
			offerCode: "31233"
		},
		{
			title: "Curso de Fron-End",
			price: "R$ 250,00",
			offerCode: "41234"
		},
		{
			title: "Curso de marketing",
			price: "R$500,00",
			offerCode: "56412"
		},
		{
			title: "Guia de database",
			price: "R$ 400,00",
			offerCode: "98721"
		},
		{
			title: "Curso de edição",
			price: "R$ 320,00",
			offerCode: "10478"
		},
		{
			title: "Monitoria de inglês",
			price: "R$ 980,00",
			offerCode: "39568"
		},
	]

	function showFormPage(offerCode: string) {
        navigateTo('/' + offerCode)
    }
</script>

<style scoped lang="scss" >
	.product {
		&__container {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 80%;
			margin: 0 auto;
			margin-top: 40px;
		}

		&__card {
			cursor: default;
			border-radius: 8px;
			max-width: 315px;
		}
	}
</style>
