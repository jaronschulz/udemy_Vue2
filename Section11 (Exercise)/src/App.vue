<template>
  <div class="container">
    <form v-if="!submitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <div class="form-group">
            <label for="first-name">First-Name</label>
            <input class="form-control" id="first-name" type="text" v-model="userData.firstName" />
            <label for="last-name">Last-Name</label>
            <input class="form-control" id="last-name" type="text" v-model="userData.lastName" />
          </div>
          <!-- Mail -->
          <div class="form-group">
            <label for="Mail">Mail</label>
            <input class="form-control" id="Mail" type="text" v-model="userData.mail" />
          </div>
          <!-- Password -->
          <div class="form-group">
            <label for="Password">Password</label>
            <input class="form-control" id="Password" type="password" v-model="userData.password" />
          </div>
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="dataStoreRadios"
                id="storeYes"
                value="Yes"
                v-model="storeData"
              />
              <label class="form-check-label" for="storeYes">Store Data</label>

              <input
                class="form-check-input"
                type="radio"
                name="dataStoreRadios"
                id="storeNo"
                value="No"
                v-model="storeData"
              />
              <label class="form-check-label" for="storeNo">Don't Store</label>
            </div>
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
            </div>
          </div>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fullName}}</p>
            <p>Mail:{{userData.mail}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store in Database?: {{storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        mail: ""
      },
      storeData: false,
      submitted: false
    };
  },
  computed: {
    fullName() {
      return this.userData.firstName + " " + this.userData.lastName;
    }
  },
  methods: {
    submitForm() {
      this.submitted = true;
    }
  }
};
</script>

<style>
</style>
