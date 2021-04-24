// export const localBackend ="http://localhost:4001"
export const localFrontend ="http://localhost:3000"

export const serverBackend ="https://upwork-4.herokuapp.com"
export const serverFrontend ="https://upwork-4.web.app/"

export let localBackend;

if (process.env.NODE_ENV !== 'production') {
  localBackend ="http://localhost:4001"
} else {
  localBackend ="https://upwork-4.herokuapp.com"
}
