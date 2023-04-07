<script setup>
</script>

<template>
  <header>
    <h1> I18n Worshop</h1>

  </header>
  <main class="container">

    <div class="l10n-examples">
      <div class="labels">
        <h3>Labels</h3>
        Hello
      </div>

      <div class="dates">
        <h3>Dates</h3>
         {{ new Date() }}
      </div>

      <div class="currency">
        <h3>Currencies</h3>
        100 €
      </div>
    </div>
  </main>
</template>
<style>
header {
  padding: 1rem 2rem;
  color: white;
  background-color: maroon;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.5rem;
}

.labels,
.dates,
.currency {
  margin-bottom: 2rem;
}
</style>