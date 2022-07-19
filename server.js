
const gateway = require("fast-gateway");
var cors = require('cors')

port = 9001;

const server = gateway({
  routes: [
  {
    prefix: '/auth_service',
    target: 'http://localhost:3000/',
    methods: ['GET', 'POST', 'PUT'], 
    hooks: {

    }
},
]
});
server.use(cors());

server.get('/mytesting',(req,res)=>res.send('yes called geteway'));
server.start(port).then(server=>{
    console.log("Api Gateway at http://localhost/:"+port);
})