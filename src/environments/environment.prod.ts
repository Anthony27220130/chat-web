// environment.prod.ts (para producción en AWS)
export const environment = {
  production: true,
  apiUrl: 'http://ec2-18-221-54-128.us-east-2.compute.amazonaws.com:8080', // Backend en AWS
  websocketUrl: 'ws://ec2-18-221-54-128.us-east-2.compute.amazonaws.com:8080/chat-websocket'
};