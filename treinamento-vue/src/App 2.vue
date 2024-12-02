<template>
  <h1>{{ name }}</h1>
  <p v-if="situacao ==='ativo'">Usuario está autenticado</p>
  <p v-else-if="situacao === 'pendente'">Usuario está pendente</p>
  <p v-else>Usuario não está autenticado</p>

  <form @submit.prevent="addTarefa">
    <label for='Nova Task'>Nova Tarefa</label>
    <input type='text' id='newTask' name='newTask' v-model="newTask">
    <button type="submit" @click="addTarefa">Enviar</button>
  </form>
  <h3>Palavras:</h3>
  <ul>
    <li v-for="(item,index) in tarefas" :key="item">
      <span>{{ item }}</span>
      <button @click="deleteTarefa(index)">x</button>
    </li>
  </ul>

  <button @click="trocarStatus">Change Status</button>
</template>

<script setup>
import {ref} from 'vue';

const name = ref('Lucas');
const situacao = ref('ativo');
const newTask = ref('dsadsadsa')
const tarefas = ref([])
const trocarStatus = () => {
  if (situacao.value === 'ativo') {
    situacao.value = 'pendente';
  } else if (situacao.value === 'pendente') {
    situacao.value = 'inativo';
  } else {
    situacao.value = 'ativo';
  }
}
const addTarefa = () => {
  if (newTask.value.trim() !== '') {
    tarefas.value.push(newTask.value)
    newTask.value = '';
  }
}
const deleteTarefa = (index) => {
  tarefas.value.splice(index, 1)
}
</script>

<style>
h1 {
  color: blue;
}
</style>