export const goToHome = (history) => {
    history.push("/")
  }
  
  export const goToLogin = (history) => {
    history.push("/login")
  }
  
  export const goToSignup = (history) => {
    history.push("/signup")
  }
  
  export const goToAddress = (history) => {
    history.push("/address")
  }
  
  export const goToFeed = (history) => {
    history.push("/feed")
  }
  
  export const goToSearch = (history) => {
    history.push(`/search`)
  }
  
  export const goToRestaurant = (history, name) => {
    history.push(`/restaurant/${name}`)
  }
  
  export const goToOrder = (history, order) => {
    history.push(`/order/${order}`)
  }

  export const goToProfile = (history) => {
    history.push("/profile")
  }
  export const goToEditUser = (history, user) => {
    history.push(`/profile/edit/user/${user}`)
  }
  export const goToEditAddress = (history, address) => {
    history.push(`/profile/edit/address/${address}`)
  }
  export const goToCart = (history) => {
    history.push("/cart")
  }
  