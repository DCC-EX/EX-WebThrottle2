import { defineStore } from "pinia";

interface NavLink {
  icon: string;
  to: string;
  title: string;
}

interface State {
  title: string;
  showNavBar: boolean;
  NavLinks: NavLink[];
}

export const useGlobalStore = defineStore("global", {
  state: (): State => {
    return {
      title: "ExWebThrottle",
      showNavBar: false,
      NavLinks: [
        { icon: "mdi:remote", to: "throttles", title: "Throttles" },
        { icon: "mdi:train", to: "locos", title: "Saved Locomotives" },
        { icon: "mdi:function", to: "functions", title: "Mapped Functions" },
        { icon: "mdi:cog", to: "settings", title: "Settings" },
      ],
    };
  },
  getters: {
    getTitle: (state) => state.title,
    getShowNavBar: (state) => state.showNavBar,
    getNavList: (state) => state.NavLinks,
  },
  actions: {
    setTitle(title: string) {
      this.title = title;
    },
    toggleNavBar() {
      this.showNavBar = !this.showNavBar;
    },
  },
});
