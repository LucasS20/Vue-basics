<template>
  <h1>{{ name }}</h1>
  <p v-if="situacao ==='ativo'">Usuario está autenticado</p>
  <p v-else-if="situacao === 'pendente'">Usuario está pendente</p>
  <p v-else>Usuario não está autenticado</p>
  <h3>Palavras:</h3>
  <ul>
    <li v-for="item in items" :key="item"> {{ item }}</li>
  </ul>
  <a :href="link"> Click here for google</a>

  <button @click="trocarStatus">Change Status</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Lucas',
      situacao: 'inativo',
      items: ['teste', 'botafogo', '6x1'],
      link: 'https://google.com'
    };
  },
  methods: {
    trocarStatus() {
      console.log(this.situacao)
      if (this.situacao === 'ativo') {
        this.situacao = 'inativo';
      } else if (this.situacao === 'inativo') {
        this.situacao = 'pendente';
      } else if (this.situacao === 'pendente') {
        this.situacao = 'ativo'
      }
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>