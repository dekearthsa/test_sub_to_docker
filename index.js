const mqtt = require("mqtt");

const conn  = "mqtt://192.168.1.119:1883"

const client = mqtt.connect(
    conn,
    {
        username: "admin",
        password: "1234"
    }
)


client.on("connect", () => {
    console.log("MQTT test sub client is running...");

    client.subscribe("bedroom/command", (err) => {
        if(err){
            console.log(`err => ${err}`)
        }
    });

    client.on("message" , async (topic,message) => {
        let setJson = JSON.parse(message);
        console.log(setJson)
    })
})