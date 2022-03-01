import { defineStore } from "pinia";

interface User {
  name: string;
  password: string;
}

export const useAuthStore = defineStore({
  id: "auth",
  state: (): { authorized: boolean, user: User | null} => ({
    authorized: false,
    user: null,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    submitForm(form: User) {
      this.user = form;
      if (this.user !== null && this.user.name !== '' && this.user.password !== '') {
        // console.log('user not null')
        this.authorized = true;
      }
      console.log('submited: ', this.user, this.authorized)
    },
  },
});
