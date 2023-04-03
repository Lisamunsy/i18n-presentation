<script setup>
</script>

<template>
  <header>
    <h1 > I18n Worshop</h1>
  </header>
  <main class="container">

    <div class="l10n-examples">
      <div class="labels">
        <h3>Labels</h3>
        Hello
      </div>
      <div class="dates">
        <h3>Dates</h3>
        Today's date : {{ Date.now() }}
      </div>
      <div class="currency">
        <h3>Currencies</h3>
      </div>
    </div>
  </main>
</template>
<style>
header{
  padding: 1rem;
  color: white;
  background-color: maroon;
}
h3{
  font-size: 1.5rem;
}
.labels, .dates, .currency{
  margin-bottom: 2rem;
}
</style>
