// environment.prod.ts (para producción en AWS)
export const environment = {
  production: true,
  apiUrl: 'http://ec2-3-149-12-199.us-east-2.compute.amazonaws.com:8080', // Backend en AWS
  websocketUrl: '/chat-websocket'

  //websocketUrl: 'http://ec2-3-147-72-9.us-east-2.compute.amazonaws.com:8080/chat-websocket'

};