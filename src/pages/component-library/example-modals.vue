<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Modals',
});

function handleClick() {
  console.log('CLICKED');
}
</script>

<template>
  <div class="container">
    <h1>Modals</h1>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Overview</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="fs-5">Description:</p>
        <p>
          <code>BaseModal</code> component responsible for the site popup
          messages and confirmation screens.
        </p>

        <p>Two available slots in the modal:</p>
        <p>
          <code>#default</code> which will be the default slot where you place
          all the contents of the body.<br />
          <code>#footer</code> which will be where you place the contents of the
          footer.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/sW3NB6EZZETWKb8JZiKYQO/Purpose-Financial-Design-Kit?node-id=7%3A23"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>background</td>
              <td>Background color</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Main id of the component</td>
            </tr>
            <tr>
              <td>position</td>
              <td>Screen position of the modal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Components Samples</h2>
        <hr />
      </div>
    </div>

    <div class="mb-5">
      <p class="fs-5">Default empty component (no props):</p>
      <BaseButton
        aria-controls="blankModal"
        data-bs-target="#blankModal"
        data-bs-toggle="modal"
        label="Blank Modal"
      />

      <p class="mt-5 fs-5">Centered position default component (no props):</p>
      <BaseButton
        aria-controls="centeredModal"
        data-bs-target="#centeredModal"
        data-bs-toggle="modal"
        label="Centered Modal"
      />

      <p class="mt-5 fs-5">Bottom position (position="bottom"):</p>
      <BaseButton
        aria-controls="bottomModal"
        data-bs-target="#bottomModal"
        data-bs-toggle="offcanvas"
        label="Bottom Modal"
      />

      <p class="mt-5 fs-5">
        Bottom position, blue color (position="bottom", background="blue"):
      </p>
      <BaseButton
        aria-controls="bottomModalBlue"
        data-bs-target="#bottomModalBlue"
        data-bs-toggle="offcanvas"
        label="Bottom Modal blue"
      />

      <p class="mt-5 fs-5">Blue color (background="blue-image"):</p>
      <BaseButton
        aria-controls="blueModal"
        data-bs-target="#blueModal"
        data-bs-toggle="modal"
        label="Blue Modal"
      />

      <p class="mt-5 fs-5">Transparent color (background="transparent"):</p>
      <BaseButton
        aria-controls="transparentModal"
        data-bs-target="#transparentModal"
        data-bs-toggle="modal"
        label="Transparent Modal"
      />
    </div>

    <!-- NOTE: The `ClientOnly` component is needed in order to fix some Hydration issues related with the use of client libraries like Bootstrap inside Nuxt. -->
    <ClientOnly>
      <BaseModal id="blankModal"></BaseModal>
      <BaseModal id="centeredModal">
        <template #default>Modal Body Centered</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="modal"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>
      <BaseModal id="bottomModal" position="bottom">
        <template #default>Modal Body Bottom</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="offcanvas"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>
      <BaseModal id="bottomModalBlue" position="bottom" background="blue">
        <template #header>Modal Body Bottom Blue</template>
        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          eligendi magni id quia obcaecati necessitatibus incidunt, asperiores
          sunt eveniet atque tempore est ut. Inventore architecto itaque id
          quibusdam repellendus recusandae? Lorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Natus ea autem tempora accusamus voluptatibus, tempore, obcaecati
          beatae labore ab doloribus laudantium molestias enim delectus debitis
          qui at reiciendis. Hic, facere. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto eligendi magni id quia obcaecati
          necessitatibus incidunt, asperiores sunt eveniet atque tempore est ut.
          Inventore architecto itaque id quibusdam repellendus recusandae? Lorem
          ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Natus ea autem tempora accusamus
          voluptatibus, tempore, obcaecati beatae labore ab doloribus laudantium
          molestias enim delectus debitis qui at reiciendis. Hic, facere. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi
          magni id quia obcaecati necessitatibus incidunt, asperiores sunt
          eveniet atque tempore est ut. Inventore architecto itaque id quibusdam
          repellendus recusandae? Lorem ipsum dolor sit amet consectetur Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Natus ea autem
          tempora accusamus voluptatibus, tempore, obcaecati beatae labore ab
          doloribus laudantium molestias enim delectus debitis qui at
          reiciendis. Hic, facere. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto eligendi magni id quia obcaecati
          necessitatibus incidunt, asperiores sunt eveniet atque tempore est ut.
          Inventore architecto itaque id quibusdam repellendus recusandae? Lorem
          ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Natus ea autem tempora accusamus
          voluptatibus, tempore, obcaecati beatae labore ab doloribus laudantium
          molestias enim delectus debitis qui at reiciendis. Hic, facere.
        </template>
      </BaseModal>

      <BaseModal id="blueModal" background="blue-image">
        <template #default>Blue modal</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="modal"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>

      <BaseModal id="transparentModal" background="transparent">
        <template #default>transparent modal</template>
        <template #footer>
          <BaseButton
            data-bs-dismiss="modal"
            label="Login"
            variation="secondary"
            @click="handleClick"
          />
        </template>
      </BaseModal>
    </ClientOnly>
  </div>
</template>
