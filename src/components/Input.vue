<template>
  <div class="shadow overflow-hidden sm:rounded-md">
    <div class="px-4 py-5 bg-white sm:p-6">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label
            for="name"
            class="block text-sm font-medium text-gray-700"
            >Nombre Producto</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            v-model.trim="product.name"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-3">
          <label for="quantity" class="block text-sm font-medium text-gray-700"
            >Cantidad de Producto</label
          >
          <input
            type="number"
            name="quantity"
            id="quantity"
            autocomplete="quantity"
            min="0"
            v-model="product.quantity"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>
        <div class="col-span-12 sm:col-span-3">
          <label for="price" class="block text-sm font-medium text-gray-700"
            >Precio</label
          >
          <input
            type="number"
            name="price"
            id="price"
            autocomplete="price"
            min="0"
            v-model="product.price"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-4">
          <label
            for="codeProduct"
            class="block text-sm font-medium text-gray-700"
            >Código de Producto</label
          >
          <input
            type="text"
            name="codeProduct"
            id="codeProduct"
            autocomplete="text"
            v-model="product.codeProduct"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-3">
          <label for="category" class="block text-sm font-medium text-gray-700"
            >Categoria</label
          >
          <select
            id="category"
            name="category"
            autocomplete="country-name"
            v-model.trim="product.category"
            class="
              mt-1
              block
              w-full
              py-2
              px-3
              border border-gray-300
              bg-white
              rounded-md
              shadow-sm
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          >
            <option>Perecibles</option>
            <option>No perecibles</option>
            <option>Limpieza</option>
            <option>Frutas y Verduras</option>
            <option>Bebidas</option>
            <option>Accesosrios</option>
          </select>
        </div>

        
      </div>
    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <button
       :disabled="bloquear"
        type="submit"
        class="
          inline-flex
          justify-center
          py-2
          px-4
          border border-transparent
          shadow-sm
          text-sm
          font-medium
          rounded-md
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        Guardar
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    computed: {
        bloquear(){
            return this.product.nombre.trim() === "" ? true : false
        }
  }
}
</script>

<style></style>
