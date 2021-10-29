<template>
  <Nav />
  <div class="mt-5 flex justify-center">
    <div class="mt-10 sm:mt-0">
      
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="procesarFormulario">
            <Input :product="product"/>
          </form>
        </div>
      
    </div>

    
  </div>
  <div class="mt-5 p-3">
      <ListProducts />
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Input from "@/components/Input.vue";
import ListProducts from "@/components/ListProducts.vue";
import {mapActions} from 'vuex'
const shortid = require('shortid');

export default {
  name: "Home",
  components: {
    Nav,
    Input,
    ListProducts,
  },
  data() {
    return {
      product: {
        id: '',
        name: '',
        quantity: 0,
        price: 0,
        codeProduct: '',
        category: ''
      }
    }
  },
  methods: {
    ...mapActions(['setProducts']),
    procesarFormulario(){
      console.log(this.product)
      //if(this.product.name.trim() === ""){
      //   console.log('Campo vacío')
      //   return
      // }
      // console.log('no está vacio')

      // generar id
      this.product.id = shortid.generate()
      //console.log(this.product.id)
      
      // envian los datos
      this.setProducts(this.product)

      // limpiar datos
      this.product = {
       id: '',
        name: '',
        quantity: 0,
        price: 0,
        codeProduct: '',
        category: ''
      }
    }
  },
};
</script>
