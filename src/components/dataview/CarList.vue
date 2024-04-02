<template>

</template>

<script>
</script>

<style>
  /* Car list modal style */
  .modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: none;
}

.modal.is-active {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-card {
  background-color: #fff;
  width: 80%;
  max-width: 600px;
  border-radius: 5px;
  overflow: hidden;
}

.modal-card-head,
.modal-card-foot {
  padding: 1rem;
  background-color: #f5f5f5;
}

.modal-card-title {
  margin: 0;
}

.modal-card-body {
  padding: 1rem;
}

.modal-card-foot {
  display: flex;
  justify-content: flex-end;
}

.modal-card-foot .button {
  margin-left: 0.5rem;
}
</style>